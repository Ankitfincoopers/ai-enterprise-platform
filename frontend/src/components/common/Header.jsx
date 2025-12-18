// import React, { useState } from 'react';
// import {
//   AppBar,
//   Toolbar,
//   Container,
//   Button,
//   IconButton,
//   Box,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   useScrollTrigger,
//   Slide,
//   Avatar,
// } from '@mui/material';
// import {
//   Menu as MenuIcon,
//   Close as CloseIcon,
//   RocketLaunch as RocketIcon,
// } from '@mui/icons-material';
// import { Link } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { logout } from '../../store/authSlice';

// const Header = () => {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const { user } = useSelector((state) => state.auth);
//   const dispatch = useDispatch();

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   const handleLogout = () => {
//     dispatch(logout());
//   };

//   const navItems = [
//     { label: 'Home', path: '/' },
//     { label: 'About', path: '/about' },
//     { label: 'Services', path: '/services' },
//     { label: 'Team', path: '/team' },
//     { label: 'Contact', path: '/contact' },
//   ];

//   const drawer = (
//     <Box sx={{ width: 250 }} role="presentation">
//       <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//         <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//           <RocketIcon sx={{ color: 'primary.main' }} />
//           <Box sx={{ fontWeight: 700, fontSize: '1.25rem' }}>Enterprise AI</Box>
//         </Box>
//         <IconButton onClick={handleDrawerToggle}>
//           <CloseIcon />
//         </IconButton>
//       </Box>
//       <List>
//         {navItems.map((item) => (
//           <ListItem
//             key={item.label}
//             component={Link}
//             to={item.path}
//             onClick={handleDrawerToggle}
//             sx={{
//               color: 'text.primary',
//               '&:hover': {
//                 backgroundColor: 'primary.light',
//                 color: 'white',
//               },
//             }}
//           >
//             <ListItemText primary={item.label} />
//           </ListItem>
//         ))}
//         {user ? (
//           <>
//             <ListItem
//               component={Link}
//               to="/admin"
//               onClick={handleDrawerToggle}
//               sx={{
//                 color: 'text.primary',
//                 '&:hover': {
//                   backgroundColor: 'primary.light',
//                   color: 'white',
//                 },
//               }}
//             >
//               <ListItemText primary="Dashboard" />
//             </ListItem>
//             <ListItem
//               onClick={() => {
//                 handleLogout();
//                 handleDrawerToggle();
//               }}
//               sx={{
//                 color: 'error.main',
//                 '&:hover': {
//                   backgroundColor: 'error.light',
//                   color: 'white',
//                 },
//               }}
//             >
//               <ListItemText primary="Logout" />
//             </ListItem>
//           </>
//         ) : (
//           <ListItem
//             component={Link}
//             to="/login"
//             onClick={handleDrawerToggle}
//             sx={{
//               color: 'primary.main',
//               '&:hover': {
//                 backgroundColor: 'primary.light',
//                 color: 'white',
//               },
//             }}
//           >
//             <ListItemText primary="Login" />
//           </ListItem>
//         )}
//       </List>
//     </Box>
//   );

//   return (
//     <>
//       <AppBar
//         position="sticky"
//         sx={{
//           backgroundColor: 'white',
//           color: 'text.primary',
//           boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
//         }}
//       >
//         <Container maxWidth="lg">
//           <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 0, sm: 2 } }}>
//             {/* Logo */}
//             <Box
//               component={Link}
//               to="/"
//               sx={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: 1,
//                 textDecoration: 'none',
//                 color: 'inherit',
//               }}
//             >
//               <RocketIcon sx={{ color: 'primary.main', fontSize: 32 }} />
//               <Box sx={{ fontWeight: 700, fontSize: '1.5rem' }}>Enterprise AI</Box>
//             </Box>

//             {/* Desktop Navigation */}
//             <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 2 }}>
//               {navItems.map((item) => (
//                 <Button
//                   key={item.label}
//                   component={Link}
//                   to={item.path}
//                   sx={{
//                     color: 'text.primary',
//                     fontWeight: 500,
//                     '&:hover': {
//                       color: 'primary.main',
//                     },
//                   }}
//                 >
//                   {item.label}
//                 </Button>
//               ))}
//               {user ? (
//                 <>
//                   <Button
//                     component={Link}
//                     to="/admin"
//                     variant="contained"
//                     sx={{
//                       ml: 2,
//                       backgroundColor: 'primary.main',
//                       '&:hover': {
//                         backgroundColor: 'primary.dark',
//                       },
//                     }}
//                   >
//                     Dashboard
//                   </Button>
//                   <IconButton onClick={handleLogout} color="error">
//                     <Avatar sx={{ width: 32, height: 32, bgcolor: 'primary.main' }}>
//                       {user.name.charAt(0)}
//                     </Avatar>
//                   </IconButton>
//                 </>
//               ) : (
//                 <Button
//                   component={Link}
//                   to="/login"
//                   variant="contained"
//                   sx={{
//                     ml: 2,
//                     backgroundColor: 'primary.main',
//                     '&:hover': {
//                       backgroundColor: 'primary.dark',
//                     },
//                   }}
//                 >
//                   Login
//                 </Button>
//               )}
//             </Box>

//             {/* Mobile menu button */}
//             <IconButton
//               color="inherit"
//               aria-label="open drawer"
//               edge="start"
//               onClick={handleDrawerToggle}
//               sx={{ display: { md: 'none' } }}
//             >
//               <MenuIcon />
//             </IconButton>
//           </Toolbar>
//         </Container>
//       </AppBar>

//       {/* Mobile Drawer */}
//       <Drawer
//         anchor="right"
//         open={mobileOpen}
//         onClose={handleDrawerToggle}
//         ModalProps={{
//           keepMounted: true,
//         }}
//         sx={{
//           display: { xs: 'block', md: 'none' },
//           '& .MuiDrawer-paper': {
//             boxSizing: 'border-box',
//             width: 250,
//           },
//         }}
//       >
//         {drawer}
//       </Drawer>
//     </>
//   );
// };

// export default Header;

import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Container,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Avatar,
  Typography,
  Menu,
  MenuItem,
  Divider,
  Chip,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  Dashboard as DashboardIcon,
  Logout as LogoutIcon,
  Person as PersonIcon,
  Settings as SettingsIcon,
  Brightness7 as SunIcon,
  Brightness4 as MoonIcon,
} from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/authSlice';
import { motion } from 'framer-motion';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    handleProfileMenuClose();
    navigate('/');
  };

  const handleDashboard = () => {
    navigate('/admin');
    handleProfileMenuClose();
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // You can add theme switching logic here
  };

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Team', path: '/team' },
    { label: 'Contact', path: '/contact' },
  ];

  const drawer = (
    <Box sx={{ width: 280, height: '100%', backgroundColor: '#0F172A', color: 'white' }}>
      {/* Drawer Header */}
      <Box sx={{ p: 3, display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Box
            sx={{
              width: 40,
              height: 40,
              backgroundColor: 'linear-gradient(135deg, #10B981 0%, #3B82F6 100%)',
              borderRadius: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(135deg, #10B981, #3B82F6)',
            }}
          >
            <Typography sx={{ color: 'white', fontWeight: 800, fontSize: '1.2rem' }}>
              N
            </Typography>
          </Box>
          <Typography sx={{ fontWeight: 800, fontSize: '1.5rem', background: 'linear-gradient(135deg, #FFFFFF 0%, #10B981 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            NexusAI
          </Typography>
        </Box>
        <IconButton 
          onClick={handleDrawerToggle}
          sx={{ color: 'rgba(255, 255, 255, 0.7)', '&:hover': { color: 'white' } }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      {/* User Info in Drawer */}
      {user && (
        <Box sx={{ p: 3, borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Avatar
              sx={{
                width: 48,
                height: 48,
                bgcolor: 'primary.main',
                border: '2px solid #10B981',
              }}
            >
              {user.name ? user.name.charAt(0).toUpperCase() : 'A'}
            </Avatar>
            <Box>
              <Typography sx={{ fontWeight: 600, fontSize: '1.1rem' }}>
                {user.name || 'Admin User'}
              </Typography>
              <Typography sx={{ color: '#94A3B8', fontSize: '0.9rem' }}>
                {user.email || 'admin@nexusai.com'}
              </Typography>
            </Box>
          </Box>
          <Chip
            label="Admin"
            size="small"
            sx={{
              mt: 2,
              backgroundColor: 'rgba(16, 185, 129, 0.2)',
              color: '#10B981',
              fontWeight: 600,
            }}
          />
        </Box>
      )}

      {/* Drawer Navigation */}
      <List sx={{ p: 2 }}>
        {navItems.map((item) => (
          <ListItem
            key={item.label}
            component={Link}
            to={item.path}
            onClick={handleDrawerToggle}
            sx={{
              borderRadius: 1,
              mb: 1,
              color: 'rgba(255, 255, 255, 0.7)',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
              },
            }}
          >
            <ListItemText 
              primary={item.label}
              primaryTypographyProps={{ fontWeight: 500 }}
            />
          </ListItem>
        ))}
        
        {/* Admin Links */}
        {user && (
          <>
            <Divider sx={{ my: 2, borderColor: 'rgba(255, 255, 255, 0.1)' }} />
            <ListItem
              component={Link}
              to="/admin"
              onClick={handleDrawerToggle}
              sx={{
                borderRadius: 1,
                mb: 1,
                color: 'rgba(255, 255, 255, 0.7)',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                },
              }}
            >
              <DashboardIcon sx={{ mr: 2, fontSize: 20 }} />
              <ListItemText 
                primary="Dashboard"
                primaryTypographyProps={{ fontWeight: 500 }}
              />
            </ListItem>
            <ListItem
              component={Link}
              to="/admin/settings"
              onClick={handleDrawerToggle}
              sx={{
                borderRadius: 1,
                mb: 1,
                color: 'rgba(255, 255, 255, 0.7)',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                },
              }}
            >
              <SettingsIcon sx={{ mr: 2, fontSize: 20 }} />
              <ListItemText 
                primary="Settings"
                primaryTypographyProps={{ fontWeight: 500 }}
              />
            </ListItem>
            <ListItem
              onClick={() => {
                handleLogout();
                handleDrawerToggle();
              }}
              sx={{
                borderRadius: 1,
                mb: 1,
                color: '#EF4444',
                '&:hover': {
                  backgroundColor: 'rgba(239, 68, 68, 0.1)',
                },
              }}
            >
              <LogoutIcon sx={{ mr: 2, fontSize: 20 }} />
              <ListItemText 
                primary="Logout"
                primaryTypographyProps={{ fontWeight: 500 }}
              />
            </ListItem>
          </>
        )}
      </List>

      {/* Theme Toggle in Drawer */}
      <Box sx={{ p: 3, borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
        <ListItem
          onClick={toggleDarkMode}
          sx={{
            borderRadius: 1,
            color: 'rgba(255, 255, 255, 0.7)',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              color: 'white',
            },
            cursor: 'pointer',
          }}
        >
          {darkMode ? (
            <SunIcon sx={{ mr: 2, fontSize: 20 }} />
          ) : (
            <MoonIcon sx={{ mr: 2, fontSize: 20 }} />
          )}
          <ListItemText 
            primary={darkMode ? 'Light Mode' : 'Dark Mode'}
            primaryTypographyProps={{ fontWeight: 500 }}
          />
        </ListItem>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: 'rgba(15, 23, 42, 0.95)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ 
            justifyContent: 'space-between', 
            px: { xs: 1, sm: 2, md: 4 },
            minHeight: { xs: 64, md: 72 }
          }}>
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Box
                component={Link}
                to="/"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    background: 'linear-gradient(135deg, #10B981 0%, #3B82F6 100%)',
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 15px rgba(16, 185, 129, 0.3)',
                  }}
                >
                  <Typography sx={{ color: 'white', fontWeight: 800, fontSize: '1.5rem' }}>
                    N
                  </Typography>
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 800,
                    background: 'linear-gradient(135deg, #FFFFFF 0%, #10B981 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    display: { xs: 'none', sm: 'block' },
                  }}
                >
                  NexusAI
                </Typography>
              </Box>
            </motion.div>

            {/* Desktop Navigation */}
            <Box sx={{ 
              display: { xs: 'none', md: 'flex' }, 
              alignItems: 'center', 
              gap: 1,
              flex: 1,
              justifyContent: 'center'
            }}>
              {navItems.map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    component={Link}
                    to={item.path}
                    sx={{
                      color: 'rgba(255, 255, 255, 0.8)',
                      fontWeight: 500,
                      px: 2,
                      py: 1,
                      fontSize: '0.95rem',
                      '&:hover': {
                        color: 'white',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                </motion.div>
              ))}
            </Box>

            {/* Right Section - CTA and User */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {/* Get Started Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="contained"
                  component={Link}
                  to={user ? '/admin' : '/signup'}
                  sx={{
                    backgroundColor: '#10B981',
                    color: 'white',
                    px: 3,
                    py: 1,
                    borderRadius: 2,
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    textTransform: 'none',
                    display: { xs: 'none', sm: 'flex' },
                    '&:hover': {
                      backgroundColor: '#059669',
                      boxShadow: '0 10px 20px rgba(16, 185, 129, 0.3)',
                    },
                  }}
                >
                  {user ? 'Dashboard' : 'Get Started'}
                </Button>
              </motion.div>

              {/* User Profile or Login */}
              {user ? (
                <>
                  <IconButton
                    onClick={handleProfileMenuOpen}
                    sx={{
                      p: 0.5,
                      border: '2px solid rgba(16, 185, 129, 0.3)',
                      '&:hover': {
                        borderColor: '#10B981',
                      },
                    }}
                  >
                    <Avatar
                      sx={{
                        width: 40,
                        height: 40,
                        bgcolor: 'primary.main',
                        fontWeight: 600,
                      }}
                    >
                      {user.name ? user.name.charAt(0).toUpperCase() : 'A'}
                    </Avatar>
                  </IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleProfileMenuClose}
                    PaperProps={{
                      elevation: 3,
                      sx: {
                        mt: 1.5,
                        minWidth: 200,
                        borderRadius: 2,
                        backgroundColor: '#1E293B',
                        color: 'white',
                        '& .MuiMenuItem-root': {
                          '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          },
                        },
                      },
                    }}
                  >
                    <Box sx={{ p: 2, borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                      <Typography sx={{ fontWeight: 600 }}>{user.name || 'Admin User'}</Typography>
                      <Typography sx={{ color: '#94A3B8', fontSize: '0.9rem' }}>
                        {user.email || 'admin@nexusai.com'}
                      </Typography>
                      <Chip
                        label="Admin"
                        size="small"
                        sx={{
                          mt: 1,
                          backgroundColor: 'rgba(16, 185, 129, 0.2)',
                          color: '#10B981',
                          fontWeight: 600,
                        }}
                      />
                    </Box>
                    <MenuItem onClick={handleDashboard}>
                      <DashboardIcon sx={{ mr: 2, fontSize: 20 }} />
                      Dashboard
                    </MenuItem>
                    <MenuItem onClick={handleProfileMenuClose} component={Link} to="/admin/settings">
                      <SettingsIcon sx={{ mr: 2, fontSize: 20 }} />
                      Settings
                    </MenuItem>
                    <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)' }} />
                    <MenuItem onClick={handleLogout} sx={{ color: '#EF4444' }}>
                      <LogoutIcon sx={{ mr: 2, fontSize: 20 }} />
                      Logout
                    </MenuItem>
                  </Menu>
                </>
              ) : (
                <Button
                  component={Link}
                  to="/login"
                  sx={{
                    color: 'white',
                    fontWeight: 500,
                    fontSize: '0.9rem',
                    display: { xs: 'none', sm: 'block' },
                  }}
                >
                  Sign In
                </Button>
              )}

              {/* Theme Toggle */}
              <IconButton
                onClick={toggleDarkMode}
                sx={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  '&:hover': { color: 'white' },
                  display: { xs: 'none', md: 'flex' },
                }}
              >
                {darkMode ? <SunIcon /> : <MoonIcon />}
              </IconButton>

              {/* Mobile menu button */}
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ 
                  display: { md: 'none' },
                  color: 'white'
                }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 280,
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;