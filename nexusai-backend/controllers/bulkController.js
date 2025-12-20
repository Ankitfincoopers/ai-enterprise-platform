// controllers/bulkController.js
const Page = require('../models/Page');
const Section = require('../models/Section');
const { ErrorResponse } = require('../middleware/error');

// @desc    Bulk update sections
// @route   PUT /api/v1/bulk/sections
// @access  Private/Admin
exports.bulkUpdateSections = async (req, res, next) => {
  try {
    const { sections, operation } = req.body;
    
    if (!sections || !Array.isArray(sections)) {
      return next(new ErrorResponse('Sections array is required', 400));
    }

    const bulkOps = [];
    const updatedSections = [];

    switch (operation) {
      case 'enable':
        sections.forEach(id => {
          bulkOps.push({
            updateOne: {
              filter: { _id: id },
              update: { isEnabled: true },
            },
          });
        });
        break;
      
      case 'disable':
        sections.forEach(id => {
          bulkOps.push({
            updateOne: {
              filter: { _id: id },
              update: { isEnabled: false },
            },
          });
        });
        break;
      
      case 'delete':
        sections.forEach(id => {
          bulkOps.push({
            deleteOne: {
              filter: { _id: id },
            },
          });
        });
        break;
      
      case 'move':
        if (!req.body.pageId) {
          return next(new ErrorResponse('pageId is required for move operation', 400));
        }
        
        sections.forEach(id => {
          bulkOps.push({
            updateOne: {
              filter: { _id: id },
              update: { page: req.body.pageId },
            },
          });
        });
        break;
      
      default:
        return next(new ErrorResponse('Invalid operation', 400));
    }

    if (bulkOps.length > 0) {
      const result = await Section.bulkWrite(bulkOps);
      
      // Fetch updated sections for response
      if (operation !== 'delete') {
        updatedSections = await Section.find({
          _id: { $in: sections },
        });
      }

      res.status(200).json({
        success: true,
        operation,
        result: {
          matched: result.nMatched,
          modified: result.nModified,
          deleted: result.nDeleted,
        },
        sections: updatedSections,
      });
    }
  } catch (error) {
    next(error);
  }
};

// @desc    Export pages and sections
// @route   GET /api/v1/bulk/export
// @access  Private/Admin
exports.exportContent = async (req, res, next) => {
  try {
    const { type, ids } = req.query;
    
    let data;
    
    switch (type) {
      case 'pages':
        const pages = await Page.find(ids ? { _id: { $in: ids.split(',') } } : {})
          .populate('sections')
          .populate('createdBy', 'name email')
          .populate('updatedBy', 'name email');
        data = pages;
        break;
      
      case 'sections':
        const sections = await Section.find(ids ? { _id: { $in: ids.split(',') } } : {})
          .populate('page', 'slug title')
          .sort('order');
        data = sections;
        break;
      
      case 'all':
        const allPages = await Page.find().populate('sections');
        const allSections = await Section.find();
        data = {
          pages: allPages,
          sections: allSections,
          exportDate: new Date().toISOString(),
          total: {
            pages: allPages.length,
            sections: allSections.length,
          },
        };
        break;
      
      default:
        return next(new ErrorResponse('Invalid export type', 400));
    }

    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Content-Disposition', `attachment; filename=${type}-export-${Date.now()}.json`);
    
    res.status(200).send(JSON.stringify(data, null, 2));
  } catch (error) {
    next(error);
  }
};

// @desc    Import content
// @route   POST /api/v1/bulk/import
// @access  Private/Admin
exports.importContent = async (req, res, next) => {
  try {
    const { data, type, strategy } = req.body;
    
    if (!data || !type) {
      return next(new ErrorResponse('Data and type are required', 400));
    }

    let result;
    let message = '';
    
    switch (type) {
      case 'pages':
        if (strategy === 'replace') {
          await Page.deleteMany({});
          await Section.deleteMany({});
        }
        
        result = await Page.insertMany(data);
        message = `Imported ${result.length} pages`;
        break;
      
      case 'sections':
        if (strategy === 'replace') {
          await Section.deleteMany({});
        }
        
        result = await Section.insertMany(data);
        message = `Imported ${result.length} sections`;
        break;
      
      default:
        return next(new ErrorResponse('Invalid import type', 400));
    }

    res.status(200).json({
      success: true,
      message,
      count: result.length,
      result,
    });
  } catch (error) {
    next(error);
  }
};