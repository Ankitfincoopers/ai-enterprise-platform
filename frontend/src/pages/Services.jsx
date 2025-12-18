import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  CheckCircle as CheckIcon,
  Analytics as AnalyticsIcon,
  Cloud as CloudIcon,
  Security as SecurityIcon,
  Code as CodeIcon,
  SupportAgent as SupportIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const Services = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const services = [
    {
      icon: <AnalyticsIcon sx={{ fontSize: 40 }} />,
      title: 'AI Analytics',
      description: 'Advanced analytics powered by machine learning algorithms.',
      features: [
        'Real-time insights',
        'Predictive analytics',
        'Custom dashboards',
        'Data visualization',
      ],
    },
    {
      icon: <CloudIcon sx={{ fontSize: 40 }} />,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure for modern businesses.',
      features: [
        'Auto-scaling',
        'Load balancing',
        'Database management',
        'CDN integration',
      ],
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 40 }} />,
      title: 'Security Services',
      description: 'Enterprise-grade security with compliance certification.',
      features: [
        'End-to-end encryption',
        'DDoS protection',
        'Security audits',
        'Compliance monitoring',
      ],
    },
    {
      icon: <CodeIcon sx={{ fontSize: 40 }} />,
      title: 'Custom Development',
      description: 'Tailored software solutions for unique business needs.',
      features: [
        'API development',
        'System integration',
        'Mobile apps',
        'Legacy migration',
      ],
    },
    {
      icon: <SupportIcon sx={{ fontSize: 40 }} />,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and maintenance.',
      features: [
        'Priority support',
        'SLA guarantee',
        'Proactive monitoring',
        'Regular updates',
      ],
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
          color: 'white',
          py: { xs: 8, md: 12 },
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h1"
              gutterBottom
              sx={{
                fontSize: isMobile ? '2.5rem' : '3.5rem',
                fontWeight: 700,
                textAlign: 'center',
              }}
            >
              Our Services
            </Typography>
            <Typography
              variant="h5"
              sx={{
                textAlign: 'center',
                maxWidth: 800,
                mx: 'auto',
                opacity: 0.9,
                fontWeight: 400,
              }}
            >
              Comprehensive AI-powered solutions for every business need
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Services Grid */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    border: 1,
                    borderColor: 'divider',
                    '&:hover': {
                      borderColor: 'primary.main',
                      boxShadow: '0 20px 60px rgba(16, 185, 129, 0.1)',
                    },
                  }}
                >
                  <CardContent sx={{ flexGrow: 1, p: 4 }}>
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        backgroundColor: 'primary.light',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        mb: 3,
                      }}
                    >
                      {service.icon}
                    </Box>
                    <Typography variant="h5" gutterBottom fontWeight={600}>
                      {service.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph>
                      {service.description}
                    </Typography>
                    <List dense disablePadding>
                      {service.features.map((feature, idx) => (
                        <ListItem key={idx} disableGutters disablePadding sx={{ py: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: 32 }}>
                            <CheckIcon sx={{ color: 'primary.main', fontSize: 20 }} />
                          </ListItemIcon>
                          <ListItemText
                            primary={feature}
                            primaryTypographyProps={{ variant: 'body2' }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                  <CardActions sx={{ p: 3, pt: 0 }}>
                    <Button
                      variant="contained"
                      fullWidth
                      sx={{
                        backgroundColor: 'primary.main',
                        '&:hover': {
                          backgroundColor: 'primary.dark',
                        },
                      }}
                    >
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA Section */}
      <Box
        sx={{
          backgroundColor: 'primary.light',
          py: 8,
          textAlign: 'center',
          color: 'white',
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h2" gutterBottom fontWeight={600}>
            Ready to Get Started?
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
            Contact us for a free consultation and custom quote
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="contained"
                size="large"
                href="/contact"
                sx={{
                  backgroundColor: 'white',
                  color: 'primary.main',
                  '&:hover': {
                    backgroundColor: 'grey.100',
                  },
                }}
              >
                Get a Quote
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outlined"
                size="large"
                href="/contact"
                sx={{
                  borderColor: 'white',
                  color: 'white',
                  '&:hover': {
                    borderColor: 'white',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                  },
                }}
              >
                Schedule Call
              </Button>
            </motion.div>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Services;