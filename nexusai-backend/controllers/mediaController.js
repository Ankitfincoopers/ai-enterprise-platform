const Media = require('../models/Media');
const { cloudinary, storage } = require('../config/cloudinary');
const multer = require('multer');
const { ErrorResponse } = require('../middleware/error');

// Configure multer
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 50 * 1024 * 1024, // 50MB max
  },
  fileFilter: (req, file, cb) => {
    // Accept images and videos
    if (file.mimetype.startsWith('image') || file.mimetype.startsWith('video')) {
      cb(null, true);
    } else {
      cb(new Error('Only image and video files are allowed'), false);
    }
  },
}).single('file');

// @desc    Upload media
// @route   POST /api/v1/media/upload
// @access  Private/Admin
exports.uploadMedia = async (req, res, next) => {
  try {
    upload(req, res, async (err) => {
      if (err) {
        return next(new ErrorResponse(err.message, 400));
      }

      if (!req.file) {
        return next(new ErrorResponse('Please upload a file', 400));
      }

      // Create media record
      const media = await Media.create({
        filename: req.file.filename,
        originalname: req.file.originalname,
        mimetype: req.file.mimetype,
        size: req.file.size,
        url: req.file.path,
        cloudinaryId: req.file.filename,
        resourceType: req.file.resource_type,
        folder: req.file.folder,
        uploadedBy: req.user.id,
        alt: req.body.alt || '',
        caption: req.body.caption || '',
        tags: req.body.tags ? req.body.tags.split(',') : [],
      });

      // Get dimensions for images
      if (req.file.resource_type === 'image') {
        const result = await cloudinary.api.resource(req.file.filename, {
          resource_type: 'image',
        });
        
        media.dimensions = {
          width: result.width,
          height: result.height,
        };
        
        await media.save();
      }

      res.status(201).json({
        success: true,
        media,
      });
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all media
// @route   GET /api/v1/media
// @access  Private/Admin
exports.getMedia = async (req, res, next) => {
  try {
    const { page = 1, limit = 20, resourceType, tag } = req.query;
    
    const query = {};
    
    if (resourceType) {
      query.resourceType = resourceType;
    }
    
    if (tag) {
      query.tags = tag;
    }

    const media = await Media.find(query)
      .sort('-createdAt')
      .skip((page - 1) * limit)
      .limit(parseInt(limit))
      .populate('uploadedBy', 'name email');

    const total = await Media.countDocuments(query);

    res.status(200).json({
      success: true,
      count: media.length,
      total,
      totalPages: Math.ceil(total / limit),
      currentPage: parseInt(page),
      media,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single media
// @route   GET /api/v1/media/:id
// @access  Private/Admin
exports.getMediaById = async (req, res, next) => {
  try {
    const media = await Media.findById(req.params.id).populate(
      'uploadedBy',
      'name email'
    );

    if (!media) {
      return next(new ErrorResponse('Media not found', 404));
    }

    res.status(200).json({
      success: true,
      media,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update media metadata
// @route   PUT /api/v1/media/:id
// @access  Private/Admin
exports.updateMedia = async (req, res, next) => {
  try {
    const media = await Media.findByIdAndUpdate(
      req.params.id,
      {
        alt: req.body.alt,
        caption: req.body.caption,
        tags: req.body.tags,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!media) {
      return next(new ErrorResponse('Media not found', 404));
    }

    res.status(200).json({
      success: true,
      media,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete media
// @route   DELETE /api/v1/media/:id
// @access  Private/Admin
exports.deleteMedia = async (req, res, next) => {
  try {
    const media = await Media.findById(req.params.id);

    if (!media) {
      return next(new ErrorResponse('Media not found', 404));
    }

    // Delete from Cloudinary
    await cloudinary.uploader.destroy(media.cloudinaryId, {
      resource_type: media.resourceType,
    });

    // Delete from database
    await media.deleteOne();

    res.status(200).json({
      success: true,
      message: 'Media deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get media by tags
// @route   GET /api/v1/media/tags/:tag
// @access  Private/Admin
exports.getMediaByTag = async (req, res, next) => {
  try {
    const media = await Media.find({ tags: req.params.tag }).sort('-createdAt');

    res.status(200).json({
      success: true,
      count: media.length,
      media,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all tags
// @route   GET /api/v1/media/tags
// @access  Private/Admin
exports.getTags = async (req, res, next) => {
  try {
    const tags = await Media.distinct('tags');
    
    res.status(200).json({
      success: true,
      tags: tags.filter(tag => tag), // Remove null/empty tags
    });
  } catch (error) {
    next(error);
  }
};