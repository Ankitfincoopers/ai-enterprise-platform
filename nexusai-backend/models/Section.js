// const mongoose = require('mongoose');

// const sectionSchema = new mongoose.Schema({
//   page: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Page',
//     required: true,
//   },
//   type: {
//     type: String,
//     enum: ['hero', 'features', 'team', 'contact', 'testimonials', 'cta', 'content'],
//     required: true,
//   },
//   order: {
//     type: Number,
//     required: true,
//   },
//   title: {
//     type: String,
//     trim: true,
//   },
//   subtitle: {
//     type: String,
//     trim: true,
//   },
//   content: {
//     type: String,
//     trim: true,
//   },
//   richContent: {
//     type: mongoose.Schema.Types.Mixed,
//   },
//   buttons: [{
//     text: String,
//     url: String,
//     variant: {
//       type: String,
//       enum: ['primary', 'secondary', 'outlined'],
//       default: 'primary',
//     },
//     icon: String,
//     isExternal: {
//       type: Boolean,
//       default: false,
//     },
//   }],
//   images: [{
//     url: String,
//     alt: String,
//     caption: String,
//     position: {
//       type: String,
//       enum: ['left', 'right', 'center', 'background'],
//       default: 'center',
//     },
//     cloudinaryId: String,
//   }],
//   videos: [{
//     url: String,
//     thumbnail: String,
//     autoplay: Boolean,
//     loop: Boolean,
//     muted: Boolean,
//     cloudinaryId: String,
//   }],
//   settings: {
//     backgroundColor: String,
//     textColor: String,
//     paddingTop: String,
//     paddingBottom: String,
//     backgroundImage: String,
//     backgroundOverlay: String,
//     animation: String,
//   },
//   isEnabled: {
//     type: Boolean,
//     default: true,
//   },
//   data: {
//     type: mongoose.Schema.Types.Mixed,
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
//   updatedAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// // Update timestamp
// sectionSchema.pre('save', function (next) {
//   this.updatedAt = Date.now();
//   next();
// });

// // Create indexes
// sectionSchema.index({ page: 1, order: 1 });
// sectionSchema.index({ type: 1 });
// sectionSchema.index({ isEnabled: 1 });

// module.exports = mongoose.model('Section', sectionSchema);


// models/Section.js
const mongoose = require('mongoose');

const sectionSchema = new mongoose.Schema({
  page: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Page',
    required: true,
  },
  type: {
    type: String,
    enum: [
      'hero', 'features', 'team', 'contact', 
      'testimonials', 'cta', 'content', 'gallery',
      'pricing', 'stats', 'faq', 'timeline', 
      'blog', 'form', 'video', 'image_grid'
    ],
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
  description: {
    type: String,
    trim: true,
  },
  content: {
    type: String,
    trim: true,
  },
  richContent: {
    type: mongoose.Schema.Types.Mixed,
    default: {},
  },
  buttons: [{
    text: String,
    url: String,
    variant: {
      type: String,
      enum: ['primary', 'secondary', 'outline', 'text'],
      default: 'primary',
    },
    icon: String,
    isExternal: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      enum: ['small', 'medium', 'large'],
      default: 'medium',
    },
    color: String,
  }],
  media: [{
    type: {
      type: String,
      enum: ['image', 'video', 'gif', 'embed'],
    },
    url: String,
    thumbnail: String,
    alt: String,
    caption: String,
    cloudinaryId: String,
    position: {
      type: String,
      enum: ['left', 'right', 'center', 'background'],
      default: 'center',
    },
    width: String,
    height: String,
    autoplay: Boolean,
    loop: Boolean,
    muted: Boolean,
  }],
  settings: {
    layout: {
      type: String,
      enum: ['full', 'container', 'grid', 'flex'],
      default: 'container',
    },
    columns: {
      type: Number,
      min: 1,
      max: 4,
      default: 1,
    },
    backgroundColor: String,
    textColor: String,
    paddingTop: String,
    paddingBottom: String,
    marginTop: String,
    marginBottom: String,
    backgroundImage: String,
    backgroundOverlay: String,
    borderRadius: String,
    shadow: String,
    animation: {
      type: String,
      enum: ['none', 'fade', 'slide', 'zoom', 'bounce'],
      default: 'none',
    },
    animationDelay: Number,
  },
  data: [{
    type: mongoose.Schema.Types.Mixed,
  }],
  isEnabled: {
    type: Boolean,
    default: true,
  },
  visibility: {
    desktop: { type: Boolean, default: true },
    tablet: { type: Boolean, default: true },
    mobile: { type: Boolean, default: true },
  },
  accessControl: {
    roles: [String],
    users: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    }],
  },
  seo: {
    title: String,
    description: String,
    keywords: [String],
    canonicalUrl: String,
  },
  analytics: {
    views: { type: Number, default: 0 },
    clicks: { type: Number, default: 0 },
    conversions: { type: Number, default: 0 },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  version: {
    type: Number,
    default: 1,
  },
});

sectionSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Section', sectionSchema);