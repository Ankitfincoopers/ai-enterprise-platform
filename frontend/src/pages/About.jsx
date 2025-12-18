import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Security as SecurityIcon,
  Speed as SpeedIcon,
  Scale as ScaleIcon,
  Group as GroupIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const values = [
    {
      icon: <SecurityIcon sx={{ fontSize: 40 }} />,
      title: 'Security First',
      description: 'We prioritize data security and privacy above all else.',
    },
    {
      icon: <SpeedIcon sx={{ fontSize: 40 }} />,
      title: 'Performance',
      description: 'Lightning-fast solutions that never compromise on speed.',
    },
    {
      icon: <ScaleIcon sx={{ fontSize: 40 }} />,
      title: 'Scalability',
      description: 'Solutions that grow with your business needs.',
    },
    {
      icon: <GroupIcon sx={{ fontSize: 40 }} />,
      title: 'Teamwork',
      description: 'Collaboration and excellence in everything we do.',
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
              About Us
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
              Building the future of enterprise technology with AI-powered solutions
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Mission Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Typography variant="h2" gutterBottom fontWeight={600}>
                Our Mission
              </Typography>
              <Typography variant="h5" color="primary" gutterBottom>
                Empowering businesses through intelligent technology
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                We believe that every business, regardless of size, should have access to 
                enterprise-grade AI solutions. Our mission is to democratize artificial 
                intelligence and make it accessible, affordable, and easy to use.
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Founded in 2023, we've helped hundreds of companies transform their 
                operations with our cutting-edge platform. From startups to Fortune 500 
                companies, our solutions drive real business value.
              </Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Box
                sx={{
                  borderRadius: 4,
                  overflow: 'hidden',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                  alt="Our Team"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                  }}
                />
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Values Section */}
      <Box sx={{ backgroundColor: 'background.paper', py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            gutterBottom
            fontWeight={600}
            sx={{ textAlign: 'center', mb: 6 }}
          >
            Our Values
          </Typography>
          <Grid container spacing={4}>
            {values.map((value, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      p: 3,
                      textAlign: 'center',
                      border: 1,
                      borderColor: 'divider',
                      '&:hover': {
                        borderColor: 'primary.main',
                        boxShadow: '0 10px 40px rgba(16, 185, 129, 0.1)',
                      },
                    }}
                  >
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
                        mx: 'auto',
                        mb: 3,
                      }}
                    >
                      {value.icon}
                    </Box>
                    <Typography variant="h6" gutterBottom fontWeight={600}>
                      {value.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {value.description}
                    </Typography>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Stats Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4} sx={{ textAlign: 'center' }}>
          {[
            { number: '500+', label: 'Clients Worldwide' },
            { number: '99.9%', label: 'Uptime' },
            { number: '24/7', label: 'Support' },
            { number: '50+', label: 'Team Members' },
          ].map((stat, index) => (
            <Grid item xs={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Typography
                  variant="h2"
                  color="primary.main"
                  fontWeight={700}
                  gutterBottom
                >
                  {stat.number}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  {stat.label}
                </Typography>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default About;