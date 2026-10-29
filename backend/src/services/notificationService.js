/**
 * La Crown Luxury Aesthetic Clinic & Salon
 * Automated Request Notification & Excel Dispatch Service
 * Integrates Resend Email with ExcelJS Attachments
 */

const { Resend } = require('resend');
const config = require('../config/env');
const db = require('../config/db');
const excelService = require('./excelService');

let resendClient = null;
if (config.resendApiKey) {
  resendClient = new Resend(config.resendApiKey);
} else {
  console.warn('[NOTIFICATION] RESEND_API_KEY is not configured. Email notifications will run in simulation mode.');
}

/**
 * Category Metadata Configuration
 */
const CATEGORY_CONFIG = {
  services: {
    categoryLabel: 'Services & Consultations',
    filename: 'LaCrown_Services_Requests.xlsx',
    tableName: 'appointments',
    subjectPrefix: 'New La Crown Service Request — ',
    getRecipient: () => config.servicesRequestEmail,
    generateWorkbook: excelService.generateServicesWorkbook
  },
  academy: {
    categoryLabel: 'Academy Training Enquiry',
    filename: 'LaCrown_Academy_Requests.xlsx',
    tableName: 'academy_enquiries',
    subjectPrefix: 'New La Crown Academy Enquiry — ',
    getRecipient: () => config.academyRequestEmail,
    generateWorkbook: excelService.generateAcademyWorkbook
  },
  franchise: {
    categoryLabel: 'Franchise Expression of Interest',
    filename: 'LaCrown_Franchise_Requests.xlsx',
    tableName: 'franchise_enquiries',
    subjectPrefix: 'New La Crown Franchise Enquiry — ',
    getRecipient: () => config.franchiseRequestEmail,
    generateWorkbook: excelService.generateFranchiseWorkbook
  }
};

/**
 * Generate Luxury Notification Email HTML
 */
