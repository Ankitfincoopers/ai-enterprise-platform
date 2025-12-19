// import React, { useState, useEffect } from 'react';
// import {
//   Box,
//   Container,
//   Grid,
//   Card,
//   CardContent,
//   CardMedia,
//   Typography,
//   IconButton,
//   Chip,
//   Avatar,
//   AvatarGroup,
//   useTheme,
//   useMediaQuery,
//   Button,
// } from '@mui/material';
// import {
//   LinkedIn as LinkedInIcon,
//   Twitter as TwitterIcon,
//   GitHub as GitHubIcon,
//   Email as EmailIcon,
// } from '@mui/icons-material';
// import { motion } from 'framer-motion';
// import { pageAPI } from '../services/api';
// import LoadingSpinner from '../components/common/LoadingSpinner';
// import AnimatedSection from '../components/ui/AnimatedSection';

// const Team = () => {
//   const [page, setPage] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

//   useEffect(() => {
//     fetchPageData();
//   }, []);

//   const fetchPageData = async () => {
//     try {
//       const response = await pageAPI.getPage('team');
//       setPage(response.data.page);
//     } catch (error) {
//       console.error('Failed to load team page:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return <LoadingSpinner />;
//   }

//   const teamSection = page?.sections?.find(section => section.type === 'team');
//   const teamMembers = teamSection?.data?.members || [];

//   // Sample team data (in production, this would come from the CMS)
//   const defaultTeamMembers = [
//     {
//       id: 1,
//       name: 'Alex Johnson',
//       role: 'CEO & Founder',
//       bio: 'Former Google AI researcher with 15+ years in machine learning and enterprise software.',
//       image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
//       skills: ['AI/ML', 'Leadership', 'Strategy'],
//       social: {
//         linkedin: '#',
//         twitter: '#',
//         github: '#',
//         email: '#',
//       },
//     },
//     {
//       id: 2,
//       name: 'Sarah Williams',
//       role: 'CTO',
//       bio: 'Ex-Microsoft architect specializing in scalable cloud infrastructure and distributed systems.',
//       image: 'https://images.unsplash.com/photo-1494790108755-2616b786d4d6?w-400&h=400&fit=crop',
//       skills: ['Cloud', 'DevOps', 'Security'],
//       social: {
//         linkedin: '#',
//         twitter: '#',
//         github: '#',
//         email: '#',
//       },
//     },
//     {
//       id: 3,
//       name: 'Michael Chen',
//       role: 'Head of Product',
//       bio: 'Product visionary with experience at Stripe and Airbnb, focused on user-centric design.',
//       image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
//       skills: ['Product', 'UX', 'Growth'],
//       social: {
//         linkedin: '#',
//         twitter: '#',
//         github: '#',
//         email: '#',
//       },
//     },
//     {
//       id: 4,
//       name: 'Emma Rodriguez',
//       role: 'Lead Engineer',
//       bio: 'Full-stack developer with expertise in React, Node.js, and microservices architecture.',
//       image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop',
//       skills: ['React', 'Node.js', 'AWS'],
//       social: {
//         linkedin: '#',
//         twitter: '#',
//         github: '#',
//         email: '#',
//       },
//     },
//   ];

//   const members = teamMembers.length > 0 ? teamMembers : defaultTeamMembers;

//   return (
//     <Box>
//       {/* Hero Section */}
//       <Box
//         sx={{
//           backgroundColor: 'primary.main',
//           background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
//           color: 'white',
//           py: 10,
//         }}
//       >
//         <Container maxWidth="lg">
//           <AnimatedSection>
//             <Box sx={{ textAlign: 'center', maxWidth: 800, mx: 'auto' }}>
//               <Typography
//                 variant="h1"
//                 gutterBottom
//                 sx={{
//                   fontSize: isMobile ? '2.5rem' : '3.5rem',
//                   fontWeight: 700,
//                 }}
//               >
//                 Meet Our Team
//               </Typography>
//               <Typography
//                 variant="h5"
//                 sx={{
//                   opacity: 0.9,
//                   fontWeight: 400,
//                 }}
//               >
//                 The brilliant minds behind our success
//               </Typography>
//             </Box>
//           </AnimatedSection>
//         </Container>
//       </Box>

