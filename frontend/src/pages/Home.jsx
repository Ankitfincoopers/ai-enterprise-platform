// import React, { useEffect, useState } from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Button,
//   Grid,
//   Card,
//   CardContent,
//   CardMedia,
//   IconButton,
//   useTheme,
//   useMediaQuery,
// } from '@mui/material';
// import {
//   PlayArrow as PlayIcon,
//   ArrowForward as ArrowIcon,
//   Shield as ShieldIcon,
//   Speed as SpeedIcon,
//   Cloud as CloudIcon,
// } from '@mui/icons-material';
// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';

// const Home = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

//   const features = [
//     {
//       icon: <ShieldIcon sx={{ fontSize: 40 }} />,
//       title: 'Enterprise Security',
//       description: 'Bank-grade security with end-to-end encryption and compliance',
//     },
//     {
//       icon: <SpeedIcon sx={{ fontSize: 40 }} />,
//       title: 'High Performance',
//       description: 'Lightning-fast processing with 99.9% uptime guarantee',
//     },
//     {
//       icon: <CloudIcon sx={{ fontSize: 40 }} />,
//       title: 'Scalable Cloud',
//       description: 'Grow seamlessly with our cloud-native infrastructure',
//     },
//   ];

//   return (
//     <Box>
//       {/* Hero Section */}
//       <Box
//         sx={{
//           background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
//           color: 'white',
//           py: { xs: 8, md: 12 },
//           position: 'relative',
//           overflow: 'hidden',
//         }}
//       >
//         <Container maxWidth="lg">
//           <Grid container spacing={4} alignItems="center">
//             <Grid item xs={12} md={6}>
//               <motion.div
//                 initial={{ opacity: 0, x: -50 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.6 }}
//               >
//                 <Typography
//                   variant="h1"
//                   gutterBottom
//                   sx={{
//                     fontSize: isMobile ? '2.5rem' : '3.5rem',
//                     fontWeight: 700,
//                     lineHeight: 1.2,
//                   }}
//                 >
//                   Transform Your Business with AI
//                 </Typography>
//                 <Typography
//                   variant="h5"
//                   sx={{ mb: 4, opacity: 0.9, fontWeight: 400 }}
//                 >
//                   Enterprise-grade SaaS solutions powered by cutting-edge artificial intelligence
//                 </Typography>
//                 <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
//                   <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                     <Button
//                       variant="contained"
//                       size="large"
//                       component={Link}
//                       to="/signup"
//                       sx={{
//                         backgroundColor: 'white',
//                         color: 'primary.main',
//                         '&:hover': {
//                           backgroundColor: 'grey.100',
//                         },
//                       }}
//                     >
//                       Get Started Free
//                     </Button>
//                   </motion.div>
//                   <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                     <Button
//                       variant="outlined"
//                       size="large"
//                       startIcon={<PlayIcon />}
//                       sx={{
//                         borderColor: 'white',
//                         color: 'white',
//                         '&:hover': {
//                           borderColor: 'white',
//                           backgroundColor: 'rgba(255,255,255,0.1)',
//                         },
//                       }}
//                     >
//                       Watch Demo
//                     </Button>
//                   </motion.div>
//                 </Box>
//               </motion.div>
//             </Grid>
//             <Grid item xs={12} md={6}>
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.6, delay: 0.2 }}
//               >
//                 <Box
//                   sx={{
//                     position: 'relative',
//                     borderRadius: 4,
//                     overflow: 'hidden',
//                     boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
//                   }}
//                 >
//                   <CardMedia
//                     component="img"
//                     height="400"
//                     image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=400&fit=crop"
//                     alt="AI Dashboard"
//                     sx={{
//                       objectFit: 'cover',
//                     }}
//                   />
//                 </Box>
//               </motion.div>
//             </Grid>
//           </Grid>
//         </Container>
//       </Box>

