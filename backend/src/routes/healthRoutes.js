const express = require('express');
const router = express.Router();
const db = require('../config/db');
const config = require('../config/env');

router.get('/', async (req, res) => {
  const dbHealth = await db.checkHealth();
  const isHealthy = Boolean(dbHealth.connected);

  const status = {
    status: isHealthy ? 'healthy' : (config.databaseUrl ? 'degraded' : 'unconfigured'),
    service: 'la-crown-backend',
    uptimeSeconds: Math.floor(process.uptime()),
    timestamp: new Date().toISOString(),
    environment: config.nodeEnv,
    integrations: {
      neonDatabase: {
        connected: isHealthy,
        database: dbHealth.database || (isHealthy ? 'neondb' : undefined),
        message: dbHealth.message || (isHealthy ? 'Connected to Neon PostgreSQL' : 'Database offline or waking up')
      },
      resendEmail: {
        configured: Boolean(config.resendApiKey),
        managerRecipient: config.managerEmail ? 'configured' : 'missing'
      }
    }
  };

  return res.status(200).json(status);
});

module.exports = router;
