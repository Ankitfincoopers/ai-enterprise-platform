// frontend/src/components/admin/ContactManager.jsx
import React, { useState, useEffect } from 'react';
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  IconButton,
  Chip,
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
  Badge,
  Tooltip,
  LinearProgress,
  TextareaAutosize,
} from '@mui/material';
import {
  Search as SearchIcon,
  FilterList as FilterIcon,
  Refresh as RefreshIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  Business as BusinessIcon,
  Schedule as ScheduleIcon,
  CheckCircle as CheckCircleIcon,
  Pending as PendingIcon,
  Visibility as ViewIcon,
  Reply as ReplyIcon,
  Delete as DeleteIcon,
  MarkEmailRead as MarkReadIcon,
  Archive as ArchiveIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { contactAPI } from '../../services/api';

const ContactManager = () => {
  const [enquiries, setEnquiries] = useState([
    {
      id: 1,
      name: 'John Smith',
      email: 'john@example.com',
      company: 'TechCorp Inc.',
      phone: '+1 (555) 123-4567',
      subject: 'Enterprise AI Consultation',
      message: 'Interested in your enterprise AI solutions for our analytics platform.',
      status: 'new',
      date: '2024-12-19 10:30',
      read: false,
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      email: 'sarah@tech.com',
      company: 'DataFlow Systems',
      phone: '+1 (555) 987-6543',
      subject: 'Pricing Inquiry',
      message: 'Would like to know about your pricing plans for 500+ users.',
      status: 'in-progress',
      date: '2024-12-18 14:20',
      read: true,
    },
    {
      id: 3,
      name: 'Michael Chen',
      email: 'michael@innovate.ai',
      company: 'Innovate AI',
      phone: '+1 (555) 456-7890',
      subject: 'Partnership Opportunity',
      message: 'Looking to partner for our upcoming AI project. Let\'s discuss.',
      status: 'responded',
      date: '2024-12-17 09:15',
      read: true,
    },
    {
      id: 4,
      name: 'Emma Wilson',
      email: 'emma@globaltech.com',
      company: 'GlobalTech Solutions',
      phone: '+1 (555) 234-5678',
      subject: 'Demo Request',
      message: 'Requesting a demo of your platform for our engineering team.',
      status: 'new',
      date: '2024-12-19 08:45',
      read: false,
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [viewDialogOpen, setViewDialogOpen] = useState(false);
  const [replyDialogOpen, setReplyDialogOpen] = useState(false);
  const [selectedEnquiry, setSelectedEnquiry] = useState(null);
  const [replyMessage, setReplyMessage] = useState('');

  const statusColors = {
    new: '#3B82F6',
    'in-progress': '#F59E0B',
    responded: '#10B981',
    archived: '#64748B',
  };

  const statusIcons = {
    new: <PendingIcon />,
    'in-progress': <ScheduleIcon />,
    responded: <CheckCircleIcon />,
    archived: <ArchiveIcon />,
  };

  const handleViewEnquiry = (enquiry) => {
    setSelectedEnquiry(enquiry);
    setViewDialogOpen(true);
    // Mark as read
    if (!enquiry.read) {
      setEnquiries(enquiries.map(e => 
        e.id === enquiry.id ? { ...e, read: true } : e
      ));
    }
  };

  const handleReply = (enquiry) => {
    setSelectedEnquiry(enquiry);
    setReplyMessage(`Dear ${enquiry.name},\n\nThank you for your interest in NexusAI. `);
    setReplyDialogOpen(true);
  };

  const handleSendReply = () => {
    // Simulate sending reply
    setEnquiries(enquiries.map(e => 
      e.id === selectedEnquiry.id ? { ...e, status: 'responded' } : e
    ));
    setReplyDialogOpen(false);
    setSelectedEnquiry(null);
    setReplyMessage('');
  };

  const handleChangeStatus = (enquiryId, newStatus) => {
    setEnquiries(enquiries.map(e => 
      e.id === enquiryId ? { ...e, status: newStatus } : e
    ));
  };

  const filteredEnquiries = enquiries.filter(enquiry => {
    const matchesSearch = enquiry.name.toLowerCase().includes(search.toLowerCase()) ||
                         enquiry.email.toLowerCase().includes(search.toLowerCase()) ||
                         enquiry.subject.toLowerCase().includes(search.toLowerCase()) ||
                         enquiry.company?.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = filterStatus === 'all' || enquiry.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box>
      {/* Header */}
      <Paper sx={{ p: 3, mb: 3, borderRadius: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
          <Box>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
              Contact Enquiries
            </Typography>
            <Typography variant="body1" sx={{ color: '#64748B' }}>
              Manage and respond to customer enquiries
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Badge badgeContent={enquiries.filter(e => !e.read).length} color="error">
              <EmailIcon />
            </Badge>
            <Button
              startIcon={<RefreshIcon />}
              variant="outlined"
              onClick={() => setLoading(!loading)}
            >
              Refresh
            </Button>
          </Box>
        </Box>

        {/* Search and Filter */}
        <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
          <TextField
            placeholder="Search enquiries..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            InputProps={{
              startAdornment: <SearchIcon sx={{ mr: 1, color: '#64748B' }} />,
            }}
            sx={{ flex: 1 }}
          />
          <FormControl sx={{ minWidth: 150 }}>
            <InputLabel>Status</InputLabel>
            <Select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              label="Status"
            >
              <MenuItem value="all">All Status</MenuItem>
              <MenuItem value="new">New</MenuItem>
              <MenuItem value="in-progress">In Progress</MenuItem>
              <MenuItem value="responded">Responded</MenuItem>
              <MenuItem value="archived">Archived</MenuItem>
            </Select>
          </FormControl>
          <Button
            startIcon={<FilterIcon />}
            variant="outlined"
            onClick={() => setFilterStatus(filterStatus === 'all' ? 'new' : 'all')}
          >
            Filter
          </Button>
        </Box>
      </Paper>

      {/* Stats */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {[
          { label: 'Total Enquiries', value: enquiries.length, color: '#3B82F6' },
          { label: 'New', value: enquiries.filter(e => e.status === 'new').length, color: '#EF4444' },
          { label: 'In Progress', value: enquiries.filter(e => e.status === 'in-progress').length, color: '#F59E0B' },
          { label: 'Responded', value: enquiries.filter(e => e.status === 'responded').length, color: '#10B981' },
        ].map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card sx={{ borderRadius: 2, border: '1px solid #E2E8F0' }}>
                <CardContent sx={{ p: 3, textAlign: 'center' }}>
                  <Typography variant="h3" sx={{ color: stat.color, fontWeight: 700, mb: 1 }}>
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

      {/* Enquiries Table */}
      <Paper sx={{ borderRadius: 2, overflow: 'hidden' }}>
        <TableContainer>
          <Table>
            <TableHead sx={{ backgroundColor: '#F8FAFC' }}>
              <TableRow>
                <TableCell>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                    Contact
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                    Subject
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                    Company
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                    Status
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                    Date
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                    Actions
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredEnquiries
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((enquiry) => (
                  <motion.tr
                    key={enquiry.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Avatar sx={{ bgcolor: statusColors[enquiry.status] }}>
                          {enquiry.name.charAt(0)}
                        </Avatar>
                        <Box>
                          <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                            {enquiry.name}
                            {!enquiry.read && (
                              <Box component="span" sx={{ ml: 1, width: 8, height: 8, backgroundColor: '#EF4444', borderRadius: '50%', display: 'inline-block' }} />
                            )}
                          </Typography>
                          <Typography variant="caption" sx={{ color: '#64748B' }}>
                            {enquiry.email}
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        {enquiry.subject}
                      </Typography>
                      <Typography variant="caption" sx={{ color: '#64748B' }}>
                        {enquiry.message.substring(0, 50)}...
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <BusinessIcon sx={{ fontSize: 16, color: '#64748B' }} />
                        <Typography variant="body2">
                          {enquiry.company}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={enquiry.status.replace('-', ' ')}
                        size="small"
                        icon={statusIcons[enquiry.status]}
                        sx={{
                          backgroundColor: `${statusColors[enquiry.status]}15`,
                          color: statusColors[enquiry.status],
                          fontWeight: 500,
                          textTransform: 'capitalize',
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2" sx={{ color: '#64748B' }}>
                        {enquiry.date}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Box sx={{ display: 'flex', gap: 1 }}>
                        <Tooltip title="View Details">
                          <IconButton
                            size="small"
                            onClick={() => handleViewEnquiry(enquiry)}
                          >
                            <ViewIcon fontSize="small" />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Reply">
                          <IconButton
                            size="small"
                            onClick={() => handleReply(enquiry)}
                          >
                            <ReplyIcon fontSize="small" />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Mark as Read">
                          <IconButton
                            size="small"
                            onClick={() => handleChangeStatus(enquiry.id, 'responded')}
                          >
                            <MarkReadIcon fontSize="small" />
                          </IconButton>
                        </Tooltip>
                      </Box>
                    </TableCell>
                  </motion.tr>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filteredEnquiries.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

      {/* Empty State */}
      {filteredEnquiries.length === 0 && (
        <Paper sx={{ p: 8, textAlign: 'center', borderRadius: 2, mt: 3 }}>
          <EmailIcon sx={{ fontSize: 60, color: '#CBD5E1', mb: 2 }} />
          <Typography variant="h6" gutterBottom>
            No enquiries found
          </Typography>
          <Typography variant="body1" sx={{ color: '#64748B', mb: 3 }}>
            {search ? 'Try adjusting your search or filter' : 'All enquiries are processed'}
          </Typography>
        </Paper>
      )}

      {/* View Enquiry Dialog */}
      <Dialog open={viewDialogOpen} onClose={() => setViewDialogOpen(false)} maxWidth="md" fullWidth>
        <DialogTitle>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Enquiry Details
          </Typography>
        </DialogTitle>
        <DialogContent>
          {selectedEnquiry && (
            <Box sx={{ mt: 2 }}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Typography variant="subtitle2" sx={{ color: '#64748B', mb: 1 }}>
                    From
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                    <Avatar sx={{ bgcolor: statusColors[selectedEnquiry.status] }}>
                      {selectedEnquiry.name.charAt(0)}
                    </Avatar>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {selectedEnquiry.name}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#64748B' }}>
                        {selectedEnquiry.email}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle2" sx={{ color: '#64748B', mb: 1 }}>
                    Company
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    {selectedEnquiry.company}
                  </Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle2" sx={{ color: '#64748B', mb: 1 }}>
                    Phone
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    {selectedEnquiry.phone}
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <Typography variant="subtitle2" sx={{ color: '#64748B', mb: 1 }}>
                    Subject
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                    {selectedEnquiry.subject}
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <Typography variant="subtitle2" sx={{ color: '#64748B', mb: 1 }}>
                    Message
                  </Typography>
                  <Paper sx={{ p: 3, backgroundColor: '#F8FAFC', borderRadius: 2 }}>
                    <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap' }}>
                      {selectedEnquiry.message}
                    </Typography>
                  </Paper>
                </Grid>

                <Grid item xs={12}>
                  <Typography variant="subtitle2" sx={{ color: '#64748B', mb: 1 }}>
                    Status
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                    <Chip
                      label={selectedEnquiry.status.replace('-', ' ')}
                      color={selectedEnquiry.status === 'new' ? 'primary' : 
                             selectedEnquiry.status === 'in-progress' ? 'warning' : 
                             selectedEnquiry.status === 'responded' ? 'success' : 'default'}
                      sx={{ textTransform: 'capitalize' }}
                    />
                    <Typography variant="caption" sx={{ color: '#64748B' }}>
                      Received: {selectedEnquiry.date}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          )}
        </DialogContent>
        <DialogActions sx={{ p: 3 }}>
          <Button onClick={() => setViewDialogOpen(false)}>Close</Button>
          <Button
            variant="contained"
            onClick={() => {
              setViewDialogOpen(false);
              handleReply(selectedEnquiry);
            }}
            startIcon={<ReplyIcon />}
          >
            Reply
          </Button>
        </DialogActions>
      </Dialog>

      {/* Reply Dialog */}
      <Dialog open={replyDialogOpen} onClose={() => setReplyDialogOpen(false)} maxWidth="md" fullWidth>
        <DialogTitle>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Reply to Enquiry
          </Typography>
        </DialogTitle>
        <DialogContent>
          {selectedEnquiry && (
            <Box sx={{ mt: 2 }}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Typography variant="body2" sx={{ color: '#64748B', mb: 1 }}>
                    To: {selectedEnquiry.name} &lt;{selectedEnquiry.email}&gt;
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#64748B', mb: 2 }}>
                    Subject: Re: {selectedEnquiry.subject}
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <TextareaAutosize
                    minRows={10}
                    value={replyMessage}
                    onChange={(e) => setReplyMessage(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '16px',
                      border: '1px solid #E2E8F0',
                      borderRadius: '8px',
                      fontFamily: 'inherit',
                      fontSize: '14px',
                      resize: 'vertical',
                      backgroundColor: '#F8FAFC',
                    }}
                    placeholder="Type your reply here..."
                  />
                </Grid>
              </Grid>
            </Box>
          )}
        </DialogContent>
        <DialogActions sx={{ p: 3 }}>
          <Button onClick={() => setReplyDialogOpen(false)}>Cancel</Button>
          <Button
            variant="contained"
            onClick={handleSendReply}
            startIcon={<EmailIcon />}
          >
            Send Reply
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ContactManager;