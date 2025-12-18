import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  Paper,
  IconButton,
  Typography,
  TextField,
  Button,
  Avatar,
  Fade,
  Slide,
  CircularProgress,
} from '@mui/material';
import {
  Chat as ChatIcon,
  Close as CloseIcon,
  Send as SendIcon,
  SmartToy as BotIcon,
} from '@mui/icons-material';
import { chatAPI } from '../../services/api';
import ChatMessage from './ChatMessage';
import { motion, AnimatePresence } from 'framer-motion';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [sessionId, setSessionId] = useState('');
  const messagesEndRef = useRef(null);

  // Initialize chat session
  useEffect(() => {
    const initializeChat = async () => {
      try {
        const response = await chatAPI.createSession();
        setSessionId(response.data.session.sessionId);
      } catch (error) {
        console.error('Failed to initialize chat:', error);
      }
    };

    if (isOpen && !sessionId) {
      initializeChat();
    }
  }, [isOpen, sessionId]);

  // Scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setLoading(true);

    try {
      const response = await chatAPI.sendMessage(sessionId, userMessage);
      setMessages(prev => [...prev, { role: 'assistant', content: response.data.message }]);
    } catch (error) {
      console.error('Failed to send message:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Sorry, I encountered an error. Please try again.' 
      }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <Box
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          zIndex: 1000,
        }}
      >
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <IconButton
            onClick={() => setIsOpen(!isOpen)}
            sx={{
              backgroundColor: 'primary.main',
              color: 'white',
              width: 60,
              height: 60,
              boxShadow: 3,
              '&:hover': {
                backgroundColor: 'primary.dark',
                transform: 'scale(1.1)',
              },
              transition: 'all 0.2s',
            }}
          >
            {isOpen ? <CloseIcon /> : <ChatIcon />}
          </IconButton>
        </motion.div>
      </Box>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <Slide direction="up" in={isOpen} mountOnEnter unmountOnExit>
            <Paper
              elevation={24}
              sx={{
                position: 'fixed',
                bottom: 100,
                right: 24,
                width: 380,
                height: 500,
                zIndex: 999,
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 2,
                overflow: 'hidden',
              }}
            >
              {/* Header */}
              <Box
                sx={{
                  backgroundColor: 'primary.main',
                  color: 'white',
                  p: 2,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <Avatar sx={{ bgcolor: 'white', color: 'primary.main' }}>
                  <BotIcon />
                </Avatar>
                <Box>
                  <Typography variant="subtitle1" fontWeight={600}>
                    AI Assistant
                  </Typography>
                  <Typography variant="caption">
                    Powered by Groq & Llama 3.3
                  </Typography>
                </Box>
                <IconButton
                  size="small"
                  sx={{ color: 'white', ml: 'auto' }}
                  onClick={() => setIsOpen(false)}
                >
                  <CloseIcon />
                </IconButton>
              </Box>

              {/* Messages */}
              <Box
                sx={{
                  flex: 1,
                  overflow: 'auto',
                  p: 2,
                  backgroundColor: 'background.default',
                }}
              >
                {messages.length === 0 ? (
                  <Box
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                      color: 'text.secondary',
                    }}
                  >
                    <BotIcon sx={{ fontSize: 60, mb: 2, color: 'primary.light' }} />
                    <Typography variant="h6" gutterBottom>
                      How can I help you today?
                    </Typography>
                    <Typography variant="body2">
                      Ask me anything about our services, pricing, or features.
                    </Typography>
                  </Box>
                ) : (
                  <>
                    {messages.map((message, index) => (
                      <ChatMessage
                        key={index}
                        message={message}
                        isLast={index === messages.length - 1}
                      />
                    ))}
                    {loading && (
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, p: 2 }}>
                        <CircularProgress size={20} />
                        <Typography variant="body2" color="text.secondary">
                          Thinking...
                        </Typography>
                      </Box>
                    )}
                    <div ref={messagesEndRef} />
                  </>
                )}
              </Box>

              {/* Input */}
              <Box sx={{ p: 2, borderTop: 1, borderColor: 'divider' }}>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    size="small"
                    placeholder="Type your message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    disabled={loading}
                    multiline
                    maxRows={3}
                  />
                  <Button
                    variant="contained"
                    onClick={handleSend}
                    disabled={!input.trim() || loading}
                    sx={{ minWidth: 'auto' }}
                  >
                    <SendIcon />
                  </Button>
                </Box>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ display: 'block', mt: 1, textAlign: 'center' }}
                >
                  Press Enter to send • Shift + Enter for new line
                </Typography>
              </Box>
            </Paper>
          </Slide>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;