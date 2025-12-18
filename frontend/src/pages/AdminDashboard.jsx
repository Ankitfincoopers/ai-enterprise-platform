import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';

const AdminDashboard = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Paper
            sx={{
              p: 6,
              textAlign: 'center',
              border: 1,
              borderColor: 'divider',
            }}
          >
            <Typography
              variant="h2"
              gutterBottom
              fontWeight={600}
              sx={{
                background: 'linear-gradient(135deg, #10B981 0%, #3B82F6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Admin Dashboard
            </Typography>
            <Typography variant="h5" color="text.secondary" paragraph>
              Coming Soon
            </Typography>
            <Typography variant="body1" color="text.secondary">
              The admin dashboard with full CMS functionality is under development.
              You'll be able to manage pages, sections, media, and users from here.
            </Typography>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default AdminDashboard;