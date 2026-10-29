const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');
const fs = require('fs');

const config = require('./config/env');
const db = require('./config/db');
const apiRoutes = require('./routes/api');
const { errorHandler, notFoundHandler } = require('./middleware/errorHandler');

// Validate environment configurations on startup
config.validate();

const app = express();

// Trust reverse proxies (Render, AWS, Cloudflare)
app.set('trust proxy', 1);

// Security Headers (CSP disabled so frontend can connect to Render API without restriction)
app.use(helmet({
  crossOriginResourcePolicy: { policy: 'cross-origin' },
  contentSecurityPolicy: false
}));

// CORS Configuration - Reflects requesting origin for seamless Vercel <-> Render communication
app.use(cors({
  origin: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Admin-Key'],
  credentials: true
}));

// Request Logging
app.use(morgan(config.isProduction ? 'combined' : 'dev'));

// Body Parsing
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true, limit: '1mb' }));

// Top-Level Health Check Endpoint for Render, Load Balancers, and Uptime Monitors
const handleHealthCheck = async (req, res) => {
  const dbHealth = await db.checkHealth();
  const isHealthy = Boolean(dbHealth.connected);

  // Return HTTP 200 with accurate status to prevent Render from killing the process on cold-start
  res.status(200).json({
    status: isHealthy ? 'healthy' : (config.databaseUrl ? 'degraded' : 'unconfigured'),
    service: 'la-crown-backend',
    uptime: Math.floor(process.uptime()),
    timestamp: new Date().toISOString(),
    environment: config.nodeEnv,
    neonDatabase: {
      connected: isHealthy,
      database: dbHealth.database || (isHealthy ? 'neondb' : undefined),
      message: dbHealth.message || (isHealthy ? 'Connected to Neon PostgreSQL' : 'Database offline or waking up')
    },
    resend: {
      configured: Boolean(config.resendApiKey)
    }
  });
};

app.get('/health', handleHealthCheck);
app.get('/health/', handleHealthCheck);
app.get('/api/health', handleHealthCheck);
app.get('/api/health/', handleHealthCheck);

// API Root Information Directory
app.get('/', (req, res) => {
  res.json({
    service: 'La Crown Luxury Aesthetic Clinic & Salon REST API',
    status: 'online',
    version: '1.0.0',
    health: '/health',
    endpoints: {
      health: '/health',
      appointments: '/api/appointments',
      franchise: '/api/enquiries/franchise',
      contact: '/api/enquiries/contact',
      adminOverview: '/api/admin/overview'
    },
    frontend: 'https://lacrown-pink.vercel.app'
  });
});

// Mount Main API Router under /api
app.use('/api', apiRoutes);

// Optional static assets (images, icons) without intercepting API or health routes
const publicDir = path.join(__dirname, '../public');
if (fs.existsSync(publicDir)) {
  app.use('/static', express.static(publicDir));
}

// 404 & Centralized Error Handlers
app.use(notFoundHandler);
app.use(errorHandler);

// Start Server and Initialize Database
const PORT = config.port;
const server = app.listen(PORT, async () => {
  console.log(`\n======================================================`);
  console.log(` ✨ La Crown Backend Service Online`);
  console.log(` 🌐 Port: ${PORT} | Environment: ${config.nodeEnv}`);
  console.log(` 🏥 Manager Email: ${config.managerEmail}`);
  console.log(` 📧 Resend Status: ${config.resendApiKey ? 'Active' : 'Simulation Mode (Key Missing)'}`);
  console.log(` 🐘 Neon DB: ${config.databaseUrl ? 'Configured' : 'Missing DATABASE_URL'}`);
  console.log(`======================================================\n`);

  // Initialize DB tables automatically on startup
  if (config.databaseUrl) {
    await db.initDb();
  }
});

// Graceful Shutdown Handling
function gracefulShutdown(signal) {
  console.log(`\n[SHUTDOWN] Received ${signal}. Closing HTTP server gracefully...`);
  server.close(async () => {
    console.log('[SHUTDOWN] HTTP server closed.');
    if (db.pool) {
      await db.pool.end();
      console.log('[SHUTDOWN] Database pool closed.');
    }
    process.exit(0);
  });

  // Force shutdown if taking too long
  setTimeout(() => {
    console.error('[SHUTDOWN] Forced shutdown after timeout.');
    process.exit(1);
  }, 10000);
}

process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
process.on('SIGINT', () => gracefulShutdown('SIGINT'));

module.exports = app;
