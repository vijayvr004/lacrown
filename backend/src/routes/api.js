const express = require('express');
const router = express.Router();

const appointmentRoutes = require('./appointmentRoutes');
const enquiryRoutes = require('./enquiryRoutes');
const healthRoutes = require('./healthRoutes');
const franchiseController = require('../controllers/franchiseController');
const contactController = require('../controllers/contactController');
const { formSubmissionLimiter } = require('../middleware/rateLimiter');
const config = require('../config/env');
const db = require('../config/db');

// System Health Endpoint
router.use('/health', healthRoutes);

// Appointment Consultation Bookings
router.use('/appointments', appointmentRoutes);

// Enquiries (Franchise & Contact)
router.use('/enquiries', enquiryRoutes);

// Convenient direct endpoint aliases
router.post('/contact', formSubmissionLimiter, contactController.createContactMessage);
router.post('/franchise', formSubmissionLimiter, franchiseController.createFranchiseEnquiry);

// Administrative Authentication & Portal Management
router.post('/admin/login', (req, res) => {
  const { username, password, secretKey } = req.body;
  const isKeyValid = secretKey && secretKey === config.adminSecretKey;
  const isCredentialsValid = 
    (username === 'admin@lacrown.in' && (password === 'LaCrown@2024' || password === config.adminSecretKey)) ||
    (password === config.adminSecretKey);

  if (isKeyValid || isCredentialsValid) {
    return res.json({
      success: true,
      message: 'Authentication successful.',
      token: config.adminSecretKey,
      admin: {
        email: username || 'admin@lacrown.in',
        role: 'Senior Clinical Administrator'
      }
    });
  }

  return res.status(401).json({
    success: false,
    message: 'Invalid administrative email or security key.'
  });
});

// Admin System Overview (Aggregates database counts & recent requests)
router.get('/admin/overview', async (req, res, next) => {
  try {
    const authHeader = req.headers['x-admin-key'] || req.query.admin_key;
    if (authHeader !== config.adminSecretKey) {
      return res.status(401).json({
        success: false,
        message: 'Unauthorized: Invalid admin credentials.'
      });
    }

    if (!db.pool) {
      return res.json({
        success: true,
        databaseConnected: false,
        message: 'Database not connected (Operating in demo simulation mode)',
        stats: {
          total: 0,
          pending: 0,
          appointments: 0,
          franchise: 0,
          contact: 0
        },
        appointments: [],
        franchise: [],
        contact: []
      });
    }

    const [appRes, franRes, contactRes] = await Promise.all([
      db.query('SELECT * FROM appointments ORDER BY created_at DESC LIMIT 100'),
      db.query('SELECT * FROM franchise_enquiries ORDER BY created_at DESC LIMIT 50'),
      db.query('SELECT * FROM contact_messages ORDER BY created_at DESC LIMIT 50')
    ]);

    const appointments = appRes.rows || [];
    const franchise = franRes.rows || [];
    const contact = contactRes.rows || [];

    const pending = appointments.filter(a => (a.status || '').toLowerCase().includes('pending')).length;

    return res.json({
      success: true,
      databaseConnected: true,
      stats: {
        total: appointments.length + franchise.length + contact.length,
        pending,
        appointments: appointments.length,
        franchise: franchise.length,
        contact: contact.length
      },
      appointments,
      franchise,
      contact
    });
  } catch (err) {
    next(err);
  }
});

// API Root Info
router.get('/', (req, res) => {
  res.json({
    message: 'Welcome to La Crown Luxury Aesthetic Clinic REST API',
    version: '1.0.0',
    documentation: {
      endpoints: [
        'POST /api/appointments',
        'POST /api/enquiries/franchise',
        'POST /api/enquiries/contact',
        'GET  /api/health'
      ]
    }
  });
});

module.exports = router;
