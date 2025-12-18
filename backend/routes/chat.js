const express = require('express');
const {
  createSession,
  getSessions,
  getMessages,
  sendMessage,
  updateTitle,
  deleteSession,
  getChatStats,
} = require('../controllers/chatController');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

// Public routes (with optional auth)
router.post('/sessions', createSession);
router.post('/sessions/:sessionId/messages', sendMessage);

// Protected routes
router.use(protect);

router.get('/sessions', getSessions);
router.get('/sessions/:sessionId/messages', getMessages);
router.put('/sessions/:sessionId/title', updateTitle);
router.delete('/sessions/:sessionId', deleteSession);

// Admin only routes
router.get('/stats', authorize('admin', 'super_admin'), getChatStats);

module.exports = router;