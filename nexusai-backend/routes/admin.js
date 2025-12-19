const express = require('express');
const {
  getDashboardStats,
  getSystemHealth,
  clearCache,
  backupDatabase,
} = require('../controllers/adminController');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

// All routes are protected (Super Admin only)
router.use(protect);
router.use(authorize('super_admin'));

router.get('/dashboard', getDashboardStats);
router.get('/health', getSystemHealth);
router.post('/clear-cache', clearCache);
router.post('/backup', backupDatabase);

module.exports = router;