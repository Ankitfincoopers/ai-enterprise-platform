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

// const express = require('express');
// const dotenv = require('dotenv');
// const cors = require('cors');
// const helmet = require('helmet');
// const rateLimit = require('express-rate-limit');
// const cookieParser = require('cookie-parser');

// // Load env vars
// dotenv.config();

// // Initialize app
// const app = express();

// // Body parser
// app.use(express.json({ limit: '10mb' }));
// app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// // Cookie parser
// app.use(cookieParser());

// // Set security headers
// app.use(helmet());

// // Enable CORS
// app.use(cors({
//   origin: process.env.CORS_ORIGIN || 'http://localhost:3001',
//   credentials: true,
// }));

// // Rate limiting
// const limiter = rateLimit({
//   windowMs: 15 * 60 * 1000, // 15 minutes
//   max: 100, // limit each IP to 100 requests per windowMs
//   message: 'Too many requests from this IP, please try again after 15 minutes',
// });
// app.use('/api', limiter);

// // Basic route for testing
// app.get('/', (req, res) => {
//   res.json({
//     success: true,
//     message: 'Enterprise SaaS Backend API is running',
//     version: '1.0.0'
//   });
// });

// // Auth routes placeholder
// app.post('/api/v1/auth/login', (req, res) => {
//   res.json({
//     success: true,
//     message: 'Login endpoint',
//     token: 'dummy-jwt-token'
//   });
// });

// app.post('/api/v1/auth/register', (req, res) => {
//   res.json({
//     success: true,
//     message: 'Register endpoint'
//   });
// });

// // Pages routes placeholder
// app.get('/api/v1/pages', (req, res) => {
//   res.json({
//     success: true,
//     pages: [
//       { slug: 'home', title: 'Home', isPublished: true },
//       { slug: 'about', title: 'About', isPublished: true },
//       { slug: 'services', title: 'Services', isPublished: true },
//       { slug: 'team', title: 'Team', isPublished: true },
//       { slug: 'contact', title: 'Contact', isPublished: true }
//     ]
//   });
// });

// app.get('/api/v1/pages/:slug', (req, res) => {
//   const { slug } = req.params;
//   res.json({
//     success: true,
//     page: {
//       slug: slug,
//       title: slug.charAt(0).toUpperCase() + slug.slice(1),
//       sections: []
//     }
//   });
// });

// // Contact endpoint
// app.post('/api/v1/contact', (req, res) => {
//   console.log('Contact form submission:', req.body);
//   res.json({
//     success: true,
//     message: 'Contact enquiry submitted successfully',
//     enquiry: req.body
//   });
// });

// // Handle 404
// app.use('*', (req, res) => {
//   res.status(404).json({
//     success: false,
//     message: `Route ${req.originalUrl} not found`,
//   });
// });

// // Error handler
// app.use((err, req, res, next) => {
//   console.error('Server Error:', err);
//   res.status(500).json({
//     success: false,
//     message: 'Internal server error',
//     error: process.env.NODE_ENV === 'development' ? err.message : undefined
//   });
// });

// const PORT = process.env.PORT || 5000;

// const server = app.listen(PORT, () => {
//   console.log(`🚀 Server running on port ${PORT}`);
//   console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
// });

// // Handle unhandled promise rejections
// process.on('unhandledRejection', (err, promise) => {
//   console.log(`❌ Unhandled Rejection: ${err.message}`);
//   // Close server & exit process
//   server.close(() => process.exit(1));
// });

// // Handle uncaught exceptions
// process.on('uncaughtException', (err) => {
//   console.log(`❌ Uncaught Exception: ${err.message}`);
//   process.exit(1);
// });

const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');

// Load env vars
dotenv.config();

// Initialize app
const app = express();

// Connect to MongoDB
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    process.exit(1);
  }
};

// Connect to database
connectDB();

// Body parser
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Cookie parser
app.use(cookieParser());

// Set security headers
app.use(helmet());

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());

// Prevent parameter pollution
app.use(hpp());

// Enable CORS with multiple origins
const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:3001',
  'https://ai-enterprise-platform.vercel.app',
  'https://nexusai.vercel.app',
  'https://nexusai-backend-uwom.onrender.com'
];

