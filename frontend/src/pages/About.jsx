// import React from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   useTheme,
//   useMediaQuery,
// } from '@mui/material';
// import {
//   Security as SecurityIcon,
//   Speed as SpeedIcon,
//   Scale as ScaleIcon,
//   Group as GroupIcon,
// } from '@mui/icons-material';
// import { motion } from 'framer-motion';

// const About = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

//   const values = [
//     {
//       icon: <SecurityIcon sx={{ fontSize: 40 }} />,
//       title: 'Security First',
//       description: 'We prioritize data security and privacy above all else.',
//     },
//     {
//       icon: <SpeedIcon sx={{ fontSize: 40 }} />,
//       title: 'Performance',
//       description: 'Lightning-fast solutions that never compromise on speed.',
//     },
//     {
//       icon: <ScaleIcon sx={{ fontSize: 40 }} />,
//       title: 'Scalability',
//       description: 'Solutions that grow with your business needs.',
//     },
//     {
//       icon: <GroupIcon sx={{ fontSize: 40 }} />,
//       title: 'Teamwork',
//       description: 'Collaboration and excellence in everything we do.',
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
//         }}
//       >
//         <Container maxWidth="lg">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <Typography
//               variant="h1"
//               gutterBottom
//               sx={{
//                 fontSize: isMobile ? '2.5rem' : '3.5rem',
//                 fontWeight: 700,
//                 textAlign: 'center',
//               }}
//             >
//               About Us
//             </Typography>
//             <Typography
//               variant="h5"
//               sx={{
//                 textAlign: 'center',
//                 maxWidth: 800,
//                 mx: 'auto',
//                 opacity: 0.9,
//                 fontWeight: 400,
//               }}
//             >
//               Building the future of enterprise technology with AI-powered solutions
//             </Typography>
//           </motion.div>
//         </Container>
//       </Box>

//       {/* Mission Section */}
//       <Container maxWidth="lg" sx={{ py: 8 }}>
//         <Grid container spacing={6} alignItems="center">
//           <Grid item xs={12} md={6}>
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6 }}
//             >
//               <Typography variant="h2" gutterBottom fontWeight={600}>
//                 Our Mission
//               </Typography>
//               <Typography variant="h5" color="primary" gutterBottom>
//                 Empowering businesses through intelligent technology
//               </Typography>
//               <Typography variant="body1" color="text.secondary" paragraph>
//                 We believe that every business, regardless of size, should have access to 
//                 enterprise-grade AI solutions. Our mission is to democratize artificial 
//                 intelligence and make it accessible, affordable, and easy to use.
//               </Typography>
//               <Typography variant="body1" color="text.secondary">
//                 Founded in 2023, we've helped hundreds of companies transform their 
//                 operations with our cutting-edge platform. From startups to Fortune 500 
//                 companies, our solutions drive real business value.
//               </Typography>
//             </motion.div>
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//             >
//               <Box
//                 sx={{
//                   borderRadius: 4,
//                   overflow: 'hidden',
//                   boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
//                 }}
//               >
//                 <img
//                   src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
//                   alt="Our Team"
//                   style={{
//                     width: '100%',
//                     height: 'auto',
//                     display: 'block',
//                   }}
//                 />
//               </Box>
//             </motion.div>
//           </Grid>
//         </Grid>
//       </Container>

//       {/* Values Section */}
//       <Box sx={{ backgroundColor: 'background.paper', py: 8 }}>
//         <Container maxWidth="lg">
//           <Typography
//             variant="h2"
//             gutterBottom
//             fontWeight={600}
//             sx={{ textAlign: 'center', mb: 6 }}
//           >
//             Our Values
//           </Typography>
//           <Grid container spacing={4}>
//             {values.map((value, index) => (
//               <Grid item xs={12} sm={6} md={3} key={index}>
//                 <motion.div
//                   initial={{ opacity: 0, y: 50 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.1 }}
//                 >
//                   <Card
//                     sx={{
//                       height: '100%',
//                       p: 3,
//                       textAlign: 'center',
//                       border: 1,
//                       borderColor: 'divider',
//                       '&:hover': {
//                         borderColor: 'primary.main',
//                         boxShadow: '0 10px 40px rgba(16, 185, 129, 0.1)',
//                       },
//                     }}
//                   >
//                     <Box
//                       sx={{
//                         width: 80,
//                         height: 80,
//                         backgroundColor: 'primary.light',
//                         borderRadius: '50%',
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         color: 'white',
//                         mx: 'auto',
//                         mb: 3,
//                       }}
//                     >
//                       {value.icon}
//                     </Box>
//                     <Typography variant="h6" gutterBottom fontWeight={600}>
//                       {value.title}
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary">
//                       {value.description}
//                     </Typography>
//                   </Card>
//                 </motion.div>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//       </Box>

