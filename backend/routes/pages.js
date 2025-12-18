const express = require('express');
const {
  getPages,
  getPage,
  createPage,
  updatePage,
  deletePage,
  getPageFull,
  reorderPages,
} = require('../controllers/pageController');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

// Public routes
router.get('/', getPages);
router.get('/:slug', getPage);

// Protected routes (Admin only)
router.use(protect);
router.use(authorize('admin', 'super_admin', 'editor'));

router.post('/', createPage);
router.put('/:id', updatePage);
router.delete('/:id', deletePage);
router.get('/:id/full', getPageFull);
router.put('/reorder', reorderPages);

module.exports = router;