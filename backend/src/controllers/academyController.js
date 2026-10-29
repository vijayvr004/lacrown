/**
 * La Crown Luxury Aesthetic Clinic & Salon
 * Academy Enrolment & Training Programme Controller
 */

const db = require('../config/db');
const notificationService = require('../services/notificationService');
const emailService = require('../services/emailService');

function generateReference() {
  return 'LC-AC-' + Math.floor(100000 + Math.random() * 900000);
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * Handle new academy enquiry / training registration
 */
async function createAcademyEnquiry(req, res, next) {
  try {
    const name = (req.body.name || '').trim();
    const rawEmail = (req.body.email || '').trim();
    const phone = (req.body.phone || '').trim();
    const course = (req.body.course || req.body.courseName || '').trim();
    const trainingProgramme = (req.body.trainingProgramme || req.body.programme || course).trim();
    const preferredBatch = (req.body.preferredBatch || req.body.batch || 'Regular Batch').trim();
    const preferredStartDate = (req.body.preferredStartDate || req.body.startDate || '').trim();
    const educationQualification = (req.body.educationQualification || req.body.qualification || '').trim();
    const experience = (req.body.experience || '').trim();
    const message = (req.body.message || req.body.notes || '').trim();

    // Field Validations
    if (!name || !phone || !course) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields: name, phone, and course are required.'
      });
    }

    const email = rawEmail || `${phone.replace(/\D/g, '') || 'student'}@lacrown-academy.internal`;

    if (rawEmail && !isValidEmail(rawEmail)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address.'
      });
    }

    const reference = generateReference();
    const ipAddress = req.ip || req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const userAgent = req.get('user-agent') || '';

    let academyRecord = {
      reference,
      name,
      email,
      phone,
      course,
      training_programme: trainingProgramme,
      preferred_batch: preferredBatch,
      preferred_start_date: preferredStartDate,
      education_qualification: educationQualification,
      experience,
      message,
      status: 'New Enquiry',
      notification_status: 'pending',
      created_at: new Date()
    };

    // 1. Save into Neon PostgreSQL Database
    if (db.pool) {
      try {
        const queryText = `
          INSERT INTO academy_enquiries (
            reference, name, email, phone, course, training_programme,
            preferred_batch, preferred_start_date, education_qualification,
            experience, message, ip_address, user_agent
          )
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
          RETURNING *;
        `;
        const values = [
          reference, name, email, phone, course, trainingProgramme,
          preferredBatch, preferredStartDate, educationQualification,
          experience, message, ipAddress, userAgent
        ];

        const dbRes = await db.query(queryText, values);
        academyRecord = dbRes.rows[0];
      } catch (dbErr) {
        console.error('[ACADEMY] Database write error:', dbErr.message);
      }
    }

    // 2. Dispatch Immediate Notification with Excel Attachment (Workbook 2: LaCrown_Academy_Requests.xlsx)
    let notifResult = null;
    try {
      notifResult = await notificationService.dispatchRequestNotification({
        category: 'academy',
        requestRecord: academyRecord
      });
    } catch (notifErr) {
      console.error('[ACADEMY] Notification dispatch error:', notifErr.message);
    }

    // Backup dispatch through emailService if notification service returned not sent
    if (!notifResult || !notifResult.success) {
      try {
        console.log('[ACADEMY] Triggering backup manager alert via emailService...');
        await emailService.sendAcademyEmailToManager({
          reference,
          name,
          email,
          phone,
          course,
          message
        });
      } catch (backupErr) {
        console.warn('[ACADEMY] Backup manager alert notice:', backupErr.message);
      }
    }

    // 3. Dispatch Client Confirmation Email if real email provided
    if (rawEmail && isValidEmail(rawEmail)) {
      emailService.sendClientConfirmationEmail({
        reference,
        name,
        email: rawEmail,
        type: 'Academy Training Enquiry',
        summary: `Course: ${course}`
      }).catch(err => console.warn('[ACADEMY] Client confirmation email notice:', err.message));
    }

    return res.status(201).json({
      success: true,
      message: 'Your Academy enrolment enquiry has been successfully registered. Our admissions coordinator will contact you shortly.',
      reference
    });

  } catch (error) {
    next(error);
  }
}

/**
 * List Academy Enquiries for Admin View
 */
async function listAcademyEnquiries(req, res, next) {
  try {
    if (!db.pool) {
      return res.json({
        success: true,
        count: 0,
        enquiries: [],
        message: 'Database not connected (Operating in simulation mode)'
      });
    }

    const result = await db.query('SELECT * FROM academy_enquiries ORDER BY created_at DESC LIMIT 100');
    return res.json({
      success: true,
      count: result.rowCount,
      enquiries: result.rows
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createAcademyEnquiry,
  listAcademyEnquiries
};