//       {/* Stats Section */}
//       <Container maxWidth="lg" sx={{ py: 8 }}>
//         <Grid container spacing={4} sx={{ textAlign: 'center' }}>
//           {[
//             { number: '500+', label: 'Clients Worldwide' },
//             { number: '99.9%', label: 'Uptime' },
//             { number: '24/7', label: 'Support' },
//             { number: '50+', label: 'Team Members' },
//           ].map((stat, index) => (
//             <Grid item xs={6} md={3} key={index}>
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: index * 0.1 }}
//               >
//                 <Typography
//                   variant="h2"
//                   color="primary.main"
//                   fontWeight={700}
//                   gutterBottom
//                 >
//                   {stat.number}
//                 </Typography>
//                 <Typography variant="h6" color="text.secondary">
//                   {stat.label}
//                 </Typography>
//               </motion.div>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default About;


import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  useTheme,
  useMediaQuery,
  IconButton,
  Dialog,
  DialogContent,
} from '@mui/material';
import {
  PlayCircle as PlayIcon,
  Security as SecurityIcon,
  Bolt as SpeedIcon,
  AutoGraph as ScaleIcon,
  Diversity3 as TeamIcon,
  Psychology as AiIcon,
  Dataset as DataIcon,
  Cloud as CloudIcon,
  Close as CloseIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [videoOpen, setVideoOpen] = useState(false);

  const handleVideoOpen = () => setVideoOpen(true);
  const handleVideoClose = () => setVideoOpen(false);

  const values = [
    {
      icon: <AiIcon sx={{ fontSize: 40 }} />,
      title: 'AI-First Approach',
      description: 'Everything we build starts with artificial intelligence at the core.',
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 40 }} />,
      title: 'Ethical AI',
      description: 'Responsible AI development with privacy and fairness baked in.',
    },
    {
      icon: <SpeedIcon sx={{ fontSize: 40 }} />,
      title: 'Real-Time Processing',
      description: 'Millisecond-level AI inference for instant insights.',
    },
    {
      icon: <DataIcon sx={{ fontSize: 40 }} />,
      title: 'Data Intelligence',
      description: 'Transforming raw data into actionable intelligence.',
    },
    {
      icon: <ScaleIcon sx={{ fontSize: 40 }} />,
      title: 'Enterprise Scale',
      description: 'AI solutions that scale with your business needs.',
    },
    {
      icon: <CloudIcon sx={{ fontSize: 40 }} />,
      title: 'Cloud Native',
      description: 'Built for modern cloud infrastructure from day one.',
    },
  ];

  const aiUseCases = [
    {
      title: 'Predictive Analytics',
      description: 'Forecast trends and behaviors with 95%+ accuracy',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
    },
    {
      title: 'Natural Language Processing',
      description: 'Understand and generate human-like text',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w-400&h=300&fit=crop',
    },
    {
      title: 'Computer Vision',
      description: 'Analyze and understand visual content',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop',
    },
    {
      title: 'Autonomous Systems',
      description: 'Self-learning and self-optimizing solutions',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop',
    },
  ];

  const stats = [
    { number: '10B+', label: 'Daily AI Predictions', icon: '⚡' },
    { number: '500+', label: 'Enterprise Clients', icon: '🏢' },
    { number: '99.99%', label: 'Model Accuracy', icon: '🎯' },
    { number: '24/7', label: 'AI Monitoring', icon: '👁️' },
  ];

  return (
    <Box>
      {/* Hero Section with AI Theme */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          color: 'white',
          py: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `url('https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&q=80')`,
            backgroundSize: 'cover',
            opacity: 0.1,
          }}
        />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h1"
              gutterBottom
              sx={{
                fontSize: isMobile ? '2.5rem' : '4rem',
                fontWeight: 800,
                textAlign: 'center',
                background: 'linear-gradient(90deg, #60a5fa 0%, #38bdf8 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                mb: 2,
              }}
            >
              Pioneering the Future of AI
            </Typography>
            <Typography
              variant="h4"
              sx={{
                textAlign: 'center',
                maxWidth: 800,
                mx: 'auto',
                opacity: 0.9,
                fontWeight: 400,
                mb: 4,
              }}
            >
              Where artificial intelligence meets human potential
            </Typography>
            <Box sx={{ textAlign: 'center', mt: 4 }}>
              <Button
                variant="contained"
                size="large"
                startIcon={<PlayIcon />}
                onClick={handleVideoOpen}
                sx={{
                  background: 'linear-gradient(90deg, #3b82f6 0%, #1d4ed8 100%)',
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  borderRadius: 2,
                  '&:hover': {
                    background: 'linear-gradient(90deg, #2563eb 0%, #1e40af 100%)',
                  },
                }}
              >
                Watch Our AI in Action
              </Button>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* AI Capabilities Grid */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h2"
          gutterBottom
          fontWeight={700}
          sx={{ textAlign: 'center', mb: 6 }}
        >
          AI-Powered Solutions
        </Typography>
        <Grid container spacing={4}>
          {aiUseCases.map((useCase, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    borderRadius: 3,
                    overflow: 'hidden',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 20px 40px rgba(59, 130, 246, 0.15)',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={useCase.image}
                    alt={useCase.title}
                  />
                  <CardContent sx={{ p: 3 }}>
                    <Typography
                      variant="h6"
                      gutterBottom
                      fontWeight={600}
                      color="primary.main"
                    >
                      {useCase.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {useCase.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Our Mission - AI Focused */}
      <Box sx={{ backgroundColor: 'grey.50', py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Typography
                  variant="h2"
                  gutterBottom
                  fontWeight={700}
                  color="primary.main"
                >
                  Our Mission
                </Typography>
                <Typography variant="h4" gutterBottom fontWeight={600}>
                  Democratizing Artificial Intelligence
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  We're on a mission to make cutting-edge AI accessible to every 
                  business. Our platform transforms complex machine learning algorithms 
                  into simple, powerful tools that drive real business impact.
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  Founded by AI researchers from leading institutions, we've spent 
                  years perfecting neural network architectures that outperform 
                  traditional solutions while being more efficient and explainable.
                </Typography>
                <Box sx={{ mt: 4 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Typography variant="h4" color="primary.main" fontWeight={700}>
                        50+
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Proprietary AI Models
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h4" color="primary.main" fontWeight={700}>
                        98%
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Client Retention Rate
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
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
                    position: 'relative',
                    borderRadius: 4,
                    overflow: 'hidden',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=500&fit=crop&crop=center"
                    alt="AI Neural Network Visualization"
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                      color: 'white',
                      p: 3,
                    }}
                  >
                    <Typography variant="h6" fontWeight={600}>
                      Neural Network Visualization
                    </Typography>
                    <Typography variant="body2">
                      Real-time AI model training visualization
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* AI Values Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h2"
          gutterBottom
          fontWeight={700}
          sx={{ textAlign: 'center', mb: 6 }}
        >
          Our AI Principles
        </Typography>
        <Grid container spacing={4}>
          {values.map((value, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    p: 3,
                    borderRadius: 3,
                    border: '2px solid',
                    borderColor: 'grey.200',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: 'primary.main',
                      backgroundColor: 'primary.50',
                      transform: 'scale(1.02)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 70,
                      height: 70,
                      backgroundColor: 'primary.100',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'primary.main',
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

      {/* AI Stats Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
          color: 'white',
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            gutterBottom
            fontWeight={700}
            sx={{ textAlign: 'center', mb: 6, color: 'white' }}
          >
            AI at Scale
          </Typography>
          <Grid container spacing={4} sx={{ textAlign: 'center' }}>
            {stats.map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Typography variant="h4" sx={{ mb: 1, fontSize: '2.5rem' }}>
                    {stat.icon}
                  </Typography>
                  <Typography
                    variant="h2"
                    fontWeight={800}
                    gutterBottom
                    sx={{
                      background: 'linear-gradient(90deg, #60a5fa 0%, #38bdf8 100%)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      color: 'transparent',
                    }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography variant="h6" sx={{ opacity: 0.9 }}>
                    {stat.label}
                  </Typography>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Technology Stack */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h2"
          gutterBottom
          fontWeight={700}
          sx={{ textAlign: 'center', mb: 6 }}
        >
          Built on Cutting-Edge Technology
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {[
            { name: 'TensorFlow', color: '#FF6F00' },
            { name: 'PyTorch', color: '#EE4C2C' },
            { name: 'Kubernetes', color: '#326CE5' },
            { name: 'React', color: '#61DAFB' },
            { name: 'Node.js', color: '#339933' },
            { name: 'MongoDB', color: '#47A248' },
          ].map((tech, index) => (
            <Grid item key={index}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card
                  sx={{
                    px: 4,
                    py: 2,
                    borderRadius: 3,
                    backgroundColor: tech.color,
                    color: 'white',
                    fontWeight: 600,
                    boxShadow: `0 10px 20px ${tech.color}40`,
                  }}
                >
                  {tech.name}
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Video Dialog */}
      <Dialog
        open={videoOpen}
        onClose={handleVideoClose}
        maxWidth="md"
        fullWidth
      >
        <DialogContent sx={{ p: 0, position: 'relative' }}>
          <IconButton
            onClick={handleVideoClose}
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              zIndex: 1,
              backgroundColor: 'rgba(0,0,0,0.5)',
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(0,0,0,0.7)',
              },
            }}
          >
            <CloseIcon />
          </IconButton>
          <Box
            sx={{
              width: '100%',
              height: { xs: 300, md: 500 },
              backgroundColor: '#000',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography color="white">
              [AI Technology Showcase Video]
            </Typography>
            {/* Replace with actual video:
            <video controls style={{ width: '100%', height: '100%' }}>
              <source src="/ai-showcase.mp4" type="video/mp4" />
            </video>
            */}
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default About;