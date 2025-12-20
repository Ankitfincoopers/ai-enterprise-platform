// const mongoose = require('mongoose');

// const pageSchema = new mongoose.Schema({
//   slug: {
//     type: String,
//     required: [true, 'Please provide page slug'],
//     unique: true,
//     trim: true,
//     lowercase: true,
//   },
//   title: {
//     type: String,
//     required: [true, 'Please provide page title'],
//     trim: true,
//   },
//   metaTitle: {
//     type: String,
//     trim: true,
//   },
//   metaDescription: {
//     type: String,
//     trim: true,
//   },
//   metaKeywords: {
//     type: [String],
//     default: [],
//   },
//   isPublished: {
//     type: Boolean,
//     default: true,
//   },
//   isProtected: {
//     type: Boolean,
//     default: false,
//   },
//   order: {
//     type: Number,
//     default: 0,
//   },
//   sections: [{
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Section',
//   }],
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
//   updatedAt: {
//     type: Date,
//     default: Date.now,
//   },
//   createdBy: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//   },
//   updatedBy: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//   },
// });

// // Update timestamp on save
// pageSchema.pre('save', function (next) {
//   this.updatedAt = Date.now();
//   next();
// });

// // Create indexes
// pageSchema.index({ slug: 1 });
// pageSchema.index({ isPublished: 1 });
// pageSchema.index({ order: 1 });

// module.exports = mongoose.model('Page', pageSchema);

// models/Page.js
const mongoose = require('mongoose');

const pageSchema = new mongoose.Schema({
  slug: {
    type: String,
    required: [true, 'Please provide page slug'],
    unique: true,
    trim: true,
    lowercase: true,
  },
  title: {
    type: String,
    required: [true, 'Please provide page title'],
    trim: true,
  },
  metaTitle: {
    type: String,
    trim: true,
  },
  metaDescription: {
    type: String,
    trim: true,
  },
  metaKeywords: [{
    type: String,
  }],
  isPublished: {
    type: Boolean,
    default: true,
  },
  isProtected: {
    type: Boolean,
    default: false,
  },
  order: {
    type: Number,
    default: 0,
  },
  template: {
    type: String,
    enum: ['default', 'landing', 'dashboard', 'admin'],
    default: 'default',
  },
  sections: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Section',
  }],
  settings: {
    backgroundColor: String,
    textColor: String,
    headerColor: String,
    footerColor: String,
    customCSS: String,
    customJS: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  updatedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  publishedAt: Date,
  version: {
    type: Number,
    default: 1,
  },
  status: {
    type: String,
    enum: ['draft', 'review', 'published', 'archived'],
    default: 'draft',
  },
});

pageSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  
  // Update publishedAt if being published
  if (this.isModified('isPublished') && this.isPublished) {
    this.publishedAt = Date.now();
    this.status = 'published';
  }
  
  next();
});

module.exports = mongoose.model('Page', pageSchema);