const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      console.log('Blocked by CORS:', origin);
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept'],
  exposedHeaders: ['Content-Range', 'X-Content-Range'],
  maxAge: 86400 // 24 hours
};

app.use(cors(corsOptions));

// Handle preflight requests
app.options('*', cors(corsOptions));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 1000, // limit each IP to 1000 requests per windowMs
  message: {
    success: false,
    message: 'Too many requests from this IP, please try again after 15 minutes'
  },
  standardHeaders: true,
  legacyHeaders: false,
});
app.use('/api', limiter);

// Basic route for testing
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Enterprise SaaS Backend API is running',
    version: '1.0.0',
    environment: process.env.NODE_ENV,
    database: mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected'
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Server is healthy',
    timestamp: new Date().toISOString(),
    database: mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected'
  });
});

// API health check
app.get('/api/v1/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'API is healthy',
    version: '1.0.0',
    environment: process.env.NODE_ENV,
    uptime: process.uptime(),
    database: mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected'
  });
});

// Auth routes placeholder
app.post('/api/v1/auth/login', (req, res) => {
  const { email, password } = req.body;
  
  // Dummy authentication (replace with real auth)
  if (email === 'admin@example.com' && password === 'password123') {
    res.json({
      success: true,
      message: 'Login successful',
      token: 'dummy-jwt-token-for-development',
      user: {
        id: '1',
        name: 'Admin User',
        email: 'admin@example.com',
        role: 'admin'
      }
    });
  } else {
    res.status(401).json({
      success: false,
      message: 'Invalid credentials'
    });
  }
});

app.post('/api/v1/auth/register', (req, res) => {
  res.json({
    success: true,
    message: 'Registration successful',
    user: req.body
  });
});

// Get user profile
app.get('/api/v1/auth/me', (req, res) => {
  const token = req.headers.authorization;
  
  if (token && token.startsWith('Bearer ')) {
    res.json({
      success: true,
      user: {
        id: '1',
        name: 'Admin User',
        email: 'admin@example.com',
        role: 'admin'
      }
    });
  } else {
    res.status(401).json({
      success: false,
      message: 'Not authorized'
    });
  }
});

// Pages routes placeholder
app.get('/api/v1/pages', (req, res) => {
  res.json({
    success: true,
    pages: [
      { id: '1', slug: 'home', title: 'Home', isPublished: true },
      { id: '2', slug: 'about', title: 'About', isPublished: true },
      { id: '3', slug: 'services', title: 'Services', isPublished: true },
      { id: '4', slug: 'team', title: 'Team', isPublished: true },
      { id: '5', slug: 'contact', title: 'Contact', isPublished: true }
    ]
  });
});

app.get('/api/v1/pages/:slug', (req, res) => {
  const { slug } = req.params;
  const pages = {
    home: {
      id: '1',
      slug: 'home',
      title: 'Home',
      sections: []
    },
    about: {
      id: '2',
      slug: 'about',
      title: 'About Us',
      sections: []
    },
    services: {
      id: '3',
      slug: 'services',
      title: 'Our Services',
      sections: []
    },
    team: {
      id: '4',
      slug: 'team',
      title: 'Our Team',
      sections: []
    },
    contact: {
      id: '5',
      slug: 'contact',
      title: 'Contact Us',
      sections: []
    }
  };
  
  const page = pages[slug] || {
    id: '6',
    slug: slug,
    title: slug.charAt(0).toUpperCase() + slug.slice(1),
    sections: []
  };
  
  res.json({
    success: true,
    page: page
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
  
  // Handle CORS errors
  if (err.message === 'Not allowed by CORS') {
    return res.status(403).json({
      success: false,
      message: 'CORS policy: Origin not allowed'
    });
  }
  
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
  console.log(`🌐 CORS Origins: ${allowedOrigins.join(', ')}`);
  console.log(`🗄️  MongoDB: ${process.env.MONGODB_URI ? 'Configured' : 'Not configured'}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`❌ Unhandled Rejection: ${err.message}`);
  console.log(err.stack);
  // Close server & exit process
  server.close(() => process.exit(1));
});

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
  console.log(`❌ Uncaught Exception: ${err.message}`);
  console.log(err.stack);
  process.exit(1);
});