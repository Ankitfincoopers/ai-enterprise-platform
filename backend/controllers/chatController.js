const ChatHistory = require('../models/ChatHistory');
const groqService = require('../utils/groqService');
const { ErrorResponse } = require('../middleware/error');

// @desc    Start new chat session
// @route   POST /api/v1/chat/sessions
// @access  Private
exports.createSession = async (req, res, next) => {
  try {
    const sessionId = `chat_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    const session = await ChatHistory.create({
      sessionId,
      userId: req.user?.id,
      title: 'New Chat',
      messages: [],
    });

    res.status(201).json({
      success: true,
      session: {
        id: session._id,
        sessionId: session.sessionId,
        title: session.title,
        createdAt: session.createdAt,
      },
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get user chat sessions
// @route   GET /api/v1/chat/sessions
// @access  Private
exports.getSessions = async (req, res, next) => {
  try {
    const query = req.user ? { userId: req.user.id } : {};
    
    const sessions = await ChatHistory.find(query)
      .select('sessionId title createdAt updatedAt')
      .sort('-updatedAt');

    res.status(200).json({
      success: true,
      sessions,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get chat session messages
// @route   GET /api/v1/chat/sessions/:sessionId/messages
// @access  Private
exports.getMessages = async (req, res, next) => {
  try {
    const session = await ChatHistory.findOne({ 
      sessionId: req.params.sessionId 
    });

    if (!session) {
      return next(new ErrorResponse('Chat session not found', 404));
    }

    // Check authorization
    if (session.userId && req.user && !session.userId.equals(req.user.id)) {
      return next(new ErrorResponse('Not authorized', 403));
    }

    res.status(200).json({
      success: true,
      messages: session.messages,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Send message to AI
// @route   POST /api/v1/chat/sessions/:sessionId/messages
// @access  Private
exports.sendMessage = async (req, res, next) => {
  try {
    const { message } = req.body;
    
    if (!message || message.trim() === '') {
      return next(new ErrorResponse('Message is required', 400));
    }

    let session = await ChatHistory.findOne({ 
      sessionId: req.params.sessionId 
    });

    if (!session) {
      // Create new session if not exists
      const sessionId = req.params.sessionId;
      session = await ChatHistory.create({
        sessionId,
        userId: req.user?.id,
        title: message.substring(0, 50) + (message.length > 50 ? '...' : ''),
        messages: [],
      });
    }

    // Add user message
    session.messages.push({
      role: 'user',
      content: message.trim(),
    });

    // Update title if first message
    if (session.messages.length === 1) {
      session.title = message.substring(0, 50) + (message.length > 50 ? '...' : '');
    }

    await session.save();

    // Prepare messages for AI
    const messages = session.messages.map(msg => ({
      role: msg.role,
      content: msg.content,
    }));

    // Get AI response
    const aiResponse = await groqService.createChatCompletion(messages);

    // Add AI response
    session.messages.push({
      role: 'assistant',
      content: aiResponse.content,
      metadata: {
        model: aiResponse.model,
        tokens: aiResponse.usage,
      },
    });

    // Update tokens
    session.tokens = {
      prompt: aiResponse.usage.prompt_tokens,
      completion: aiResponse.usage.completion_tokens,
      total: aiResponse.usage.total_tokens,
    };

    await session.save();

    res.status(200).json({
      success: true,
      message: aiResponse.content,
      session: {
        id: session._id,
        sessionId: session.sessionId,
        title: session.title,
      },
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update chat session title
// @route   PUT /api/v1/chat/sessions/:sessionId/title
// @access  Private
exports.updateTitle = async (req, res, next) => {
  try {
    const session = await ChatHistory.findOneAndUpdate(
      { sessionId: req.params.sessionId },
      { title: req.body.title },
      { new: true }
    );

    if (!session) {
      return next(new ErrorResponse('Chat session not found', 404));
    }

    res.status(200).json({
      success: true,
      session: {
        id: session._id,
        sessionId: session.sessionId,
        title: session.title,
      },
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete chat session
// @route   DELETE /api/v1/chat/sessions/:sessionId
// @access  Private
exports.deleteSession = async (req, res, next) => {
  try {
    const session = await ChatHistory.findOneAndDelete({ 
      sessionId: req.params.sessionId 
    });

    if (!session) {
      return next(new ErrorResponse('Chat session not found', 404));
    }

    res.status(200).json({
      success: true,
      message: 'Chat session deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get chat statistics (admin only)
// @route   GET /api/v1/chat/stats
// @access  Private/Admin
exports.getChatStats = async (req, res, next) => {
  try {
    const totalSessions = await ChatHistory.countDocuments();
    const totalMessages = await ChatHistory.aggregate([
      {
        $project: {
          messageCount: { $size: '$messages' },
        },
      },
      {
        $group: {
          _id: null,
          total: { $sum: '$messageCount' },
        },
      },
    ]);

    const activeSessions = await ChatHistory.countDocuments({
      updatedAt: { $gte: new Date(Date.now() - 24 * 60 * 60 * 1000) },
    });

    res.status(200).json({
      success: true,
      stats: {
        totalSessions,
        totalMessages: totalMessages[0]?.total || 0,
        activeSessions,
      },
    });
  } catch (error) {
    next(error);
  }
};