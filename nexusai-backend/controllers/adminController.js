// // controllers/adminController.js
// const Page = require('../models/Page');
// const Section = require('../models/Section');
// const User = require('../models/User');
// const Media = require('../models/Media');
// const ContactEnquiry = require('../models/ContactEnquiry');
// const ChatHistory = require('../models/ChatHistory');
// const { ErrorResponse } = require('../middleware/error');

// // @desc    Get dashboard statistics
// // @route   GET /api/v1/admin/dashboard
// // @access  Private/Admin
// exports.getDashboardStats = async (req, res, next) => {
//   try {
//     // Get counts in parallel
//     const [
//       totalPages,
//       totalSections,
//       totalUsers,
//       totalMedia,
//       totalEnquiries,
//       totalChats,
//       recentEnquiries,
//       recentMedia,
//       recentUsers,
//     ] = await Promise.all([
//       Page.countDocuments(),
//       Section.countDocuments(),
//       User.countDocuments(),
//       Media.countDocuments(),
//       ContactEnquiry.countDocuments(),
//       ChatHistory.countDocuments(),
//       ContactEnquiry.find()
//         .sort('-createdAt')
//         .limit(5)
//         .select('name email subject status createdAt'),
//       Media.find()
//         .sort('-createdAt')
//         .limit(5)
//         .select('originalname resourceType size createdAt'),
//       User.find()
//         .sort('-createdAt')
//         .limit(5)
//         .select('name email role lastLogin'),
//     ]);

//     // Get activity by day (last 7 days)
//     const sevenDaysAgo = new Date();
//     sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

//     const pageActivity = await Page.aggregate([
//       {
//         $match: {
//           updatedAt: { $gte: sevenDaysAgo },
//         },
//       },
//       {
//         $group: {
//           _id: {
//             $dateToString: { format: '%Y-%m-%d', date: '$updatedAt' },
//           },
//           count: { $sum: 1 },
//         },
//       },
//       {
//         $sort: { _id: 1 },
//       },
//     ]);

//     const sectionActivity = await Section.aggregate([
//       {
//         $match: {
//           updatedAt: { $gte: sevenDaysAgo },
//         },
//       },
//       {
//         $group: {
//           _id: {
//             $dateToString: { format: '%Y-%m-%d', date: '$updatedAt' },
//           },
//           count: { $sum: 1 },
//         },
//       },
//       {
//         $sort: { _id: 1 },
//       },
//     ]);

//     // Get system stats
//     const pageStats = await Page.aggregate([
//       {
//         $group: {
//           _id: null,
//           published: { $sum: { $cond: [{ $eq: ['$isPublished', true] }, 1, 0] } },
//           drafts: { $sum: { $cond: [{ $eq: ['$isPublished', false] }, 1, 0] } },
//           protected: { $sum: { $cond: [{ $eq: ['$isProtected', true] }, 1, 0] } },
//         },
//       },
//     ]);

//     const sectionStats = await Section.aggregate([
//       {
//         $group: {
//           _id: null,
//           enabled: { $sum: { $cond: [{ $eq: ['$isEnabled', true] }, 1, 0] } },
//           disabled: { $sum: { $cond: [{ $eq: ['$isEnabled', false] }, 1, 0] } },
//         },
//       },
//     ]);

//     const userStats = await User.aggregate([
//       {
//         $group: {
//           _id: '$role',
//           count: { $sum: 1 },
//         },
//       },
//     ]);

//     const mediaStats = await Media.aggregate([
//       {
//         $group: {
//           _id: '$resourceType',
//           count: { $sum: 1 },
//           totalSize: { $sum: '$size' },
//         },
//       },
//     ]);

//     res.status(200).json({
//       success: true,
//       stats: {
//         total: {
//           pages: totalPages,
//           sections: totalSections,
//           users: totalUsers,
//           media: totalMedia,
//           enquiries: totalEnquiries,
//           chats: totalChats,
//         },
//         activity: {
//           pages: pageActivity,
//           sections: sectionActivity,
//         },
//         details: {
//           pages: pageStats[0] || { published: 0, drafts: 0, protected: 0 },
//           sections: sectionStats[0] || { enabled: 0, disabled: 0 },
//           users: userStats,
//           media: mediaStats,
//         },
//         recent: {
//           enquiries: recentEnquiries,
//           media: recentMedia,
//           users: recentUsers,
//         },
//         system: {
//           uptime: process.uptime(),
//           memory: process.memoryUsage(),
//           nodeVersion: process.version,
//           environment: process.env.NODE_ENV,
//         },
//       },
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// // @desc    Get system health
// // @route   GET /api/v1/admin/health
// // @access  Private/Admin
// exports.getSystemHealth = async (req, res, next) => {
//   try {
//     const health = {
//       database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
//       cloudinary: process.env.CLOUDINARY_CLOUD_NAME ? 'configured' : 'not_configured',
//       groq: process.env.GROQ_API_KEY ? 'configured' : 'not_configured',
//       jwt: process.env.JWT_SECRET ? 'configured' : 'not_configured',
//       environment: process.env.NODE_ENV,
//       uptime: process.uptime(),
//       memory: {
//         rss: `${Math.round(process.memoryUsage().rss / 1024 / 1024)} MB`,
//         heapTotal: `${Math.round(process.memoryUsage().heapTotal / 1024 / 1024)} MB`,
//         heapUsed: `${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)} MB`,
//         external: `${Math.round(process.memoryUsage().external / 1024 / 1024)} MB`,
//       },
//       timestamp: new Date().toISOString(),
//     };

