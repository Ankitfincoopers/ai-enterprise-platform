const express = require('express');
const {
  register,
  login,
  getMe,
  updateDetails,
  updatePassword,
  logout,
  getUsers,
  updateUser,
} = require('../controllers/authController');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

// Public routes
router.post('/register', register);
router.post('/login', login);

// Protected routes
router.get('/me', protect, getMe);
router.put('/updatedetails', protect, updateDetails);
router.put('/updatepassword', protect, updatePassword);
router.get('/logout', protect, logout);

// Admin routes
router.get('/users', protect, authorize('admin', 'super_admin'), getUsers);
router.put('/users/:id', protect, authorize('admin', 'super_admin'), updateUser);

module.exports = router;