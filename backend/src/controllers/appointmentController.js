const db = require('../config/db');
const emailService = require('../services/emailService');
const notificationService = require('../services/notificationService');
const config = require('../config/env');

/**
 * Generate a unique La Crown Reference Code
 */
function generateReference() {
  return 'LC-' + Math.floor(100000 + Math.random() * 900000);
}

/**
 * Basic email syntax validation
 */
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * Handle new appointment / private consultation request
 */
async function createAppointment(req, res, next) {
  try {
    const name = (req.body.name || req.body.customerName || '').trim();
    const rawEmail = (req.body.email || '').trim();
    const phone = (req.body.phone || '').trim();
    const service = (req.body.service || req.body.serviceName || '').trim();
    const doctor = (req.body.doctor || req.body.serviceCategory || 'Any Specialist').trim();
    const date = (req.body.date || req.body.preferredDate || '').trim();
    const time = (req.body.time || req.body.preferredTime || '').trim();
    const notes = (req.body.notes || req.body.message || '').trim();

    // Field Validations
    if (!name || !phone || !service || !date || !time) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields: name, phone, service, date, and time are required.'
      });
    }

    // Default safe fallback email if user omitted it on mobile form
    const email = rawEmail || `${phone.replace(/\D/g, '') || 'client'}@lacrown-guest.internal`;

    if (rawEmail && !isValidEmail(rawEmail)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address.'
      });
    }

    const reference = generateReference();
    const ipAddress = req.ip || req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const userAgent = req.get('user-agent') || '';

    let appointmentRecord = null;
    let emailSent = false;
    let emailId = null;

    // 1. Save into Neon PostgreSQL Database
    if (db.pool) {
      try {
        const queryText = `
          INSERT INTO appointments (
            reference, name, email, phone, service, doctor,
            preferred_date, preferred_time, notes, ip_address, user_agent
          )
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
          RETURNING *;
        `;
        const values = [
          reference, name, email, phone,
          service, doctor, date, time,
          notes, ipAddress, userAgent
        ];

        const dbRes = await db.query(queryText, values);
        appointmentRecord = dbRes.rows[0];
      } catch (dbErr) {
        console.error('[APPOINTMENT] Database write error:', dbErr.message);
        // We log the error but still attempt email dispatch so patient isn't lost
      }
    }

    // 2. Dispatch Immediate Notification with Excel Attachment (Workbook 1: LaCrown_Services_Requests.xlsx)
    const requestRecord = appointmentRecord || {
      reference,
      name,
      email,
      phone,
      service,
      doctor,
      preferred_date: date,
      preferred_time: time,
      notes,
      branch: 'Jayanagar, Bengaluru',
      status: 'Pending Concierge Call',
      notification_status: 'pending',
      created_at: new Date()
    };

    notificationService.dispatchRequestNotification({
      category: 'services',
      requestRecord
    }).catch(emailErr => {
      console.error('[APPOINTMENT] Resend email delivery failed:', emailErr.message);
    });

    // 3. Dispatch Client Confirmation Email (Fire and forget if client provided a real email)
    if (rawEmail) {
      emailService.sendClientConfirmationEmail({
        reference,
        name,
        email: rawEmail,
        phone,
        date,
        time
      }).catch(e => console.warn('[APPOINTMENT] Client confirmation error:', e.message));
    }

    // Return unified luxury response matching frontend expectations
    return res.status(201).json({
      success: true,
      reference,
      message: 'Private consultation request recorded. Clinical concierge notified.',
      data: {
        reference,
        name,
        service,
        date,
        time,
        status: 'Pending Concierge Call'
      }
    });

  } catch (err) {
    next(err);
  }
}

/**
 * List appointments (Protected by ADMIN_SECRET_KEY)
 */
async function listAppointments(req, res, next) {
  try {
    const authHeader = req.headers['x-admin-key'] || req.query.admin_key;
    if (authHeader !== config.adminSecretKey) {
      return res.status(401).json({
        success: false,
        message: 'Unauthorized: Invalid admin credentials.'
      });
    }

    if (!db.pool) {
      return res.status(503).json({
        success: false,
        message: 'Database connection not available.'
      });
    }

    const { limit = 50, offset = 0 } = req.query;
    const queryText = `
      SELECT * FROM appointments
      ORDER BY created_at DESC
      LIMIT $1 OFFSET $2;
    `;
    const result = await db.query(queryText, [parseInt(limit, 10), parseInt(offset, 10)]);

    return res.json({
      success: true,
      total: result.rowCount,
      data: result.rows
    });
  } catch (err) {
    next(err);
  }
}

/**
 * Update appointment status (Protected by ADMIN_SECRET_KEY)
 */
async function updateAppointmentStatus(req, res, next) {
  try {
    const authHeader = req.headers['x-admin-key'] || req.query.admin_key;
    if (authHeader !== config.adminSecretKey) {
      return res.status(401).json({
        success: false,
        message: 'Unauthorized: Invalid admin credentials.'
      });
    }

    const { id } = req.params;
    const { status } = req.body;

    if (!status) {
      return res.status(400).json({ success: false, message: 'Status is required.' });
    }

    if (!db.pool) {
      return res.status(503).json({ success: false, message: 'Database connection not available.' });
    }

    const queryText = `
      UPDATE appointments
      SET status = $1, updated_at = CURRENT_TIMESTAMP
      WHERE id::text = $2 OR reference = $2
      RETURNING *;
    `;
    const result = await db.query(queryText, [status, id]);
    if (result.rowCount === 0) {
      return res.status(404).json({ success: false, message: 'Appointment not found.' });
    }

    return res.json({
      success: true,
      message: 'Appointment status updated.',
      data: result.rows[0]
    });
  } catch (err) {
    next(err);
  }
}

/**
 * Update appointment notes (Protected by ADMIN_SECRET_KEY)
 */
async function updateAppointmentNotes(req, res, next) {
  try {
    const authHeader = req.headers['x-admin-key'] || req.query.admin_key;
    if (authHeader !== config.adminSecretKey) {
      return res.status(401).json({
        success: false,
        message: 'Unauthorized: Invalid admin credentials.'
      });
    }

    const { id } = req.params;
    const { notes } = req.body;

    if (!db.pool) {
      return res.status(503).json({ success: false, message: 'Database connection not available.' });
    }

    const queryText = `
      UPDATE appointments
      SET notes = $1, updated_at = CURRENT_TIMESTAMP
      WHERE id::text = $2 OR reference = $2
      RETURNING *;
    `;
    const result = await db.query(queryText, [notes || '', id]);
    if (result.rowCount === 0) {
      return res.status(404).json({ success: false, message: 'Appointment not found.' });
    }

    return res.json({
      success: true,
      message: 'Appointment notes updated.',
      data: result.rows[0]
    });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  createAppointment,
  listAppointments,
  updateAppointmentStatus,
  updateAppointmentNotes
};
