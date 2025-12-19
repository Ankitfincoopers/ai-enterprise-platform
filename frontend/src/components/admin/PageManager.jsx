// frontend/src/components/admin/PageManager.jsx
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
  FormControlLabel,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Alert,
  Card,
  CardContent,
  CardActions,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Menu,
  MenuItem,
  Tooltip,
} from '@mui/material';
import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Visibility as ViewIcon,
  VisibilityOff as HideIcon,
  MoreVert as MoreVertIcon,
  ContentCopy as CopyIcon,
  ArrowUpward as PublishIcon,
  ArrowDownward as DraftIcon,
  Search as SearchIcon,
  FilterList as FilterIcon,
  Sort as SortIcon,
  Article as ArticleIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { pageAPI } from '../../services/api';

const PageManager = () => {
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedPage, setSelectedPage] = useState(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  const [newPage, setNewPage] = useState({
    title: '',
    slug: '',
    metaTitle: '',
    metaDescription: '',
    isPublished: true,
  });

  useEffect(() => {
    fetchPages();
  }, []);

  const fetchPages = async () => {
    try {
      setLoading(true);
      const response = await pageAPI.getPages();
      setPages(response.data.pages || []);
    } catch (error) {
      setError('Failed to fetch pages');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleMenuOpen = (event, page) => {
    setAnchorEl(event.currentTarget);
    setSelectedPage(page);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedPage(null);
  };

  const handleDeleteClick = () => {
    setDeleteDialogOpen(true);
    handleMenuClose();
  };

  const handleDeleteConfirm = async () => {
    if (!selectedPage) return;
    
    try {
      await pageAPI.deletePage(selectedPage.id);
      setPages(pages.filter(p => p.id !== selectedPage.id));
      setSuccess('Page deleted successfully');
      setDeleteDialogOpen(false);
    } catch (error) {
      setError('Failed to delete page');
      console.error(error);
    }
  };

  const handleCreatePage = async () => {
    try {
      const response = await pageAPI.createPage(newPage);
      setPages([...pages, response.data.page]);
      setSuccess('Page created successfully');
      setCreateDialogOpen(false);
      setNewPage({
        title: '',
        slug: '',
        metaTitle: '',
        metaDescription: '',
        isPublished: true,
      });
    } catch (error) {
      setError('Failed to create page');
      console.error(error);
    }
  };

  const handleTogglePublish = async (pageId, currentStatus) => {
    try {
      await pageAPI.updatePage(pageId, { isPublished: !currentStatus });
      setPages(pages.map(p => 
        p.id === pageId ? { ...p, isPublished: !currentStatus } : p
      ));
      setSuccess('Page status updated');
    } catch (error) {
      setError('Failed to update page status');
      console.error(error);
    }
  };

  const filteredPages = pages.filter(page => {
    const matchesSearch = page.title.toLowerCase().includes(search.toLowerCase()) ||
                         page.slug.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = filterStatus === 'all' || 
                         (filterStatus === 'published' && page.isPublished) ||
                         (filterStatus === 'draft' && !page.isPublished);
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
              Page Manager
            </Typography>
            <Typography variant="body1" sx={{ color: '#64748B' }}>
              Create, edit, and manage website pages
            </Typography>
          </Box>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => setCreateDialogOpen(true)}
            sx={{
              backgroundColor: '#10B981',
              '&:hover': { backgroundColor: '#059669' },
            }}
          >
            Create Page
          </Button>
        </Box>

        {/* Search and Filter */}
        <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
          <TextField
            placeholder="Search pages..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            InputProps={{
              startAdornment: <SearchIcon sx={{ mr: 1, color: '#64748B' }} />,
            }}
            sx={{ flex: 1 }}
          />
          <Button
            startIcon={<FilterIcon />}
            variant="outlined"
            onClick={() => setFilterStatus(filterStatus === 'all' ? 'published' : filterStatus === 'published' ? 'draft' : 'all')}
          >
            {filterStatus === 'all' ? 'All Status' : filterStatus === 'published' ? 'Published' : 'Draft'}
          </Button>
          <Button
            startIcon={<SortIcon />}
            variant="outlined"
            onClick={fetchPages}
          >
            Refresh
          </Button>
        </Box>
      </Paper>

      {/* Error/Success Messages */}
      {error && (
        <Alert severity="error" sx={{ mb: 3 }} onClose={() => setError('')}>
          {error}
        </Alert>
      )}
      {success && (
        <Alert severity="success" sx={{ mb: 3 }} onClose={() => setSuccess('')}>
          {success}
        </Alert>
      )}

      {/* Pages Table */}
      <Paper sx={{ borderRadius: 2 }}>
        <TableContainer>
          <Table>
            <TableHead sx={{ backgroundColor: '#F8FAFC' }}>
              <TableRow>
                <TableCell>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                    Page
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                    Status
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                    Last Modified
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
              {filteredPages
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((pageItem) => (
                  <motion.tr
                    key={pageItem.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Box
                          sx={{
                            width: 40,
                            height: 40,
                            backgroundColor: '#10B98115',
                            borderRadius: 1,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#10B981',
                          }}
                        >
                          <ArticleIcon />
                        </Box>
                        <Box>
                          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                            {pageItem.title}
                          </Typography>
                          <Typography variant="body2" sx={{ color: '#64748B' }}>
                            /{pageItem.slug}
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <FormControlLabel
                          control={
                            <Switch
                              checked={pageItem.isPublished}
                              onChange={() => handleTogglePublish(pageItem.id, pageItem.isPublished)}
                              color="success"
                            />
                          }
                          label={
                            <Chip
                              label={pageItem.isPublished ? 'Published' : 'Draft'}
                              size="small"
                              color={pageItem.isPublished ? 'success' : 'default'}
                            />
                          }
                        />
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2" sx={{ color: '#64748B' }}>
                        {new Date().toLocaleDateString()}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Box sx={{ display: 'flex', gap: 1 }}>
                        <Tooltip title="Edit Page">
                          <IconButton
                            component={Link}
                            to={`/admin/pages/edit/${pageItem.id}`}
                            size="small"
                          >
                            <EditIcon />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="View Page">
                          <IconButton
                            component={Link}
                            to={`/${pageItem.slug}`}
                            target="_blank"
                            size="small"
                          >
                            <ViewIcon />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Duplicate">
                          <IconButton size="small">
                            <CopyIcon />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="More Actions">
                          <IconButton
                            size="small"
                            onClick={(e) => handleMenuOpen(e, pageItem)}
                          >
                            <MoreVertIcon />
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
          count={filteredPages.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

      {/* Empty State */}
      {filteredPages.length === 0 && (
        <Paper sx={{ p: 8, textAlign: 'center', borderRadius: 2, mt: 3 }}>
          <ArticleIcon sx={{ fontSize: 60, color: '#CBD5E1', mb: 2 }} />
          <Typography variant="h6" gutterBottom>
            No pages found
          </Typography>
          <Typography variant="body1" sx={{ color: '#64748B', mb: 3 }}>
            {search ? 'Try adjusting your search or filter' : 'Create your first page to get started'}
          </Typography>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => setCreateDialogOpen(true)}
          >
            Create Page
          </Button>
        </Paper>
      )}

      {/* Create Page Dialog */}
      <Dialog open={createDialogOpen} onClose={() => setCreateDialogOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Create New Page
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
            <TextField
              label="Page Title"
              value={newPage.title}
              onChange={(e) => setNewPage({ ...newPage, title: e.target.value })}
              fullWidth
              required
            />
            <TextField
              label="Slug (URL)"
              value={newPage.slug}
              onChange={(e) => setNewPage({ ...newPage, slug: e.target.value.toLowerCase().replace(/\s+/g, '-') })}
              fullWidth
              required
              helperText="URL-friendly identifier"
            />
            <TextField
              label="Meta Title"
              value={newPage.metaTitle}
              onChange={(e) => setNewPage({ ...newPage, metaTitle: e.target.value })}
              fullWidth
              helperText="For SEO (search engines)"
            />
            <TextField
              label="Meta Description"
              value={newPage.metaDescription}
              onChange={(e) => setNewPage({ ...newPage, metaDescription: e.target.value })}
              fullWidth
              multiline
              rows={3}
              helperText="For SEO (search engines)"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={newPage.isPublished}
                  onChange={(e) => setNewPage({ ...newPage, isPublished: e.target.checked })}
                />
              }
              label="Publish immediately"
            />
          </Box>
        </DialogContent>
        <DialogActions sx={{ p: 3 }}>
          <Button onClick={() => setCreateDialogOpen(false)}>Cancel</Button>
          <Button
            variant="contained"
            onClick={handleCreatePage}
            disabled={!newPage.title || !newPage.slug}
          >
            Create Page
          </Button>
        </DialogActions>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialogOpen} onClose={() => setDeleteDialogOpen(false)}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to delete "{selectedPage?.title}"? This action cannot be undone.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialogOpen(false)}>Cancel</Button>
          <Button
            onClick={handleDeleteConfirm}
            color="error"
            variant="contained"
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      {/* Actions Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>
          <EditIcon sx={{ mr: 2 }} /> Edit
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <CopyIcon sx={{ mr: 2 }} /> Duplicate
        </MenuItem>
        <MenuItem onClick={handleDeleteClick}>
          <DeleteIcon sx={{ mr: 2 }} /> Delete
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default PageManager;