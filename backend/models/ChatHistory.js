const mongoose = require('mongoose');

const chatHistorySchema = new mongoose.Schema({
  sessionId: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: false,
  },
  messages: [{
    role: {
      type: String,
      enum: ['user', 'assistant', 'system'],
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    timestamp: {
      type: Date,
      default: Date.now,
    },
    metadata: {
      type: mongoose.Schema.Types.Mixed,
    },
  }],
  title: {
    type: String,
    default: 'New Chat',
  },
  model: {
    type: String,
    default: 'llama-3.3-70b-versatile',
  },
  tokens: {
    prompt: Number,
    completion: Number,
    total: Number,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
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
chatHistorySchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

// Create indexes
chatHistorySchema.index({ sessionId: 1 });
chatHistorySchema.index({ userId: 1 });
chatHistorySchema.index({ createdAt: -1 });
chatHistorySchema.index({ 'messages.timestamp': -1 });

module.exports = mongoose.model('ChatHistory', chatHistorySchema);