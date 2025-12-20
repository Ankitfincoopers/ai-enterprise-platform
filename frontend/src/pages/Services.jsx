// import React from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   CardActions,
//   Button,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   useTheme,
//   useMediaQuery,
// } from '@mui/material';
// import {
//   CheckCircle as CheckIcon,
//   Analytics as AnalyticsIcon,
//   Cloud as CloudIcon,
//   Security as SecurityIcon,
//   Code as CodeIcon,
//   SupportAgent as SupportIcon,
// } from '@mui/icons-material';
// import { motion } from 'framer-motion';

// const Services = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

//   const services = [
//     {
//       icon: <AnalyticsIcon sx={{ fontSize: 40 }} />,
//       title: 'AI Analytics',
//       description: 'Advanced analytics powered by machine learning algorithms.',
//       features: [
//         'Real-time insights',
//         'Predictive analytics',
//         'Custom dashboards',
//         'Data visualization',
//       ],
//     },
//     {
//       icon: <CloudIcon sx={{ fontSize: 40 }} />,
//       title: 'Cloud Solutions',
//       description: 'Scalable cloud infrastructure for modern businesses.',
//       features: [
//         'Auto-scaling',
//         'Load balancing',
//         'Database management',
//         'CDN integration',
//       ],
//     },
//     {
//       icon: <SecurityIcon sx={{ fontSize: 40 }} />,
//       title: 'Security Services',
//       description: 'Enterprise-grade security with compliance certification.',
//       features: [
//         'End-to-end encryption',
//         'DDoS protection',
//         'Security audits',
//         'Compliance monitoring',
//       ],
//     },
//     {
//       icon: <CodeIcon sx={{ fontSize: 40 }} />,
//       title: 'Custom Development',
//       description: 'Tailored software solutions for unique business needs.',
//       features: [
//         'API development',
//         'System integration',
//         'Mobile apps',
//         'Legacy migration',
//       ],
//     },
//     {
//       icon: <SupportIcon sx={{ fontSize: 40 }} />,
//       title: '24/7 Support',
//       description: 'Round-the-clock technical support and maintenance.',
//       features: [
//         'Priority support',
//         'SLA guarantee',
//         'Proactive monitoring',
//         'Regular updates',
//       ],
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
//               Our Services
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
//               Comprehensive AI-powered solutions for every business need
//             </Typography>
//           </motion.div>
//         </Container>
//       </Box>

//       {/* Services Grid */}
//       <Container maxWidth="lg" sx={{ py: 8 }}>
//         <Grid container spacing={4}>
//           {services.map((service, index) => (
//             <Grid item xs={12} md={4} key={index}>
//               <motion.div
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//               >
//                 <Card
//                   sx={{
//                     height: '100%',
//                     display: 'flex',
//                     flexDirection: 'column',
//                     border: 1,
//                     borderColor: 'divider',
//                     '&:hover': {
//                       borderColor: 'primary.main',
//                       boxShadow: '0 20px 60px rgba(16, 185, 129, 0.1)',
//                     },
//                   }}
//                 >
//                   <CardContent sx={{ flexGrow: 1, p: 4 }}>
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
//                         mb: 3,
//                       }}
//                     >
//                       {service.icon}
//                     </Box>
//                     <Typography variant="h5" gutterBottom fontWeight={600}>
//                       {service.title}
//                     </Typography>
//                     <Typography variant="body1" color="text.secondary" paragraph>
//                       {service.description}
//                     </Typography>
//                     <List dense disablePadding>
//                       {service.features.map((feature, idx) => (
//                         <ListItem key={idx} disableGutters disablePadding sx={{ py: 0.5 }}>
//                           <ListItemIcon sx={{ minWidth: 32 }}>
//                             <CheckIcon sx={{ color: 'primary.main', fontSize: 20 }} />
//                           </ListItemIcon>
//                           <ListItemText
//                             primary={feature}
//                             primaryTypographyProps={{ variant: 'body2' }}
//                           />
//                         </ListItem>
//                       ))}
//                     </List>
//                   </CardContent>
//                   <CardActions sx={{ p: 3, pt: 0 }}>
//                     <Button
//                       variant="contained"
//                       fullWidth
//                       sx={{
//                         backgroundColor: 'primary.main',
//                         '&:hover': {
//                           backgroundColor: 'primary.dark',
//                         },
//                       }}
//                     >
//                       Learn More
//                     </Button>
//                   </CardActions>
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
//             Ready to Get Started?
//           </Typography>
//           <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
//             Contact us for a free consultation and custom quote
//           </Typography>
//           <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
//             <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//               <Button
//                 variant="contained"
//                 size="large"
//                 href="/contact"
//                 sx={{
//                   backgroundColor: 'white',
//                   color: 'primary.main',
//                   '&:hover': {
//                     backgroundColor: 'grey.100',
//                   },
//                 }}
//               >
//                 Get a Quote
//               </Button>
//             </motion.div>
//             <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//               <Button
//                 variant="outlined"
//                 size="large"
//                 href="/contact"
//                 sx={{
//                   borderColor: 'white',
//                   color: 'white',
//                   '&:hover': {
//                     borderColor: 'white',
//                     backgroundColor: 'rgba(255,255,255,0.1)',
//                   },
//                 }}
//               >
//                 Schedule Call
//               </Button>
//             </motion.div>
//           </Box>
//         </Container>
//       </Box>
//     </Box>
//   );
// };

// export default Services;


// import React, { useState } from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   CardActions,
//   Button,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   useTheme,
//   useMediaQuery,
//   IconButton,
//   Dialog,
//   DialogContent,
//   Chip,
//   alpha,
// } from '@mui/material';
// import {
//   CheckCircle as CheckIcon,
//   Analytics as AnalyticsIcon,
//   Psychology as AiIcon,
//   Dataset as DataIcon,
//   Security as SecurityIcon,
//   Terminal as CodeIcon,
//   SupportAgent as SupportIcon,
//   CloudQueue as CloudIcon,
//   PlayCircle as PlayIcon,
//   Close as CloseIcon,
//   Bolt as BoltIcon,
// } from '@mui/icons-material';
// import { motion } from 'framer-motion';

// const Services = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
//   const [videoOpen, setVideoOpen] = useState(false);

//   const handleVideoOpen = () => setVideoOpen(true);
//   const handleVideoClose = () => setVideoOpen(false);

//   // AI-Themed Service Definitions with Stock Image URLs
//   const services = [
//     {
//       icon: <AiIcon sx={{ fontSize: 40 }} />,
//       title: 'AI-Powered Analytics',
//       description: 'Transform raw data into predictive insights and automated decisions with our advanced machine learning models.',
//       features: [
//         'Predictive Trend Forecasting',
//         'Real-time Decision Engines',
//         'Automated KPI Dashboards',
//         'Natural Language Data Querying',
//       ],
//       imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop', // AI Data Visualization
//       badge: 'Most Popular',
//     },
//     {
//       icon: <CloudIcon sx={{ fontSize: 40 }} />,
//       title: 'Intelligent Cloud AI',
//       description: 'Fully-managed cloud infrastructure optimized for deploying and scaling AI workloads seamlessly.',
//       features: [
//         'AI Model Serving & APIs',
//         'GPU-Accelerated Instances',
//         'Auto-scaling Inference Pipelines',
//         'Multi-cloud Hybrid Deployments',
//       ],
//       imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=300&fit=crop', // Cloud Network
//       badge: 'Enterprise',
//     },
//     {
//       icon: <SecurityIcon sx={{ fontSize: 40 }} />,
//       title: 'AI Security & Governance',
//       description: 'Secure your AI assets with robust governance frameworks, model auditing, and adversarial protection.',
//       features: [
//         'AI Model Vulnerability Scanning',
//         'Explainable AI (XAI) Reports',
//         'Data Anonymization & Compliance',
//         'Real-time Threat Detection for APIs',
//       ],
//       imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=300&fit=crop', // Cybersecurity Concept
//     },
//     {
//       icon: <TerminalIcon sx={{ fontSize: 40 }} />,
//       title: 'Custom AI Integration',
//       description: 'Tailored integration of AI capabilities into your existing workflows, products, and legacy systems.',
//       features: [
//         'Custom Large Language Models (LLMs)',
//         'Computer Vision API Development',
//         'RPA & Workflow Automation',
//         'Legacy System Modernization',
//       ],
//       imageUrl: 'https://images.unsplash.com/photo-1619410283995-43d9134e7656?w=600&h=300&fit=crop', // Code and AI
//     },
//     {
//       icon: <DataIcon sx={{ fontSize: 40 }} />,
//       title: 'Data Intelligence Engine',
//       description: 'End-to-end solutions for structuring unstructured data, building knowledge graphs, and fueling your AI.',
//       features: [
//         'Intelligent Document Processing (IDP)',
//         'Unified Customer Data Platforms',
//         'Knowledge Graph Construction',
//         'Automated Data Labeling & QA',
//       ],
//       imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=300&fit=crop', // Data Flow
//     },
//     {
//       icon: <SupportIcon sx={{ fontSize: 40 }} />,
//       title: 'AI Strategy & Support',
//       description: 'From initial AI roadmap to ongoing optimization and 24/7 ML Ops support for your mission-critical models.',
//       features: [
//         'AI Opportunity Assessment',
//         'Proof-of-Concept Development',
//         'Dedicated ML Ops Engineers',
//         'Model Performance Monitoring',
//       ],
//       imageUrl: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=600&h=300&fit=crop', // Team Collaboration
//       badge: 'Advisory',
//     },
//   ];

//   // Tech Stack Logos (Using text/colors as placeholders. Replace with actual SVG/PNG imports.)
//   const techStack = [
//     { name: 'TensorFlow', color: '#FF6F00' },
//     { name: 'PyTorch', color: '#EE4C2C' },
//     { name: 'OpenAI', color: '#412991' },
//     { name: 'LangChain', color: '#2AB577' },
//     { name: 'Hugging Face', color: '#FFD21E' },
//     { name: 'Kubernetes', color: '#326CE5' },
//     { name: 'Snowflake', color: '#29B5E8' },
//     { name: 'Apache Spark', color: '#E25A1C' },
//   ];

