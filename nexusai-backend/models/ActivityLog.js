const mongoose = require('mongoose');

const activityLogSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  action: {
    type: String,
    required: true,
    enum: [
      'page_created', 'page_updated', 'page_deleted', 'page_published',
      'section_created', 'section_updated', 'section_deleted', 'section_toggled',
      'media_uploaded', 'media_deleted', 'user_created', 'user_updated',
      'user_deleted', 'login', 'logout', 'settings_updated'
    ],
  },
  targetType: {
    type: String,
    enum: ['page', 'section', 'media', 'user', 'system'],
  },
  targetId: mongoose.Schema.Types.ObjectId,
  targetName: String,
  details: mongoose.Schema.Types.Mixed,
  ipAddress: String,
  userAgent: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create indexes
activityLogSchema.index({ userId: 1, createdAt: -1 });
activityLogSchema.index({ action: 1 });
activityLogSchema.index({ targetType: 1 });

module.exports = mongoose.model('ActivityLog', activityLogSchema);