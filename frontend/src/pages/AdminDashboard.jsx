// import React from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Paper,
//   useTheme,
// } from '@mui/material';
// import { motion } from 'framer-motion';

// const AdminDashboard = () => {
//   const theme = useTheme();

//   return (
//     <Box
//       sx={{
//         minHeight: '100vh',
//         backgroundColor: 'background.default',
//       }}
//     >
//       <Container maxWidth="lg" sx={{ py: 8 }}>
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <Paper
//             sx={{
//               p: 6,
//               textAlign: 'center',
//               border: 1,
//               borderColor: 'divider',
//             }}
//           >
//             <Typography
//               variant="h2"
//               gutterBottom
//               fontWeight={600}
//               sx={{
//                 background: 'linear-gradient(135deg, #10B981 0%, #3B82F6 100%)',
//                 WebkitBackgroundClip: 'text',
//                 WebkitTextFillColor: 'transparent',
//               }}
//             >
//               Admin Dashboard
//             </Typography>
//             <Typography variant="h5" color="text.secondary" paragraph>
//               Coming Soon
//             </Typography>
//             <Typography variant="body1" color="text.secondary">
//               The admin dashboard with full CMS functionality is under development.
//               You'll be able to manage pages, sections, media, and users from here.
//             </Typography>
//           </Paper>
//         </motion.div>
//       </Container>
//     </Box>
//   );
// };

// export default AdminDashboard;


// frontend/src/pages/AdminDashboard.jsx
import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  AppBar,
  Toolbar,
  Avatar,
  Menu,
  MenuItem,
  Badge,
  LinearProgress,
  Alert,
  Tooltip,
  Fab,
  CircularProgress,
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  Pages as PagesIcon,
  PhotoLibrary as PhotoLibraryIcon,
  VideoLibrary as VideoLibraryIcon,
  PhotoLibrary as MediaIcon,
  People as UsersIcon,
  Settings as SettingsIcon,
  Edit as EditIcon,
  Visibility as ViewIcon,
  Add as AddIcon,
  Delete as DeleteIcon,
  CloudUpload as UploadIcon,
  Reorder as ReorderIcon,
  ToggleOn as ToggleOnIcon,
  ToggleOff as ToggleOffIcon,
  Logout as LogoutIcon,
  Menu as MenuIcon,
  Notifications as NotificationsIcon,
  Search as SearchIcon,
  Timeline as StatsIcon,
  Article as ArticleIcon,
  Category as CategoryIcon,
  LocalOffer as TagIcon,
  Email as EmailIcon,
  Chat as ChatIcon,
  BarChart as ChartIcon,
  Security as SecurityIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/authSlice';
import { pageAPI, sectionAPI, mediaAPI } from '../services/api';