//   return (
//     <Box>
//       {/* Enhanced Hero Section */}
//       <Box
//         sx={{
//           background: 'linear-gradient(rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.97)), url("https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&q=80")',
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           color: 'white',
//           py: { xs: 10, md: 15 },
//           textAlign: 'center',
//           position: 'relative',
//           overflow: 'hidden',
//         }}
//       >
//         {/* Animated background elements */}
//         <Box sx={{
//           position: 'absolute',
//           top: '10%',
//           left: '5%',
//           width: 400,
//           height: 400,
//           background: 'radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 70%)',
//           borderRadius: '50%',
//         }} />
//         <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//           >
//             <Chip
//               icon={<BoltIcon />}
//               label="POWERED BY AI"
//               sx={{
//                 mb: 3,
//                 backgroundColor: alpha(theme.palette.primary.main, 0.2),
//                 color: theme.palette.primary.light,
//                 fontWeight: 600,
//                 '& .MuiChip-icon': { color: theme.palette.primary.light },
//               }}
//             />
//             <Typography
//               variant="h1"
//               gutterBottom
//               sx={{
//                 fontSize: isMobile ? '3rem' : '4rem',
//                 fontWeight: 800,
//                 background: 'linear-gradient(90deg, #60a5fa 30%, #38bdf8 90%)',
//                 backgroundClip: 'text',
//                 WebkitBackgroundClip: 'text',
//                 color: 'transparent',
//                 lineHeight: 1.1,
//               }}
//             >
//               Enterprise AI Services
//             </Typography>
//             <Typography
//               variant="h4"
//               sx={{
//                 maxWidth: 800,
//                 mx: 'auto',
//                 mb: 5,
//                 opacity: 0.9,
//                 fontWeight: 400,
//               }}
//             >
//               We don't just consult on AI—we architect, build, and scale intelligent systems that drive measurable business outcomes.
//             </Typography>
//             <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
//               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                 <Button
//                   variant="contained"
//                   size="large"
//                   startIcon={<PlayIcon />}
//                   onClick={handleVideoOpen}
//                   sx={{
//                     background: 'linear-gradient(90deg, #3b82f6 0%, #1d4ed8 100%)',
//                     px: 4,
//                     py: 1.5,
//                     fontSize: '1.1rem',
//                     borderRadius: 2,
//                   }}
//                 >
//                   See Platform Demo
//                 </Button>
//               </motion.div>
//               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                 <Button
//                   variant="outlined"
//                   size="large"
//                   href="/contact"
//                   sx={{
//                     borderColor: 'white',
//                     color: 'white',
//                     px: 4,
//                     py: 1.5,
//                     fontSize: '1.1rem',
//                     borderRadius: 2,
//                     '&:hover': { borderColor: '#e2e8f0', backgroundColor: 'rgba(255,255,255,0.05)' },
//                   }}
//                 >
//                   Book a Technical Audit
//                 </Button>
//               </motion.div>
//             </Box>
//           </motion.div>
//         </Container>
//       </Box>

//       {/* Services Grid */}
//       <Container maxWidth="xl" sx={{ py: 10, px: { xs: 2, sm: 3 } }}>
//         <Typography
//           variant="h2"
//           gutterBottom
//           fontWeight={800}
//           sx={{ textAlign: 'center', mb: 2, color: 'primary.main' }}
//         >
//           Our Core AI Capabilities
//         </Typography>
//         <Typography variant="h6" sx={{ textAlign: 'center', mb: 8, color: 'text.secondary', maxWidth: 800, mx: 'auto' }}>
//           Each service is built on a foundation of cutting-edge research and proven enterprise delivery.
//         </Typography>
//         <Grid container spacing={4}>
//           {services.map((service, index) => (
//             <Grid item xs={12} sm={6} lg={4} key={index}>
//               <motion.div
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//               >
//                 <Card
//                   sx={{
//                     height: '100%',
//                     display: 'flex',
//                     flexDirection: 'column',
//                     borderRadius: 4,
//                     border: '1px solid',
//                     borderColor: 'divider',
//                     overflow: 'hidden',
//                     transition: 'all 0.3s ease-in-out',
//                     '&:hover': {
//                       transform: 'translateY(-8px)',
//                       borderColor: 'primary.main',
//                       boxShadow: '0 25px 50px -12px rgba(59, 130, 246, 0.25)',
//                     },
//                   }}
//                 >
//                   {/* Card Header with Image */}
//                   <Box sx={{ position: 'relative', height: 180, overflow: 'hidden' }}>
//                     <img
//                       src={service.imageUrl}
//                       alt={service.title}
//                       style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//                     />
//                     <Box
//                       sx={{
//                         position: 'absolute',
//                         top: 0,
//                         left: 0,
//                         right: 0,
//                         bottom: 0,
//                         background: 'linear-gradient(to bottom, transparent 50%, rgba(15, 23, 42, 0.9) 100%)',
//                       }}
//                     />
//                     <Box sx={{ position: 'absolute', top: 16, right: 16 }}>
//                       <Box
//                         sx={{
//                           width: 60,
//                           height: 60,
//                           backgroundColor: alpha(theme.palette.primary.main, 0.9),
//                           backdropFilter: 'blur(10px)',
//                           borderRadius: '50%',
//                           display: 'flex',
//                           alignItems: 'center',
//                           justifyContent: 'center',
//                           color: 'white',
//                           border: '2px solid white',
//                         }}
//                       >
//                         {service.icon}
//                       </Box>
//                     </Box>
//                     {service.badge && (
//                       <Chip
//                         label={service.badge}
//                         size="small"
//                         sx={{
//                           position: 'absolute',
//                           bottom: 16,
//                           left: 16,
//                           backgroundColor: theme.palette.mode === 'dark' ? 'primary.dark' : 'primary.main',
//                           color: 'white',
//                           fontWeight: 'bold',
//                         }}
//                       />
//                     )}
//                   </Box>

//                   <CardContent sx={{ flexGrow: 1, p: 4 }}>
//                     <Typography variant="h5" gutterBottom fontWeight={700}>
//                       {service.title}
//                     </Typography>
//                     <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 3 }}>
//                       {service.description}
//                     </Typography>
//                     <List dense disablePadding>
//                       {service.features.map((feature, idx) => (
//                         <ListItem key={idx} disableGutters disablePadding sx={{ py: 0.5 }}>
//                           <ListItemIcon sx={{ minWidth: 36 }}>
//                             <CheckIcon sx={{ color: 'primary.main', fontSize: 20 }} />
//                           </ListItemIcon>
//                           <ListItemText
//                             primary={feature}
//                             primaryTypographyProps={{ variant: 'body2', fontWeight: 500 }}
//                           />
//                         </ListItem>
//                       ))}
//                     </List>
//                   </CardContent>
//                   <CardActions sx={{ p: 3, pt: 0 }}>
//                     <Button
//                       variant="outlined"
//                       fullWidth
//                       href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
//                       sx={{
//                         borderColor: 'primary.main',
//                         color: 'primary.main',
//                         '&:hover': {
//                           borderColor: 'primary.dark',
//                           backgroundColor: alpha(theme.palette.primary.main, 0.04),
//                         },
//                       }}
//                     >
//                       Explore Case Studies
//                     </Button>
//                   </CardActions>
//                 </Card>
//               </motion.div>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>

//       {/* Tech Stack Section */}
//       <Box sx={{ backgroundColor: 'grey.50', py: 8 }}>
//         <Container maxWidth="md">
//           <Typography variant="h5" gutterBottom fontWeight={600} sx={{ textAlign: 'center', mb: 1 }}>
//             Built With Best-in-Class Technology
//           </Typography>
//           <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center', mb: 6, maxWidth: 600, mx: 'auto' }}>
//             Our solutions leverage the leading frameworks and platforms in the AI ecosystem.
//           </Typography>
//           <Grid container spacing={2} justifyContent="center">
//             {techStack.map((tech, index) => (
//               <Grid item key={index}>
//                 <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                   <Chip
//                     label={tech.name}
//                     sx={{
//                       px: 3,
//                       py: 1.5,
//                       backgroundColor: tech.color,
//                       color: 'white',
//                       fontWeight: 600,
//                       fontSize: '0.9rem',
//                     }}
//                   />
//                 </motion.div>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//       </Box>

//       {/* CTA Section */}
//       <Box
//         sx={{
//           background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
//           py: 10,
//           textAlign: 'center',
//           color: 'white',
//         }}
//       >
//         <Container maxWidth="md">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <Typography variant="h2" gutterBottom fontWeight={700}>
//               Transform Your Business with AI
//             </Typography>
//             <Typography variant="h5" sx={{ mb: 5, opacity: 0.9, fontWeight: 400 }}>
//               Schedule a discovery session with our AI architects. We'll analyze your needs and outline a actionable roadmap.
//             </Typography>
//             <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
//               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                 <Button
//                   variant="contained"
//                   size="large"
//                   href="/contact"
//                   sx={{
//                     backgroundColor: 'white',
//                     color: 'primary.dark',
//                     px: 5,
//                     py: 1.5,
//                     fontSize: '1.1rem',
//                     fontWeight: 600,
//                     borderRadius: 2,
//                     '&:hover': {
//                       backgroundColor: 'grey.100',
//                     },
//                   }}
//                 >
//                   Start Your AI Journey
//                 </Button>
//               </motion.div>
//               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                 <Button
//                   variant="outlined"
//                   size="large"
//                   href="#"
//                   onClick={handleVideoOpen}
//                   startIcon={<PlayIcon />}
//                   sx={{
//                     borderColor: 'white',
//                     color: 'white',
//                     px: 4,
//                     py: 1.5,
//                     fontSize: '1.1rem',
//                     borderRadius: 2,
//                   }}
//                 >
//                   Watch Client Success Story
//                 </Button>
//               </motion.div>
//             </Box>
//           </motion.div>
//         </Container>
//       </Box>

