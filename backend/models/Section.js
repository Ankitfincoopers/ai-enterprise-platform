const mongoose = require('mongoose');

const sectionSchema = new mongoose.Schema({
  page: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Page',
    required: true,
  },
  type: {
    type: String,
    enum: ['hero', 'features', 'team', 'contact', 'testimonials', 'cta', 'content'],
    required: true,
  },
  order: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    trim: true,
  },
  subtitle: {
    type: String,
    trim: true,
  },
  content: {
    type: String,
    trim: true,
  },
  richContent: {
    type: mongoose.Schema.Types.Mixed,
  },
  buttons: [{
    text: String,
    url: String,
    variant: {
      type: String,
      enum: ['primary', 'secondary', 'outlined'],
      default: 'primary',
    },
    icon: String,
    isExternal: {
      type: Boolean,
      default: false,
    },
  }],
  images: [{
    url: String,
    alt: String,
    caption: String,
    position: {
      type: String,
      enum: ['left', 'right', 'center', 'background'],
      default: 'center',
    },
    cloudinaryId: String,
  }],
  videos: [{
    url: String,
    thumbnail: String,
    autoplay: Boolean,
    loop: Boolean,
    muted: Boolean,
    cloudinaryId: String,
  }],
  settings: {
    backgroundColor: String,
    textColor: String,
    paddingTop: String,
    paddingBottom: String,
    backgroundImage: String,
    backgroundOverlay: String,
    animation: String,
  },
  isEnabled: {
    type: Boolean,
    default: true,
  },
  data: {
    type: mongoose.Schema.Types.Mixed,
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
sectionSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

// Create indexes
sectionSchema.index({ page: 1, order: 1 });
sectionSchema.index({ type: 1 });
sectionSchema.index({ isEnabled: 1 });

module.exports = mongoose.model('Section', sectionSchema);