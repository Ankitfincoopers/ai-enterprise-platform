const express = require('express');
const {
  uploadMedia,
  getMedia,
  getMediaById,
  updateMedia,
  deleteMedia,
  getMediaByTag,
  getTags,
} = require('../controllers/mediaController');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

// All routes are protected (Admin only)
router.use(protect);
router.use(authorize('admin', 'super_admin', 'editor'));

router.post('/upload', uploadMedia);
router.get('/', getMedia);
router.get('/tags', getTags);
router.get('/tags/:tag', getMediaByTag);
router.get('/:id', getMediaById);
router.put('/:id', updateMedia);
router.delete('/:id', deleteMedia);

module.exports = router;