//       {/* Team Grid */}
//       <Container maxWidth="lg" sx={{ py: 8 }}>
//         <Grid container spacing={4}>
//           {members.map((member, index) => (
//             <Grid item xs={12} sm={6} md={4} lg={3} key={member.id}>
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
//                     transition: 'transform 0.3s',
//                     '&:hover': {
//                       transform: 'translateY(-8px)',
//                     },
//                   }}
//                 >
//                   <Box sx={{ position: 'relative' }}>
//                     <CardMedia
//                       component="img"
//                       height="250"
//                       image={member.image}
//                       alt={member.name}
//                       sx={{
//                         objectFit: 'cover',
//                         filter: 'grayscale(20%)',
//                       }}
//                     />
//                     <Box
//                       sx={{
//                         position: 'absolute',
//                         bottom: 0,
//                         left: 0,
//                         right: 0,
//                         background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
//                         p: 2,
//                         color: 'white',
//                       }}
//                     >
//                       <Typography variant="h6" fontWeight={600}>
//                         {member.name}
//                       </Typography>
//                       <Typography variant="body2">
//                         {member.role}
//                       </Typography>
//                     </Box>
//                   </Box>
//                   <CardContent sx={{ flexGrow: 1 }}>
//                     <Typography
//                       variant="body2"
//                       color="text.secondary"
//                       paragraph
//                       sx={{
//                         mb: 2,
//                         display: '-webkit-box',
//                         WebkitLineClamp: 3,
//                         WebkitBoxOrient: 'vertical',
//                         overflow: 'hidden',
//                       }}
//                     >
//                       {member.bio}
//                     </Typography>
//                     <Box sx={{ mb: 2 }}>
//                       {member.skills?.map((skill, skillIndex) => (
//                         <Chip
//                           key={skillIndex}
//                           label={skill}
//                           size="small"
//                           sx={{
//                             mr: 1,
//                             mb: 1,
//                             backgroundColor: 'primary.light',
//                             color: 'white',
//                             fontSize: '0.75rem',
//                           }}
//                         />
//                       ))}
//                     </Box>
//                   </CardContent>
//                   <Box
//                     sx={{
//                       p: 2,
//                       display: 'flex',
//                       justifyContent: 'center',
//                       gap: 1,
//                       borderTop: 1,
//                       borderColor: 'divider',
//                     }}
//                   >
//                     <IconButton
//                       size="small"
//                       href={member.social.linkedin}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <LinkedInIcon fontSize="small" />
//                     </IconButton>
//                     <IconButton
//                       size="small"
//                       href={member.social.twitter}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <TwitterIcon fontSize="small" />
//                     </IconButton>
//                     <IconButton
//                       size="small"
//                       href={member.social.github}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <GitHubIcon fontSize="small" />
//                     </IconButton>
//                     <IconButton
//                       size="small"
//                       href={`mailto:${member.social.email}`}
//                     >
//                       <EmailIcon fontSize="small" />
//                     </IconButton>
//                   </Box>
//                 </Card>
//               </motion.div>
//             </Grid>
//           ))}
//         </Grid>

//         {/* Stats Section */}
//         <AnimatedSection>
//           <Box sx={{ mt: 10, textAlign: 'center' }}>
//             <Typography variant="h4" gutterBottom fontWeight={600}>
//               Our Impact in Numbers
//             </Typography>
//             <Typography
//               variant="body1"
//               color="text.secondary"
//               sx={{ maxWidth: 600, mx: 'auto', mb: 6 }}
//             >
//               We're proud of what we've accomplished together
//             </Typography>
//             <Grid container spacing={4}>
//               {[
//                 { label: 'Team Members', value: '50+' },
//                 { label: 'Countries', value: '15' },
//                 { label: 'Projects', value: '200+' },
//                 { label: 'Years Experience', value: '10+' },
//               ].map((stat, index) => (
//                 <Grid item xs={6} md={3} key={index}>
//                   <Box>
//                     <Typography
//                       variant="h2"
//                       color="primary.main"
//                       fontWeight={700}
//                       gutterBottom
//                     >
//                       {stat.value}
//                     </Typography>
//                     <Typography variant="h6" color="text.secondary">
//                       {stat.label}
//                     </Typography>
//                   </Box>
//                 </Grid>
//               ))}
//             </Grid>
//           </Box>
//         </AnimatedSection>

//         {/* CTA Section */}
//         <AnimatedSection>
//           <Box
//             sx={{
//               mt: 10,
//               backgroundColor: 'primary.light',
//               borderRadius: 4,
//               p: 6,
//               textAlign: 'center',
//               color: 'white',
//             }}
//           >
//             <Typography variant="h4" gutterBottom fontWeight={600}>
//               Join Our Team
//             </Typography>
//             <Typography variant="body1" sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}>
//               We're always looking for talented individuals to join our growing team.
//             </Typography>
//             <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
//               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                 <Button
//                   variant="contained"
//                   size="large"
//                   href="/careers"
//                   sx={{
//                     backgroundColor: 'white',
//                     color: 'primary.main',
//                     '&:hover': {
//                       backgroundColor: 'grey.100',
//                     },
//                   }}
//                 >
//                   View Open Positions
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
//                     '&:hover': {
//                       borderColor: 'white',
//                       backgroundColor: 'rgba(255,255,255,0.1)',
//                     },
//                   }}
//                 >
//                   Contact Us
//                 </Button>
//               </motion.div>
//             </Box>
//           </Box>
//         </AnimatedSection>
//       </Container>
//     </Box>
//   );
// };

