// // frontend/src/components/admin/Analytics.jsx
// import React, { useState, useEffect } from 'react';
// import {
//     Box,
//     Paper,
//     Typography,
//     Grid,
//     TextField,
//     Button,  // Button component from MUI
//     IconButton,
//     Chip,
//     Select,
//     MenuItem,
//     FormControl,
//     InputLabel,
// } from '@mui/material';
// import {
//     TrendingUp as TrendingUpIcon,
//     People as UsersIcon,          // For Total Visitors (instead of Users)
//     Visibility as EyeIcon,        // For Page Views (instead of Eye)
//     Mouse as ClickIcon,
//     Download as DownloadIcon,
//     CalendarToday as CalendarIcon,
//     Refresh as RefreshIcon,
//     BarChart as BarChartIcon,
//     PieChart as PieChartIcon,
//     Timeline as TimelineIcon,
//   } from '@mui/icons-material';
// import { motion } from 'framer-motion';
// import {
//   LineChart,
//   Line,
//   BarChart,
//   Bar,
//   PieChart,
//   Pie,
//   Cell,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from 'recharts';

// const Analytics = () => {
//   const [timeRange, setTimeRange] = useState('7d');
//   const [loading, setLoading] = useState(false);

//   // Sample data for charts
//   const trafficData = [
//     { date: 'Mon', visitors: 4000, pageviews: 2400, bounce: 40 },
//     { date: 'Tue', visitors: 3000, pageviews: 1398, bounce: 42 },
//     { date: 'Wed', visitors: 2000, pageviews: 9800, bounce: 45 },
//     { date: 'Thu', visitors: 2780, pageviews: 3908, bounce: 38 },
//     { date: 'Fri', visitors: 1890, pageviews: 4800, bounce: 41 },
//     { date: 'Sat', visitors: 2390, pageviews: 3800, bounce: 43 },
//     { date: 'Sun', visitors: 3490, pageviews: 4300, bounce: 39 },
//   ];

//   const pageData = [
//     { name: 'Home', visits: 4000, bounce: 40 },
//     { name: 'About', visits: 3000, bounce: 42 },
//     { name: 'Services', visits: 2000, bounce: 45 },
//     { name: 'Team', visits: 2780, bounce: 38 },
//     { name: 'Contact', visits: 1890, bounce: 41 },
//   ];

//   const sourceData = [
//     { name: 'Organic', value: 400 },
//     { name: 'Direct', value: 300 },
//     { name: 'Social', value: 300 },
//     { name: 'Referral', value: 200 },
//   ];

//   const COLORS = ['#10B981', '#3B82F6', '#8B5CF6', '#F59E0B'];

//   const stats = [
//     { label: 'Total Visitors', value: '24,589', change: '+12.5%', icon: <UsersIcon />, color: '#10B981' },
//     { label: 'Page Views', value: '89,234', change: '+8.2%', icon: <EyeIcon />, color: '#3B82F6' },
//     { label: 'Avg. Session', value: '4m 32s', change: '+3.1%', icon: <TimelineIcon />, color: '#8B5CF6' },
//     { label: 'Bounce Rate', value: '42.3%', change: '-2.4%', icon: <ClickIcon />, color: '#F59E0B' },
//   ];

//   return (
//     <Box>
//       {/* Header */}
//       <Paper sx={{ p: 3, mb: 3, borderRadius: 2 }}>
//         <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
//           <Box>
//             <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
//               Analytics Dashboard
//             </Typography>
//             <Typography variant="body1" sx={{ color: '#64748B' }}>
//               Track and analyze your website performance
//             </Typography>
//           </Box>
//           <Box sx={{ display: 'flex', gap: 2 }}>
//             <FormControl sx={{ minWidth: 120 }}>
//               <InputLabel>Time Range</InputLabel>
//               <Select
//                 value={timeRange}
//                 onChange={(e) => setTimeRange(e.target.value)}
//                 label="Time Range"
//               >
//                 <MenuItem value="24h">Last 24 Hours</MenuItem>
//                 <MenuItem value="7d">Last 7 Days</MenuItem>
//                 <MenuItem value="30d">Last 30 Days</MenuItem>
//                 <MenuItem value="90d">Last 90 Days</MenuItem>
//               </Select>
//             </FormControl>
//             <Button
//               startIcon={<RefreshIcon />}
//               variant="outlined"
//               onClick={() => setLoading(!loading)}
//             >
//               Refresh
//             </Button>
//             <Button
//               startIcon={<DownloadIcon />}
//               variant="contained"
//               sx={{
//                 backgroundColor: '#10B981',
//                 '&:hover': { backgroundColor: '#059669' },
//               }}
//             >
//               Export
//             </Button>
//           </Box>
//         </Box>
//       </Paper>

//       {/* Stats Cards */}
//       <Grid container spacing={3} sx={{ mb: 4 }}>
//         {stats.map((stat, index) => (
//           <Grid item xs={12} sm={6} md={3} key={index}>
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.3, delay: index * 0.1 }}
//             >
//               <Card sx={{ borderRadius: 2, border: '1px solid #E2E8F0' }}>
//                 <CardContent sx={{ p: 3 }}>
//                   <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
//                     <Box
//                       sx={{
//                         width: 50,
//                         height: 50,
//                         backgroundColor: `${stat.color}15`,
//                         borderRadius: 2,
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         color: stat.color,
//                       }}
//                     >
//                       {stat.icon}
//                     </Box>
//                     <Chip
//                       label={stat.change}
//                       size="small"
//                       color={stat.change.startsWith('+') ? 'success' : 'error'}
//                       sx={{ fontWeight: 600 }}
//                     />
//                   </Box>
//                   <Typography variant="h3" sx={{ color: '#1E293B', fontWeight: 700, mb: 1 }}>
//                     {stat.value}
//                   </Typography>
//                   <Typography variant="body2" sx={{ color: '#64748B', fontWeight: 500 }}>
//                     {stat.label}
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           </Grid>
//         ))}
//       </Grid>

