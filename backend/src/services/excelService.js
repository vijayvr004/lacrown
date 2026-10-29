/**
 * La Crown Luxury Aesthetic Clinic & Salon
 * Production Excel Workbook Generator Service
 * Powered by ExcelJS
 */

const ExcelJS = require('exceljs');

/**
 * Formula Injection Protection
 * If a cell string starts with =, +, -, @, \t, or \r, prepend an apostrophe
 */
function sanitize(val) {
  if (val === null || val === undefined) return '';
  const str = String(val).trim();
  if (/^[=+\-@\t\r]/.test(str)) {
    return `'${str}`;
  }
  return str;
}

/**
 * Extract formatted date (YYYY-MM-DD) and time (HH:mm:ss)
 */
function formatDateTime(dateInput) {
  if (!dateInput) return { date: '', time: '' };
  const d = new Date(dateInput);
  if (isNaN(d.getTime())) return { date: String(dateInput), time: '' };
  const date = d.toISOString().split('T')[0];
  const time = d.toTimeString().split(' ')[0];
  return { date, time };
}

/**
 * Apply luxury brand styling to an Excel worksheet
 */
function applyLuxuryTheme(sheet, headerBg = '541122', headerFg = 'FFFFFF') {
  // Style header row
  const headerRow = sheet.getRow(1);
  headerRow.height = 28;
  headerRow.font = { name: 'Segoe UI', size: 11, bold: true, color: { argb: headerFg } };
  headerRow.alignment = { vertical: 'middle', horizontal: 'center' };
  headerRow.fill = {
    type: 'pattern',
    pattern: 'solid',
    fgColor: { argb: headerBg }
  };

  // Add borders and alignments to data rows
  sheet.eachRow({ includeEmpty: false }, (row, rowNumber) => {
    if (rowNumber === 1) return;
    row.height = 22;
    row.font = { name: 'Segoe UI', size: 10 };
    row.alignment = { vertical: 'middle' };
    
    // Zebra striping for enhanced readability
    if (rowNumber % 2 === 0) {
      row.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'FDFBF7' }
      };
    }

    row.eachCell({ includeEmpty: true }, (cell) => {
      cell.border = {
        top: { style: 'thin', color: { argb: 'E5D7C7' } },
        left: { style: 'thin', color: { argb: 'E5D7C7' } },
        bottom: { style: 'thin', color: { argb: 'E5D7C7' } },
        right: { style: 'thin', color: { argb: 'E5D7C7' } }
      };
    });
  });

  // Adjust column widths automatically
  sheet.columns.forEach((column) => {
    let maxLength = 12;
    column.eachCell({ includeEmpty: false }, (cell) => {
      const cellLen = cell.value ? String(cell.value).length : 0;
      if (cellLen > maxLength) maxLength = cellLen;
    });
    column.width = Math.min(Math.max(maxLength + 4, 14), 45);
  });
}

/**
 * 1. Generate Services Requests Workbook
 * Filename: LaCrown_Services_Requests.xlsx
 */