// export default Team;


// import React from 'react';
// import {
//   Box,
//   Container,
//   Grid,
//   Typography,
//   IconButton,
//   Button,
//   Card,
//   Avatar,
//   Paper,
//   Divider,
//   Stack,
//   useTheme,
//   useMediaQuery,
//   Chip,
// } from '@mui/material';
// import {
//   LinkedIn as LinkedInIcon,
//   X as XIcon,
//   ArrowForward as ArrowIcon,
//   Email as EmailIcon,
//   Phone as PhoneIcon,
//   LocationOn as LocationIcon,
//   Business as BusinessIcon,
// } from '@mui/icons-material';
// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';

// const Team = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('md'));

//   const teamMembers = [
//     {
//       id: 1,
//       name: 'Mansi Dixit',
//       role: 'Founder and CEO',
//       bio: `Mansi Dixit is the founder and CEO, bringing over 8 years of extensive finance experience to the team. With a background spanning JP Morgan Chase in Corporate Finance, Ernst & Young in Mergers and Acquisitions, and Bankers without Boundaries in Sustainable Finance, Mansi has a proven track record of success in diverse financial environments. She brings a wealth of expertise from her work with both international and Indian startups, where she has provided mentorship and strategic guidance. Mansi is a Chartered Accountant from the Institute of Chartered Accountants of India and is committed to promoting diversity and inclusion in the finance industry, serving as an advisor to various international organizations focused on this mission.`,
//       image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=600&fit=crop&crop=face',
//       skills: ['Finance', 'Strategy', 'Leadership', 'M&A'],
//       social: {
//         linkedin: 'https://linkedin.com/in/mansi-dixit',
//         x: 'https://x.com/mansi-dixit',
//         email: 'mansi@nexusai.com',
//       },
//     },
//     {
//       id: 2,
//       name: 'Gurijesh Jain',
//       role: 'Co-Founder and Chief Financial Lead',
//       bio: `Gurijesh is a practicing Chartered Accountant registered with the Institute of Chartered Accountants of India who brings over a decade of comprehensive expertise to his role as Chief Financial Lead. His illustrious career spans across finance, accounts, auditing, and advisory services, with a particular focus on guiding clients through financial management, tax strategies, and regulatory compliance globally. Gurijesh's forte lies in leading finance operations for startups, scaleups, and non-profit organizations across diverse regions including the UK, Europe, Asia, and Canada. Within the company, he catalyzes financial innovation and excellence, ensuring meticulous adherence to fiscal best practices and fostering sustainable growth trajectories.`,
//       image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=600&fit=crop&crop=face',
//       skills: ['Accounting', 'Tax Strategy', 'Compliance', 'Audit'],
//       social: {
//         linkedin: 'https://linkedin.com/in/gurijesh-jain',
//         x: 'https://x.com/gurijesh-jain',
//         email: 'gurijesh@nexusai.com',
//       },
//     },
//   ];

//   const quickLinks = [
//     { label: 'About Us', path: '/about' },
//     { label: 'Our Team', path: '/team' },
//     { label: 'Careers', path: '/careers' },
//     { label: 'Contact', path: '/contact' },
//   ];

//   const socialLinks = [
//     { label: 'LinkedIn', icon: <LinkedInIcon />, color: '#0A66C2' },
//     { label: 'X', icon: <XIcon />, color: '#000000' },
//     { label: 'Email', icon: <EmailIcon />, color: '#EA4335' },
//   ];

//   return (
//     <Box sx={{ overflow: 'hidden' }}>
//       {/* Hero Section with background pattern */}
//       <Box
//         sx={{
//           background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
//           color: 'white',
//           py: { xs: 8, md: 12 },
//           position: 'relative',
//           overflow: 'hidden',
//           '&::before': {
//             content: '""',
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)',
//           },
//         }}
//       >
//         <Container maxWidth="lg">
//           <Box sx={{ maxWidth: 800, mx: 'auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               <Typography
//                 variant="h1"
//                 gutterBottom
//                 sx={{
//                   fontSize: isMobile ? '2.5rem' : '3.5rem',
//                   fontWeight: 800,
//                   background: 'linear-gradient(135deg, #FFFFFF 0%, #10B981 100%)',
//                   WebkitBackgroundClip: 'text',
//                   WebkitTextFillColor: 'transparent',
//                   mb: 2,
//                 }}
//               >
//                 The Faces of NexusAI
//               </Typography>

//               <Typography
//                 variant="h5"
//                 sx={{
//                   color: '#CBD5E1',
//                   fontWeight: 400,
//                   mb: 4,
//                   opacity: 0.9,
//                 }}
//               >
//                 Meet the visionary leaders driving innovation and excellence in enterprise AI solutions
//               </Typography>