//       {/* Charts Grid */}
//       <Grid container spacing={3}>
//         {/* Traffic Chart */}
//         <Grid item xs={12} lg={8}>
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <Paper sx={{ p: 3, borderRadius: 2, height: '100%' }}>
//               <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
//                 <Typography variant="h6" sx={{ fontWeight: 600 }}>
//                   Traffic Overview
//                 </Typography>
//                 <Box sx={{ display: 'flex', gap: 1 }}>
//                   <Chip label="Visitors" color="primary" size="small" />
//                   <Chip label="Pageviews" color="secondary" size="small" />
//                 </Box>
//               </Box>
//               <Box sx={{ height: 300 }}>
//                 <ResponsiveContainer width="100%" height="100%">
//                   <LineChart data={trafficData}>
//                     <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
//                     <XAxis dataKey="date" stroke="#64748B" />
//                     <YAxis stroke="#64748B" />
//                     <Tooltip />
//                     <Legend />
//                     <Line
//                       type="monotone"
//                       dataKey="visitors"
//                       stroke="#10B981"
//                       strokeWidth={2}
//                       dot={{ stroke: '#10B981', strokeWidth: 2, r: 4 }}
//                       activeDot={{ r: 6 }}
//                     />
//                     <Line
//                       type="monotone"
//                       dataKey="pageviews"
//                       stroke="#3B82F6"
//                       strokeWidth={2}
//                       dot={{ stroke: '#3B82F6', strokeWidth: 2, r: 4 }}
//                       activeDot={{ r: 6 }}
//                     />
//                   </LineChart>
//                 </ResponsiveContainer>
//               </Box>
//             </Paper>
//           </motion.div>
//         </Grid>

//         {/* Traffic Sources */}
//         <Grid item xs={12} lg={4}>
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: 0.1 }}
//           >
//             <Paper sx={{ p: 3, borderRadius: 2, height: '100%' }}>
//               <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
//                 Traffic Sources
//               </Typography>
//               <Box sx={{ height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                 <ResponsiveContainer width="100%" height="100%">
//                   <PieChart>
//                     <Pie
//                       data={sourceData}
//                       cx="50%"
//                       cy="50%"
//                       labelLine={false}
//                       label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
//                       outerRadius={80}
//                       fill="#8884d8"
//                       dataKey="value"
//                     >
//                       {sourceData.map((entry, index) => (
//                         <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                       ))}
//                     </Pie>
//                     <Tooltip />
//                     <Legend />
//                   </PieChart>
//                 </ResponsiveContainer>
//               </Box>
//             </Paper>
//           </motion.div>
//         </Grid>

//         {/* Top Pages */}
//         <Grid item xs={12}>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             <Paper sx={{ p: 3, borderRadius: 2 }}>
//               <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
//                 Top Performing Pages
//               </Typography>
//               <Box sx={{ height: 300 }}>
//                 <ResponsiveContainer width="100%" height="100%">
//                   <BarChart data={pageData}>
//                     <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
//                     <XAxis dataKey="name" stroke="#64748B" />
//                     <YAxis stroke="#64748B" />
//                     <Tooltip />
//                     <Legend />
//                     <Bar dataKey="visits" fill="#10B981" radius={[4, 4, 0, 0]} />
//                     <Bar dataKey="bounce" fill="#F59E0B" radius={[4, 4, 0, 0]} />
//                   </BarChart>
//                 </ResponsiveContainer>
//               </Box>
//             </Paper>
//           </motion.div>
//         </Grid>
//       </Grid>

//       {/* Performance Metrics */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.3 }}
//       >
//         <Paper sx={{ p: 3, mt: 4, borderRadius: 2 }}>
//           <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
//             Performance Metrics
//           </Typography>
//           <Grid container spacing={3}>
//             {[
//               { label: 'Page Load Time', value: '1.2s', target: '2s', color: '#10B981' },
//               { label: 'Time to Interactive', value: '2.4s', target: '3.5s', color: '#3B82F6' },
//               { label: 'First Contentful Paint', value: '0.8s', target: '1.8s', color: '#8B5CF6' },
//               { label: 'Largest Contentful Paint', value: '1.6s', target: '2.5s', color: '#F59E0B' },
//             ].map((metric, index) => (
//               <Grid item xs={12} sm={6} md={3} key={index}>
//                 <Box>
//                   <Typography variant="body2" sx={{ color: '#64748B', mb: 1 }}>
//                     {metric.label}
//                   </Typography>
//                   <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
//                     {metric.value}
//                   </Typography>
//                   <LinearProgress
//                     variant="determinate"
//                     value={(parseFloat(metric.value) / parseFloat(metric.target)) * 100}
//                     sx={{
//                       height: 8,
//                       borderRadius: 4,
//                       backgroundColor: '#E2E8F0',
//                       '& .MuiLinearProgress-bar': {
//                         backgroundColor: metric.color,
//                         borderRadius: 4,
//                       },
//                     }}
//                   />
//                   <Typography variant="caption" sx={{ color: '#64748B', mt: 1, display: 'block' }}>
//                     Target: {metric.target}
//                   </Typography>
//                 </Box>
//               </Grid>
//             ))}
//           </Grid>
//         </Paper>
//       </motion.div>
//     </Box>
//   );
// };

// export default Analytics;