//       {/* Features Section */}
//       <Container maxWidth="lg" sx={{ py: 8 }}>
//         <Box sx={{ textAlign: 'center', mb: 8 }}>
//           <Typography variant="h2" gutterBottom fontWeight={600}>
//             Powerful Features
//           </Typography>
//           <Typography variant="h5" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
//             Everything you need to scale your business
//           </Typography>
//         </Box>

//         <Grid container spacing={4}>
//           {features.map((feature, index) => (
//             <Grid item xs={12} md={4} key={index}>
//               <motion.div
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//               >
//                 <Card
//                   sx={{
//                     height: '100%',
//                     p: 3,
//                     textAlign: 'center',
//                     border: 1,
//                     borderColor: 'divider',
//                     '&:hover': {
//                       borderColor: 'primary.main',
//                       boxShadow: '0 10px 40px rgba(16, 185, 129, 0.1)',
//                     },
//                   }}
//                 >
//                   <Box
//                     sx={{
//                       width: 80,
//                       height: 80,
//                       backgroundColor: 'primary.light',
//                       borderRadius: '50%',
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                       color: 'white',
//                       mx: 'auto',
//                       mb: 3,
//                     }}
//                   >
//                     {feature.icon}
//                   </Box>
//                   <Typography variant="h5" gutterBottom fontWeight={600}>
//                     {feature.title}
//                   </Typography>
//                   <Typography variant="body1" color="text.secondary">
//                     {feature.description}
//                   </Typography>
//                 </Card>
//               </motion.div>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>

//       {/* CTA Section */}
//       <Box
//         sx={{
//           backgroundColor: 'primary.light',
//           py: 8,
//           textAlign: 'center',
//           color: 'white',
//         }}
//       >
//         <Container maxWidth="md">
//           <Typography variant="h2" gutterBottom fontWeight={600}>
//             Ready to Transform Your Business?
//           </Typography>
//           <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
//             Join thousands of enterprises already using our platform
//           </Typography>
//           <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
//             <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//               <Button
//                 variant="contained"
//                 size="large"
//                 component={Link}
//                 to="/signup"
//                 endIcon={<ArrowIcon />}
//                 sx={{
//                   backgroundColor: 'white',
//                   color: 'primary.main',
//                   '&:hover': {
//                     backgroundColor: 'grey.100',
//                   },
//                 }}
//               >
//                 Start Free Trial
//               </Button>
//             </motion.div>
//             <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//               <Button
//                 variant="outlined"
//                 size="large"
//                 component={Link}
//                 to="/contact"
//                 sx={{
//                   borderColor: 'white',
//                   color: 'white',
//                   '&:hover': {
//                     borderColor: 'white',
//                     backgroundColor: 'rgba(255,255,255,0.1)',
//                   },
//                 }}
//               >
//                 Schedule a Demo
//               </Button>
//             </motion.div>
//           </Box>
//         </Container>
//       </Box>
//     </Box>
//   );
// };

// export default Home;