//     res.status(200).json({
//       success: true,
//       health,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// // @desc    Clear cache
// // @route   POST /api/v1/admin/clear-cache
// // @access  Private/Admin
// exports.clearCache = async (req, res, next) => {
//   try {
//     // In a real app, you would clear Redis cache here
//     // This is just a placeholder
    
//     res.status(200).json({
//       success: true,
//       message: 'Cache cleared successfully',
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// // @desc    Backup database
// // @route   POST /api/v1/admin/backup
// // @access  Private/SuperAdmin
// exports.backupDatabase = async (req, res, next) => {
//   try {
//     // In a real app, you would create a database backup here
//     // This is just a placeholder
    
//     const backupInfo = {
//       timestamp: new Date().toISOString(),
//       collections: ['Page', 'Section', 'User', 'Media', 'ContactEnquiry', 'ChatHistory'],
//       status: 'backup_initiated',
//     };

//     res.status(200).json({
//       success: true,
//       message: 'Database backup initiated',
//       backup: backupInfo,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// // @desc    Get user activity logs
// // @route   GET /api/v1/admin/activity
// // @access  Private/Admin
// exports.getActivityLogs = async (req, res, next) => {
//   try {
//     const { page = 1, limit = 50, userId, action } = req.query;
    
//     const query = {};
    
//     if (userId) {
//       query.userId = userId;
//     }
    
//     if (action) {
//       query.action = action;
//     }

//     // In a real app, you would query from an ActivityLog collection
//     // This is a placeholder with dummy data
//     const activities = [
//       {
//         id: '1',
//         userId: req.user.id,
//         action: 'page_updated',
//         target: 'Home Page',
//         details: { changes: ['title', 'metaDescription'] },
//         ipAddress: req.ip,
//         timestamp: new Date().toISOString(),
//       },
//       {
//         id: '2',
//         userId: req.user.id,
//         action: 'section_created',
//         target: 'Hero Section',
//         details: { page: 'Home', type: 'hero' },
//         ipAddress: req.ip,
//         timestamp: new Date(Date.now() - 3600000).toISOString(),
//       },
//     ];

//     res.status(200).json({
//       success: true,
//       count: activities.length,
//       activities,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

const Page = require('../models/Page');
const Section = require('../models/Section');
const User = require('../models/User');
const Media = require('../models/Media');
const ContactEnquiry = require('../models/ContactEnquiry');
const ChatHistory = require('../models/ChatHistory');
const ActivityLog = require('../models/ActivityLog');
const { ErrorResponse } = require('../middleware/error');
const mongoose = require('mongoose');

