const mongoose = require('mongoose');

const contactEnquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide your name'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    lowercase: true,
  },
  phone: {
    type: String,
    trim: true,
  },
  company: {
    type: String,
    trim: true,
  },
  subject: {
    type: String,
    required: [true, 'Please provide a subject'],
    trim: true,
  },
  message: {
    type: String,
    required: [true, 'Please provide a message'],
    trim: true,
  },
  status: {
    type: String,
    enum: ['new', 'read', 'replied', 'closed'],
    default: 'new',
  },
  source: {
    type: String,
    default: 'website',
  },
  ipAddress: {
    type: String,
  },
  userAgent: {
    type: String,
  },
  isSubscribed: {
    type: Boolean,
    default: true,
  },
  notes: [{
    content: String,
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Update timestamp
contactEnquirySchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

// Create indexes
contactEnquirySchema.index({ status: 1 });
contactEnquirySchema.index({ createdAt: -1 });
contactEnquirySchema.index({ email: 1 });

module.exports = mongoose.model('ContactEnquiry', contactEnquirySchema);