function buildNotificationHtml({ category, requestRecord, filename }) {
  const isServices = category === 'services';
  const isAcademy = category === 'academy';
  const isFranchise = category === 'franchise';

  const ref = requestRecord.reference || requestRecord.id || 'N/A';
  const name = requestRecord.name || requestRecord.customerName || 'Valued Client';
  const phone = requestRecord.phone || 'Not Provided';
  const email = requestRecord.email || 'Not Provided';
  const cleanPhone = phone.replace(/[^0-9]/g, '');

  let detailsRows = '';

  if (isServices) {
    const service = requestRecord.service || requestRecord.serviceName || 'Consultation';
    const categoryName = requestRecord.service_category || requestRecord.serviceCategory || requestRecord.doctor || 'Aesthetic Clinic';
    const date = requestRecord.preferred_date || requestRecord.preferredDate || 'To be scheduled';
    const time = requestRecord.preferred_time || requestRecord.preferredTime || 'Flexible';
    const notes = requestRecord.notes || requestRecord.message || 'None';

    detailsRows = `
      <tr><td style="padding:8px 0;color:#8a7c85;font-size:13px;width:140px;">Request Category</td><td style="padding:8px 0;font-weight:600;color:#541122;">Aesthetic Clinic / Salon Service</td></tr>
      <tr><td style="padding:8px 0;color:#8a7c85;font-size:13px;">Service Requested</td><td style="padding:8px 0;font-weight:600;color:#300814;">${service}</td></tr>
      <tr><td style="padding:8px 0;color:#8a7c85;font-size:13px;">Specialist / Dept</td><td style="padding:8px 0;color:#300814;">${categoryName}</td></tr>
      <tr><td style="padding:8px 0;color:#8a7c85;font-size:13px;">Preferred Date & Time</td><td style="padding:8px 0;font-weight:600;color:#760d25;">${date} at ${time}</td></tr>
      <tr><td style="padding:8px 0;color:#8a7c85;font-size:13px;">Branch / Location</td><td style="padding:8px 0;color:#300814;">Jayanagar, Bengaluru</td></tr>
      <tr><td style="padding:8px 0;color:#8a7c85;font-size:13px;">Client Notes</td><td style="padding:8px 0;color:#300814;font-style:italic;">${notes}</td></tr>
    `;
  } else if (isAcademy) {
    const course = requestRecord.course || 'Professional Training';
    const notes = requestRecord.message || requestRecord.notes || 'None';
    const batch = requestRecord.preferred_batch || 'Next Upcoming Batch';

    detailsRows = `
      <tr><td style="padding:8px 0;color:#8a7c85;font-size:13px;width:140px;">Request Category</td><td style="padding:8px 0;font-weight:600;color:#541122;">Academy Training & Enrolment</td></tr>
      <tr><td style="padding:8px 0;color:#8a7c85;font-size:13px;">Enquired Course</td><td style="padding:8px 0;font-weight:600;color:#300814;">${course}</td></tr>
      <tr><td style="padding:8px 0;color:#8a7c85;font-size:13px;">Preferred Batch</td><td style="padding:8px 0;color:#300814;">${batch}</td></tr>
      <tr><td style="padding:8px 0;color:#8a7c85;font-size:13px;">Applicant Goals/Notes</td><td style="padding:8px 0;color:#300814;font-style:italic;">${notes}</td></tr>
    `;
  } else if (isFranchise) {
    const city = requestRecord.city || 'Bangalore';
    const investment = requestRecord.investment || requestRecord.investmentBudget || 'Above 50 Lakhs';
    const message = requestRecord.message || requestRecord.notes || 'None';

    detailsRows = `
      <tr><td style="padding:8px 0;color:#8a7c85;font-size:13px;width:140px;">Request Category</td><td style="padding:8px 0;font-weight:600;color:#541122;">Franchise Partnership Expression</td></tr>
      <tr><td style="padding:8px 0;color:#8a7c85;font-size:13px;">Proposed City / State</td><td style="padding:8px 0;font-weight:600;color:#300814;">${city}</td></tr>
      <tr><td style="padding:8px 0;color:#8a7c85;font-size:13px;">Investment Capacity</td><td style="padding:8px 0;font-weight:600;color:#760d25;">${investment}</td></tr>
      <tr><td style="padding:8px 0;color:#8a7c85;font-size:13px;">Partner Proposal/Notes</td><td style="padding:8px 0;color:#300814;font-style:italic;">${message}</td></tr>
    `;
  }

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${CATEGORY_CONFIG[category].subjectPrefix}${ref}</title>
</head>
<body style="margin:0;padding:0;background-color:#f9f6f2;font-family:'Plus Jakarta Sans',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:#300814;line-height:1.6;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#f9f6f2;padding:30px 10px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width:620px;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #ebd9c5;box-shadow:0 8px 24px rgba(118,13,37,0.06);" cellspacing="0" cellpadding="0">
          
          <!-- Header Banner -->
          <tr>
            <td style="background:linear-gradient(135deg, #541122 0%, #760d25 50%, #300814 100%);padding:32px 30px;text-align:center;color:#ffffff;border-bottom:3px solid #d6af66;">
              <div style="font-size:11px;letter-spacing:0.25em;text-transform:uppercase;color:#d6af66;margin-bottom:8px;font-weight:700;">
                LA CROWN AUTOMATED REQUEST SYSTEM
              </div>
              <h1 style="margin:0;font-size:22px;font-weight:600;color:#ffffff;font-family:Georgia,serif;">
                ${CATEGORY_CONFIG[category].categoryLabel}
              </h1>
              <div style="display:inline-block;margin-top:12px;background:rgba(214,175,102,0.22);color:#fce4a6;border:1px solid #d6af66;padding:4px 14px;border-radius:20px;font-size:11px;font-weight:600;letter-spacing:0.08em;">
                ID: ${ref}
              </div>
            </td>
          </tr>

          <!-- Summary Body -->
          <tr>
            <td style="padding:32px 30px;">
              <p style="margin:0 0 16px;font-size:15px;color:#541122;font-weight:600;">
                A new request has been submitted and registered in the database.
              </p>

              <!-- Applicant Details Table -->
              <table width="100%" cellspacing="0" cellpadding="0" style="margin:16px 0 24px;border-top:1px solid #f0e2d5;border-bottom:1px solid #f0e2d5;padding:12px 0;">
                <tr>
                  <td style="padding:8px 0;color:#8a7c85;font-size:13px;width:140px;">Applicant / Customer</td>
                  <td style="padding:8px 0;font-weight:700;color:#300814;font-size:15px;">${name}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0;color:#8a7c85;font-size:13px;">Contact Number</td>
                  <td style="padding:8px 0;color:#300814;">
                    <a href="tel:${phone}" style="color:#760d25;text-decoration:none;font-weight:600;">${phone}</a>
                    ${cleanPhone ? ` &bull; <a href="https://wa.me/${cleanPhone}" style="color:#25D366;text-decoration:none;font-weight:600;">WhatsApp</a>` : ''}
                  </td>
                </tr>
                <tr>
                  <td style="padding:8px 0;color:#8a7c85;font-size:13px;">Email Address</td>
                  <td style="padding:8px 0;color:#300814;">
                    <a href="mailto:${email}" style="color:#760d25;text-decoration:none;">${email}</a>
                  </td>
                </tr>
                ${detailsRows}
                <tr>
                  <td style="padding:8px 0;color:#8a7c85;font-size:13px;">Submission Timestamp</td>
                  <td style="padding:8px 0;color:#541122;font-size:12px;">${new Date().toUTCString()}</td>
                </tr>
              </table>

              <!-- Excel Attachment Explanatory Box -->
              <div style="background-color:#fff9f2;border:1px solid #ebd9c5;border-left:4px solid #d6af66;border-radius:6px;padding:16px;margin:24px 0 10px;">
                <div style="font-size:13px;font-weight:700;color:#541122;margin-bottom:4px;">
                  📊 Attached Excel Workbook: <code>${filename}</code>
                </div>
                <div style="font-size:12px;color:#746970;line-height:1.5;">
                  Attached to this email is the complete, up-to-date Excel workbook for <b>${CATEGORY_CONFIG[category].categoryLabel}</b>. It includes all past records alongside this newest entry.
                </div>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#fff9f5;padding:20px 30px;border-top:1px solid #f0e2d5;text-align:center;font-size:11px;color:#8a7c85;">
              <strong>${config.clinicName}</strong> &bull; ${config.clinicAddress} &bull; ${config.clinicPhone}<br />
              This automated alert was dispatched by the La Crown Web Engine.
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

/**
 * Log notification outcome into notification_logs table
 */
async function logNotificationAudit({ reference, category, recipient, status, providerId, error }) {
  if (!db.pool) return;
  try {
    const text = `
      INSERT INTO notification_logs (
        reference, category, recipient, status, provider_message_id, error_message, updated_at
      ) VALUES ($1, $2, $3, $4, $5, $6, CURRENT_TIMESTAMP)
      ON CONFLICT DO NOTHING;
    `;
    await db.query(text, [
      reference,
      category,
      recipient || 'unconfigured',
      status,
      providerId || null,
      error || null
    ]);
  } catch (err) {
    console.warn('[NOTIFICATION] Error logging to notification_logs:', err.message);
  }
}

/**
 * Retrieve all records for a category to generate the cumulative Excel workbook
 */
async function getCategoryRecords(category, currentRecord) {
  const meta = CATEGORY_CONFIG[category];
  if (!meta) return [currentRecord];

  if (db.pool) {
    try {
      const sql = `SELECT * FROM ${meta.tableName} ORDER BY created_at DESC LIMIT 1000`;
      const res = await db.query(sql);
      if (res.rows && res.rows.length > 0) {
        // Ensure current record is represented if not yet synced
        const exists = res.rows.some(r => r.reference === currentRecord.reference);
        return exists ? res.rows : [currentRecord, ...res.rows];
      }
    } catch (dbErr) {
      console.warn(`[NOTIFICATION] Could not query ${meta.tableName} for Excel export:`, dbErr.message);
    }
  }

  // Fallback if DB query fails or simulation mode
  return [currentRecord];
}

/**
 * Dispatch an automated immediate notification email with an Excel attachment
 * Every new request triggers its own notification!
 *
 * @param {Object} options
 * @param {'services' | 'academy' | 'franchise'} options.category
 * @param {Object} options.requestRecord
 */
async function dispatchRequestNotification({ category, requestRecord }) {
  const meta = CATEGORY_CONFIG[category];
  if (!meta) {
    console.error(`[NOTIFICATION] Unknown category: ${category}`);
    return { success: false, error: 'Unknown category' };
  }

  const reference = requestRecord.reference || requestRecord.id;
  const recipient = meta.getRecipient();

  // Validate recipient
  if (!recipient || !recipient.trim()) {
    const errNotice = `Configuration Error: No recipient email configured for category '${category}' (checked ${category.toUpperCase()}_REQUEST_EMAIL and MANAGER_EMAIL).`;
    console.error(`[NOTIFICATION] ${errNotice}`);
    await logNotificationAudit({
      reference,
      category,
      recipient: 'none',
      status: 'failed',
      error: errNotice
    });
    return { success: false, error: errNotice, preserved: true };
  }

  try {
    // 1. Fetch cumulative records for this category
    const records = await getCategoryRecords(category, requestRecord);

    // 2. Generate the genuine .xlsx Excel workbook
    const excelBuffer = await meta.generateWorkbook(records);

    // 3. Prepare email content and attachment (Base64 encoded for Resend API)
    const emailSubject = `${meta.subjectPrefix}${reference}`;
    const emailHtml = buildNotificationHtml({
      category,
      requestRecord,
      filename: meta.filename
    });

    const base64Content = Buffer.isBuffer(excelBuffer)
      ? excelBuffer.toString('base64')
      : Buffer.from(excelBuffer).toString('base64');

    const attachments = [
      {
        filename: meta.filename,
        content: base64Content,
        contentType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      }
    ];

    let emailId = null;

    // 4. Send via Resend
    if (resendClient && config.resendApiKey) {
      let emailResult;
      try {
        emailResult = await resendClient.emails.send({
          from: config.emailFrom,
          to: recipient.trim(),
          subject: emailSubject,
          html: emailHtml,
          attachments: attachments
        });
      } catch (directErr) {
        console.warn(`[NOTIFICATION] Direct Resend API exception for ${category}:`, directErr.message);
        emailResult = { error: directErr };
      }

      // Check if Resend returned an error
      if (emailResult && emailResult.error) {
        console.error(`[NOTIFICATION] Resend with attachment failed for ${category}:`, emailResult.error);

        // Fallback: Dispatch notification without attachment so admin is always alerted!
        console.log(`[NOTIFICATION] Attempting emergency notification delivery without attachment to ${recipient}...`);
        try {
          const fallbackHtml = emailHtml + `
            <div style="margin-top:20px;padding:12px;background:#fef2f2;border:1px solid #fecaca;border-radius:6px;font-size:12px;color:#991b1b;">
              <strong>Concierge Alert:</strong> Excel attachment could not be directly attached (${emailResult.error.message || 'Attachment transfer limit'}). The complete request ledger is saved in Neon PostgreSQL and downloadable from the Admin Portal.
            </div>`;

          const fallbackResult = await resendClient.emails.send({
            from: config.emailFrom,
            to: recipient.trim(),
            subject: `${emailSubject} [Notice: Excel available in Admin Portal]`,
            html: fallbackHtml
          });

          if (fallbackResult && fallbackResult.error) {
            throw new Error(`Resend Error: ${fallbackResult.error.message || JSON.stringify(fallbackResult.error)}`);
          }

          emailId = fallbackResult?.data?.id || null;
          console.log(`[NOTIFICATION] Emergency fallback notification successfully sent to ${recipient} (Message ID: ${emailId})`);
        } catch (fallbackErr) {
          throw new Error(`Resend rejected notification: ${emailResult.error.message || fallbackErr.message}`);
        }
      } else {
        emailId = emailResult?.data?.id || null;
        console.log(`[NOTIFICATION] Successfully sent ${category} alert with ${meta.filename} to ${recipient} (Message ID: ${emailId})`);
      }

      await logNotificationAudit({
        reference,
        category,
        recipient,
        status: 'sent',
        providerId: emailId
      });

      // Update table record with notification status
      if (db.pool) {
        await db.query(
          `UPDATE ${meta.tableName} SET email_sent = TRUE, email_id = $1, notification_status = 'sent', updated_at = CURRENT_TIMESTAMP WHERE reference = $2`,
          [emailId, reference]
        ).catch(e => console.warn('[DB] Could not update notification status:', e.message));
      }

      return { success: true, emailId, filename: meta.filename };
    } else {
      // Simulation mode
      emailId = `sim-msg-${Date.now().toString(36)}`;
      console.log(`\n======================================================`);
      console.log(` [SIMULATION] Immediate Notification Dispatched`);
      console.log(` Category: ${category}`);
      console.log(` Recipient: ${recipient}`);
      console.log(` Subject: ${emailSubject}`);
      console.log(` Attachment: ${meta.filename} (${excelBuffer.length} bytes)`);
      console.log(` Provider ID: ${emailId}`);
      console.log(`======================================================\n`);

      await logNotificationAudit({
        reference,
        category,
        recipient,
        status: 'sent (simulation)',
        providerId: emailId
      });

      if (db.pool) {
        await db.query(
          `UPDATE ${meta.tableName} SET email_sent = TRUE, email_id = $1, notification_status = 'sent (simulation)', updated_at = CURRENT_TIMESTAMP WHERE reference = $2`,
          [emailId, reference]
        ).catch(e => console.warn('[DB] Could not update simulation notification status:', e.message));
      }

      return { success: true, emailId, simulated: true, filename: meta.filename };
    }
  } catch (sendErr) {
    console.error(`[NOTIFICATION] Failed to dispatch ${category} email:`, sendErr.message);

    await logNotificationAudit({
      reference,
      category,
      recipient,
      status: 'failed',
      error: sendErr.message
    });

    if (db.pool) {
      await db.query(
        `UPDATE ${meta.tableName} SET notification_status = 'failed', updated_at = CURRENT_TIMESTAMP WHERE reference = $1`,
        [reference]
      ).catch(e => console.warn('[DB] Could not set failed notification status:', e.message));
    }

    // Preserve the request; do not throw to caller
    return { success: false, error: sendErr.message, preserved: true };
  }
}

/**
 * Retry a failed notification by reference without creating duplicate requests
 */
async function retryNotificationByReference(reference) {
  if (!reference) return { success: false, message: 'Missing reference' };

  for (const [catKey, meta] of Object.entries(CATEGORY_CONFIG)) {
    if (db.pool) {
      const res = await db.query(`SELECT * FROM ${meta.tableName} WHERE reference = $1`, [reference]);
      if (res.rows && res.rows.length > 0) {
        const record = res.rows[0];
        console.log(`[RETRY] Found record in ${meta.tableName} for ${reference}. Retrying notification...`);
        return await dispatchRequestNotification({ category: catKey, requestRecord: record });
      }
    }
  }

  return { success: false, message: `Reference ${reference} not found in any request table.` };
}

module.exports = {
  dispatchRequestNotification,
  retryNotificationByReference,
  getCategoryRecords,
  CATEGORY_CONFIG
};
