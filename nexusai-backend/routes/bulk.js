// routes/bulk.js
const express = require('express');
const {
  bulkUpdateSections,
  exportContent,
  importContent,
} = require('../controllers/bulkController');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

// All routes require admin access
router.use(protect);
router.use(authorize('admin', 'super_admin'));

router.put('/sections', bulkUpdateSections);
router.get('/export', exportContent);
router.post('/import', importContent);

module.exports = router;