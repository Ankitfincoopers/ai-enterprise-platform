const express = require('express');
const {
  submitEnquiry,
  getEnquiries,
  getEnquiry,
  updateEnquiry,
  addNote,
  getStats,
} = require('../controllers/contactController');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

// Public route
router.post('/', submitEnquiry);

// Protected routes (Admin only)
router.use(protect);
router.use(authorize('admin', 'super_admin'));

router.get('/', getEnquiries);
router.get('/stats', getStats);
router.get('/:id', getEnquiry);
router.put('/:id', updateEnquiry);
router.post('/:id/notes', addNote);

module.exports = router;