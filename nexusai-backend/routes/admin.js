// const express = require('express');
// const {
//   getDashboardStats,
//   getSystemHealth,
//   clearCache,
//   backupDatabase,
// } = require('../controllers/adminController');
// const { protect, authorize } = require('../middleware/auth');

// const router = express.Router();

// // All routes are protected (Super Admin only)
// router.use(protect);
// router.use(authorize('super_admin'));

// router.get('/dashboard', getDashboardStats);
// router.get('/health', getSystemHealth);
// router.post('/clear-cache', clearCache);
// router.post('/backup', backupDatabase);

// module.exports = router;


// routes/admin.js
const express = require('express');
const {
  getDashboardStats,
  getSystemHealth,
  clearCache,
  backupDatabase,
  getActivityLogs,
} = require('../controllers/adminController');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

// All routes require admin access
router.use(protect);
router.use(authorize('admin', 'super_admin'));

router.get('/dashboard', getDashboardStats);
router.get('/health', getSystemHealth);
router.get('/activity', getActivityLogs);
router.post('/clear-cache', clearCache);
router.post('/backup', authorize('super_admin'), backupDatabase);

module.exports = router;