//               <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
//                 <Button
//                   variant="contained"
//                   component={Link}
//                   to="/contact"
//                   endIcon={<ArrowIcon />}
//                   sx={{
//                     backgroundColor: '#10B981',
//                     color: 'white',
//                     px: 4,
//                     py: 1.5,
//                     borderRadius: 2,
//                     fontWeight: 600,
//                     '&:hover': {
//                       backgroundColor: '#059669',
//                       transform: 'translateY(-2px)',
//                     },
//                     transition: 'all 0.3s ease',
//                   }}
//                 >
//                   Start the dialogue
//                 </Button>

//                 <Button
//                   variant="outlined"
//                   component={Link}
//                   to="/careers"
//                   sx={{
//                     borderColor: 'rgba(255, 255, 255, 0.3)',
//                     color: 'white',
//                     px: 4,
//                     py: 1.5,
//                     borderRadius: 2,
//                     fontWeight: 600,
//                     '&:hover': {
//                       borderColor: '#10B981',
//                       backgroundColor: 'rgba(16, 185, 129, 0.1)',
//                     },
//                   }}
//                 >
//                   Join Our Team
//                 </Button>
//               </Box>
//             </motion.div>
//           </Box>
//         </Container>
//       </Box>

//       {/* Team Members Section */}
//       <Container maxWidth="lg" sx={{ py: 8 }}>
//         {teamMembers.map((member, index) => (
//           <Box key={member.id} sx={{ mb: 12 }}>
//             <Grid container spacing={6} alignItems="center">
//               {/* Image Column - Alternates sides based on index */}
//               <Grid 
//                 item 
//                 xs={12} 
//                 md={5} 
//                 sx={{ order: { xs: 2, md: index % 2 === 0 ? 1 : 2 } }}
//               >
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.8 }}
//                   viewport={{ once: true }}
//                 >
//                   <Box
//                     sx={{
//                       position: 'relative',
//                       borderRadius: 3,
//                       overflow: 'hidden',
//                       boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
//                       aspectRatio: '1/1',
//                       maxWidth: 500,
//                       mx: 'auto',
//                     }}
//                   >
//                     <Box
//                       component="img"
//                       src={member.image}
//                       alt={member.name}
//                       sx={{
//                         width: '100%',
//                         height: '100%',
//                         objectFit: 'cover',
//                         filter: 'grayscale(10%)',
//                       }}
//                     />

//                     {/* Decorative overlay */}
//                     <Box
//                       sx={{
//                         position: 'absolute',
//                         top: 0,
//                         left: 0,
//                         right: 0,
//                         bottom: 0,
//                         background: 'linear-gradient(to bottom, transparent 70%, rgba(16, 23, 42, 0.8))',
//                       }}
//                     />

//                     {/* Name overlay */}
//                     <Box
//                       sx={{
//                         position: 'absolute',
//                         bottom: 0,
//                         left: 0,
//                         right: 0,
//                         p: 4,
//                         color: 'white',
//                       }}
//                     >
//                       <Typography variant="h5" fontWeight={700}>
//                         {member.name}
//                       </Typography>
//                       <Typography variant="body2" sx={{ color: '#CBD5E1' }}>
//                         {member.role}
//                       </Typography>
//                     </Box>
//                   </Box>
//                 </motion.div>
//               </Grid>

//               {/* Content Column */}
//               <Grid 
//                 item 
//                 xs={12} 
//                 md={7} 
//                 sx={{ order: { xs: 1, md: index % 2 === 0 ? 2 : 1 } }}
//               >
//                 <motion.div
//                   initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.8, delay: 0.2 }}
//                   viewport={{ once: true }}
//                 >
//                   <Box sx={{ maxWidth: 600, ml: { md: index % 2 === 0 ? 0 : 'auto' }, mr: { md: index % 2 === 0 ? 'auto' : 0 } }}>
//                     {/* Role Chip */}
//                     <Chip
//                       label={member.role}
//                       sx={{
//                         backgroundColor: '#10B98115',
//                         color: '#10B981',
//                         fontWeight: 600,
//                         mb: 3,
//                         px: 2,
//                         py: 1,
//                       }}
//                     />

//                     {/* Name */}
//                     <Typography
//                       variant="h3"
//                       gutterBottom
//                       sx={{
//                         color: '#1E293B',
//                         fontWeight: 800,
//                         fontSize: { xs: '2rem', md: '2.5rem' },
//                         mb: 2,
//                       }}
//                     >
//                       {member.name}
//                     </Typography>

