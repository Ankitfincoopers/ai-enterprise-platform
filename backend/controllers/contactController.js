const ContactEnquiry = require('../models/ContactEnquiry');
const { ErrorResponse } = require('../middleware/error');

// @desc    Submit contact enquiry
// @route   POST /api/v1/contact
// @access  Public
exports.submitEnquiry = async (req, res, next) => {
  try {
    const enquiry = await ContactEnquiry.create({
      ...req.body,
      ipAddress: req.ip,
      userAgent: req.headers['user-agent'],
    });

    res.status(201).json({
      success: true,
      message: 'Enquiry submitted successfully',
      enquiry,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all enquiries (admin only)
// @route   GET /api/v1/contact
// @access  Private/Admin
exports.getEnquiries = async (req, res, next) => {
  try {
    const { page = 1, limit = 20, status } = req.query;
    
    const query = {};
    
    if (status) {
      query.status = status;
    }

    const enquiries = await ContactEnquiry.find(query)
      .sort('-createdAt')
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    const total = await ContactEnquiry.countDocuments(query);

    res.status(200).json({
      success: true,
      count: enquiries.length,
      total,
      totalPages: Math.ceil(total / limit),
      currentPage: parseInt(page),
      enquiries,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single enquiry (admin only)
// @route   GET /api/v1/contact/:id
// @access  Private/Admin
exports.getEnquiry = async (req, res, next) => {
  try {
    const enquiry = await ContactEnquiry.findById(req.params.id);

    if (!enquiry) {
      return next(new ErrorResponse('Enquiry not found', 404));
    }

    res.status(200).json({
      success: true,
      enquiry,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update enquiry status (admin only)
// @route   PUT /api/v1/contact/:id
// @access  Private/Admin
exports.updateEnquiry = async (req, res, next) => {
  try {
    const enquiry = await ContactEnquiry.findByIdAndUpdate(
      req.params.id,
      {
        status: req.body.status,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!enquiry) {
      return next(new ErrorResponse('Enquiry not found', 404));
    }

    res.status(200).json({
      success: true,
      enquiry,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Add note to enquiry (admin only)
// @route   POST /api/v1/contact/:id/notes
// @access  Private/Admin
exports.addNote = async (req, res, next) => {
  try {
    const enquiry = await ContactEnquiry.findById(req.params.id);

    if (!enquiry) {
      return next(new ErrorResponse('Enquiry not found', 404));
    }

    enquiry.notes.push({
      content: req.body.content,
      createdBy: req.user.id,
    });

    await enquiry.save();

    res.status(200).json({
      success: true,
      enquiry,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get enquiry statistics (admin only)
// @route   GET /api/v1/contact/stats
// @access  Private/Admin
exports.getStats = async (req, res, next) => {
  try {
    const total = await ContactEnquiry.countDocuments();
    const newCount = await ContactEnquiry.countDocuments({ status: 'new' });
    const readCount = await ContactEnquiry.countDocuments({ status: 'read' });
    const repliedCount = await ContactEnquiry.countDocuments({ status: 'replied' });

    // Daily stats for last 7 days
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    const dailyStats = await ContactEnquiry.aggregate([
      {
        $match: {
          createdAt: { $gte: sevenDaysAgo },
        },
      },
      {
        $group: {
          _id: {
            $dateToString: { format: '%Y-%m-%d', date: '$createdAt' },
          },
          count: { $sum: 1 },
        },
      },
      {
        $sort: { _id: 1 },
      },
    ]);

    res.status(200).json({
      success: true,
      stats: {
        total,
        new: newCount,
        read: readCount,
        replied: repliedCount,
        daily: dailyStats,
      },
    });
  } catch (error) {
    next(error);
  }
};