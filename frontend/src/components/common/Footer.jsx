import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
} from '@mui/material';
import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
  Email as EmailIcon,
} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'background.paper',
        borderTop: 1,
        borderColor: 'divider',
        mt: 'auto',
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 2 }}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  background: 'linear-gradient(135deg, #10B981 0%, #3B82F6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                NexusAI
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" paragraph>
              Transforming businesses with cutting-edge AI solutions.
              Enterprise-grade SaaS platform for modern organizations.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
              <IconButton size="small" color="primary">
                <FacebookIcon />
              </IconButton>
              <IconButton size="small" color="primary">
                <TwitterIcon />
              </IconButton>
              <IconButton size="small" color="primary">
                <LinkedInIcon />
              </IconButton>
              <IconButton size="small" color="primary">
                <GitHubIcon />
              </IconButton>
              <IconButton size="small" color="primary">
                <EmailIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={6} md={2}>
            <Typography variant="h6" gutterBottom fontWeight={600}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {['Home', 'About', 'Services', 'Team', 'Contact'].map((item) => (
                <Link
                  key={item}
                  component={RouterLink}
                  to={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
                  color="text.secondary"
                  sx={{
                    textDecoration: 'none',
                    '&:hover': {
                      color: 'primary.main',
                    },
                  }}
                >
                  {item}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Resources */}
          <Grid item xs={6} md={2}>
            <Typography variant="h6" gutterBottom fontWeight={600}>
              Resources
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {['Documentation', 'API Reference', 'Blog', 'Support', 'Community'].map((item) => (
                <Link
                  key={item}
                  href="#"
                  color="text.secondary"
                  sx={{
                    textDecoration: 'none',
                    '&:hover': {
                      color: 'primary.main',
                    },
                  }}
                >
                  {item}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Contact */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom fontWeight={600}>
              Contact Us
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Typography variant="body2" color="text.secondary">
                <strong>Email:</strong> contact@enterpriseai.com
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Phone:</strong> +1 (555) 123-4567
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Address:</strong> 123 AI Street, Tech City, TC 10001
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        {/* Copyright */}
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Enterprise AI. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3, mt: { xs: 2, sm: 0 } }}>
            <Link href="#" color="text.secondary" variant="body2" sx={{ textDecoration: 'none' }}>
              Privacy Policy
            </Link>
            <Link href="#" color="text.secondary" variant="body2" sx={{ textDecoration: 'none' }}>
              Terms of Service
            </Link>
            <Link href="#" color="text.secondary" variant="body2" sx={{ textDecoration: 'none' }}>
              Cookie Policy
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;