//                     {/* Quick Info */}
//                     <Box sx={{ display: 'flex', gap: 4, mb: 4, flexWrap: 'wrap' }}>
//                       <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                         <BusinessIcon sx={{ color: '#64748B', fontSize: 20 }} />
//                         <Typography sx={{ color: '#64748B', fontWeight: 500 }}>
//                           {member.experience} experience
//                         </Typography>
//                       </Box>
//                       <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                         <LocationIcon sx={{ color: '#64748B', fontSize: 20 }} />
//                         <Typography sx={{ color: '#64748B', fontWeight: 500 }}>
//                           {member.education}
//                         </Typography>
//                       </Box>
//                     </Box>

//                     {/* Bio */}
//                     <Typography
//                       variant="body1"
//                       paragraph
//                       sx={{
//                         color: '#475569',
//                         lineHeight: 1.8,
//                         fontSize: '1.1rem',
//                         mb: 4,
//                       }}
//                     >
//                       {member.bio}
//                     </Typography>

//                     {/* Skills */}
//                     <Box sx={{ mb: 4 }}>
//                       <Typography variant="h6" gutterBottom sx={{ color: '#1E293B', fontWeight: 600 }}>
//                         Expertise
//                       </Typography>
//                       <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
//                         {member.skills.map((skill, idx) => (
//                           <Chip
//                             key={idx}
//                             label={skill}
//                             sx={{
//                               backgroundColor: '#F1F5F9',
//                               color: '#475569',
//                               fontWeight: 500,
//                               borderRadius: 1,
//                             }}
//                           />
//                         ))}
//                       </Box>
//                     </Box>

//                     {/* Social Links */}
//                     <Box sx={{ display: 'flex', gap: 2 }}>
//                       {Object.entries(member.social).map(([platform, link]) => (
//                         <IconButton
//                           key={platform}
//                           href={platform === 'email' ? `mailto:${link}` : link}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           sx={{
//                             backgroundColor: '#F1F5F9',
//                             color: '#475569',
//                             '&:hover': {
//                               backgroundColor: '#E2E8F0',
//                             },
//                           }}
//                         >
//                           {platform === 'linkedin' ? <LinkedInIcon /> :
//                            platform === 'x' ? <XIcon /> :
//                            <EmailIcon />}
//                         </IconButton>
//                       ))}
//                     </Box>
//                   </Box>
//                 </motion.div>
//               </Grid>
//             </Grid>

//             {/* Divider between members */}
//             {index < teamMembers.length - 1 && (
//               <Divider sx={{ my: 8, borderColor: '#E2E8F0' }} />
//             )}
//           </Box>
//         ))}
//       </Container>

//       {/* Bottom Section with Quick Links */}
//       <Box
//         sx={{
//           backgroundColor: '#F8FAFC',
//           py: 8,
//           borderTop: '1px solid #E2E8F0',
//         }}
//       >
//         <Container maxWidth="lg">
//           <Grid container spacing={6}>
//             {/* Left Column - Quick Links */}
//             <Grid item xs={12} md={6}>
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6 }}
//                 viewport={{ once: true }}
//               >
//                 <Typography
//                   variant="h4"
//                   gutterBottom
//                   sx={{ color: '#1E293B', fontWeight: 700, mb: 4 }}
//                 >
//                   Start the dialogue, unlock possibilities
//                 </Typography>

//                 <Grid container spacing={3}>
//                   {[
//                     { title: 'LinkedIn', subtitle: 'Follow for updates', icon: <LinkedInIcon sx={{ color: '#0A66C2' }} /> },
//                     { title: 'X', subtitle: 'Latest news', icon: <XIcon sx={{ color: '#000000' }} /> },
//                     { title: 'Email', subtitle: 'Get in touch', icon: <EmailIcon sx={{ color: '#EA4335' }} /> },
//                   ].map((item, idx) => (
//                     <Grid item xs={12} sm={4} key={idx}>
//                       <Card
//                         sx={{
//                           p: 3,
//                           border: '1px solid #E2E8F0',
//                           borderRadius: 2,
//                           backgroundColor: 'white',
//                           textAlign: 'center',
//                           transition: 'all 0.3s ease',
//                           '&:hover': {
//                             transform: 'translateY(-4px)',
//                             boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
//                           },
//                         }}
//                       >
//                         <Box sx={{ mb: 2 }}>
//                           {item.icon}
//                         </Box>
//                         <Typography variant="h6" sx={{ color: '#1E293B', fontWeight: 600 }}>
//                           {item.title}
//                         </Typography>
//                         <Typography variant="body2" sx={{ color: '#64748B' }}>
//                           {item.subtitle}
//                         </Typography>
//                       </Card>
//                     </Grid>
//                   ))}
//                 </Grid>
//               </motion.div>
//             </Grid>