async function generateServicesWorkbook(records = []) {
  const workbook = new ExcelJS.Workbook();
  workbook.creator = 'La Crown Luxury Aesthetic Clinic';
  workbook.lastModifiedBy = 'La Crown Automated Request System';
  workbook.created = new Date();
  workbook.modified = new Date();

  const sheet = workbook.addWorksheet('Services Requests', {
    views: [{ showGridLines: true }]
  });

  sheet.columns = [
    { header: 'Request ID', key: 'reference', width: 16 },
    { header: 'Submission Date', key: 'subDate', width: 16 },
    { header: 'Submission Time', key: 'subTime', width: 16 },
    { header: 'Customer Full Name', key: 'name', width: 24 },
    { header: 'Email Address', key: 'email', width: 26 },
    { header: 'Phone Number', key: 'phone', width: 18 },
    { header: 'Service Category', key: 'category', width: 22 },
    { header: 'Service Name', key: 'service', width: 28 },
    { header: 'Appointment Date', key: 'appDate', width: 18 },
    { header: 'Preferred Appointment Time', key: 'appTime', width: 24 },
    { header: 'Preferred Branch or Location', key: 'branch', width: 26 },
    { header: 'Message or Special Request', key: 'notes', width: 35 },
    { header: 'Request Status', key: 'status', width: 20 },
    { header: 'Email Notification Status', key: 'notificationStatus', width: 24 }
  ];

  records.forEach((rec) => {
    const { date, time } = formatDateTime(rec.created_at || rec.createdAt || new Date());
    sheet.addRow({
      reference: sanitize(rec.reference || rec.referenceNumber || rec.id),
      subDate: sanitize(date),
      subTime: sanitize(time),
      name: sanitize(rec.name || rec.customerName || ''),
      email: sanitize(rec.email || ''),
      phone: sanitize(rec.phone || ''),
      category: sanitize(rec.service_category || rec.serviceCategory || rec.doctor || 'Aesthetic Clinic / Salon'),
      service: sanitize(rec.service || rec.serviceName || ''),
      appDate: sanitize(rec.preferred_date || rec.preferredDate || rec.date || ''),
      appTime: sanitize(rec.preferred_time || rec.preferredTime || rec.time || ''),
      branch: sanitize(rec.branch || 'Jayanagar, Bengaluru'),
      notes: sanitize(rec.notes || rec.message || ''),
      status: sanitize(rec.status || 'Pending Concierge Call'),
      notificationStatus: sanitize(rec.notification_status || (rec.email_sent ? 'Sent' : 'Pending'))
    });
  });

  applyLuxuryTheme(sheet, '541122', 'FFFFFF'); // Burgundy Header

  const buffer = await workbook.xlsx.writeBuffer();
  return Buffer.from(buffer);
}

/**
 * 2. Generate Academy Requests Workbook
 * Filename: LaCrown_Academy_Requests.xlsx
 */
async function generateAcademyWorkbook(records = []) {
  const workbook = new ExcelJS.Workbook();
  workbook.creator = 'La Crown Academy';
  workbook.lastModifiedBy = 'La Crown Automated Request System';
  workbook.created = new Date();
  workbook.modified = new Date();

  const sheet = workbook.addWorksheet('Academy Enquiries', {
    views: [{ showGridLines: true }]
  });

  sheet.columns = [
    { header: 'Request ID', key: 'reference', width: 16 },
    { header: 'Submission Date', key: 'subDate', width: 16 },
    { header: 'Submission Time', key: 'subTime', width: 16 },
    { header: 'Applicant Full Name', key: 'name', width: 24 },
    { header: 'Email Address', key: 'email', width: 26 },
    { header: 'Phone Number', key: 'phone', width: 18 },
    { header: 'Course Name', key: 'course', width: 30 },
    { header: 'Training Programme', key: 'programme', width: 28 },
    { header: 'Preferred Batch', key: 'batch', width: 20 },
    { header: 'Preferred Start Date', key: 'startDate', width: 22 },
    { header: 'Education or Qualification', key: 'qualification', width: 26 },
    { header: 'Experience', key: 'experience', width: 26 },
    { header: 'Message', key: 'message', width: 35 },
    { header: 'Request Status', key: 'status', width: 20 },
    { header: 'Email Notification Status', key: 'notificationStatus', width: 24 }
  ];

  records.forEach((rec) => {
    const { date, time } = formatDateTime(rec.created_at || rec.createdAt || new Date());
    sheet.addRow({
      reference: sanitize(rec.reference || rec.id),
      subDate: sanitize(date),
      subTime: sanitize(time),
      name: sanitize(rec.name || ''),
      email: sanitize(rec.email || ''),
      phone: sanitize(rec.phone || ''),
      course: sanitize(rec.course || ''),
      programme: sanitize(rec.training_programme || rec.course || 'Professional Certification'),
      batch: sanitize(rec.preferred_batch || 'Regular Batch'),
      startDate: sanitize(rec.preferred_start_date || 'Next Upcoming Batch'),
      qualification: sanitize(rec.education_qualification || ''),
      experience: sanitize(rec.experience || ''),
      message: sanitize(rec.message || rec.notes || ''),
      status: sanitize(rec.status || 'New Enquiry'),
      notificationStatus: sanitize(rec.notification_status || (rec.email_sent ? 'Sent' : 'Pending'))
    });
  });

  applyLuxuryTheme(sheet, '760D25', 'FFFFFF'); // Deep Rose Burgundy Header

  const buffer = await workbook.xlsx.writeBuffer();
  return Buffer.from(buffer);
}

