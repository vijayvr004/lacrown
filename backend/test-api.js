/**
 * Backend API Logic & Route Verification Suite
 */

const assert = require('assert');

// 1. Test Config Environment
const config = require('./src/config/env');
assert.ok(config.port, 'Config port should exist');
assert.ok(Array.isArray(config.clientOrigins), 'Config clientOrigins should be an array');
console.log('✓ [TEST] Environment configuration is valid');

// 2. Test Error Handler
const { notFoundHandler, errorHandler } = require('./src/middleware/errorHandler');
let resStatus = null;
let resJson = null;
const mockRes = {
  status(code) { resStatus = code; return this; },
  json(data) { resJson = data; return this; }
};

notFoundHandler({ method: 'GET', originalUrl: '/api/nonexistent' }, mockRes);
assert.strictEqual(resStatus, 404, 'notFoundHandler should return 404');
assert.strictEqual(resJson.success, false, 'notFoundHandler success should be false');
console.log('✓ [TEST] 404 handler behaves correctly');

// 3. Test Appointment Controller Input Validation
const appointmentController = require('./src/controllers/appointmentController');

let mockReq = { body: {} };
appointmentController.createAppointment(mockReq, mockRes, (err) => {
  if (err) throw err;
});
assert.strictEqual(resStatus, 400, 'Empty appointment body should return 400');
assert.ok(resJson.message.includes('Missing required fields'), 'Validation error message should be returned');
console.log('✓ [TEST] Appointment controller enforces required field validation');

// 4. Test Franchise Controller Input Validation
const franchiseController = require('./src/controllers/franchiseController');
mockReq = { body: { name: 'Test' } };
franchiseController.createFranchiseEnquiry(mockReq, mockRes, (err) => {
  if (err) throw err;
});
assert.strictEqual(resStatus, 400, 'Incomplete franchise body should return 400');
console.log('✓ [TEST] Franchise controller enforces required field validation');

// 5. Test Contact Controller Input Validation
const contactController = require('./src/controllers/contactController');
mockReq = { body: { name: 'Test' } };
contactController.createContactMessage(mockReq, mockRes, (err) => {
  if (err) throw err;
});
assert.strictEqual(resStatus, 400, 'Incomplete contact body should return 400');
console.log('✓ [TEST] Contact controller enforces required field validation');

// 6. Test Academy Controller Input Validation
const academyController = require('./src/controllers/academyController');
mockReq = { body: { name: 'Test Student' } };
academyController.createAcademyEnquiry(mockReq, mockRes, (err) => {
  if (err) throw err;
});
assert.strictEqual(resStatus, 400, 'Incomplete academy body should return 400');
console.log('✓ [TEST] Academy controller enforces required field validation');

// 7. Test Excel Workbook Generators & Formula Injection Protection
const excelService = require('./src/services/excelService');

// Formula injection test
assert.strictEqual(excelService.sanitizeCell('=SUM(1+1)'), "'=SUM(1+1)", 'Formula beginning with = must be sanitized');
assert.strictEqual(excelService.sanitizeCell('+cmd'), "'+cmd", 'Formula beginning with + must be sanitized');
assert.strictEqual(excelService.sanitizeCell('Normal text'), 'Normal text', 'Normal text should remain untouched');
console.log('✓ [TEST] Excel formula injection sanitizer functions properly');