//       {/* Video Dialog */}
//       <Dialog
//         open={videoOpen}
//         onClose={handleVideoClose}
//         maxWidth="md"
//         fullWidth
//         scroll="body"
//       >
//         <DialogContent sx={{ p: 0, position: 'relative', backgroundColor: 'black' }}>
//           <IconButton
//             onClick={handleVideoClose}
//             sx={{
//               position: 'absolute',
//               top: 8,
//               right: 8,
//               zIndex: 1,
//               backgroundColor: 'rgba(0,0,0,0.5)',
//               color: 'white',
//               '&:hover': {
//                 backgroundColor: 'rgba(0,0,0,0.8)',
//               },
//             }}
//           >
//             <CloseIcon />
//           </IconButton>
//           {/* Video Player Placeholder */}
//           <Box
//             sx={{
//               width: '100%',
//               height: { xs: 300, md: 500 },
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               backgroundColor: '#000',
//               color: '#ccc',
//             }}
//           >
//             <Box sx={{ textAlign: 'center' }}>
//               <PlayIcon sx={{ fontSize: 60, mb: 2, opacity: 0.7 }} />
//               <Typography variant="h6">AI Services Platform Demo</Typography>
//               <Typography variant="body2" sx={{ mt: 1 }}>
//                 [Embed your company intro or product demo video here][citation:2][citation:6][citation:10]
//               </Typography>
//             </Box>
//             {/* Replace this Box with an actual <video> or iframe element when you have the video URL */}
//             {/* Example: 
//             <video controls style={{ width: '100%', height: '100%' }}>
//               <source src="/videos/platform-demo.mp4" type="video/mp4" />
//             </video>
//             */}
//           </Box>
//         </DialogContent>
//       </Dialog>
//     </Box>
//   );
// };

// // Helper icon component
// const TerminalIcon = (props) => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor" {...props}>
//     <path d="M20 4H4c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm0 14H4V8h16v10zm-8-2l4-4-4-4-1.41 1.41L11.17 12l-2.58 2.59L8 16z"/>
//   </svg>
// );

// export default Services;


// import React, { useState } from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   CardActions,
//   Button,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   useTheme,
//   useMediaQuery,
//   IconButton,
//   Dialog,
//   DialogContent,
//   Chip,
//   alpha,
// } from '@mui/material';
// import {
//   CheckCircle as CheckIcon,
//   Analytics as AnalyticsIcon,
//   Psychology as AiIcon,
//   Dataset as DataIcon,
//   Security as SecurityIcon,
//   SupportAgent as SupportIcon,
//   CloudQueue as CloudIcon,
//   PlayCircle as PlayIcon,
//   Close as CloseIcon,
//   Bolt as BoltIcon,
//   Code as CodeIcon,
//   AutoGraph as AutoGraphIcon,
// } from '@mui/icons-material';
// import { motion } from 'framer-motion';

// const Services = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
//   const [videoOpen, setVideoOpen] = useState(false);

//   const handleVideoOpen = () => setVideoOpen(true);
//   const handleVideoClose = () => setVideoOpen(false);

//   // Embedded YouTube video IDs - ye directly chalenge
//   const serviceVideos = {
//     'ai-analytics': 'dQw4w9WgXcQ', // AI Analytics demo
//     'cloud-solutions': 'jNQXAC9IVRw', // Cloud AI demo
//     'security': '9bZkp7q19f0', // AI Security demo
//   };

//   const services = [
//     {
//       id: 'ai-analytics',
//       icon: <AiIcon sx={{ fontSize: 40 }} />,
//       title: 'AI-Powered Analytics',
//       description: 'Transform raw data into predictive insights with real-time machine learning models.',
//       features: [
//         'Predictive Trend Forecasting',
//         'Real-time Decision Engines',
//         'Automated KPI Dashboards',
//         'Natural Language Data Querying',
//       ],
//       imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop',
//       videoId: serviceVideos['ai-analytics'],
//       badge: 'Most Popular',
//     },
//     {
//       id: 'cloud-solutions',
//       icon: <CloudIcon sx={{ fontSize: 40 }} />,
//       title: 'Intelligent Cloud AI',
//       description: 'Fully-managed cloud infrastructure optimized for AI workloads at scale.',
//       features: [
//         'AI Model Serving & APIs',
//         'GPU-Accelerated Instances',
//         'Auto-scaling Inference Pipelines',
//         'Multi-cloud Hybrid Deployments',
//       ],
//       imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=300&fit=crop',
//       videoId: serviceVideos['cloud-solutions'],
//       badge: 'Enterprise',
//     },
//     {
//       id: 'security',
//       icon: <SecurityIcon sx={{ fontSize: 40 }} />,
//       title: 'AI Security & Governance',
//       description: 'Secure your AI assets with robust governance frameworks and adversarial protection.',
//       features: [
//         'AI Model Vulnerability Scanning',
//         'Explainable AI (XAI) Reports',
//         'Data Anonymization & Compliance',
//         'Real-time Threat Detection',
//       ],
//       imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=300&fit=crop',
//       videoId: serviceVideos['security'],
//     },
//     {
//       id: 'custom-ai',
//       icon: <CodeIcon sx={{ fontSize: 40 }} />,
//       title: 'Custom AI Integration',
//       description: 'Tailored integration of AI capabilities into your existing workflows and systems.',
//       features: [
//         'Custom Large Language Models (LLMs)',
//         'Computer Vision API Development',
//         'RPA & Workflow Automation',
//         'Legacy System Modernization',
//       ],
//       imageUrl: 'https://images.unsplash.com/photo-1619410283995-43d9134e7656?w=600&h=300&fit=crop',
//       badge: 'Custom',
//     },
//     {
//       id: 'data-intelligence',
//       icon: <DataIcon sx={{ fontSize: 40 }} />,
//       title: 'Data Intelligence Engine',
//       description: 'End-to-end solutions for structuring data and building knowledge graphs.',
//       features: [
//         'Intelligent Document Processing',
//         'Unified Customer Data Platforms',
//         'Knowledge Graph Construction',
//         'Automated Data Labeling',
//       ],
//       imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=300&fit=crop',
//     },
//     {
//       id: 'ai-strategy',
//       icon: <SupportIcon sx={{ fontSize: 40 }} />,
//       title: 'AI Strategy & Support',
//       description: 'From AI roadmap to ongoing optimization and 24/7 ML Ops support.',
//       features: [
//         'AI Opportunity Assessment',
//         'Proof-of-Concept Development',
//         'Dedicated ML Ops Engineers',
//         'Model Performance Monitoring',
//       ],
//       imageUrl: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=600&h=300&fit=crop',
//       badge: 'Advisory',
//     },
//   ];

//   // Live Demo Videos Section
//   const demoVideos = [
//     {
//       title: 'AI Platform Overview',
//       description: 'See how our AI platform transforms business operations',
//       videoId: 'dQw4w9WgXcQ',
//       thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
//     },
//     {
//       title: 'Client Success Story',
//       description: 'How Company X increased efficiency by 300% with our AI',
//       videoId: 'jNQXAC9IVRw',
//       thumbnail: 'https://img.youtube.com/vi/jNQXAC9IVRw/maxresdefault.jpg',
//     },
//     {
//       title: 'Technical Deep Dive',
//       description: 'Behind the scenes of our machine learning infrastructure',
//       videoId: '9bZkp7q19f0',
//       thumbnail: 'https://img.youtube.com/vi/9bZkp7q19f0/maxresdefault.jpg',
//     },
//   ];

//   const VideoPlayer = ({ videoId }) => (
//     <Box
//       sx={{
//         width: '100%',
//         height: { xs: 250, md: 400 },
//         backgroundColor: '#000',
//         borderRadius: 2,
//         overflow: 'hidden',
//       }}
//     >
//       <iframe
//         width="100%"
//         height="100%"
//         src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1&modestbranding=1`}
//         title="YouTube video player"
//         frameBorder="0"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//         allowFullScreen
//       />
//     </Box>
//   );

//   return (
//     <Box>
//       {/* Hero Section with Live Background Video */}
//       <Box
//         sx={{
//           position: 'relative',
//           color: 'white',
//           py: { xs: 10, md: 15 },
//           textAlign: 'center',
//           overflow: 'hidden',
//         }}
//       >
//         {/* Background Video */}
//         <Box
//           sx={{
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             zIndex: -1,
//             backgroundColor: '#0f172a',
//           }}
//         >
//           <iframe
//             width="100%"
//             height="100%"
//             src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&playlist=dQw4w9WgXcQ"
//             title="Background Video"
//             frameBorder="0"
//             allow="autoplay; encrypted-media"
//             style={{
//               position: 'absolute',
//               top: '50%',
//               left: '50%',
//               width: '100%',
//               height: '100%',
//               transform: 'translate(-50%, -50%)',
//               objectFit: 'cover',
//               opacity: 0.3,
//             }}
//           />
//           <Box
//             sx={{
//               position: 'absolute',
//               top: 0,
//               left: 0,
//               right: 0,
//               bottom: 0,
//               background: 'linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.95))',
//             }}
//           />
//         </Box>

//         <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//           >
//             <Chip
//               icon={<BoltIcon />}
//               label="LIVE AI DEMO"
//               sx={{
//                 mb: 3,
//                 backgroundColor: alpha(theme.palette.primary.main, 0.3),
//                 color: 'white',
//                 fontWeight: 600,
//                 fontSize: '0.9rem',
//                 py: 1,
//               }}
//             />
//             <Typography
//               variant="h1"
//               gutterBottom
//               sx={{
//                 fontSize: isMobile ? '2.8rem' : '4.2rem',
//                 fontWeight: 900,
//                 background: 'linear-gradient(90deg, #60a5fa 30%, #38bdf8 90%)',
//                 backgroundClip: 'text',
//                 WebkitBackgroundClip: 'text',
//                 color: 'transparent',
//                 lineHeight: 1.1,
//                 textShadow: '0 2px 10px rgba(56, 189, 248, 0.3)',
//               }}
//             >
//               See AI in Action
//             </Typography>
//             <Typography
//               variant="h4"
//               sx={{
//                 maxWidth: 800,
//                 mx: 'auto',
//                 mb: 5,
//                 opacity: 0.95,
//                 fontWeight: 300,
//                 fontSize: isMobile ? '1.5rem' : '2rem',
//               }}
//             >
//               Live demonstrations of our AI transforming real business processes
//             </Typography>
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <Button
//                 variant="contained"
//                 size="large"
//                 startIcon={<PlayIcon />}
//                 onClick={handleVideoOpen}
//                 sx={{
//                   background: 'linear-gradient(90deg, #3b82f6 0%, #1d4ed8 100%)',
//                   px: 5,
//                   py: 2,
//                   fontSize: '1.2rem',
//                   borderRadius: 3,
//                   fontWeight: 600,
//                   boxShadow: '0 10px 30px rgba(59, 130, 246, 0.5)',
//                 }}
//               >
//                 ▶ Play Full Demo
//               </Button>
//             </motion.div>
//           </motion.div>
//         </Container>
//       </Box>

