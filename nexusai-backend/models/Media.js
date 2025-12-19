const mongoose = require('mongoose');

const mediaSchema = new mongoose.Schema({
  filename: {
    type: String,
    required: true,
  },
  originalname: {
    type: String,
    required: true,
  },
  mimetype: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  thumbnailUrl: {
    type: String,
  },
  cloudinaryId: {
    type: String,
    required: true,
  },
  resourceType: {
    type: String,
    enum: ['image', 'video', 'raw'],
    required: true,
  },
  folder: {
    type: String,
    default: 'enterprise_saas',
  },
  alt: {
    type: String,
    default: '',
  },
  caption: {
    type: String,
    default: '',
  },
  tags: [{
    type: String,
  }],
  uploadedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  dimensions: {
    width: Number,
    height: Number,
  },
  duration: Number,
  isPublic: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create indexes
mediaSchema.index({ resourceType: 1 });
mediaSchema.index({ tags: 1 });
mediaSchema.index({ createdAt: -1 });
mediaSchema.index({ uploadedBy: 1 });

module.exports = mongoose.model('Media', mediaSchema);