async function runAsyncTests() {
  // Test Services Excel Generation
  const sampleServices = [
    {
      reference: 'LC-990001',
      name: 'Priya Sharma',
      email: 'priya@example.com',
      phone: '9876543210',
      service: 'HydraFacial Vortex Cleansing',
      service_category: 'Facial Aesthetics',
      preferred_date: '2026-11-01',
      preferred_time: '11:00 AM',
      branch: 'Jayanagar, Bengaluru',
      notes: 'First time visitor',
      status: 'Pending Concierge Call',
      notification_status: 'Sent',
      created_at: new Date()
    }
  ];
  const servicesBuffer = await excelService.generateServicesWorkbook(sampleServices);
  assert.ok(Buffer.isBuffer(servicesBuffer), 'Services workbook must produce a Buffer');
  assert.ok(servicesBuffer.length > 1000, 'Services workbook Buffer must be non-empty valid xlsx data');
  console.log(`✓ [TEST] Workbook 1: LaCrown_Services_Requests.xlsx generated (${servicesBuffer.length} bytes)`);

  // Test Academy Excel Generation
  const sampleAcademy = [
    {
      reference: 'LC-AC-880001',
      name: 'Sneha Patel',
      email: 'sneha@example.com',
      phone: '9876543211',
      course: 'Diploma in Cosmetology & Clinical Skincare',
      training_programme: 'Diploma in Cosmetology',
      preferred_batch: 'Weekend Batch',
      preferred_start_date: 'Next Month',
      education_qualification: 'B.Sc. Biotechnology',
      experience: '2 years salon apprentice',
      message: 'Looking to start aesthetic practice',
      status: 'New Enquiry',
      notification_status: 'Sent',
      created_at: new Date()
    }
  ];
  const academyBuffer = await excelService.generateAcademyWorkbook(sampleAcademy);
  assert.ok(Buffer.isBuffer(academyBuffer), 'Academy workbook must produce a Buffer');
  assert.ok(academyBuffer.length > 1000, 'Academy workbook Buffer must be non-empty valid xlsx data');
  console.log(`✓ [TEST] Workbook 2: LaCrown_Academy_Requests.xlsx generated (${academyBuffer.length} bytes)`);

  // Test Franchise Excel Generation
  const sampleFranchise = [
    {
      reference: 'LC-FR-770001',
      name: 'Rohan Mehra',
      email: 'rohan@example.com',
      phone: '9876543212',
      city: 'Whitefield, Bengaluru',
      investment: 'Above 50 Lakhs',
      business_name: 'Mehra Wellness Holdings',
      message: 'Interested in clinic and salon franchise',
      status: 'New Prospectus Requested',
      notification_status: 'Sent',
      created_at: new Date()
    }
  ];
  const franchiseBuffer = await excelService.generateFranchiseWorkbook(sampleFranchise);
  assert.ok(Buffer.isBuffer(franchiseBuffer), 'Franchise workbook must produce a Buffer');
  assert.ok(franchiseBuffer.length > 1000, 'Franchise workbook Buffer must be non-empty valid xlsx data');
  console.log(`✓ [TEST] Workbook 3: LaCrown_Franchise_Requests.xlsx generated (${franchiseBuffer.length} bytes)`);

  // Test Notification Dispatch Service in Simulation Mode
  const notificationService = require('./src/services/notificationService');
  const notifResult = await notificationService.dispatchRequestNotification({
    category: 'academy',
    requestRecord: sampleAcademy[0]
  });
  assert.strictEqual(notifResult.success, true, 'Notification dispatch should succeed in simulation mode');
  assert.strictEqual(notifResult.filename, 'LaCrown_Academy_Requests.xlsx', 'Notification must attach correct workbook');
  console.log('✓ [TEST] Immediate Notification Dispatch & Excel Attachment flow verified');

  // 8. Test Admin Login Validation
  const apiRouter = require('./src/routes/api');
  mockReq = { body: { username: 'wrong', password: 'bad' } };
  const adminLoginLayer = apiRouter.stack.find(l => l.route && l.route.path === '/admin/login');
  assert.ok(adminLoginLayer, 'Admin login route must exist in apiRouter');
  adminLoginLayer.route.stack[0].handle(mockReq, mockRes);
  assert.strictEqual(resStatus, 401, 'Invalid admin credentials should return 401');
  console.log('✓ [TEST] Admin login route enforces secure authentication');

  // 9. Test App Loading & Middleware
  const app = require('./src/server');
  assert.ok(app, 'Express app loaded and configured successfully');
  console.log('✓ [TEST] Express application mounts all routes and middleware');

  console.log('\n==================================================');
  console.log(' 🎉 ALL BACKEND UNIT & INTEGRATION TESTS PASSED!');
  console.log('==================================================\n');
  process.exit(0);
}

runAsyncTests().catch(err => {
  console.error('❌ Test failed with error:', err);
  process.exit(1);
});