//             {/* Right Column - Navigation Links */}
//             <Grid item xs={12} md={6}>
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.2 }}
//                 viewport={{ once: true }}
//               >
//                 <Paper
//                   sx={{
//                     p: 4,
//                     backgroundColor: 'white',
//                     borderRadius: 3,
//                     border: '1px solid #E2E8F0',
//                   }}
//                 >
//                   <Typography
//                     variant="h5"
//                     gutterBottom
//                     sx={{ color: '#1E293B', fontWeight: 700, mb: 4 }}
//                   >
//                     Quick Links
//                   </Typography>

//                   <Grid container spacing={2}>
//                     {quickLinks.map((link, idx) => (
//                       <Grid item xs={6} key={idx}>
//                         <Button
//                           component={Link}
//                           to={link.path}
//                           fullWidth
//                           sx={{
//                             justifyContent: 'flex-start',
//                             color: '#475569',
//                             fontWeight: 500,
//                             py: 1.5,
//                             px: 2,
//                             borderRadius: 1,
//                             '&:hover': {
//                               backgroundColor: '#F1F5F9',
//                               color: '#10B981',
//                             },
//                           }}
//                         >
//                           {link.label}
//                         </Button>
//                       </Grid>
//                     ))}
//                   </Grid>

//                   <Box sx={{ mt: 4, pt: 4, borderTop: '1px solid #E2E8F0' }}>
//                     <Typography
//                       variant="h6"
//                       gutterBottom
//                       sx={{ color: '#1E293B', fontWeight: 600 }}
//                     >
//                       Connect with us
//                     </Typography>
//                     <Typography variant="body2" sx={{ color: '#64748B', mb: 3 }}>
//                       Ready to transform your business with AI?
//                     </Typography>
//                     <Button
//                       variant="contained"
//                       component={Link}
//                       to="/contact"
//                       endIcon={<ArrowIcon />}
//                       fullWidth
//                       sx={{
//                         backgroundColor: '#10B981',
//                         color: 'white',
//                         py: 1.5,
//                         borderRadius: 2,
//                         fontWeight: 600,
//                         '&:hover': {
//                           backgroundColor: '#059669',
//                         },
//                       }}
//                     >
//                       Schedule a Consultation
//                     </Button>
//                   </Box>
//                 </Paper>
//               </motion.div>
//             </Grid>
//           </Grid>
//         </Container>
//       </Box>
//     </Box>
//   );
// };

// export default Team;


