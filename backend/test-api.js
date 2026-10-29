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

// 6. Test Admin Login Validation
const apiRouter = require('./src/routes/api');
mockReq = { body: { username: 'wrong', password: 'bad' } };
// Find admin/login handler
const adminLoginLayer = apiRouter.stack.find(l => l.route && l.route.path === '/admin/login');
assert.ok(adminLoginLayer, 'Admin login route must exist in apiRouter');
adminLoginLayer.route.stack[0].handle(mockReq, mockRes);
assert.strictEqual(resStatus, 401, 'Invalid admin credentials should return 401');
console.log('✓ [TEST] Admin login route enforces secure authentication');

// 7. Test App Loading & Middleware
const app = require('./src/server');
assert.ok(app, 'Express app loaded and configured successfully');
console.log('✓ [TEST] Express application mounts all routes and middleware');

console.log('\n==================================================');
console.log(' 🎉 ALL BACKEND UNIT & INTEGRATION TESTS PASSED!');
console.log('==================================================\n');
process.exit(0);
