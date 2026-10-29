const express = require('express');
const router = express.Router();

const appointmentRoutes = require('./appointmentRoutes');
const enquiryRoutes = require('./enquiryRoutes');
const healthRoutes = require('./healthRoutes');
const franchiseController = require('../controllers/franchiseController');
const contactController = require('../controllers/contactController');
const academyController = require('../controllers/academyController');
const notificationService = require('../services/notificationService');
const excelService = require('../services/excelService');
const { formSubmissionLimiter } = require('../middleware/rateLimiter');
const config = require('../config/env');
const db = require('../config/db');

// System Health Endpoint
router.use('/health', healthRoutes);

// Appointment Consultation Bookings
router.use('/appointments', appointmentRoutes);

// Enquiries (Academy, Franchise & Contact)
router.use('/enquiries', enquiryRoutes);

// Convenient direct endpoint aliases
router.post('/academy', formSubmissionLimiter, academyController.createAcademyEnquiry);
router.get('/academy', academyController.listAcademyEnquiries);
router.post('/contact', formSubmissionLimiter, contactController.createContactMessage);
router.get('/contact', contactController.listContactMessages);
router.post('/franchise', formSubmissionLimiter, franchiseController.createFranchiseEnquiry);
router.get('/franchise', franchiseController.listFranchiseEnquiries);

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

    const [appRes, franRes, contactRes, academyRes, notifRes] = await Promise.all([
      db.query('SELECT * FROM appointments ORDER BY created_at DESC LIMIT 100'),
      db.query('SELECT * FROM franchise_enquiries ORDER BY created_at DESC LIMIT 50'),
      db.query('SELECT * FROM contact_messages ORDER BY created_at DESC LIMIT 50'),
      db.query('SELECT * FROM academy_enquiries ORDER BY created_at DESC LIMIT 50').catch(() => ({ rows: [] })),
      db.query('SELECT * FROM notification_logs ORDER BY created_at DESC LIMIT 50').catch(() => ({ rows: [] }))
    ]);

    const appointments = appRes.rows || [];
    const franchise = franRes.rows || [];
    const contact = contactRes.rows || [];
    const academy = academyRes.rows || [];
    const notifications = notifRes.rows || [];

    const pending = appointments.filter(a => (a.status || '').toLowerCase().includes('pending')).length;

    return res.json({
      success: true,
      databaseConnected: true,
      stats: {
        total: appointments.length + franchise.length + contact.length + academy.length,
        pending,
        appointments: appointments.length,
        academy: academy.length,
        franchise: franchise.length,
        contact: contact.length,
        notifications: notifications.length
      },
      appointments,
      academy,
      franchise,
      contact,
      notifications
    });
  } catch (err) {
    next(err);
  }
});

// Admin Middleware Helper
function requireAdminAuth(req, res, next) {
  const authHeader = req.headers['x-admin-key'] || req.query.admin_key;
  if (!authHeader || authHeader !== config.adminSecretKey) {
    return res.status(401).json({
      success: false,
      message: 'Unauthorized: Valid administrative key required.'
    });
  }
  next();
}

// Admin On-Demand Workbook Exports (Protected)
router.get('/admin/export/services.xlsx', requireAdminAuth, async (req, res, next) => {
  try {
    const records = await notificationService.getCategoryRecords('services', {});
    const buffer = await excelService.generateServicesWorkbook(records);
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename="LaCrown_Services_Requests.xlsx"');
    return res.send(buffer);
  } catch (err) {
    next(err);
  }
});

router.get('/admin/export/academy.xlsx', requireAdminAuth, async (req, res, next) => {
  try {
    const records = await notificationService.getCategoryRecords('academy', {});
    const buffer = await excelService.generateAcademyWorkbook(records);
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename="LaCrown_Academy_Requests.xlsx"');
    return res.send(buffer);
  } catch (err) {
    next(err);
  }
});

router.get('/admin/export/franchise.xlsx', requireAdminAuth, async (req, res, next) => {
  try {
    const records = await notificationService.getCategoryRecords('franchise', {});
    const buffer = await excelService.generateFranchiseWorkbook(records);
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename="LaCrown_Franchise_Requests.xlsx"');
    return res.send(buffer);
  } catch (err) {
    next(err);
  }
});

// Admin Notification Logs and Safe Retry
router.get('/admin/notifications', requireAdminAuth, async (req, res, next) => {
  try {
    if (!db.pool) return res.json({ success: true, notifications: [] });
    const result = await db.query('SELECT * FROM notification_logs ORDER BY created_at DESC LIMIT 100');
    return res.json({ success: true, count: result.rowCount, notifications: result.rows });
  } catch (err) {
    next(err);
  }
});

router.post('/admin/notifications/retry/:reference', requireAdminAuth, async (req, res, next) => {
  try {
    const { reference } = req.params;
    const retryResult = await notificationService.retryNotificationByReference(reference);
    return res.json(retryResult);
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
        'POST /api/appointments (Workbook 1: LaCrown_Services_Requests.xlsx)',
        'POST /api/academy (Workbook 2: LaCrown_Academy_Requests.xlsx)',
        'POST /api/franchise (Workbook 3: LaCrown_Franchise_Requests.xlsx)',
        'POST /api/contact',
        'GET  /api/health',
        'GET  /api/admin/overview (Protected)',
        'GET  /api/admin/export/services.xlsx (Protected)',
        'GET  /api/admin/export/academy.xlsx (Protected)',
        'GET  /api/admin/export/franchise.xlsx (Protected)',
        'POST /api/admin/notifications/retry/:reference (Protected)'
      ]
    }
  });
});

module.exports = router;