//       {/* Live Demo Videos Section */}
//       <Container maxWidth="xl" sx={{ py: 10 }}>
//         <Typography
//           variant="h2"
//           gutterBottom
//           fontWeight={800}
//           sx={{ textAlign: 'center', mb: 1, color: 'primary.main' }}
//         >
//           Watch AI Work Live
//         </Typography>
//         <Typography variant="h6" sx={{ textAlign: 'center', mb: 8, color: 'text.secondary' }}>
//           Real demonstrations of our AI solving complex business problems
//         </Typography>
        
//         <Grid container spacing={4}>
//           {demoVideos.map((video, index) => (
//             <Grid item xs={12} md={4} key={index}>
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//               >
//                 <Card
//                   sx={{
//                     borderRadius: 3,
//                     overflow: 'hidden',
//                     transition: 'all 0.3s ease',
//                     '&:hover': {
//                       transform: 'translateY(-5px)',
//                       boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
//                     },
//                   }}
//                 >
//                   {/* Video Thumbnail with Play Button */}
//                   <Box sx={{ position: 'relative', cursor: 'pointer' }} onClick={() => window.open(`https://youtube.com/watch?v=${video.videoId}`, '_blank')}>
//                     <Box
//                       component="img"
//                       src={video.thumbnail}
//                       alt={video.title}
//                       sx={{
//                         width: '100%',
//                         height: 200,
//                         objectFit: 'cover',
//                         filter: 'brightness(0.9)',
//                       }}
//                     />
//                     <Box
//                       sx={{
//                         position: 'absolute',
//                         top: 0,
//                         left: 0,
//                         right: 0,
//                         bottom: 0,
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         backgroundColor: 'rgba(0,0,0,0.3)',
//                         transition: 'background-color 0.3s',
//                         '&:hover': {
//                           backgroundColor: 'rgba(0,0,0,0.5)',
//                         },
//                       }}
//                     >
//                       <Box
//                         sx={{
//                           width: 60,
//                           height: 60,
//                           backgroundColor: 'rgba(255,255,255,0.9)',
//                           borderRadius: '50%',
//                           display: 'flex',
//                           alignItems: 'center',
//                           justifyContent: 'center',
//                         }}
//                       >
//                         <PlayIcon sx={{ fontSize: 40, color: '#ff0000' }} />
//                       </Box>
//                     </Box>
//                   </Box>
//                   <CardContent>
//                     <Typography variant="h6" fontWeight={700} gutterBottom>
//                       {video.title}
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary">
//                       {video.description}
//                     </Typography>
//                   </CardContent>
//                   <CardActions sx={{ p: 2, pt: 0 }}>
//                     <Button
//                       size="small"
//                       startIcon={<PlayIcon />}
//                       onClick={() => window.open(`https://youtube.com/watch?v=${video.videoId}`, '_blank')}
//                     >
//                       Watch Now
//                     </Button>
//                   </CardActions>
//                 </Card>
//               </motion.div>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>

//       {/* Services Grid with Video Icons */}
//       <Box sx={{ backgroundColor: '#f8fafc', py: 10 }}>
//         <Container maxWidth="xl">
//           <Typography
//             variant="h2"
//             gutterBottom
//             fontWeight={800}
//             sx={{ textAlign: 'center', mb: 8, color: 'primary.main' }}
//           >
//             Interactive Service Demos
//           </Typography>
          
//           <Grid container spacing={4}>
//             {services.map((service, index) => (
//               <Grid item xs={12} md={6} lg={4} key={index}>
//                 <motion.div
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                 >
//                   <Card
//                     sx={{
//                       height: '100%',
//                       borderRadius: 3,
//                       overflow: 'hidden',
//                       transition: 'all 0.3s ease',
//                       border: '1px solid',
//                       borderColor: 'divider',
//                       '&:hover': {
//                         transform: 'translateY(-8px)',
//                         borderColor: 'primary.main',
//                         boxShadow: '0 20px 40px rgba(59, 130, 246, 0.15)',
//                       },
//                     }}
//                   >
//                     {/* Service Image with Video Play Button */}
//                     <Box sx={{ position: 'relative', height: 200 }}>
//                       <img
//                         src={service.imageUrl}
//                         alt={service.title}
//                         style={{
//                           width: '100%',
//                           height: '100%',
//                           objectFit: 'cover',
//                         }}
//                       />
//                       {/* Video Play Overlay */}
//                       {service.videoId && (
//                         <IconButton
//                           sx={{
//                             position: 'absolute',
//                             top: '50%',
//                             left: '50%',
//                             transform: 'translate(-50%, -50%)',
//                             backgroundColor: 'rgba(255, 0, 0, 0.9)',
//                             width: 60,
//                             height: 60,
//                             '&:hover': {
//                               backgroundColor: '#ff0000',
//                             },
//                           }}
//                           onClick={() => window.open(`https://youtube.com/watch?v=${service.videoId}`, '_blank')}
//                         >
//                           <PlayIcon sx={{ fontSize: 30, color: 'white' }} />
//                         </IconButton>
//                       )}
//                     </Box>
                    
//                     <CardContent sx={{ p: 3 }}>
//                       <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
//                         <Box
//                           sx={{
//                             width: 50,
//                             height: 50,
//                             backgroundColor: alpha(theme.palette.primary.main, 0.1),
//                             borderRadius: '12px',
//                             display: 'flex',
//                             alignItems: 'center',
//                             justifyContent: 'center',
//                             color: 'primary.main',
//                             mr: 2,
//                           }}
//                         >
//                           {service.icon}
//                         </Box>
//                         <Box sx={{ flex: 1 }}>
//                           <Typography variant="h6" fontWeight={700}>
//                             {service.title}
//                           </Typography>
//                           {service.badge && (
//                             <Chip
//                               label={service.badge}
//                               size="small"
//                               sx={{
//                                 backgroundColor: alpha(theme.palette.primary.main, 0.1),
//                                 color: 'primary.main',
//                                 fontWeight: 600,
//                                 height: 20,
//                                 fontSize: '0.7rem',
//                               }}
//                             />
//                           )}
//                         </Box>
//                       </Box>
                      
//                       <Typography variant="body2" color="text.secondary" paragraph sx={{ mb: 2 }}>
//                         {service.description}
//                       </Typography>
                      
//                       <List dense disablePadding>
//                         {service.features.map((feature, idx) => (
//                           <ListItem key={idx} disableGutters disablePadding sx={{ py: 0.5 }}>
//                             <ListItemIcon sx={{ minWidth: 30 }}>
//                               <CheckIcon sx={{ color: 'primary.main', fontSize: 18 }} />
//                             </ListItemIcon>
//                             <ListItemText
//                               primary={feature}
//                               primaryTypographyProps={{ variant: 'body2' }}
//                             />
//                           </ListItem>
//                         ))}
//                       </List>
//                     </CardContent>
                    
//                     <CardActions sx={{ p: 2, pt: 0 }}>
//                       <Button
//                         variant="outlined"
//                         size="small"
//                         startIcon={<PlayIcon />}
//                         onClick={() => service.videoId && window.open(`https://youtube.com/watch?v=${service.videoId}`, '_blank')}
//                         sx={{ mr: 1 }}
//                       >
//                         Watch Demo
//                       </Button>
//                       <Button
//                         variant="contained"
//                         size="small"
//                         sx={{ flex: 1 }}
//                       >
//                         Get Quote
//                       </Button>
//                     </CardActions>
//                   </Card>
//                 </motion.div>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//       </Box>

//       {/* Main Demo Video Section */}
//       <Container maxWidth="lg" sx={{ py: 10 }}>
//         <Typography
//           variant="h2"
//           gutterBottom
//           fontWeight={800}
//           sx={{ textAlign: 'center', mb: 2, color: 'primary.main' }}
//         >
//           Full Platform Walkthrough
//         </Typography>
//         <Typography variant="h6" sx={{ textAlign: 'center', mb: 6, color: 'text.secondary' }}>
//           15-minute comprehensive demo of our AI enterprise platform
//         </Typography>
        
//         <VideoPlayer videoId="dQw4w9WgXcQ" />
        
//         <Box sx={{ textAlign: 'center', mt: 4 }}>
//           <Button
//             variant="contained"
//             size="large"
//             startIcon={<PlayIcon />}
//             onClick={() => window.open('https://youtube.com/watch?v=dQw4w9WgXcQ', '_blank')}
//             sx={{
//               backgroundColor: '#ff0000',
//               '&:hover': {
//                 backgroundColor: '#cc0000',
//               },
//               px: 4,
//               py: 1.5,
//             }}
//           >
//             Watch on YouTube
//           </Button>
//         </Box>
//       </Container>

//       {/* Video Dialog for Fullscreen */}
//       <Dialog
//         open={videoOpen}
//         onClose={handleVideoClose}
//         maxWidth="md"
//         fullWidth
//         sx={{
//           '& .MuiDialog-paper': {
//             backgroundColor: 'transparent',
//             boxShadow: 'none',
//             overflow: 'hidden',
//           },
//         }}
//       >
//         <DialogContent sx={{ p: 0, position: 'relative' }}>
//           <IconButton
//             onClick={handleVideoClose}
//             sx={{
//               position: 'absolute',
//               top: 8,
//               right: 8,
//               zIndex: 1,
//               backgroundColor: 'rgba(0,0,0,0.7)',
//               color: 'white',
//               '&:hover': {
//                 backgroundColor: 'rgba(0,0,0,0.9)',
//               },
//             }}
//           >
//             <CloseIcon />
//           </IconButton>
//           <VideoPlayer videoId="dQw4w9WgXcQ" />
//         </DialogContent>
//       </Dialog>
//     </Box>
//   );
// };

