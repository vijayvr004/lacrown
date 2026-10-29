const express = require('express');
const router = express.Router();
const franchiseController = require('../controllers/franchiseController');
const contactController = require('../controllers/contactController');
const academyController = require('../controllers/academyController');
const { formSubmissionLimiter } = require('../middleware/rateLimiter');

// POST /api/enquiries/academy
router.post('/academy', formSubmissionLimiter, academyController.createAcademyEnquiry);

// GET /api/enquiries/academy
router.get('/academy', academyController.listAcademyEnquiries);

// POST /api/enquiries/franchise
router.post('/franchise', formSubmissionLimiter, franchiseController.createFranchiseEnquiry);

// GET /api/enquiries/franchise (Protected)
router.get('/franchise', franchiseController.listFranchiseEnquiries);

// PATCH /api/enquiries/franchise/:id/status (Protected)
router.patch('/franchise/:id/status', franchiseController.updateFranchiseStatus);

// POST /api/enquiries/contact
router.post('/contact', formSubmissionLimiter, contactController.createContactMessage);

// GET /api/enquiries/contact (Protected)
router.get('/contact', contactController.listContactMessages);

module.exports = router;
