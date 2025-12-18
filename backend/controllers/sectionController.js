const Section = require('../models/Section');
const Page = require('../models/Page');
const { ErrorResponse } = require('../middleware/error');

// @desc    Get all sections for a page
// @route   GET /api/v1/pages/:pageId/sections
// @access  Public
exports.getSections = async (req, res, next) => {
  try {
    const sections = await Section.find({ 
      page: req.params.pageId,
      isEnabled: true 
    }).sort('order');

    res.status(200).json({
      success: true,
      count: sections.length,
      sections,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single section
// @route   GET /api/v1/sections/:id
// @access  Public
exports.getSection = async (req, res, next) => {
  try {
    const section = await Section.findById(req.params.id);

    if (!section) {
      return next(new ErrorResponse('Section not found', 404));
    }

    res.status(200).json({
      success: true,
      section,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Create section (admin only)
// @route   POST /api/v1/pages/:pageId/sections
// @access  Private/Admin
exports.createSection = async (req, res, next) => {
  try {
    // Check if page exists
    const page = await Page.findById(req.params.pageId);
    if (!page) {
      return next(new ErrorResponse('Page not found', 404));
    }

    // Add page reference
    req.body.page = req.params.pageId;

    // Set order if not provided
    if (!req.body.order) {
      const lastSection = await Section.findOne({ page: req.params.pageId })
        .sort('-order')
        .select('order');
      
      req.body.order = lastSection ? lastSection.order + 1 : 1;
    }

    const section = await Section.create(req.body);

    // Add section to page
    page.sections.push(section._id);
    await page.save();

    res.status(201).json({
      success: true,
      section,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update section (admin only)
// @route   PUT /api/v1/sections/:id
// @access  Private/Admin
exports.updateSection = async (req, res, next) => {
  try {
    let section = await Section.findById(req.params.id);

    if (!section) {
      return next(new ErrorResponse('Section not found', 404));
    }

    section = await Section.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      success: true,
      section,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete section (admin only)
// @route   DELETE /api/v1/sections/:id
// @access  Private/Admin
exports.deleteSection = async (req, res, next) => {
  try {
    const section = await Section.findById(req.params.id);

    if (!section) {
      return next(new ErrorResponse('Section not found', 404));
    }

    // Remove section from page
    await Page.findByIdAndUpdate(section.page, {
      $pull: { sections: section._id },
    });

    await section.deleteOne();

    res.status(200).json({
      success: true,
      message: 'Section deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Toggle section visibility
// @route   PUT /api/v1/sections/:id/toggle
// @access  Private/Admin
exports.toggleSection = async (req, res, next) => {
  try {
    const section = await Section.findById(req.params.id);

    if (!section) {
      return next(new ErrorResponse('Section not found', 404));
    }

    section.isEnabled = !section.isEnabled;
    await section.save();

    res.status(200).json({
      success: true,
      section,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Reorder sections
// @route   PUT /api/v1/sections/reorder
// @access  Private/Admin
exports.reorderSections = async (req, res, next) => {
  try {
    const { sections } = req.body;

    const bulkOps = sections.map((section) => ({
      updateOne: {
        filter: { _id: section.id },
        update: { order: section.order },
      },
    }));

    await Section.bulkWrite(bulkOps);

    res.status(200).json({
      success: true,
      message: 'Sections reordered successfully',
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Duplicate section
// @route   POST /api/v1/sections/:id/duplicate
// @access  Private/Admin
exports.duplicateSection = async (req, res, next) => {
  try {
    const originalSection = await Section.findById(req.params.id);

    if (!originalSection) {
      return next(new ErrorResponse('Section not found', 404));
    }

    // Create copy without _id
    const sectionData = originalSection.toObject();
    delete sectionData._id;
    delete sectionData.createdAt;
    delete sectionData.updatedAt;

    // Adjust order
    const lastSection = await Section.findOne({ page: sectionData.page })
      .sort('-order')
      .select('order');
    
    sectionData.order = lastSection ? lastSection.order + 1 : 1;
    sectionData.title = `${sectionData.title} (Copy)`;

    const newSection = await Section.create(sectionData);

    // Add to page
    await Page.findByIdAndUpdate(sectionData.page, {
      $push: { sections: newSection._id },
    });

    res.status(201).json({
      success: true,
      section: newSection,
    });
  } catch (error) {
    next(error);
  }
};