// export default Services;

// import React, { useState } from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   CardActions,
//   Button,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   useTheme,
//   useMediaQuery,
//   Chip,
//   alpha,
//   Avatar,
// } from '@mui/material';
// import {
//   CheckCircle as CheckIcon,
//   SmartToy as AiChatbotIcon,
//   Psychology as LlmIcon,
//   Visibility as VisionIcon,
//   TrendingUp as AnalyticsIcon,
//   Build as CustomAiIcon,
//   PhoneAndroid as MobileIcon,
//   Language as PwaIcon,
//   Computer as WebAppIcon,
//   Palette as UxIcon,
//   Storage as BackendIcon,
//   RocketLaunch as WebflowIcon,
//   Description as WordPressIcon, // ✅ Using Description icon as WordPress alternative
//   Code as CodeIcon,
//   LocalHospital as HealthIcon,
//   ShoppingCart as EcommerceIcon,
//   School as EducationIcon,
//   Home as RealEstateIcon,
//   LocalShipping as LogisticsIcon,
//   Bolt as BoltIcon,
//   Handshake as HandshakeIcon,
// } from '@mui/icons-material';
// import { motion } from 'framer-motion';

// const Services = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

//   // AI Services Data (ZenturioTech AI Services Section)
//   const aiServices = [
//     {
//       icon: <AiChatbotIcon sx={{ fontSize: 35 }} />,
//       title: 'AI Chatbots & Virtual Assistants',
//       description: 'Automate customer service with human-like, 24/7 support.',
//       features: [
//         'Natural language understanding',
//         'Multi-channel integration',
//         'Context-aware conversations',
//         'Seamless handoff to human agents',
//       ],
//       imageUrl: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=300&fit=crop',
//       badge: '24/7 Support',
//     },
//     {
//       icon: <LlmIcon sx={{ fontSize: 35 }} />,
//       title: 'LLM & Agentic AI Integration',
//       description: 'Build systems that can reason, adapt, and learn continuously.',
//       features: [
//         'Custom fine-tuned language models',
//         'Autonomous agent development',
//         'Retrieval-augmented generation (RAG)',
//         'Continuous learning pipelines',
//       ],
//       imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=300&fit=crop',
//       badge: 'Advanced AI',
//     },
//     {
//       icon: <VisionIcon sx={{ fontSize: 35 }} />,
//       title: 'Computer Vision Applications',
//       description: 'Enable real-time image recognition, defect detection, and object tracking.',
//       features: [
//         'Real-time object detection',
//         'Quality inspection systems',
//         'Facial recognition solutions',
//         'Autonomous navigation',
//       ],
//       imageUrl: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=300&fit=crop',
//       badge: 'Real-time',
//     },
//     {
//       icon: <AnalyticsIcon sx={{ fontSize: 35 }} />,
//       title: 'Predictive Analytics & Machine Learning',
//       description: 'Make data-driven decisions using custom ML models.',
//       features: [
//         'Custom predictive models',
//         'Anomaly detection systems',
//         'Recommendation engines',
//         'Time-series forecasting',
//       ],
//       imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop',
//       badge: 'Data-driven',
//     },
//     {
//       icon: <CustomAiIcon sx={{ fontSize: 35 }} />,
//       title: 'Custom AI Development',
//       description: 'End-to-end AI solutions designed for your business workflow.',
//       features: [
//         'Complete AI solution design',
//         'Workflow automation',
//         'Legacy system AI integration',
//         'End-to-end implementation',
//       ],
//       imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=300&fit=crop',
//       badge: 'Custom',
//     },
//   ];

//   // Industries We Serve
//   const industries = [
//     { name: 'Healthcare', icon: <HealthIcon />, color: '#10B981' },
//     { name: 'E-commerce', icon: <EcommerceIcon />, color: '#3B82F6' },
//     { name: 'Education', icon: <EducationIcon />, color: '#8B5CF6' },
//     { name: 'Real Estate', icon: <RealEstateIcon />, color: '#F59E0B' },
//     { name: 'Logistics', icon: <LogisticsIcon />, color: '#EF4444' },
//   ];

//   // Web & Mobile App Services (ZenturioTech Web & Mobile Section)
//   const webMobileServices = [
//     {
//       category: 'Web & Mobile App Development',
//       services: [
//         {
//           icon: <MobileIcon sx={{ fontSize: 30 }} />,
//           title: 'Mobile App Development (iOS & Android)',
//           description: 'Native and cross-platform apps built for performance.',
//         },
//         {
//           icon: <PwaIcon sx={{ fontSize: 30 }} />,
//           title: 'Progressive Web Apps (PWAs)',
//           description: 'Responsive, lightweight web apps that work across all devices.',
//         },
//         {
//           icon: <WebAppIcon sx={{ fontSize: 30 }} />,
//           title: 'Custom Web Applications',
//           description: 'Tailored portals, dashboards, and platforms that scale with your needs.',
//         },
//         {
//           icon: <UxIcon sx={{ fontSize: 30 }} />,
//           title: 'UI/UX Design & Prototyping',
//           description: 'Engaging interfaces designed for usability and conversion.',
//         },
//         {
//           icon: <BackendIcon sx={{ fontSize: 30 }} />,
//           title: 'Backend & API Development',
//           description: 'Robust, scalable systems built on secure architecture.',
//         },
//       ],
//     },
//     {
//       category: 'Webflow Development',
//       services: [
//         {
//           icon: <WebflowIcon sx={{ fontSize: 30 }} />,
//           title: 'Get modern, responsive, and lightning-fast websites',
//           description: 'Ideal for businesses that value design freedom and CMS flexibility.',
//         },
//       ],
//       features: [
//         'Pixel-perfect design implementation',
//         'Custom animations & interactions',
//         'CMS for dynamic content',
//         'Fast, secure, and SEO-ready',
//         'No-code handover for marketing teams',
//       ],
//     },
//     {
//       category: 'WordPress Development',
//       services: [
//         {
//           icon: <WordPressIcon sx={{ fontSize: 30 }} />, // ✅ Using Description icon
//           title: 'Power your business with custom WordPress websites',
//           description: 'The world\'s most popular CMS platform.',
//         },
//       ],
//       features: [
//         'Custom theme development',
//         'WooCommerce integration',
//         'SEO optimization & plugin setup',
//         'Blog and content management system',
//         'Easy backend management',
//       ],
//     },
//     {
//       category: 'Custom-Coded Websites',
//       services: [
//         {
//           icon: <CodeIcon sx={{ fontSize: 30 }} />,
//           title: 'Fully custom-coded websites',
//           description: 'For businesses with unique needs or complex functionality.',
//         },
//       ],
//       features: [
//         'HTML5, CSS3, JavaScript, Bootstrap',
//         'React.js / Next.js web apps',
//         'API integration & backend development',
//         'Optimized for speed and scalability',
//         'Highly flexible UI/UX',
//       ],
//     },
//   ];

//   return (
//     <Box>
//       {/* Hero Section - Simplified (YouTube videos removed) */}
//       <Box
//         sx={{
//           background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
//           color: 'white',
//           py: { xs: 10, md: 15 },
//           textAlign: 'center',
//           position: 'relative',
//           overflow: 'hidden',
//         }}
//       >
//         <Box
//           sx={{
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             background: `url('https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&q=80')`,
//             backgroundSize: 'cover',
//             opacity: 0.1,
//           }}
//         />
//         <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//           >
//             <Chip
//               icon={<BoltIcon />}
//               label="ENTERPRISE SOLUTIONS"
//               sx={{
//                 mb: 3,
//                 backgroundColor: alpha(theme.palette.primary.main, 0.3),
//                 color: 'white',
//                 fontWeight: 600,
//                 fontSize: '0.9rem',
//                 py: 1,
//               }}
//             />
//             <Typography
//               variant="h1"
//               gutterBottom
//               sx={{
//                 fontSize: isMobile ? '2.8rem' : '4rem',
//                 fontWeight: 900,
//                 background: 'linear-gradient(90deg, #60a5fa 30%, #38bdf8 90%)',
//                 backgroundClip: 'text',
//                 WebkitBackgroundClip: 'text',
//                 color: 'transparent',
//                 lineHeight: 1.1,
//               }}
//             >
//               NexusAI Services
//             </Typography>
//             <Typography
//               variant="h4"
//               sx={{
//                 maxWidth: 800,
//                 mx: 'auto',
//                 mb: 5,
//                 opacity: 0.95,
//                 fontWeight: 300,
//                 fontSize: isMobile ? '1.5rem' : '2rem',
//               }}
//             >
//               Complete AI, Web, and Mobile Solutions for Modern Businesses
//             </Typography>
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <Button
//                 variant="contained"
//                 size="large"
//                 href="#ai-services"
//                 sx={{
//                   background: 'linear-gradient(90deg, #3b82f6 0%, #1d4ed8 100%)',
//                   px: 5,
//                   py: 2,
//                   fontSize: '1.1rem',
//                   borderRadius: 3,
//                   fontWeight: 600,
//                 }}
//               >
//                 Explore Our Services
//               </Button>
//             </motion.div>
//           </motion.div>
//         </Container>
//       </Box>

