const Page = require('../models/Page');
const Section = require('../models/Section');
const { ErrorResponse } = require('../middleware/error');

// @desc    Get all pages
// @route   GET /api/v1/pages
// @access  Public
exports.getPages = async (req, res, next) => {
  try {
    const pages = await Page.find({ isPublished: true })
      .sort('order')
      .populate({
        path: 'sections',
        match: { isEnabled: true },
        options: { sort: { order: 1 } },
      });

    res.status(200).json({
      success: true,
      count: pages.length,
      pages,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single page by slug
// @route   GET /api/v1/pages/:slug
// @access  Public
exports.getPage = async (req, res, next) => {
  try {
    const page = await Page.findOne({ slug: req.params.slug })
      .populate({
        path: 'sections',
        match: { isEnabled: true },
        options: { sort: { order: 1 } },
      });

    if (!page) {
      return next(new ErrorResponse('Page not found', 404));
    }

    // Check if page is protected
    if (page.isProtected && (!req.user || req.user.role === 'user')) {
      return next(new ErrorResponse('Not authorized to access this page', 401));
    }

    res.status(200).json({
      success: true,
      page,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Create page (admin only)
// @route   POST /api/v1/pages
// @access  Private/Admin
exports.createPage = async (req, res, next) => {
  try {
    // Add createdBy user
    req.body.createdBy = req.user.id;
    req.body.updatedBy = req.user.id;

    const page = await Page.create(req.body);

    res.status(201).json({
      success: true,
      page,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update page (admin only)
// @route   PUT /api/v1/pages/:id
// @access  Private/Admin
exports.updatePage = async (req, res, next) => {
  try {
    let page = await Page.findById(req.params.id);

    if (!page) {
      return next(new ErrorResponse('Page not found', 404));
    }

    // Add updatedBy user
    req.body.updatedBy = req.user.id;

    page = await Page.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      success: true,
      page,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete page (admin only)
// @route   DELETE /api/v1/pages/:id
// @access  Private/Admin
exports.deletePage = async (req, res, next) => {
  try {
    const page = await Page.findById(req.params.id);

    if (!page) {
      return next(new ErrorResponse('Page not found', 404));
    }

    // Delete associated sections
    await Section.deleteMany({ page: page._id });

    await page.deleteOne();

    res.status(200).json({
      success: true,
      message: 'Page deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get page with all sections (admin only)
// @route   GET /api/v1/pages/:id/full
// @access  Private/Admin
exports.getPageFull = async (req, res, next) => {
  try {
    const page = await Page.findById(req.params.id).populate({
      path: 'sections',
      options: { sort: { order: 1 } },
    });

    if (!page) {
      return next(new ErrorResponse('Page not found', 404));
    }

    res.status(200).json({
      success: true,
      page,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Reorder pages
// @route   PUT /api/v1/pages/reorder
// @access  Private/Admin
exports.reorderPages = async (req, res, next) => {
  try {
    const { pages } = req.body;

    const bulkOps = pages.map((page) => ({
      updateOne: {
        filter: { _id: page.id },
        update: { order: page.order },
      },
    }));

    await Page.bulkWrite(bulkOps);

    res.status(200).json({
      success: true,
      message: 'Pages reordered successfully',
    });
  } catch (error) {
    next(error);
  }
};