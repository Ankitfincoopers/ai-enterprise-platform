import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Chip,
  Avatar,
  AvatarGroup,
  useTheme,
  useMediaQuery,
  Button,
} from '@mui/material';
import {
  LinkedIn as LinkedInIcon,
  Twitter as TwitterIcon,
  GitHub as GitHubIcon,
  Email as EmailIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { pageAPI } from '../services/api';
import LoadingSpinner from '../components/common/LoadingSpinner';
import AnimatedSection from '../components/ui/AnimatedSection';

const Team = () => {
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    fetchPageData();
  }, []);

  const fetchPageData = async () => {
    try {
      const response = await pageAPI.getPage('team');
      setPage(response.data.page);
    } catch (error) {
      console.error('Failed to load team page:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  const teamSection = page?.sections?.find(section => section.type === 'team');
  const teamMembers = teamSection?.data?.members || [];

  // Sample team data (in production, this would come from the CMS)
  const defaultTeamMembers = [
    {
      id: 1,
      name: 'Alex Johnson',
      role: 'CEO & Founder',
      bio: 'Former Google AI researcher with 15+ years in machine learning and enterprise software.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      skills: ['AI/ML', 'Leadership', 'Strategy'],
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        email: '#',
      },
    },
    {
      id: 2,
      name: 'Sarah Williams',
      role: 'CTO',
      bio: 'Ex-Microsoft architect specializing in scalable cloud infrastructure and distributed systems.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b786d4d6?w-400&h=400&fit=crop',
      skills: ['Cloud', 'DevOps', 'Security'],
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        email: '#',
      },
    },
    {
      id: 3,
      name: 'Michael Chen',
      role: 'Head of Product',
      bio: 'Product visionary with experience at Stripe and Airbnb, focused on user-centric design.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      skills: ['Product', 'UX', 'Growth'],
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        email: '#',
      },
    },
    {
      id: 4,
      name: 'Emma Rodriguez',
      role: 'Lead Engineer',
      bio: 'Full-stack developer with expertise in React, Node.js, and microservices architecture.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop',
      skills: ['React', 'Node.js', 'AWS'],
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        email: '#',
      },
    },
  ];

  const members = teamMembers.length > 0 ? teamMembers : defaultTeamMembers;

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundColor: 'primary.main',
          background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
          color: 'white',
          py: 10,
        }}
      >
        <Container maxWidth="lg">
          <AnimatedSection>
            <Box sx={{ textAlign: 'center', maxWidth: 800, mx: 'auto' }}>
              <Typography
                variant="h1"
                gutterBottom
                sx={{
                  fontSize: isMobile ? '2.5rem' : '3.5rem',
                  fontWeight: 700,
                }}
              >
                Meet Our Team
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  opacity: 0.9,
                  fontWeight: 400,
                }}
              >
                The brilliant minds behind our success
              </Typography>
            </Box>
          </AnimatedSection>
        </Container>
      </Box>

      {/* Team Grid */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {members.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={member.id}>
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
                    transition: 'transform 0.3s',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                    },
                  }}
                >
                  <Box sx={{ position: 'relative' }}>
                    <CardMedia
                      component="img"
                      height="250"
                      image={member.image}
                      alt={member.name}
                      sx={{
                        objectFit: 'cover',
                        filter: 'grayscale(20%)',
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                        p: 2,
                        color: 'white',
                      }}
                    >
                      <Typography variant="h6" fontWeight={600}>
                        {member.name}
                      </Typography>
                      <Typography variant="body2">
                        {member.role}
                      </Typography>
                    </Box>
                  </Box>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      paragraph
                      sx={{
                        mb: 2,
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {member.bio}
                    </Typography>
                    <Box sx={{ mb: 2 }}>
                      {member.skills?.map((skill, skillIndex) => (
                        <Chip
                          key={skillIndex}
                          label={skill}
                          size="small"
                          sx={{
                            mr: 1,
                            mb: 1,
                            backgroundColor: 'primary.light',
                            color: 'white',
                            fontSize: '0.75rem',
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                  <Box
                    sx={{
                      p: 2,
                      display: 'flex',
                      justifyContent: 'center',
                      gap: 1,
                      borderTop: 1,
                      borderColor: 'divider',
                    }}
                  >
                    <IconButton
                      size="small"
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LinkedInIcon fontSize="small" />
                    </IconButton>
                    <IconButton
                      size="small"
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <TwitterIcon fontSize="small" />
                    </IconButton>
                    <IconButton
                      size="small"
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GitHubIcon fontSize="small" />
                    </IconButton>
                    <IconButton
                      size="small"
                      href={`mailto:${member.social.email}`}
                    >
                      <EmailIcon fontSize="small" />
                    </IconButton>
                  </Box>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Stats Section */}
        <AnimatedSection>
          <Box sx={{ mt: 10, textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom fontWeight={600}>
              Our Impact in Numbers
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ maxWidth: 600, mx: 'auto', mb: 6 }}
            >
              We're proud of what we've accomplished together
            </Typography>
            <Grid container spacing={4}>
              {[
                { label: 'Team Members', value: '50+' },
                { label: 'Countries', value: '15' },
                { label: 'Projects', value: '200+' },
                { label: 'Years Experience', value: '10+' },
              ].map((stat, index) => (
                <Grid item xs={6} md={3} key={index}>
                  <Box>
                    <Typography
                      variant="h2"
                      color="primary.main"
                      fontWeight={700}
                      gutterBottom
                    >
                      {stat.value}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      {stat.label}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection>
          <Box
            sx={{
              mt: 10,
              backgroundColor: 'primary.light',
              borderRadius: 4,
              p: 6,
              textAlign: 'center',
              color: 'white',
            }}
          >
            <Typography variant="h4" gutterBottom fontWeight={600}>
              Join Our Team
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}>
              We're always looking for talented individuals to join our growing team.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="contained"
                  size="large"
                  href="/careers"
                  sx={{
                    backgroundColor: 'white',
                    color: 'primary.main',
                    '&:hover': {
                      backgroundColor: 'grey.100',
                    },
                  }}
                >
                  View Open Positions
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
                  Contact Us
                </Button>
              </motion.div>
            </Box>
          </Box>
        </AnimatedSection>
      </Container>
    </Box>
  );
};

export default Team;