import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Button,
  Card,
  Paper,
  Divider,
  useTheme,
  useMediaQuery,
  Chip,
} from '@mui/material';
import {
  LinkedIn as LinkedInIcon,
  X as XIcon,
  ArrowForward as ArrowIcon,
  Email as EmailIcon,
  Business as BusinessIcon,
  School as SchoolIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Team = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const teamMembers = [
    {
      id: 1,
      name: 'Mansi Dixit',
      role: 'Founder and CEO',
      bio: `Mansi Dixit is the founder and CEO, bringing over 8 years of extensive finance experience to the team. With a background spanning JP Morgan Chase in Corporate Finance, Ernst & Young in Mergers and Acquisitions, and Bankers without Boundaries in Sustainable Finance, Mansi has a proven track record of success in diverse financial environments. She brings a wealth of expertise from her work with both international and Indian startups, where she has provided mentorship and strategic guidance. Mansi is a Chartered Accountant from the Institute of Chartered Accountants of India and is committed to promoting diversity and inclusion in the finance industry, serving as an advisor to various international organizations focused on this mission.`,
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=600&fit=crop&crop=face',
      skills: ['Finance', 'Strategy', 'Leadership', 'M&A'],
      experience: '8+ years experience',
      education: 'Chartered Accountant, ICAI',
      social: {
        linkedin: 'https://linkedin.com/in/mansi-dixit',
        x: 'https://x.com/mansi-dixit',
        email: 'mansi@nexusai.com',
      },
    },
    {
      id: 2,
      name: 'Gurijesh Jain',
      role: 'Co-Founder and Chief Financial Lead',
      bio: `Gurijesh is a practicing Chartered Accountant registered with the Institute of Chartered Accountants of India who brings over a decade of comprehensive expertise to his role as Chief Financial Lead. His illustrious career spans across finance, accounts, auditing, and advisory services, with a particular focus on guiding clients through financial management, tax strategies, and regulatory compliance globally. Gurijesh's forte lies in leading finance operations for startups, scaleups, and non-profit organizations across diverse regions including the UK, Europe, Asia, and Canada. Within the company, he catalyzes financial innovation and excellence, ensuring meticulous adherence to fiscal best practices and fostering sustainable growth trajectories.`,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=600&fit=crop&crop=face',
      skills: ['Accounting', 'Tax Strategy', 'Compliance', 'Audit'],
      experience: '10+ years experience',
      education: 'Chartered Accountant, ICAI',
      social: {
        linkedin: 'https://linkedin.com/in/gurijesh-jain',
        x: 'https://x.com/gurijesh-jain',
        email: 'gurijesh@nexusai.com',
      },
    },
  ];

  const quickLinks = [
    { label: 'About Us', path: '/about' },
    { label: 'Our Team', path: '/team' },
    { label: 'Careers', path: '/careers' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <Box sx={{ overflow: 'hidden' }}>
      {/* Hero Section with background pattern */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
          color: 'white',
          py: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)',
          },
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ maxWidth: 800, mx: 'auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h1"
                gutterBottom
                sx={{
                  fontSize: isMobile ? '2.5rem' : '3.5rem',
                  fontWeight: 800,
                  background: 'linear-gradient(135deg, #FFFFFF 0%, #10B981 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: 2,
                }}
              >
                The Faces of NexusAI
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  color: '#CBD5E1',
                  fontWeight: 400,
                  mb: 4,
                  opacity: 0.9,
                }}
              >
                Meet the visionary leaders driving innovation and excellence in enterprise AI solutions
              </Typography>

              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  component={Link}
                  to="/contact"
                  endIcon={<ArrowIcon />}
                  sx={{
                    backgroundColor: '#10B981',
                    color: 'white',
                    px: 4,
                    py: 1.5,
                    borderRadius: 2,
                    fontWeight: 600,
                    '&:hover': {
                      backgroundColor: '#059669',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Start the dialogue
                </Button>

                <Button
                  variant="outlined"
                  component={Link}
                  to="/careers"
                  sx={{
                    borderColor: 'rgba(255, 255, 255, 0.3)',
                    color: 'white',
                    px: 4,
                    py: 1.5,
                    borderRadius: 2,
                    fontWeight: 600,
                    '&:hover': {
                      borderColor: '#10B981',
                      backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    },
                  }}
                >
                  Join Our Team
                </Button>
              </Box>
            </motion.div>
          </Box>
        </Container>
      </Box>

      {/* Team Members Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        {teamMembers.map((member, index) => (
          <Box key={member.id} sx={{ mb: 12 }}>
            <Grid container spacing={6} alignItems="center">
              {/* Image Column - Alternates sides based on index */}
              <Grid
                item
                xs={12}
                md={5}
                sx={{ order: { xs: 2, md: index % 2 === 0 ? 1 : 2 } }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      borderRadius: 3,
                      overflow: 'hidden',
                      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
                      aspectRatio: '1/1',
                      maxWidth: 500,
                      mx: 'auto',
                    }}
                  >
                    <Box
                      component="img"
                      src={member.image}
                      alt={member.name}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: 'grayscale(10%)',
                      }}
                    />
                  </Box>
                </motion.div>
              </Grid>

              {/* Content Column */}
              <Grid
                item
                xs={12}
                md={7}
                sx={{ order: { xs: 1, md: index % 2 === 0 ? 2 : 1 } }}
              >
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Box sx={{ maxWidth: 600, ml: { md: index % 2 === 0 ? 0 : 'auto' }, mr: { md: index % 2 === 0 ? 'auto' : 0 } }}>
                    {/* Name */}
                    <Typography
                      variant="h2"
                      gutterBottom
                      sx={{
                        color: '#1E293B',
                        fontWeight: 800,
                        fontSize: { xs: '2.5rem', md: '3rem' },
                        mb: 1,
                      }}
                    >
                      {member.name}
                    </Typography>

                    {/* Role - Below Name */}
                    <Typography
                      variant="h4"
                      gutterBottom
                      sx={{
                        color: '#10B981',
                        fontWeight: 600,
                        fontSize: { xs: '1.5rem', md: '2rem' },
                        mb: 4,
                      }}
                    >
                      {member.role}
                    </Typography>

                    {/* Quick Info */}
                    <Box sx={{ display: 'flex', gap: 4, mb: 4, flexWrap: 'wrap' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <BusinessIcon sx={{ color: '#64748B', fontSize: 20 }} />
                        <Typography sx={{ color: '#64748B', fontWeight: 500 }}>
                          {member.experience}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <SchoolIcon sx={{ color: '#64748B', fontSize: 20 }} />
                        <Typography sx={{ color: '#64748B', fontWeight: 500 }}>
                          {member.education}
                        </Typography>
                      </Box>
                    </Box>

                    {/* Bio */}
                    <Typography
                      variant="body1"
                      paragraph
                      sx={{
                        color: '#475569',
                        lineHeight: 1.8,
                        fontSize: '1.1rem',
                        mb: 4,
                      }}
                    >
                      {member.bio}
                    </Typography>

                    {/* Skills */}
                    <Box sx={{ mb: 4 }}>
                      <Typography variant="h6" gutterBottom sx={{ color: '#1E293B', fontWeight: 600 }}>
                        Expertise
                      </Typography>
                      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                        {member.skills.map((skill, idx) => (
                          <Chip
                            key={idx}
                            label={skill}
                            sx={{
                              backgroundColor: '#10B98115',
                              color: '#10B981',
                              fontWeight: 500,
                              borderRadius: 1,
                              border: '1px solid #10B98130',
                            }}
                          />
                        ))}
                      </Box>
                    </Box>

                    {/* Social Links */}
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mt: 4 }}>
                      <Typography variant="body1" sx={{ color: '#64748B', fontWeight: 500, mr: 2 }}>
                        Connect:
                      </Typography>
                      {Object.entries(member.social).map(([platform, link]) => (
                        <IconButton
                          key={platform}
                          href={platform === 'email' ? `mailto:${link}` : link}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            backgroundColor: '#F1F5F9',
                            color: '#475569',
                            '&:hover': {
                              backgroundColor: '#E2E8F0',
                              transform: 'translateY(-2px)',
                            },
                            transition: 'all 0.3s ease',
                          }}
                        >
                          {platform === 'linkedin' ? <LinkedInIcon /> :
                            platform === 'x' ? <XIcon /> :
                              <EmailIcon />}
                        </IconButton>
                      ))}
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            </Grid>

            {/* Divider between members */}
            {index < teamMembers.length - 1 && (
              <Divider sx={{ my: 8, borderColor: '#E2E8F0' }} />
            )}
          </Box>
        ))}
      </Container>

      {/* Bottom Section with Quick Links */}
      <Box
        sx={{
          backgroundColor: '#F8FAFC',
          py: 8,
          borderTop: '1px solid #E2E8F0',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            {/* Left Column - Social Links */}
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Typography
                  variant="h3"
                  gutterBottom
                  sx={{ color: '#1E293B', fontWeight: 700, mb: 4 }}
                >
                  Start the dialogue, unlock possibilities
                </Typography>

                <Grid container spacing={3}>
                  {[
                    {
                      title: 'LinkedIn',
                      subtitle: 'Follow for updates',
                      icon: <LinkedInIcon sx={{ color: '#0A66C2', fontSize: 40 }} />,
                      color: '#0A66C2',
                      link: 'https://linkedin.com/company/nexusai'
                    },
                    {
                      title: 'X',
                      subtitle: 'Latest news',
                      icon: <XIcon sx={{ color: '#000000', fontSize: 40 }} />,
                      color: '#000000',
                      link: 'https://x.com/nexusai'
                    },
                    {
                      title: 'Email',
                      subtitle: 'Get in touch',
                      icon: <EmailIcon sx={{ color: '#EA4335', fontSize: 40 }} />,
                      color: '#EA4335',
                      link: 'mailto:contact@nexusai.com'
                    },
                  ].map((item, idx) => (
                    <Grid item xs={12} sm={4} key={idx}>
                      <Card
                        component="a"
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          p: 3,
                          border: `1px solid ${item.color}30`,
                          borderRadius: 2,
                          backgroundColor: 'white',
                          textAlign: 'center',
                          transition: 'all 0.3s ease',
                          textDecoration: 'none',
                          '&:hover': {
                            transform: 'translateY(-4px)',
                            boxShadow: `0 10px 25px ${item.color}20`,
                            borderColor: item.color,
                          },
                        }}
                      >
                        <Box sx={{ mb: 2 }}>
                          {item.icon}
                        </Box>
                        <Typography variant="h6" sx={{ color: '#1E293B', fontWeight: 600 }}>
                          {item.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#64748B' }}>
                          {item.subtitle}
                        </Typography>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </motion.div>
            </Grid>

            {/* Right Column - Navigation Links */}
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Paper
                  sx={{
                    p: 4,
                    backgroundColor: 'white',
                    borderRadius: 3,
                    border: '1px solid #E2E8F0',
                    height: '100%',
                  }}
                >
                  <Typography
                    variant="h3"
                    gutterBottom
                    sx={{ color: '#1E293B', fontWeight: 700, mb: 4 }}
                  >
                    Quick Links
                  </Typography>

                  <Box sx={{ mb: 4 }}>
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{ color: '#64748B', fontWeight: 600, mb: 2 }}
                    >
                      Explore More
                    </Typography>
                    <Grid container spacing={2}>
                      {quickLinks.map((link, idx) => (
                        <Grid item xs={6} key={idx}>
                          <Button
                            component={Link}
                            to={link.path}
                            fullWidth
                            sx={{
                              justifyContent: 'flex-start',
                              color: '#475569',
                              fontWeight: 500,
                              py: 1.5,
                              px: 2,
                              borderRadius: 1,
                              '&:hover': {
                                backgroundColor: '#F1F5F9',
                                color: '#10B981',
                              },
                            }}
                          >
                            {link.label}
                          </Button>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>

                  <Box sx={{ pt: 4, borderTop: '1px solid #E2E8F0' }}>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Team;