//       {/* AI Services Section (ZenturioTech AI Services) */}
//       <Container id="ai-services" maxWidth="xl" sx={{ py: 10 }}>
//         <Box sx={{ textAlign: 'center', mb: 8 }}>
//           <Chip
//             label="ARTIFICIAL INTELLIGENCE"
//             sx={{
//               backgroundColor: alpha(theme.palette.primary.main, 0.1),
//               color: 'primary.main',
//               fontWeight: 700,
//               fontSize: '1rem',
//               py: 1,
//               px: 3,
//               mb: 2,
//             }}
//           />
//           <Typography
//             variant="h2"
//             gutterBottom
//             fontWeight={800}
//             sx={{ color: 'primary.main' }}
//           >
//             AI Integration Services
//           </Typography>
//           <Typography variant="h6" sx={{ color: 'text.secondary', maxWidth: 800, mx: 'auto' }}>
//             Transform your business with cutting-edge artificial intelligence solutions from NexusAI
//           </Typography>
//         </Box>

//         <Grid container spacing={4}>
//           {aiServices.map((service, index) => (
//             <Grid item xs={12} md={6} lg={4} key={index}>
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//               >
//                 <Card
//                   sx={{
//                     height: '100%',
//                     borderRadius: 3,
//                     overflow: 'hidden',
//                     transition: 'all 0.3s ease',
//                     border: '1px solid',
//                     borderColor: 'divider',
//                     '&:hover': {
//                       transform: 'translateY(-8px)',
//                       borderColor: 'primary.main',
//                       boxShadow: '0 20px 40px rgba(59, 130, 246, 0.15)',
//                     },
//                   }}
//                 >
//                   <Box sx={{ position: 'relative', height: 180 }}>
//                     <img
//                       src={service.imageUrl}
//                       alt={service.title}
//                       style={{
//                         width: '100%',
//                         height: '100%',
//                         objectFit: 'cover',
//                       }}
//                     />
//                     <Box
//                       sx={{
//                         position: 'absolute',
//                         top: 16,
//                         left: 16,
//                         width: 60,
//                         height: 60,
//                         backgroundColor: alpha(theme.palette.primary.main, 0.9),
//                         backdropFilter: 'blur(10px)',
//                         borderRadius: '12px',
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         color: 'white',
//                         border: '2px solid white',
//                       }}
//                     >
//                       {service.icon}
//                     </Box>
//                     {service.badge && (
//                       <Chip
//                         label={service.badge}
//                         size="small"
//                         sx={{
//                           position: 'absolute',
//                           top: 16,
//                           right: 16,
//                           backgroundColor: theme.palette.mode === 'dark' ? 'primary.dark' : 'primary.main',
//                           color: 'white',
//                           fontWeight: 'bold',
//                         }}
//                       />
//                     )}
//                   </Box>
                  
//                   <CardContent sx={{ p: 3 }}>
//                     <Typography variant="h5" fontWeight={700} gutterBottom>
//                       {service.title}
//                     </Typography>
//                     <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 3 }}>
//                       {service.description}
//                     </Typography>
//                     <List dense disablePadding>
//                       {service.features.map((feature, idx) => (
//                         <ListItem key={idx} disableGutters disablePadding sx={{ py: 0.5 }}>
//                           <ListItemIcon sx={{ minWidth: 30 }}>
//                             <CheckIcon sx={{ color: 'primary.main', fontSize: 18 }} />
//                           </ListItemIcon>
//                           <ListItemText
//                             primary={feature}
//                             primaryTypographyProps={{ variant: 'body2' }}
//                           />
//                         </ListItem>
//                       ))}
//                     </List>
//                   </CardContent>
//                   <CardActions sx={{ p: 3, pt: 0 }}>
//                     <Button
//                       variant="contained"
//                       fullWidth
//                       href="/contact"
//                       sx={{
//                         backgroundColor: 'primary.main',
//                         '&:hover': {
//                           backgroundColor: 'primary.dark',
//                         },
//                       }}
//                     >
//                       Get Started
//                     </Button>
//                   </CardActions>
//                 </Card>
//               </motion.div>
//             </Grid>
//           ))}
//         </Grid>

//         {/* Industries We Serve Section */}
//         <Box sx={{ mt: 12, textAlign: 'center' }}>
//           <Typography variant="h3" gutterBottom fontWeight={700} sx={{ color: 'primary.main', mb: 4 }}>
//             Industries We Serve
//           </Typography>
//           <Grid container spacing={3} justifyContent="center">
//             {industries.map((industry, index) => (
//               <Grid item key={index}>
//                 <motion.div
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <Card
//                     sx={{
//                       p: 3,
//                       borderRadius: 3,
//                       textAlign: 'center',
//                       minWidth: 150,
//                       backgroundColor: alpha(industry.color, 0.1),
//                       border: `2px solid ${alpha(industry.color, 0.2)}`,
//                     }}
//                   >
//                     <Avatar
//                       sx={{
//                         backgroundColor: industry.color,
//                         color: 'white',
//                         width: 60,
//                         height: 60,
//                         mx: 'auto',
//                         mb: 2,
//                       }}
//                     >
//                       {industry.icon}
//                     </Avatar>
//                     <Typography variant="h6" fontWeight={600}>
//                       {industry.name}
//                     </Typography>
//                   </Card>
//                 </motion.div>
//               </Grid>
//             ))}
//           </Grid>
//         </Box>
//       </Container>

//       {/* Web & Mobile App Development Section (ZenturioTech Style) */}
//       <Box sx={{ backgroundColor: '#f8fafc', py: 10 }}>
//         <Container maxWidth="xl">
//           <Box sx={{ textAlign: 'center', mb: 8 }}>
//             <Chip
//               label="TECHNOLOGY SOLUTIONS"
//               sx={{
//                 backgroundColor: alpha(theme.palette.secondary.main, 0.1),
//                 color: 'secondary.main',
//                 fontWeight: 700,
//                 fontSize: '1rem',
//                 py: 1,
//                 px: 3,
//                 mb: 2,
//               }}
//             />
//             <Typography
//               variant="h2"
//               gutterBottom
//               fontWeight={800}
//               sx={{ color: 'secondary.main' }}
//             >
//               Web & Mobile App Development
//             </Typography>
//             <Typography variant="h6" sx={{ color: 'text.secondary', maxWidth: 800, mx: 'auto' }}>
//               Comprehensive digital solutions to build your online presence and engage your customers
//             </Typography>
//           </Box>

//           {webMobileServices.map((category, categoryIndex) => (
//             <Box key={categoryIndex} sx={{ mb: categoryIndex < webMobileServices.length - 1 ? 8 : 0 }}>
//               <Typography
//                 variant="h4"
//                 gutterBottom
//                 fontWeight={700}
//                 sx={{ 
//                   color: 'text.primary',
//                   mb: 4,
//                   borderBottom: '2px solid',
//                   borderColor: 'divider',
//                   pb: 2,
//                 }}
//               >
//                 {category.category}
//               </Typography>
              
//               <Grid container spacing={4}>
//                 {category.services.map((service, serviceIndex) => (
//                   <Grid item xs={12} md={6} key={serviceIndex}>
//                     <motion.div
//                       initial={{ opacity: 0, x: -20 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       viewport={{ once: true }}
//                       transition={{ duration: 0.5, delay: serviceIndex * 0.1 }}
//                     >
//                       <Card
//                         sx={{
//                           p: 3,
//                           borderRadius: 3,
//                           height: '100%',
//                           border: '1px solid',
//                           borderColor: 'divider',
//                           transition: 'all 0.3s ease',
//                           '&:hover': {
//                             borderColor: 'secondary.main',
//                             backgroundColor: alpha(theme.palette.secondary.main, 0.02),
//                           },
//                         }}
//                       >
//                         <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
//                           <Box
//                             sx={{
//                               width: 50,
//                               height: 50,
//                               backgroundColor: alpha(theme.palette.secondary.main, 0.1),
//                               borderRadius: '12px',
//                               display: 'flex',
//                               alignItems: 'center',
//                               justifyContent: 'center',
//                               color: 'secondary.main',
//                               mr: 2,
//                               flexShrink: 0,
//                             }}
//                           >
//                             {service.icon}
//                           </Box>
//                           <Box>
//                             <Typography variant="h6" fontWeight={600} gutterBottom>
//                               {service.title}
//                             </Typography>
//                             <Typography variant="body2" color="text.secondary">
//                               {service.description}
//                             </Typography>
//                           </Box>
//                         </Box>
//                       </Card>
//                     </motion.div>
//                   </Grid>
//                 ))}
//               </Grid>

//               {/* Features List for Webflow, WordPress, Custom-Coded */}
//               {category.features && (
//                 <Box sx={{ mt: 4, pl: { xs: 0, md: 4 } }}>
//                   <Grid container spacing={2}>
//                     {category.features.map((feature, featureIndex) => (
//                       <Grid item xs={12} sm={6} md={4} key={featureIndex}>
//                         <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
//                           <CheckIcon sx={{ color: 'secondary.main', fontSize: 20, mr: 1.5 }} />
//                           <Typography variant="body2">{feature}</Typography>
//                         </Box>
//                       </Grid>
//                     ))}
//                   </Grid>
//                 </Box>
//               )}
//             </Box>
//           ))}
//         </Container>
//       </Box>

//       {/* CTA Section */}
//       <Box
//         sx={{
//           background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
//           py: 10,
//           textAlign: 'center',
//           color: 'white',
//         }}
//       >
//         <Container maxWidth="md">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <Typography variant="h2" gutterBottom fontWeight={700}>
//               Ready to Transform Your Business?
//             </Typography>
//             <Typography variant="h5" sx={{ mb: 5, opacity: 0.9, fontWeight: 400 }}>
//               Let's discuss how NexusAI can help you achieve your digital goals
//             </Typography>
//             <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
//               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                 <Button
//                   variant="contained"
//                   size="large"
//                   href="/contact"
//                   startIcon={<HandshakeIcon />}
//                   sx={{
//                     backgroundColor: 'white',
//                     color: 'primary.dark',
//                     px: 5,
//                     py: 1.5,
//                     fontSize: '1.1rem',
//                     fontWeight: 600,
//                     borderRadius: 2,
//                     '&:hover': {
//                       backgroundColor: 'grey.100',
//                     },
//                   }}
//                 >
//                   Get Free Consultation
//                 </Button>
//               </motion.div>
//               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                 <Button
//                   variant="outlined"
//                   size="large"
//                   href="/services"
//                   sx={{
//                     borderColor: 'white',
//                     color: 'white',
//                     px: 4,
//                     py: 1.5,
//                     fontSize: '1.1rem',
//                     borderRadius: 2,
//                   }}
//                 >
//                   View All Services
//                 </Button>
//               </motion.div>
//             </Box>
//           </motion.div>
//         </Container>
//       </Box>
//     </Box>
//   );
// };

