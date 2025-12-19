// frontend/src/components/admin/UserManager.jsx
import React, { useState, useEffect } from 'react';
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  IconButton,
  Chip,
  Switch,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Alert,
  Card,
  CardContent,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Avatar,
  Tooltip,
} from '@mui/material';
import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Person as PersonIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  Security as SecurityIcon,
  Block as BlockIcon,
  CheckCircle as CheckCircleIcon,
  Search as SearchIcon,
  Refresh as RefreshIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const UserManager = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Admin User', email: 'admin@nexusai.com', role: 'admin', status: 'active', createdAt: '2024-01-15' },
    { id: 2, name: 'John Editor', email: 'john@example.com', role: 'editor', status: 'active', createdAt: '2024-02-20' },
    { id: 3, name: 'Sarah Manager', email: 'sarah@example.com', role: 'editor', status: 'inactive', createdAt: '2024-03-10' },
  ]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [filterRole, setFilterRole] = useState('all');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleToggleStatus = (userId, currentStatus) => {
    setUsers(users.map(user => 
      user.id === userId ? { ...user, status: currentStatus === 'active' ? 'inactive' : 'active' } : user
    ));
  };

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(search.toLowerCase()) ||
                         user.email.toLowerCase().includes(search.toLowerCase());
    const matchesRole = filterRole === 'all' || user.role === filterRole;
    return matchesSearch && matchesRole;
  });

  return (
    <Box>
      <Paper sx={{ p: 3, mb: 3, borderRadius: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
          <Box>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
              User Management
            </Typography>
            <Typography variant="body1" sx={{ color: '#64748B' }}>
              Manage user accounts, roles, and permissions
            </Typography>
          </Box>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => setDialogOpen(true)}
            sx={{
              backgroundColor: '#10B981',
              '&:hover': { backgroundColor: '#059669' },
            }}
          >
            Add User
          </Button>
        </Box>

        <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
          <TextField
            placeholder="Search users..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            InputProps={{
              startAdornment: <SearchIcon sx={{ mr: 1, color: '#64748B' }} />,
            }}
            sx={{ flex: 1 }}
          />
          <FormControl sx={{ minWidth: 120 }}>
            <InputLabel>Role</InputLabel>
            <Select
              value={filterRole}
              onChange={(e) => setFilterRole(e.target.value)}
              label="Role"
            >
              <MenuItem value="all">All Roles</MenuItem>
              <MenuItem value="admin">Admin</MenuItem>
              <MenuItem value="editor">Editor</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Paper>

      <Grid container spacing={3}>
        {filteredUsers.map((user, index) => (
          <Grid item xs={12} md={6} lg={4} key={user.id}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card sx={{ border: '1px solid #E2E8F0', borderRadius: 2 }}>
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                    <Avatar
                      sx={{
                        width: 60,
                        height: 60,
                        bgcolor: user.role === 'admin' ? '#10B981' : '#3B82F6',
                        fontSize: 24,
                        fontWeight: 600,
                      }}
                    >
                      {user.name.charAt(0)}
                    </Avatar>
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {user.name}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#64748B' }}>
                        {user.email}
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                    <Chip
                      label={user.role === 'admin' ? 'Super Admin' : 'Editor'}
                      color={user.role === 'admin' ? 'success' : 'primary'}
                      size="small"
                    />
                    <Chip
                      label={user.status === 'active' ? 'Active' : 'Inactive'}
                      color={user.status === 'active' ? 'success' : 'default'}
                      size="small"
                      variant="outlined"
                    />
                  </Box>

                  <Typography variant="caption" sx={{ color: '#64748B', display: 'block', mb: 2 }}>
                    Joined: {user.createdAt}
                  </Typography>

                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button
                      fullWidth
                      variant="outlined"
                      size="small"
                      startIcon={<EditIcon />}
                      onClick={() => {
                        setSelectedUser(user);
                        setDialogOpen(true);
                      }}
                    >
                      Edit
                    </Button>
                    <IconButton
                      size="small"
                      onClick={() => handleToggleStatus(user.id, user.status)}
                      color={user.status === 'active' ? 'default' : 'success'}
                    >
                      {user.status === 'active' ? <BlockIcon /> : <CheckCircleIcon />}
                    </IconButton>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default UserManager;