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
  Divider,
  Alert,
  CircularProgress,
  Grid,
  Card,
  CardContent,
  CardActions,
} from '@mui/material';
import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  DragIndicator as DragIcon,
  Visibility as ViewIcon,
  VisibilityOff as HideIcon,
  Save as SaveIcon,
} from '@mui/icons-material';
import { DndContext, closestCorners, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { SortableItem } from './SortableItem';
import { pageAPI, sectionAPI } from '../../services/api';

const PageEditor = ({ pageId }) => {
  const [page, setPage] = useState(null);
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  useEffect(() => {
    fetchPageData();
  }, [pageId]);

  const fetchPageData = async () => {
    try {
      setLoading(true);
      const pageResponse = await pageAPI.getPageFull(pageId);
      setPage(pageResponse.data.page);
      setSections(pageResponse.data.page.sections || []);
    } catch (error) {
      setError('Failed to load page data');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDragEnd = async (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      const oldIndex = sections.findIndex(item => item._id === active.id);
      const newIndex = sections.findIndex(item => item._id === over.id);

      const newSections = [...sections];
      const [movedSection] = newSections.splice(oldIndex, 1);
      newSections.splice(newIndex, 0, movedSection);

      // Update order numbers
      const updatedSections = newSections.map((section, index) => ({
        ...section,
        order: index + 1,
      }));

      setSections(updatedSections);

      try {
        await sectionAPI.reorderSections({
          sections: updatedSections.map(section => ({
            id: section._id,
            order: section.order,
          })),
        });
        setSuccess('Sections reordered successfully');
      } catch (error) {
        setError('Failed to reorder sections');
        console.error(error);
        fetchPageData(); // Revert on error
      }
    }
  };

  const handlePageUpdate = async () => {
    try {
      setSaving(true);
      await pageAPI.updatePage(pageId, {
        title: page.title,
        metaTitle: page.metaTitle,
        metaDescription: page.metaDescription,
        isPublished: page.isPublished,
      });
      setSuccess('Page updated successfully');
    } catch (error) {
      setError('Failed to update page');
      console.error(error);
    } finally {
      setSaving(false);
    }
  };

  const handleSectionToggle = async (sectionId, isEnabled) => {
    try {
      await sectionAPI.toggleSection(sectionId);
      setSections(sections.map(section => 
        section._id === sectionId 
          ? { ...section, isEnabled: !isEnabled }
          : section
      ));
      setSuccess('Section visibility updated');
    } catch (error) {
      setError('Failed to update section');
      console.error(error);
    }
  };

  const handleSectionDelete = async (sectionId) => {
    if (!window.confirm('Are you sure you want to delete this section?')) return;

    try {
      await sectionAPI.deleteSection(sectionId);
      setSections(sections.filter(section => section._id !== sectionId));
      setSuccess('Section deleted successfully');
    } catch (error) {
      setError('Failed to delete section');
      console.error(error);
    }
  };

  const handleAddSection = () => {
    // Open section creation dialog
    // Implementation depends on your modal/dialog system
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight={400}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box>
      {error && (
        <Alert severity="error" sx={{ mb: 2 }} onClose={() => setError('')}>
          {error}
        </Alert>
      )}
      {success && (
        <Alert severity="success" sx={{ mb: 2 }} onClose={() => setSuccess('')}>
          {success}
        </Alert>
      )}

      {/* Page Info */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Page Settings
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Page Title"
              value={page?.title || ''}
              onChange={(e) => setPage({ ...page, title: e.target.value })}
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Slug"
              value={page?.slug || ''}
              disabled
              margin="normal"
              helperText="URL identifier (cannot be changed)"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Meta Title"
              value={page?.metaTitle || ''}
              onChange={(e) => setPage({ ...page, metaTitle: e.target.value })}
              margin="normal"
              helperText="For SEO (search engines)"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Meta Description"
              value={page?.metaDescription || ''}
              onChange={(e) => setPage({ ...page, metaDescription: e.target.value })}
              margin="normal"
              multiline
              rows={2}
              helperText="For SEO (search engines)"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Switch
                  checked={page?.isPublished || false}
                  onChange={(e) => setPage({ ...page, isPublished: e.target.checked })}
                />
              }
              label="Published"
            />
            <Chip
              label={page?.isPublished ? 'Live' : 'Draft'}
              color={page?.isPublished ? 'success' : 'default'}
              size="small"
              sx={{ ml: 2 }}
            />
          </Grid>
        </Grid>
        <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
          <Button
            variant="contained"
            startIcon={<SaveIcon />}
            onClick={handlePageUpdate}
            disabled={saving}
          >
            {saving ? 'Saving...' : 'Save Page Settings'}
          </Button>
          <Button
            variant="outlined"
            onClick={fetchPageData}
          >
            Refresh
          </Button>
        </Box>
      </Paper>

      {/* Sections Management */}
      <Paper sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h6">
            Sections ({sections.length})
          </Typography>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={handleAddSection}
          >
            Add Section
          </Button>
        </Box>

        <DndContext
          sensors={sensors}
          collisionDetection={closestCorners}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={sections.map(section => section._id)}
            strategy={verticalListSortingStrategy}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {sections.map((section) => (
                <SortableItem key={section._id} id={section._id}>
                  <Card>
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                        <DragIcon sx={{ color: 'text.secondary', cursor: 'move' }} />
                        <Box sx={{ flex: 1 }}>
                          <Typography variant="subtitle1">
                            {section.title || `Section ${section.order}`}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Type: {section.type} • Order: {section.order}
                          </Typography>
                        </Box>
                        <IconButton
                          size="small"
                          onClick={() => handleSectionToggle(section._id, section.isEnabled)}
                        >
                          {section.isEnabled ? <ViewIcon /> : <HideIcon />}
                        </IconButton>
                        <IconButton
                          size="small"
                          color="primary"
                          onClick={() => {/* Open edit dialog */}}
                        >
                          <EditIcon />
                        </IconButton>
                        <IconButton
                          size="small"
                          color="error"
                          onClick={() => handleSectionDelete(section._id)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Box>
                      {section.subtitle && (
                        <Typography variant="body2" color="text.secondary" gutterBottom>
                          {section.subtitle}
                        </Typography>
                      )}
                      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                        <Chip
                          label={section.isEnabled ? 'Enabled' : 'Disabled'}
                          color={section.isEnabled ? 'success' : 'default'}
                          size="small"
                        />
                        {section.buttons?.length > 0 && (
                          <Chip
                            label={`${section.buttons.length} button(s)`}
                            size="small"
                          />
                        )}
                        {section.images?.length > 0 && (
                          <Chip
                            label={`${section.images.length} image(s)`}
                            size="small"
                          />
                        )}
                      </Box>
                    </CardContent>
                  </Card>
                </SortableItem>
              ))}
            </Box>
          </SortableContext>
        </DndContext>

        {sections.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 4, color: 'text.secondary' }}>
            <Typography variant="body1" gutterBottom>
              No sections yet
            </Typography>
            <Typography variant="body2">
              Click "Add Section" to create your first section
            </Typography>
          </Box>
        )}
      </Paper>
    </Box>
  );
};

export default PageEditor;