const AdminDashboard = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    pages: 0,
    sections: 0,
    media: 0,
    users: 0,
    contacts: 0,
  });
  const [recentPages, setRecentPages] = useState([]);
  const [recentMedia, setRecentMedia] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      
      // Fetch pages
      const pagesResponse = await pageAPI.getPages();
      const pages = pagesResponse.data.pages || [];
      
      // Fetch sections for each page
      let totalSections = 0;
      for (const page of pages) {
        try {
          const sectionsResponse = await sectionAPI.getSections(page.id);
          totalSections += (sectionsResponse.data.sections || []).length;
        } catch (error) {
          console.error(`Error fetching sections for page ${page.id}:`, error);
        }
      }
      
      // Fetch media stats
      const mediaResponse = await mediaAPI.getMedia();
      const mediaItems = mediaResponse.data.media || [];
      
      setStats({
        pages: pages.length,
        sections: totalSections,
        media: mediaItems.length,
        users: 5,
        contacts: 12,
      });
      
      setRecentPages(pages.slice(0, 3));
      setRecentMedia(mediaItems.slice(0, 3));
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, path: '/admin' },
    { text: 'Pages', icon: <PagesIcon />, path: '/admin/pages' },
    { text: 'Sections', icon: <ArticleIcon />, path: '/admin/sections' },
    { text: 'Media Library', icon: <MediaIcon />, path: '/admin/media' },
    { text: 'Categories', icon: <CategoryIcon />, path: '/admin/categories' },
    { text: 'Tags', icon: <TagIcon />, path: '/admin/tags' },
    { text: 'Users', icon: <UsersIcon />, path: '/admin/users' },
    { text: 'Contacts', icon: <EmailIcon />, path: '/admin/contacts' },
    { text: 'Chat Sessions', icon: <ChatIcon />, path: '/admin/chats' },
    { text: 'Analytics', icon: <ChartIcon />, path: '/admin/analytics' },
    { text: 'Settings', icon: <SettingsIcon />, path: '/admin/settings' },
  ];

  const quickActions = [
    { label: 'Create New Page', icon: <AddIcon />, action: () => navigate('/admin/pages/create'), color: '#10B981' },
    { label: 'Upload Media', icon: <UploadIcon />, action: () => navigate('/admin/media/upload'), color: '#3B82F6' },
    { label: 'Manage Sections', icon: <ReorderIcon />, action: () => navigate('/admin/sections'), color: '#8B5CF6' },
    { label: 'View Analytics', icon: <StatsIcon />, action: () => navigate('/admin/analytics'), color: '#F59E0B' },
  ];

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress size={60} />
      </Box>
    );
  }

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#F8FAFC' }}>
      {/* Sidebar Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          width: 280,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 280,
            boxSizing: 'border-box',
            backgroundColor: '#0F172A',
            color: 'white',
            borderRight: '1px solid rgba(255, 255, 255, 0.1)',
          },
        }}
      >
        <Box sx={{ p: 3, borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <Box
              sx={{
                width: 40,
                height: 40,
                background: 'linear-gradient(135deg, #10B981 0%, #3B82F6 100%)',
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography sx={{ color: 'white', fontWeight: 800, fontSize: '1.2rem' }}>
                A
              </Typography>
            </Box>
            <Typography variant="h6" sx={{ fontWeight: 800 }}>
              NexusAI Admin
            </Typography>
          </Box>
          <Chip
            label={user?.role === 'admin' ? 'Super Admin' : 'Editor'}
            size="small"
            sx={{
              backgroundColor: user?.role === 'admin' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(59, 130, 246, 0.2)',
              color: user?.role === 'admin' ? '#10B981' : '#3B82F6',
              fontWeight: 600,
            }}
          />
        </Box>

        <List sx={{ p: 2 }}>
          {menuItems.map((item) => (
            <ListItem
              key={item.text}
              component={Link}
              to={item.path}
              sx={{
                borderRadius: 2,
                mb: 1,
                color: 'rgba(255, 255, 255, 0.7)',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                },
                '&.Mui-selected': {
                  backgroundColor: 'rgba(16, 185, 129, 0.2)',
                  color: '#10B981',
                },
              }}
            >
              <ListItemIcon sx={{ color: 'inherit', minWidth: 40 }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>

        <Box sx={{ mt: 'auto', p: 3, borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <Button
            fullWidth
            startIcon={<LogoutIcon />}
            onClick={handleLogout}
            sx={{
              color: '#EF4444',
              '&:hover': {
                backgroundColor: 'rgba(239, 68, 68, 0.1)',
              },
            }}
          >
            Logout
          </Button>
        </Box>
      </Drawer>

      {/* Main Content */}
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Top AppBar */}
        <AppBar
          position="sticky"
          sx={{
            backgroundColor: 'white',
            color: '#1E293B',
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
          }}
        >
          <Toolbar>
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Admin Dashboard
              </Typography>
              <Typography variant="body2" sx={{ color: '#64748B' }}>
                Welcome back, {user?.name || 'Admin'}
              </Typography>
            </Box>

            <IconButton sx={{ mr: 2 }}>
              <Badge badgeContent={3} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>

            <IconButton onClick={handleProfileMenuOpen}>
              <Avatar
                sx={{
                  width: 40,
                  height: 40,
                  bgcolor: 'primary.main',
                  fontWeight: 600,
                }}
              >
                {user?.name?.charAt(0)?.toUpperCase() || 'A'}
              </Avatar>
            </IconButton>
          </Toolbar>
        </AppBar>

        {/* Dashboard Content */}
        <Box sx={{ flex: 1, p: 4, overflow: 'auto' }}>
          {/* Welcome Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Paper
              sx={{
                p: 4,
                mb: 4,
                background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
                color: 'white',
                borderRadius: 3,
              }}
            >
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
                Welcome to NexusAI Admin Panel
              </Typography>
              <Typography variant="body1" sx={{ color: '#CBD5E1', mb: 3 }}>
                Manage your entire website content, users, and settings from one place.
                All changes are live instantly.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                {quickActions.map((action, index) => (
                  <motion.div
                    key={action.label}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="contained"
                      startIcon={action.icon}
                      onClick={action.action}
                      sx={{
                        backgroundColor: action.color,
                        color: 'white',
                        borderRadius: 2,
                        fontWeight: 600,
                        '&:hover': {
                          backgroundColor: action.color,
                          opacity: 0.9,
                        },
                      }}
                    >
                      {action.label}
                    </Button>
                  </motion.div>
                ))}
              </Box>
            </Paper>
          </motion.div>

          {/* Stats Grid */}
          <Grid container spacing={3} sx={{ mb: 4 }}>
            {[
              { label: 'Total Pages', value: stats.pages, icon: <PagesIcon />, color: '#10B981', path: '/admin/pages' },
              { label: 'Total Sections', value: stats.sections, icon: <ArticleIcon />, color: '#3B82F6', path: '/admin/sections' },
              { label: 'Media Files', value: stats.media, icon: <MediaIcon />, color: '#8B5CF6', path: '/admin/media' },
              { label: 'Active Users', value: stats.users, icon: <UsersIcon />, color: '#F59E0B', path: '/admin/users' },
              { label: 'Contact Enquiries', value: stats.contacts, icon: <EmailIcon />, color: '#EF4444', path: '/admin/contacts' },
              { label: 'Storage Used', value: '2.4 GB', icon: <ChartIcon />, color: '#06B6D4', path: '/admin/settings' },
            ].map((stat, index) => (
              <Grid item xs={12} sm={6} md={4} lg={2} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    component={Link}
                    to={stat.path}
                    sx={{
                      textDecoration: 'none',
                      borderRadius: 2,
                      border: '1px solid #E2E8F0',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: stat.color,
                        transform: 'translateY(-4px)',
                        boxShadow: `0 10px 25px ${stat.color}20`,
                      },
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                        <Box
                          sx={{
                            width: 50,
                            height: 50,
                            backgroundColor: `${stat.color}15`,
                            borderRadius: 2,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: stat.color,
                          }}
                        >
                          {stat.icon}
                        </Box>
                      </Box>
                      <Typography variant="h3" sx={{ color: '#1E293B', fontWeight: 700, mb: 1 }}>
                        {stat.value}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#64748B', fontWeight: 500 }}>
                        {stat.label}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          {/* Recent Activity Section */}
          <Grid container spacing={3}>
            {/* Recent Pages */}
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Paper sx={{ p: 3, borderRadius: 2, border: '1px solid #E2E8F0' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      Recent Pages
                    </Typography>
                    <Button
                      component={Link}
                      to="/admin/pages"
                      size="small"
                      endIcon={<ViewIcon />}
                    >
                      View All
                    </Button>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {recentPages.map((page) => (
                      <Card key={page.id} sx={{ border: '1px solid #E2E8F0' }}>
                        <CardContent sx={{ p: 2 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Box>
                              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                                {page.title}
                              </Typography>
                              <Typography variant="body2" sx={{ color: '#64748B' }}>
                                /{page.slug}
                              </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', gap: 1 }}>
                              <Chip
                                label={page.isPublished ? 'Published' : 'Draft'}
                                size="small"
                                color={page.isPublished ? 'success' : 'default'}
                              />
                              <IconButton
                                size="small"
                                component={Link}
                                to={`/admin/pages/edit/${page.id}`}
                              >
                                <EditIcon fontSize="small" />
                              </IconButton>
                            </Box>
                          </Box>
                        </CardContent>
                      </Card>
                    ))}
                    {recentPages.length === 0 && (
                      <Typography sx={{ color: '#64748B', textAlign: 'center', py: 4 }}>
                        No pages created yet
                      </Typography>
                    )}
                  </Box>
                </Paper>
              </motion.div>
            </Grid>

            {/* Recent Media */}
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Paper sx={{ p: 3, borderRadius: 2, border: '1px solid #E2E8F0' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      Recent Media
                    </Typography>
                    <Button
                      component={Link}
                      to="/admin/media"
                      size="small"
                      endIcon={<ViewIcon />}
                    >
                      View All
                    </Button>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {recentMedia.map((media) => (
                      <Card key={media.id} sx={{ border: '1px solid #E2E8F0' }}>
                        <CardContent sx={{ p: 2 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Box
                              sx={{
                                width: 60,
                                height: 60,
                                backgroundColor: '#F1F5F9',
                                borderRadius: 1,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              {media.type?.includes('image') ? (
                                <PhotoLibraryIcon sx={{ color: '#64748B' }} />
                              ) : (
                                <VideoLibraryIcon sx={{ color: '#64748B' }} />
                              )}
                            </Box>
                            <Box sx={{ flex: 1 }}>
                              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                                {media.name || 'Untitled'}
                              </Typography>
                              <Typography variant="body2" sx={{ color: '#64748B' }}>
                                {media.type} • {media.size}
                              </Typography>
                            </Box>
                            <IconButton size="small">
                              <EditIcon fontSize="small" />
                            </IconButton>
                          </Box>
                        </CardContent>
                      </Card>
                    ))}
                    {recentMedia.length === 0 && (
                      <Typography sx={{ color: '#64748B', textAlign: 'center', py: 4 }}>
                        No media uploaded yet
                      </Typography>
                    )}
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>

          {/* System Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Paper sx={{ p: 3, mt: 4, borderRadius: 2, border: '1px solid #E2E8F0' }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                System Status
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="body2" sx={{ color: '#64748B', mb: 1 }}>
                      Backend API
                    </Typography>
                    <Chip label="Online" color="success" size="small" />
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="body2" sx={{ color: '#64748B', mb: 1 }}>
                      Database
                    </Typography>
                    <Chip label="Connected" color="success" size="small" />
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="body2" sx={{ color: '#64748B', mb: 1 }}>
                      Storage
                    </Typography>
                    <Chip label="Normal" color="warning" size="small" />
                  </Box>
                </Grid>
              </Grid>
              <LinearProgress
                variant="determinate"
                value={65}
                sx={{
                  mt: 2,
                  height: 8,
                  borderRadius: 4,
                  backgroundColor: '#E2E8F0',
                  '& .MuiLinearProgress-bar': {
                    backgroundColor: '#10B981',
                    borderRadius: 4,
                  },
                }}
              />
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                <Typography variant="caption" sx={{ color: '#64748B' }}>
                  Storage Usage: 65%
                </Typography>
                <Typography variant="caption" sx={{ color: '#64748B' }}>
                  2.4 GB of 3.7 GB used
                </Typography>
              </Box>
            </Paper>
          </motion.div>
        </Box>
      </Box>

      {/* Floating Action Button */}
      <Fab
        color="primary"
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          backgroundColor: '#10B981',
          '&:hover': {
            backgroundColor: '#059669',
          },
        }}
        onClick={() => navigate('/admin/pages/create')}
      >
        <AddIcon />
      </Fab>
    </Box>
  );
};

export default AdminDashboard;