// @desc    Get dashboard statistics
// @route   GET /api/v1/admin/dashboard
// @access  Private/Admin
exports.getDashboardStats = async (req, res, next) => {
  try {
    // Get counts in parallel
    const [
      totalPages,
      totalSections,
      totalUsers,
      totalMedia,
      totalEnquiries,
      totalChats,
      recentEnquiries,
      recentMedia,
      recentUsers,
    ] = await Promise.all([
      Page.countDocuments(),
      Section.countDocuments(),
      User.countDocuments(),
      Media.countDocuments(),
      ContactEnquiry.countDocuments(),
      ChatHistory.countDocuments(),
      ContactEnquiry.find()
        .sort('-createdAt')
        .limit(5)
        .select('name email subject status createdAt'),
      Media.find()
        .sort('-createdAt')
        .limit(5)
        .select('originalname resourceType size createdAt'),
      User.find()
        .sort('-createdAt')
        .limit(5)
        .select('name email role lastLogin'),
    ]);

    // Get activity by day (last 7 days)
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    const pageActivity = await Page.aggregate([
      {
        $match: {
          updatedAt: { $gte: sevenDaysAgo },
        },
      },
      {
        $group: {
          _id: {
            $dateToString: { format: '%Y-%m-%d', date: '$updatedAt' },
          },
          count: { $sum: 1 },
        },
      },
      {
        $sort: { _id: 1 },
      },
    ]);

    const sectionActivity = await Section.aggregate([
      {
        $match: {
          updatedAt: { $gte: sevenDaysAgo },
        },
      },
      {
        $group: {
          _id: {
            $dateToString: { format: '%Y-%m-%d', date: '$updatedAt' },
          },
          count: { $sum: 1 },
        },
      },
      {
        $sort: { _id: 1 },
      },
    ]);

    // Get system stats
    const pageStats = await Page.aggregate([
      {
        $group: {
          _id: null,
          published: { $sum: { $cond: [{ $eq: ['$isPublished', true] }, 1, 0] } },
          drafts: { $sum: { $cond: [{ $eq: ['$isPublished', false] }, 1, 0] } },
          protected: { $sum: { $cond: [{ $eq: ['$isProtected', true] }, 1, 0] } },
        },
      },
    ]);

    const sectionStats = await Section.aggregate([
      {
        $group: {
          _id: null,
          enabled: { $sum: { $cond: [{ $eq: ['$isEnabled', true] }, 1, 0] } },
          disabled: { $sum: { $cond: [{ $eq: ['$isEnabled', false] }, 1, 0] } },
        },
      },
    ]);

    const userStats = await User.aggregate([
      {
        $group: {
          _id: '$role',
          count: { $sum: 1 },
        },
      },
    ]);

    const mediaStats = await Media.aggregate([
      {
        $group: {
          _id: '$resourceType',
          count: { $sum: 1 },
          totalSize: { $sum: '$size' },
        },
      },
    ]);

    res.status(200).json({
      success: true,
      stats: {
        total: {
          pages: totalPages,
          sections: totalSections,
          users: totalUsers,
          media: totalMedia,
          enquiries: totalEnquiries,
          chats: totalChats,
        },
        activity: {
          pages: pageActivity,
          sections: sectionActivity,
        },
        details: {
          pages: pageStats[0] || { published: 0, drafts: 0, protected: 0 },
          sections: sectionStats[0] || { enabled: 0, disabled: 0 },
          users: userStats,
          media: mediaStats,
        },
        recent: {
          enquiries: recentEnquiries,
          media: recentMedia,
          users: recentUsers,
        },
        system: {
          uptime: process.uptime(),
          memory: process.memoryUsage(),
          nodeVersion: process.version,
          environment: process.env.NODE_ENV,
        },
      },
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get system health
// @route   GET /api/v1/admin/health
// @access  Private/Admin
exports.getSystemHealth = async (req, res, next) => {
  try {
    const health = {
      database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
      cloudinary: process.env.CLOUDINARY_CLOUD_NAME ? 'configured' : 'not_configured',
      groq: process.env.GROQ_API_KEY ? 'configured' : 'not_configured',
      jwt: process.env.JWT_SECRET ? 'configured' : 'not_configured',
      environment: process.env.NODE_ENV,
      uptime: process.uptime(),
      memory: {
        rss: `${Math.round(process.memoryUsage().rss / 1024 / 1024)} MB`,
        heapTotal: `${Math.round(process.memoryUsage().heapTotal / 1024 / 1024)} MB`,
        heapUsed: `${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)} MB`,
        external: `${Math.round(process.memoryUsage().external / 1024 / 1024)} MB`,
      },
      timestamp: new Date().toISOString(),
    };

    res.status(200).json({
      success: true,
      health,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Clear cache
// @route   POST /api/v1/admin/clear-cache
// @access  Private/Admin
exports.clearCache = async (req, res, next) => {
  try {
    // In a real app, you would clear Redis cache here
    // This is just a placeholder
    
    res.status(200).json({
      success: true,
      message: 'Cache cleared successfully',
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Backup database
// @route   POST /api/v1/admin/backup
// @access  Private/SuperAdmin
exports.backupDatabase = async (req, res, next) => {
  try {
    // In a real app, you would create a database backup here
    // This is just a placeholder
    
    const backupInfo = {
      timestamp: new Date().toISOString(),
      collections: ['Page', 'Section', 'User', 'Media', 'ContactEnquiry', 'ChatHistory'],
      status: 'backup_initiated',
    };

    res.status(200).json({
      success: true,
      message: 'Database backup initiated',
      backup: backupInfo,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get user activity logs
// @route   GET /api/v1/admin/activity
// @access  Private/Admin
exports.getActivityLogs = async (req, res, next) => {
  try {
    const { page = 1, limit = 50, userId, action } = req.query;
    
    const query = {};
    
    if (userId) {
      query.userId = userId;
    }
    
    if (action) {
      query.action = action;
    }

    const activities = await ActivityLog.find(query)
      .sort('-createdAt')
      .skip((page - 1) * limit)
      .limit(parseInt(limit))
      .populate('userId', 'name email role')
      .populate('targetId');

    const total = await ActivityLog.countDocuments(query);

    res.status(200).json({
      success: true,
      count: activities.length,
      total,
      totalPages: Math.ceil(total / limit),
      currentPage: parseInt(page),
      activities,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Log activity
// @route   POST /api/v1/admin/activity/log
// @access  Private/Admin
exports.logActivity = async (req, res, next) => {
  try {
    const activity = await ActivityLog.create({
      userId: req.user.id,
      ...req.body,
      ipAddress: req.ip,
      userAgent: req.headers['user-agent'],
    });

    res.status(201).json({
      success: true,
      activity,
    });
  } catch (error) {
    next(error);
  }
};