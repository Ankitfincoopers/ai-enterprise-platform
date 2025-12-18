const express = require('express');
const {
  getSections,
  getSection,
  createSection,
  updateSection,
  deleteSection,
  toggleSection,
  reorderSections,
  duplicateSection,
} = require('../controllers/sectionController');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

// Public routes
router.get('/pages/:pageId/sections', getSections);
router.get('/:id', getSection);

// Protected routes (Admin only)
router.use(protect);
router.use(authorize('admin', 'super_admin', 'editor'));

router.post('/pages/:pageId/sections', createSection);
router.put('/:id', updateSection);
router.delete('/:id', deleteSection);
router.put('/:id/toggle', toggleSection);
router.put('/reorder', reorderSections);
router.post('/:id/duplicate', duplicateSection);

module.exports = router;