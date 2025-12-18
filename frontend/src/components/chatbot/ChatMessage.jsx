import React from 'react';
import { Box, Typography, Avatar, Paper } from '@mui/material';
import { SmartToy as BotIcon, Person as PersonIcon } from '@mui/icons-material';

const ChatMessage = ({ message, isLast }) => {
  const isUser = message.role === 'user';

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: isUser ? 'flex-end' : 'flex-start',
        mb: 2,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: isUser ? 'row-reverse' : 'row',
          alignItems: 'flex-start',
          gap: 1,
          maxWidth: '80%',
        }}
      >
        {/* Avatar */}
        <Avatar
          sx={{
            width: 32,
            height: 32,
            bgcolor: isUser ? 'primary.main' : 'secondary.main',
          }}
        >
          {isUser ? <PersonIcon fontSize="small" /> : <BotIcon fontSize="small" />}
        </Avatar>

        {/* Message */}
        <Paper
          elevation={1}
          sx={{
            p: 2,
            backgroundColor: isUser ? 'primary.light' : 'grey.100',
            color: isUser ? 'white' : 'text.primary',
            borderRadius: 2,
            borderTopRightRadius: isUser ? 0 : 2,
            borderTopLeftRadius: isUser ? 2 : 0,
            maxWidth: '100%',
            wordBreak: 'break-word',
          }}
        >
          <Typography variant="body2">
            {message.content}
          </Typography>
          
          {/* Timestamp */}
          <Typography
            variant="caption"
            sx={{
              display: 'block',
              mt: 1,
              opacity: 0.7,
              textAlign: isUser ? 'right' : 'left',
            }}
          >
            {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default ChatMessage;