/**
 * 3. Generate Franchise Requests Workbook
 * Filename: LaCrown_Franchise_Requests.xlsx
 */
async function generateFranchiseWorkbook(records = []) {
  const workbook = new ExcelJS.Workbook();
  workbook.creator = 'La Crown Luxury Aesthetic Clinic';
  workbook.lastModifiedBy = 'La Crown Automated Request System';
  workbook.created = new Date();
  workbook.modified = new Date();

  const sheet = workbook.addWorksheet('Franchise Enquiries', {
    views: [{ showGridLines: true }]
  });

  sheet.columns = [
    { header: 'Request ID', key: 'reference', width: 16 },
    { header: 'Submission Date', key: 'subDate', width: 16 },
    { header: 'Submission Time', key: 'subTime', width: 16 },
    { header: 'Applicant Full Name', key: 'name', width: 24 },
    { header: 'Email Address', key: 'email', width: 26 },
    { header: 'Phone Number', key: 'phone', width: 18 },
    { header: 'Business Name', key: 'businessName', width: 24 },
    { header: 'Preferred City', key: 'city', width: 20 },
    { header: 'Preferred State', key: 'state', width: 20 },
    { header: 'Preferred Location', key: 'location', width: 24 },
    { header: 'Investment Budget', key: 'investment', width: 22 },
    { header: 'Existing Business Details', key: 'bizDetails', width: 28 },
    { header: 'Business Experience', key: 'bizExperience', width: 28 },
    { header: 'Message', key: 'message', width: 35 },
    { header: 'Request Status', key: 'status', width: 20 },
    { header: 'Email Notification Status', key: 'notificationStatus', width: 24 }
  ];

  records.forEach((rec) => {
    const { date, time } = formatDateTime(rec.created_at || rec.createdAt || new Date());
    sheet.addRow({
      reference: sanitize(rec.reference || rec.id),
      subDate: sanitize(date),
      subTime: sanitize(time),
      name: sanitize(rec.name || ''),
      email: sanitize(rec.email || ''),
      phone: sanitize(rec.phone || ''),
      businessName: sanitize(rec.business_name || ''),
      city: sanitize(rec.city || ''),
      state: sanitize(rec.state || ''),
      location: sanitize(rec.location || rec.city || ''),
      investment: sanitize(rec.investment || rec.investmentBudget || ''),
      bizDetails: sanitize(rec.business_details || ''),
      bizExperience: sanitize(rec.business_experience || ''),
      message: sanitize(rec.message || rec.notes || ''),
      status: sanitize(rec.status || 'New Prospectus Requested'),
      notificationStatus: sanitize(rec.notification_status || (rec.email_sent ? 'Sent' : 'Pending'))
    });
  });

  applyLuxuryTheme(sheet, '4A0E17', 'FFFFFF'); // Rich Royal Burgundy Header

  const buffer = await workbook.xlsx.writeBuffer();
  return Buffer.from(buffer);
}

module.exports = {
  generateServicesWorkbook,
  generateAcademyWorkbook,
  generateFranchiseWorkbook,
  sanitizeCell: sanitize
};