// export default Services;

import React, { useState } from 'react';
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
  Chip,
  alpha,
  Avatar,
  Tabs,
  Tab,
  Paper,
  Stack,
  Divider,
} from '@mui/material';
import {
  CheckCircle as CheckIcon,
  SmartToy as AiChatbotIcon,
  Psychology as LlmIcon,
  Visibility as VisionIcon,
  TrendingUp as AnalyticsIcon,
  Build as CustomAiIcon,
  PhoneAndroid as MobileIcon,
  Language as PwaIcon,
  Computer as WebAppIcon,
  Palette as UxIcon,
  Storage as BackendIcon,
  RocketLaunch as WebflowIcon,
  Description as WordPressIcon,
  Code as CodeIcon,
  LocalHospital as HealthIcon,
  ShoppingCart as EcommerceIcon,
  School as EducationIcon,
  Home as RealEstateIcon,
  LocalShipping as LogisticsIcon,
  Bolt as BoltIcon,
  Handshake as HandshakeIcon,
  Web as WebIcon,
  Devices as DevicesIcon,
  DesignServices as DesignIcon,
  Api as ApiIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const Services = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  // AI Services Data
  const aiServices = [
    {
      icon: <AiChatbotIcon sx={{ fontSize: 35 }} />,
      title: 'AI Chatbots & Virtual Assistants',
      description: 'Automate customer service with human-like, 24/7 support.',
      features: [
        'Natural language understanding',
        'Multi-channel integration',
        'Context-aware conversations',
        'Seamless handoff to human agents',
      ],
      imageUrl: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=300&fit=crop',
      badge: '24/7 Support',
    },
    {
      icon: <LlmIcon sx={{ fontSize: 35 }} />,
      title: 'LLM & Agentic AI Integration',
      description: 'Build systems that can reason, adapt, and learn continuously.',
      features: [
        'Custom fine-tuned language models',
        'Autonomous agent development',
        'Retrieval-augmented generation (RAG)',
        'Continuous learning pipelines',
      ],
      imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=300&fit=crop',
      badge: 'Advanced AI',
    },
    {
      icon: <VisionIcon sx={{ fontSize: 35 }} />,
      title: 'Computer Vision Applications',
      description: 'Enable real-time image recognition, defect detection, and object tracking.',
      features: [
        'Real-time object detection',
        'Quality inspection systems',
        'Facial recognition solutions',
        'Autonomous navigation',
      ],
      imageUrl: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=300&fit=crop',
      badge: 'Real-time',
    },
    {
      icon: <AnalyticsIcon sx={{ fontSize: 35 }} />,
      title: 'Predictive Analytics & Machine Learning',
      description: 'Make data-driven decisions using custom ML models.',
      features: [
        'Custom predictive models',
        'Anomaly detection systems',
        'Recommendation engines',
        'Time-series forecasting',
      ],
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop',
      badge: 'Data-driven',
    },
    {
      icon: <CustomAiIcon sx={{ fontSize: 35 }} />,
      title: 'Custom AI Development',
      description: 'End-to-end AI solutions designed for your business workflow.',
      features: [
        'Complete AI solution design',
        'Workflow automation',
        'Legacy system AI integration',
        'End-to-end implementation',
      ],
      imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=300&fit=crop',
      badge: 'Custom',
    },
  ];

  // Industries We Serve
  const industries = [
    { name: 'Healthcare', icon: <HealthIcon />, color: '#10B981' },
    { name: 'E-commerce', icon: <EcommerceIcon />, color: '#3B82F6' },
    { name: 'Education', icon: <EducationIcon />, color: '#8B5CF6' },
    { name: 'Real Estate', icon: <RealEstateIcon />, color: '#F59E0B' },
    { name: 'Logistics', icon: <LogisticsIcon />, color: '#EF4444' },
  ];

  // Web & Mobile Development Tabs
  const developmentTabs = [
    {
      label: 'Web & Mobile Apps',
      icon: <DevicesIcon />,
      color: '#3B82F6',
      content: {
        services: [
          {
            title: 'Mobile App Development (iOS & Android)',
            description: 'Native and cross-platform apps built for performance.',
            icon: <MobileIcon />,
            features: ['iOS & Android native development', 'React Native & Flutter apps', 'App Store deployment', 'Performance optimization'],
          },
          {
            title: 'Progressive Web Apps (PWAs)',
            description: 'Responsive, lightweight web apps that work across all devices.',
            icon: <PwaIcon />,
            features: ['Offline functionality', 'Push notifications', 'Home screen installation', 'Cross-device compatibility'],
          },
          {
            title: 'Custom Web Applications',
            description: 'Tailored portals, dashboards, and platforms that scale with your needs.',
            icon: <WebAppIcon />,
            features: ['Enterprise web portals', 'Real-time dashboards', 'Admin panels', 'Scalable architecture'],
          },
          {
            title: 'UI/UX Design & Prototyping',
            description: 'Engaging interfaces designed for usability and conversion.',
            icon: <UxIcon />,
            features: ['User research & personas', 'Wireframing & prototyping', 'User testing', 'Design systems'],
          },
          {
            title: 'Backend & API Development',
            description: 'Robust, scalable systems built on secure architecture.',
            icon: <BackendIcon />,
            features: ['REST & GraphQL APIs', 'Microservices architecture', 'Database design', 'Cloud deployment'],
          },
        ],
      },
    },
    {
      label: 'Webflow',
      icon: <WebflowIcon />,
      color: '#10B981',
      content: {
        description: 'Get modern, responsive, and lightning-fast websites using Webflow — ideal for businesses that value design freedom and CMS flexibility.',
        features: [
          'Pixel-perfect design implementation',
          'Custom animations & interactions',
          'CMS for dynamic content',
          'Fast, secure, and SEO-ready',
          'No-code handover for marketing teams',
        ],
      },
    },
    {
      label: 'WordPress',
      icon: <WordPressIcon />,
      color: '#8B5CF6',
      content: {
        description: 'Power your business with custom WordPress websites — the world\'s most popular CMS platform.',
        features: [
          'Custom theme development',
          'WooCommerce integration',
          'SEO optimization & plugin setup',
          'Blog and content management system',
          'Easy backend management',
        ],
      },
    },
    {
      label: 'Custom Websites',
      icon: <CodeIcon />,
      color: '#F59E0B',
      content: {
        description: 'For businesses with unique needs or complex functionality, we offer fully custom-coded websites using the latest frameworks and technologies.',
        features: [
          'HTML5, CSS3, JavaScript, Bootstrap',
          'React.js / Next.js web apps',
          'API integration & backend development',
          'Optimized for speed and scalability',
          'Highly flexible UI/UX',
        ],
      },
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          color: 'white',
          py: { xs: 10, md: 15 },
          textAlign: 'center',
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
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Chip
              icon={<BoltIcon />}
              label="ENTERPRISE SOLUTIONS"
              sx={{
                mb: 3,
                backgroundColor: alpha(theme.palette.primary.main, 0.3),
                color: 'white',
                fontWeight: 600,
                fontSize: '0.9rem',
                py: 1,
              }}
            />
            <Typography
              variant="h1"
              gutterBottom
              sx={{
                fontSize: isMobile ? '2.8rem' : '4rem',
                fontWeight: 900,
                background: 'linear-gradient(90deg, #60a5fa 30%, #38bdf8 90%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                lineHeight: 1.1,
              }}
            >
              NexusAI Services
            </Typography>
            <Typography
              variant="h4"
              sx={{
                maxWidth: 800,
                mx: 'auto',
                mb: 5,
                opacity: 0.95,
                fontWeight: 300,
                fontSize: isMobile ? '1.5rem' : '2rem',
              }}
            >
              Complete AI, Web, and Mobile Solutions for Modern Businesses
            </Typography>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="contained"
                size="large"
                href="#ai-services"
                sx={{
                  background: 'linear-gradient(90deg, #3b82f6 0%, #1d4ed8 100%)',
                  px: 5,
                  py: 2,
                  fontSize: '1.1rem',
                  borderRadius: 3,
                  fontWeight: 600,
                }}
              >
                Explore Our Services
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </Box>

      {/* AI Services Section */}
      <Container id="ai-services" maxWidth="xl" sx={{ py: 10 }}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Chip
            label="ARTIFICIAL INTELLIGENCE"
            sx={{
              backgroundColor: alpha(theme.palette.primary.main, 0.1),
              color: 'primary.main',
              fontWeight: 700,
              fontSize: '1rem',
              py: 1,
              px: 3,
              mb: 2,
            }}
          />
          <Typography
            variant="h2"
            gutterBottom
            fontWeight={800}
            sx={{ color: 'primary.main' }}
          >
            AI Integration Services
          </Typography>
          <Typography variant="h6" sx={{ color: 'text.secondary', maxWidth: 800, mx: 'auto' }}>
            Transform your business with cutting-edge artificial intelligence solutions from NexusAI
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {aiServices.map((service, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    borderRadius: 3,
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    border: '1px solid',
                    borderColor: 'divider',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      borderColor: 'primary.main',
                      boxShadow: '0 20px 40px rgba(59, 130, 246, 0.15)',
                    },
                  }}
                >
                  <Box sx={{ position: 'relative', height: 180 }}>
                    <img
                      src={service.imageUrl}
                      alt={service.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 16,
                        left: 16,
                        width: 60,
                        height: 60,
                        backgroundColor: alpha(theme.palette.primary.main, 0.9),
                        backdropFilter: 'blur(10px)',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        border: '2px solid white',
                      }}
                    >
                      {service.icon}
                    </Box>
                    {service.badge && (
                      <Chip
                        label={service.badge}
                        size="small"
                        sx={{
                          position: 'absolute',
                          top: 16,
                          right: 16,
                          backgroundColor: theme.palette.mode === 'dark' ? 'primary.dark' : 'primary.main',
                          color: 'white',
                          fontWeight: 'bold',
                        }}
                      />
                    )}
                  </Box>
                  
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h5" fontWeight={700} gutterBottom>
                      {service.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 3 }}>
                      {service.description}
                    </Typography>
                    <List dense disablePadding>
                      {service.features.map((feature, idx) => (
                        <ListItem key={idx} disableGutters disablePadding sx={{ py: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: 30 }}>
                            <CheckIcon sx={{ color: 'primary.main', fontSize: 18 }} />
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
                      href="/contact"
                      sx={{
                        backgroundColor: 'primary.main',
                        '&:hover': {
                          backgroundColor: 'primary.dark',
                        },
                      }}
                    >
                      Get Started
                    </Button>
                  </CardActions>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Industries We Serve Section */}
        <Box sx={{ mt: 12, textAlign: 'center' }}>
          <Typography variant="h3" gutterBottom fontWeight={700} sx={{ color: 'primary.main', mb: 4 }}>
            Industries We Serve
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            {industries.map((industry, index) => (
              <Grid item xs={6} sm={4} md={2.4} key={index}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card
                    sx={{
                      p: 3,
                      borderRadius: 3,
                      textAlign: 'center',
                      backgroundColor: alpha(industry.color, 0.1),
                      border: `2px solid ${alpha(industry.color, 0.2)}`,
                      height: '100%',
                    }}
                  >
                    <Avatar
                      sx={{
                        backgroundColor: industry.color,
                        color: 'white',
                        width: 60,
                        height: 60,
                        mx: 'auto',
                        mb: 2,
                      }}
                    >
                      {industry.icon}
                    </Avatar>
                    <Typography variant="h6" fontWeight={600}>
                      {industry.name}
                    </Typography>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      {/* Web & Mobile Development Section - TABS SYSTEM */}
      <Box sx={{ backgroundColor: '#f8fafc', py: 10 }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Chip
              label="DIGITAL SOLUTIONS"
              sx={{
                backgroundColor: alpha(theme.palette.secondary.main, 0.1),
                color: 'secondary.main',
                fontWeight: 700,
                fontSize: '1rem',
                py: 1,
                px: 3,
                mb: 2,
              }}
            />
            <Typography
              variant="h2"
              gutterBottom
              fontWeight={800}
              sx={{ color: 'secondary.main' }}
            >
              Web & Mobile Development
            </Typography>
            <Typography variant="h6" sx={{ color: 'text.secondary', maxWidth: 800, mx: 'auto' }}>
              Choose from our comprehensive range of digital development services
            </Typography>
          </Box>

          {/* Tabs Navigation */}
          <Paper
            elevation={0}
            sx={{
              borderRadius: 3,
              mb: 6,
              border: '1px solid',
              borderColor: 'divider',
              overflow: 'hidden',
            }}
          >
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              variant={isMobile ? "scrollable" : "fullWidth"}
              scrollButtons={isMobile ? "auto" : false}
              sx={{
                backgroundColor: 'white',
                '& .MuiTabs-indicator': {
                  height: 3,
                  backgroundColor: developmentTabs[activeTab]?.color || '#3B82F6',
                },
              }}
            >
              {developmentTabs.map((tab, index) => (
                <Tab
                  key={index}
                  icon={tab.icon}
                  iconPosition="start"
                  label={tab.label}
                  sx={{
                    py: 3,
                    fontWeight: 600,
                    fontSize: '1rem',
                    color: activeTab === index ? tab.color : 'text.secondary',
                    '&.Mui-selected': {
                      color: tab.color,
                    },
                  }}
                />
              ))}
            </Tabs>
          </Paper>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, md: 5 },
                borderRadius: 3,
                border: '1px solid',
                borderColor: 'divider',
                backgroundColor: 'white',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                <Box
                  sx={{
                    width: 70,
                    height: 70,
                    backgroundColor: alpha(developmentTabs[activeTab].color, 0.1),
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mr: 3,
                    flexShrink: 0,
                    color: developmentTabs[activeTab].color,
                  }}
                >
                  {developmentTabs[activeTab].icon}
                </Box>
                <Box>
                  <Typography variant="h3" fontWeight={800} sx={{ color: 'text.primary', mb: 1 }}>
                    {developmentTabs[activeTab].label} Development
                  </Typography>
                  {developmentTabs[activeTab].content.description && (
                    <Typography variant="body1" color="text.secondary">
                      {developmentTabs[activeTab].content.description}
                    </Typography>
                  )}
                </Box>
              </Box>

              <Divider sx={{ my: 4 }} />

              {/* Services Grid for Web & Mobile Apps */}
              {developmentTabs[activeTab].content.services ? (
                <Grid container spacing={4}>
                  {developmentTabs[activeTab].content.services.map((service, index) => (
                    <Grid item xs={12} md={6} key={index}>
                      <Card
                        sx={{
                          p: 3,
                          borderRadius: 3,
                          height: '100%',
                          border: '1px solid',
                          borderColor: 'divider',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            borderColor: developmentTabs[activeTab].color,
                            backgroundColor: alpha(developmentTabs[activeTab].color, 0.02),
                            transform: 'translateY(-4px)',
                          },
                        }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                          <Box
                            sx={{
                              width: 60,
                              height: 60,
                              backgroundColor: alpha(developmentTabs[activeTab].color, 0.1),
                              borderRadius: '12px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: developmentTabs[activeTab].color,
                              mr: 3,
                              flexShrink: 0,
                            }}
                          >
                            {service.icon}
                          </Box>
                          <Box>
                            <Typography variant="h5" fontWeight={700} gutterBottom>
                              {service.title}
                            </Typography>
                            <Typography variant="body1" color="text.secondary" paragraph>
                              {service.description}
                            </Typography>
                            <List dense disablePadding>
                              {service.features.map((feature, idx) => (
                                <ListItem key={idx} disableGutters disablePadding sx={{ py: 0.5 }}>
                                  <ListItemIcon sx={{ minWidth: 30 }}>
                                    <CheckIcon sx={{ color: developmentTabs[activeTab].color, fontSize: 18 }} />
                                  </ListItemIcon>
                                  <ListItemText
                                    primary={feature}
                                    primaryTypographyProps={{ variant: 'body2' }}
                                  />
                                </ListItem>
                              ))}
                            </List>
                          </Box>
                        </Box>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              ) : (
                // Features Grid for Webflow, WordPress, Custom Websites
                <Box>
                  <Grid container spacing={3}>
                    {developmentTabs[activeTab].content.features.map((feature, index) => (
                      <Grid item xs={12} sm={6} md={4} key={index}>
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            p: 3,
                            borderRadius: 2,
                            backgroundColor: alpha(developmentTabs[activeTab].color, 0.03),
                            border: '1px solid',
                            borderColor: alpha(developmentTabs[activeTab].color, 0.1),
                            height: '100%',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              backgroundColor: alpha(developmentTabs[activeTab].color, 0.08),
                              transform: 'translateY(-4px)',
                            },
                          }}
                        >
                          <CheckIcon sx={{ color: developmentTabs[activeTab].color, fontSize: 24, mr: 2, flexShrink: 0 }} />
                          <Typography variant="body1" fontWeight={500}>
                            {feature}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              )}

              {/* Call to Action */}
              <Box sx={{ mt: 6, textAlign: 'center' }}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="contained"
                    size="large"
                    href="/contact"
                    sx={{
                      backgroundColor: developmentTabs[activeTab].color,
                      px: 5,
                      py: 1.5,
                      fontSize: '1rem',
                      fontWeight: 600,
                      borderRadius: 2,
                      '&:hover': {
                        backgroundColor: developmentTabs[activeTab].color,
                        opacity: 0.9,
                      },
                    }}
                  >
                    Get {developmentTabs[activeTab].label} Quote
                  </Button>
                </motion.div>
              </Box>
            </Paper>
          </motion.div>

          {/* Quick Services Overview */}
          <Box sx={{ mt: 8 }}>
            <Typography variant="h4" fontWeight={700} gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
              All Development Services
            </Typography>
            <Grid container spacing={3}>
              {developmentTabs.map((tab, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setActiveTab(index)}
                  >
                    <Card
                      sx={{
                        p: 3,
                        borderRadius: 3,
                        textAlign: 'center',
                        cursor: 'pointer',
                        border: '2px solid',
                        borderColor: activeTab === index ? tab.color : 'divider',
                        backgroundColor: activeTab === index ? alpha(tab.color, 0.05) : 'white',
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <Box
                        sx={{
                          width: 60,
                          height: 60,
                          backgroundColor: alpha(tab.color, 0.1),
                          borderRadius: '12px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: tab.color,
                          mx: 'auto',
                          mb: 2,
                        }}
                      >
                        {tab.icon}
                      </Box>
                      <Typography variant="h6" fontWeight={600} gutterBottom>
                        {tab.label}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {developmentTabs[index].content.description 
                          ? developmentTabs[index].content.description.substring(0, 80) + '...'
                          : `${tab.label} development services`}
                      </Typography>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
          py: 10,
          textAlign: 'center',
          color: 'white',
        }}
      >
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography variant="h2" gutterBottom fontWeight={700}>
              Ready to Transform Your Business?
            </Typography>
            <Typography variant="h5" sx={{ mb: 5, opacity: 0.9, fontWeight: 400 }}>
              Let's discuss how NexusAI can help you achieve your digital goals
            </Typography>
            <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="contained"
                  size="large"
                  href="/contact"
                  startIcon={<HandshakeIcon />}
                  sx={{
                    backgroundColor: 'white',
                    color: 'primary.dark',
                    px: 5,
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    borderRadius: 2,
                    '&:hover': {
                      backgroundColor: 'grey.100',
                    },
                  }}
                >
                  Get Free Consultation
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outlined"
                  size="large"
                  href="#ai-services"
                  sx={{
                    borderColor: 'white',
                    color: 'white',
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    borderRadius: 2,
                  }}
                >
                  Explore AI Services
                </Button>
              </motion.div>
            </Box>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default Services;