import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
  Chip,
  Avatar,
  AvatarGroup,
  alpha,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  PlayCircle as PlayIcon,
  ArrowForward as ArrowIcon,
  CheckCircle as CheckIcon,
  TrendingUp as TrendingIcon,
  Shield as SecurityIcon,
  Cloud as CloudIcon,
  Speed as SpeedIcon,
  Group as GroupIcon,
  Star as StarIcon,
  AutoGraph as GraphIcon,
  Security as ShieldIcon,
  Analytics as AnalyticsIcon,
  Code as CodeIcon,
  Storage as StorageIcon,
  Verified as VerifiedIcon,
  People as PeopleIcon,
  Language as LanguageIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Stats data
  const stats = [
    { value: '99.9%', label: 'Uptime Guarantee', icon: <TrendingIcon />, color: '#10B981' },
    { value: '24/7', label: 'Expert Support', icon: <PeopleIcon />, color: '#3B82F6' },
    { value: '500+', label: 'Enterprise Clients', icon: <GroupIcon />, color: '#8B5CF6' },
    { value: '50+', label: 'Countries Served', icon: <LanguageIcon />, color: '#F59E0B' },
  ];

  // Features with icons
  const features = [
    {
      icon: <AnalyticsIcon sx={{ fontSize: 40, color: '#10B981' }} />,
      title: 'AI-Powered Analytics',
      description: 'Get real-time insights with advanced AI algorithms and predictive analytics',
      color: '#10B981',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop'
    },
    {
      icon: <ShieldIcon sx={{ fontSize: 40, color: '#3B82F6' }} />,
      title: 'Enterprise Security',
      description: 'Bank-grade security with end-to-end encryption and compliance certifications',
      color: '#3B82F6',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop'
    },
    {
      icon: <SpeedIcon sx={{ fontSize: 40, color: '#8B5CF6' }} />,
      title: 'Real-time Processing',
      description: 'Lightning-fast processing with 50ms average response time',
      color: '#8B5CF6',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop'
    },
    {
      icon: <CloudIcon sx={{ fontSize: 40, color: '#F59E0B' }} />,
      title: 'Cloud Native',
      description: 'Built on modern cloud architecture for seamless scalability',
      color: '#F59E0B',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop'
    },
  ];

  // Testimonials
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, TechCorp',
      content: 'NexusAI transformed our entire analytics workflow. The AI insights helped us increase efficiency by 40%.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b786d4d6?w=200&h=200&fit=crop&crop=face',
      rating: 5,
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png'
    },
    {
      name: 'Michael Chen',
      role: 'CEO, DataFlow',
      content: 'The security features gave us confidence to migrate all sensitive data. 99.9% uptime is remarkable.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face',
      rating: 5,
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_logo.svg/2560px-Microsoft_logo.svg.png'
    },
    {
      name: 'Emma Wilson',
      role: 'Product Director, Innovate',
      content: 'Scalability was our biggest concern, but NexusAI handles it effortlessly. ROI exceeded 10x.',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face',
      rating: 5,
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png'
    },
  ];

  // Security features
  const securityFeatures = [
    { label: 'GDPR Compliant', icon: <VerifiedIcon /> },
    { label: 'HIPAA Certified', icon: <VerifiedIcon /> },
    { label: 'SOC 2 Type II', icon: <VerifiedIcon /> },
    { label: 'End-to-End Encryption', icon: <ShieldIcon /> },
    { label: 'Multi-Factor Auth', icon: <SecurityIcon /> },
    { label: 'Regular Audits', icon: <CheckIcon /> },
  ];

  return (
    <Box sx={{ overflow: 'hidden' }}>
      {/* Hero Section with AI background */}
      <Box
        sx={{
          position: 'relative',
          background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
          color: 'white',
          py: { xs: 8, md: 12 },
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'url(https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1920&h=1080&fit=crop&auto=format)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.1,
          },
        }}
      >
        {/* Animated background elements */}
        <Box
          sx={{
            position: 'absolute',
            top: '10%',
            right: '5%',
            width: 400,
            height: 400,
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(60px)',
            animation: 'float 6s ease-in-out infinite',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: '20%',
            left: '10%',
            width: 300,
            height: 300,
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(40px)',
            animation: 'float 8s ease-in-out infinite 1s',
          }}
        />

        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.7; }
          }
        `}</style>

        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <Chip
                  label="Enterprise AI Platform"
                  icon={<VerifiedIcon />}
                  sx={{
                    backgroundColor: 'rgba(16, 185, 129, 0.2)',
                    color: '#10B981',
                    mb: 3,
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    padding: '4px 12px',
                  }}
                />
                
                <Typography
                  variant="h1"
                  gutterBottom
                  sx={{
                    fontSize: isMobile ? '2.5rem' : '3.5rem',
                    fontWeight: 800,
                    lineHeight: 1.2,
                    background: 'linear-gradient(135deg, #FFFFFF 0%, #10B981 50%, #3B82F6 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    mb: 2,
                    textShadow: '0 4px 20px rgba(0,0,0,0.3)',
                  }}
                >
                  The Enterprise AI Platform You Can Trust
                </Typography>
                
                <Typography
                  variant="h5"
                  sx={{
                    mb: 4,
                    opacity: 0.9,
                    fontWeight: 400,
                    color: '#CBD5E1',
                    fontSize: isMobile ? '1.1rem' : '1.25rem',
                  }}
                >
                  Built for scale, designed for security. Our platform powers AI initiatives for Fortune 500 companies while maintaining the highest standards of data protection.
                </Typography>
                
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 6 }}>
                  <Button
                    variant="contained"
                    size="large"
                    component={Link}
                    to="/signup"
                    endIcon={<ArrowIcon />}
                    sx={{
                      backgroundColor: '#10B981',
                      color: 'white',
                      px: 4,
                      py: 1.5,
                      borderRadius: 2,
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      '&:hover': {
                        backgroundColor: '#059669',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 10px 25px rgba(16, 185, 129, 0.3)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Start Free Trial
                  </Button>
                  
                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<PlayIcon />}
                    sx={{
                      borderColor: 'rgba(255, 255, 255, 0.3)',
                      color: 'white',
                      px: 4,
                      py: 1.5,
                      borderRadius: 2,
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      '&:hover': {
                        borderColor: '#10B981',
                        backgroundColor: 'rgba(16, 185, 129, 0.1)',
                      },
                    }}
                  >
                    Watch Demo
                  </Button>
                </Stack>

                {/* Quick stats */}
                <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap', mt: 4 }}>
                  <Box>
                    <Typography variant="h4" sx={{ color: '#10B981', fontWeight: 700 }}>
                      99.9%
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#94A3B8' }}>
                      Uptime
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="h4" sx={{ color: '#3B82F6', fontWeight: 700 }}>
                      50ms
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#94A3B8' }}>
                      Avg Response
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="h4" sx={{ color: '#8B5CF6', fontWeight: 700 }}>
                      10x
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#94A3B8' }}>
                      ROI Average
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    borderRadius: 3,
                    overflow: 'hidden',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    backgroundColor: 'rgba(15, 23, 42, 0.7)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      height: { xs: 300, md: 500 },
                      backgroundImage: 'url(https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop&auto=format)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Box sx={{ 
                      position: 'absolute', 
                      top: 0, 
                      left: 0, 
                      right: 0, 
                      bottom: 0,
                      background: 'linear-gradient(to bottom, transparent, rgba(15, 23, 42, 0.9))'
                    }} />
                    
                    {/* Animated AI elements */}
                    <Box sx={{ 
                      position: 'relative', 
                      zIndex: 2, 
                      textAlign: 'center',
                      p: 4 
                    }}>
                      <Typography variant="h4" sx={{ color: 'white', fontWeight: 700, mb: 2 }}>
                        AI Dashboard Preview
                      </Typography>
                      <Typography variant="body1" sx={{ color: '#CBD5E1', mb: 3 }}>
                        Real-time analytics and insights
                      </Typography>
                      <Button
                        variant="contained"
                        startIcon={<PlayIcon />}
                        sx={{
                          backgroundColor: '#10B981',
                          '&:hover': { backgroundColor: '#059669' }
                        }}
                      >
                        Interactive Demo
                      </Button>
                    </Box>
                  </Box>
                  
                  {/* Floating metrics */}
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 20,
                      left: 20,
                      backgroundColor: 'rgba(15, 23, 42, 0.9)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: 2,
                      p: 3,
                      width: 200,
                      border: '1px solid rgba(16, 185, 129, 0.3)',
                      animation: 'pulse 2s infinite',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <SpeedIcon sx={{ color: '#10B981', mr: 1, fontSize: 20 }} />
                      <Typography variant="h6" sx={{ color: '#10B981', fontWeight: 600 }}>
                        Real-time Processing
                      </Typography>
                    </Box>
                    <Typography variant="h4" sx={{ color: 'white', fontWeight: 700 }}>
                      50ms
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#94A3B8' }}>
                      Average Response Time
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      position: 'absolute',
                      top: 20,
                      right: 20,
                      backgroundColor: 'rgba(15, 23, 42, 0.9)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: 2,
                      p: 2,
                      border: '1px solid rgba(59, 130, 246, 0.3)',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <ShieldIcon sx={{ color: '#3B82F6', mr: 1, fontSize: 20 }} />
                      <Typography variant="body2" sx={{ color: 'white', fontWeight: 600 }}>
                        Enterprise Security
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Stats Section */}
      <Container maxWidth="lg" sx={{ py: 8, mt: -4 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Card
            sx={{
              backgroundColor: 'white',
              borderRadius: 3,
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
              border: '1px solid #E2E8F0',
              p: 4,
              backgroundImage: 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)',
            }}
          >
            <Grid container spacing={4}>
              {stats.map((stat, index) => (
                <Grid item xs={6} md={3} key={index}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Box sx={{ textAlign: 'center', p: 2 }}>
                      <Box
                        sx={{
                          width: 70,
                          height: 70,
                          backgroundColor: `${stat.color}15`,
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: stat.color,
                          mx: 'auto',
                          mb: 2,
                          border: `2px solid ${stat.color}30`,
                        }}
                      >
                        {React.cloneElement(stat.icon, { sx: { fontSize: 32 } })}
                      </Box>
                      <Typography
                        variant="h3"
                        sx={{
                          color: '#1E293B',
                          fontWeight: 800,
                          mb: 1,
                          fontSize: { xs: '2rem', md: '2.5rem' },
                        }}
                      >
                        {stat.value}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: '#64748B',
                          fontWeight: 600,
                          fontSize: '1rem',
                        }}
                      >
                        {stat.label}
                      </Typography>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Card>
        </motion.div>
      </Container>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Chip
              label="Built for Enterprise"
              icon={<VerifiedIcon />}
              sx={{
                backgroundColor: '#10B98115',
                color: '#10B981',
                mb: 3,
                fontWeight: 600,
                px: 2,
                py: 1,
                fontSize: '0.9rem',
              }}
            />
            <Typography variant="h2" gutterBottom sx={{ color: '#1E293B', fontWeight: 800 }}>
              Everything You Need to Scale
            </Typography>
            <Typography variant="h5" sx={{ color: '#64748B', maxWidth: 700, mx: 'auto', fontWeight: 400, lineHeight: 1.6 }}>
              Powerful features designed to accelerate your business growth with cutting-edge AI technology
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    overflow: 'hidden',
                    border: '1px solid #E2E8F0',
                    borderRadius: 2,
                    backgroundColor: 'white',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: feature.color,
                      boxShadow: `0 25px 50px ${feature.color}20`,
                      transform: 'translateY(-8px)',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, height: '100%' }}>
                    <Box sx={{ flex: 1, p: 4 }}>
                      <Box
                        sx={{
                          width: 60,
                          height: 60,
                          backgroundColor: `${feature.color}15`,
                          borderRadius: 2,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mb: 3,
                          border: `1px solid ${feature.color}30`,
                        }}
                      >
                        {feature.icon}
                      </Box>
                      <Typography variant="h5" gutterBottom sx={{ color: '#1E293B', fontWeight: 700 }}>
                        {feature.title}
                      </Typography>
                      <Typography variant="body1" sx={{ color: '#64748B', mb: 3 }}>
                        {feature.description}
                      </Typography>
                      <Button
                        variant="text"
                        endIcon={<ArrowIcon />}
                        sx={{ color: feature.color, fontWeight: 600 }}
                      >
                        Learn More
                      </Button>
                    </Box>
                    <Box sx={{ flex: 1, minHeight: 200, position: 'relative' }}>
                      <CardMedia
                        component="img"
                        image={feature.image}
                        alt={feature.title}
                        sx={{
                          height: '100%',
                          width: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.3s ease',
                          '&:hover': {
                            transform: 'scale(1.05)',
                          },
                        }}
                      />
                      <Box
                        sx={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          right: 0,
                          background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                          p: 2,
                        }}
                      >
                        <Typography variant="caption" sx={{ color: 'white', fontWeight: 600 }}>
                          Live Demo Available →
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Security Compliance Section */}
        <Box sx={{ mt: 12, textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Chip
              label="Security & Compliance"
              icon={<ShieldIcon />}
              sx={{
                backgroundColor: '#3B82F615',
                color: '#3B82F6',
                mb: 3,
                fontWeight: 600,
                px: 2,
                py: 1,
              }}
            />
            <Typography variant="h3" gutterBottom sx={{ color: '#1E293B', fontWeight: 800 }}>
              Enterprise-Grade Security
            </Typography>
            <Typography variant="h5" sx={{ color: '#64748B', maxWidth: 700, mx: 'auto', mb: 6, fontWeight: 400 }}>
              Your data is protected with the highest security standards
            </Typography>

            <Grid container spacing={2} justifyContent="center">
              {securityFeatures.map((item, index) => (
                <Grid item key={index}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Chip
                      icon={React.cloneElement(item.icon, { sx: { color: '#3B82F6' } })}
                      label={item.label}
                      sx={{
                        backgroundColor: '#3B82F610',
                        color: '#1E293B',
                        border: '1px solid #3B82F630',
                        fontWeight: 500,
                        px: 2,
                        py: 2,
                      }}
                    />
                  </motion.div>
                </Grid>
              ))}
            </Grid>

            <Box sx={{ mt: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, flexWrap: 'wrap' }}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h2" sx={{ color: '#10B981', fontWeight: 800 }}>
                  99.9%
                </Typography>
                <Typography variant="body1" sx={{ color: '#64748B', fontWeight: 600 }}>
                  Security Score
                </Typography>
              </Box>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h2" sx={{ color: '#3B82F6', fontWeight: 800 }}>
                  100%
                </Typography>
                <Typography variant="body1" sx={{ color: '#64748B', fontWeight: 600 }}>
                  Compliance Rate
                </Typography>
              </Box>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h2" sx={{ color: '#8B5CF6', fontWeight: 800 }}>
                  0
                </Typography>
                <Typography variant="body1" sx={{ color: '#64748B', fontWeight: 600 }}>
                  Security Incidents
                </Typography>
              </Box>
            </Box>
          </motion.div>
        </Box>
      </Container>

      {/* Testimonials Section */}
      <Box sx={{ 
        backgroundColor: '#0F172A', 
        py: 12,
        backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=600&fit=crop&auto=format)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(15, 23, 42, 0.9)',
        }
      }}>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <Chip
                label="Trusted by Industry Leaders"
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  mb: 3,
                  fontWeight: 600,
                  backdropFilter: 'blur(10px)',
                }}
              />
              <Typography variant="h2" gutterBottom sx={{ color: 'white', fontWeight: 800 }}>
                What Our Clients Say
              </Typography>
              <Typography variant="h5" sx={{ color: '#CBD5E1', maxWidth: 600, mx: 'auto', fontWeight: 400 }}>
                500+ enterprises trust NexusAI to power their AI initiatives
              </Typography>
            </motion.div>
          </Box>

          <Grid container spacing={4}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      p: 4,
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: 2,
                      backgroundColor: 'rgba(30, 41, 59, 0.7)',
                      backdropFilter: 'blur(10px)',
                      color: 'white',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: 'rgba(30, 41, 59, 0.9)',
                        borderColor: '#10B981',
                      },
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                      <Avatar
                        src={testimonial.avatar}
                        sx={{ 
                          width: 60, 
                          height: 60, 
                          mr: 2,
                          border: '2px solid #10B981'
                        }}
                      />
                      <Box>
                        <Typography variant="h6" sx={{ color: 'white', fontWeight: 600 }}>
                          {testimonial.name}
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#94A3B8' }}>
                          {testimonial.role}
                        </Typography>
                      </Box>
                    </Box>
                    
                    <Box sx={{ display: 'flex', mb: 2 }}>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <StarIcon key={i} sx={{ color: '#FBBF24', fontSize: 20 }} />
                      ))}
                    </Box>
                    
                    <Typography variant="body1" sx={{ color: '#E2E8F0', fontStyle: 'italic', mb: 3 }}>
                      "{testimonial.content}"
                    </Typography>
                    
                    <Box sx={{ 
                      mt: 3, 
                      pt: 3, 
                      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                      display: 'flex',
                      justifyContent: 'center'
                    }}>
                      <Box
                        component="img"
                        src={testimonial.logo}
                        alt="Company Logo"
                        sx={{
                          height: 30,
                          filter: 'brightness(0) invert(1)',
                          opacity: 0.7,
                        }}
                      />
                    </Box>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Final CTA Section */}
      <Container maxWidth="lg" sx={{ py: 12 }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Box
            sx={{
              background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
              borderRadius: 4,
              p: { xs: 4, md: 8 },
              textAlign: 'center',
              color: 'white',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 30px 60px rgba(0, 0, 0, 0.3)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: 'url(https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1920&h=600&fit=crop&auto=format)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.1,
              },
            }}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
              style={{ display: 'inline-block' }}
            >
              <Chip
                label="Limited Time Offer"
                sx={{
                  backgroundColor: 'rgba(16, 185, 129, 0.2)',
                  color: '#10B981',
                  mb: 3,
                  fontWeight: 600,
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                }}
              />
            </motion.div>
            
            <Typography
              variant="h2"
              gutterBottom
              sx={{
                fontWeight: 800,
                fontSize: { xs: '2rem', md: '3rem' },
                position: 'relative',
                zIndex: 1,
                background: 'linear-gradient(135deg, #FFFFFF 0%, #10B981 50%, #3B82F6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Start Your AI Journey Today
            </Typography>
            
            <Typography
              variant="h5"
              sx={{
                mb: 6,
                opacity: 0.9,
                fontWeight: 400,
                maxWidth: 600,
                mx: 'auto',
                position: 'relative',
                zIndex: 1,
                color: '#CBD5E1',
              }}
            >
              Join Fortune 500 companies using our platform to drive growth and innovation. 
              Get 30-day free trial with full enterprise features.
            </Typography>
            
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center" sx={{ position: 'relative', zIndex: 1 }}>
              <Button
                variant="contained"
                size="large"
                component={Link}
                to="/signup"
                endIcon={<ArrowIcon />}
                sx={{
                  backgroundColor: '#10B981',
                  color: 'white',
                  px: 6,
                  py: 1.5,
                  borderRadius: 2,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  '&:hover': {
                    backgroundColor: '#059669',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 15px 30px rgba(16, 185, 129, 0.4)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Start Free Trial
              </Button>
              
              <Button
                variant="outlined"
                size="large"
                startIcon={<PlayIcon />}
                sx={{
                  borderColor: 'rgba(255, 255, 255, 0.3)',
                  color: 'white',
                  px: 6,
                  py: 1.5,
                  borderRadius: 2,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  '&:hover': {
                    borderColor: '#10B981',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                  },
                }}
              >
                Watch Demo Video
              </Button>
            </Stack>

            <Box sx={{ mt: 6, color: '#94A3B8', fontSize: '0.9rem', position: 'relative', zIndex: 1 }}>
              <Typography variant="body2">
                No credit card required • 24/7 support • Cancel anytime
              </Typography>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Home;