// import express, { json, urlencoded } from 'express';
// import { config } from 'dotenv';
// import cors from 'cors';
// import helmet from 'helmet';
// import rateLimit from 'express-rate-limit';
// import mongoSanitize from 'express-mongo-sanitize';
// import xss from 'xss-clean';
// import hpp from 'hpp';
// import cookieParser from 'cookie-parser';

// // Load env vars
// config();

// // Connect to database
// import connectDB from './config/database';

// // Route files
// import auth from './routes/auth';
// import pages from './routes/pages';
// import sections from './routes/sections';
// import media from './routes/media';
// import contact from './routes/contact';
// import chat from './routes/chat';
// import admin from './routes/admin';

// // Middleware files
// import { errorHandler } from './middleware/error';

// // Initialize app
// const app = express();

// // Connect to MongoDB
// connectDB();

// // Body parser
// app.use(json({ limit: '10mb' }));
// app.use(urlencoded({ extended: true, limit: '10mb' }));

// // Cookie parser
// app.use(cookieParser());

// // Sanitize data
// app.use(mongoSanitize());

// // XSS protection
// app.use(xss());

// // Prevent parameter pollution
// app.use(hpp());

// // Set security headers
// app.use(helmet());

// // Enable CORS
// app.use(cors({
//   origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
//   credentials: true,
// }));

// // Rate limiting
// const limiter = rateLimit({
//   windowMs: 15 * 60 * 1000, // 15 minutes
//   max: 100, // limit each IP to 100 requests per windowMs
//   message: 'Too many requests from this IP, please try again after 15 minutes',
// });
// app.use('/api', limiter);

// // Mount routers
// app.use('/api/v1/auth', auth);
// app.use('/api/v1/pages', pages);
// app.use('/api/v1/sections', sections);
// app.use('/api/v1/media', media);
// app.use('/api/v1/contact', contact);
// app.use('/api/v1/chat', chat);
// app.use('/api/v1/admin', admin);

// // Error handler
// app.use(errorHandler);

// // Handle 404
// app.use('*', (req, res) => {
//   res.status(404).json({
//     success: false,
//     message: `Route ${req.originalUrl} not found`,
//   });
// });

// const PORT = process.env.PORT || 5000;

// const server = app.listen(PORT, () => {
//   console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
// });

// // Handle unhandled promise rejections
// process.on('unhandledRejection', (err, promise) => {
//   console.log(`Error: ${err.message}`);
//   // Close server & exit process
//   server.close(() => process.exit(1));
// });

// // Handle uncaught exceptions
// process.on('uncaughtException', (err) => {
//   console.log(`Error: ${err.message}`);
//   process.exit(1);
// });

const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const cookieParser = require('cookie-parser');

// Load env vars
dotenv.config();

// Initialize app
const app = express();

// Body parser
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Cookie parser
app.use(cookieParser());

// Set security headers
app.use(helmet());

// Enable CORS
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  credentials: true,
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again after 15 minutes',
});
app.use('/api', limiter);

// Basic route for testing
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Enterprise SaaS Backend API is running',
    version: '1.0.0'
  });
});

// Auth routes placeholder
app.post('/api/v1/auth/login', (req, res) => {
  res.json({
    success: true,
    message: 'Login endpoint',
    token: 'dummy-jwt-token'
  });
});

app.post('/api/v1/auth/register', (req, res) => {
  res.json({
    success: true,
    message: 'Register endpoint'
  });
});

// Pages routes placeholder
app.get('/api/v1/pages', (req, res) => {
  res.json({
    success: true,
    pages: [
      { slug: 'home', title: 'Home', isPublished: true },
      { slug: 'about', title: 'About', isPublished: true },
      { slug: 'services', title: 'Services', isPublished: true },
      { slug: 'team', title: 'Team', isPublished: true },
      { slug: 'contact', title: 'Contact', isPublished: true }
    ]
  });
});

app.get('/api/v1/pages/:slug', (req, res) => {
  const { slug } = req.params;
  res.json({
    success: true,
    page: {
      slug: slug,
      title: slug.charAt(0).toUpperCase() + slug.slice(1),
      sections: []
    }
  });
});

// Contact endpoint
app.post('/api/v1/contact', (req, res) => {
  console.log('Contact form submission:', req.body);
  res.json({
    success: true,
    message: 'Contact enquiry submitted successfully',
    enquiry: req.body
  });
});

// Handle 404
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.originalUrl} not found`,
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Server Error:', err);
  res.status(500).json({
    success: false,
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`❌ Unhandled Rejection: ${err.message}`);
  // Close server & exit process
  server.close(() => process.exit(1));
});

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
  console.log(`❌ Uncaught Exception: ${err.message}`);
  process.exit(1);
});