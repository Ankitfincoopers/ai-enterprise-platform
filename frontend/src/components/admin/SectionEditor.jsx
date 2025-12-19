// // frontend/src/components/admin/SectionEditor.jsx
// import React, { useState, useEffect } from 'react';
// import {
//   Box,
//   Paper,
//   Typography,
//   TextField,
//   Button,
//   IconButton,
//   Chip,
//   Switch,
//   FormControlLabel,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Alert,
//   Card,
//   CardContent,
//   Grid,
//   Select,
//   MenuItem,
//   FormControl,
//   InputLabel,
//   Tabs,
//   Tab,
//   Accordion,
//   AccordionSummary,
//   AccordionDetails,
//   Slider,
//   Radio,
//   RadioGroup,
//   Checkbox,
//   FormGroup,
//   LinearProgress,
// } from '@mui/material';
// import {
//   Add as AddIcon,
//   Edit as EditIcon,
//   Delete as DeleteIcon,
//   Visibility as ViewIcon,
//   VisibilityOff as HideIcon,
//   DragIndicator as DragIcon,
//   PhotoLibrary as ImageIcon,
//   Title as TitleIcon,
//   TextFields as TextIcon,
//   Button as ButtonIcon,
//   GridOn as GridIcon,
//   ExpandMore as ExpandMoreIcon,
//   ColorLens as ColorIcon,
//   FormatSize as SizeIcon,
//   FormatAlignLeft as AlignIcon,
//   Save as SaveIcon,
//   Close as CloseIcon,
// } from '@mui/icons-material';
// import { motion } from 'framer-motion';
// import { useParams } from 'react-router-dom';
// import { sectionAPI } from '../../services/api';

// const SectionEditor = () => {
//   const { pageId } = useParams();
//   const [sections, setSections] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const [editDialogOpen, setEditDialogOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState(0);
//   const [selectedSection, setSelectedSection] = useState(null);
//   const [sectionForm, setSectionForm] = useState({
//     type: 'hero',
//     title: '',
//     subtitle: '',
//     content: '',
//     buttonText: '',
//     buttonLink: '',
//     imageUrl: '',
//     backgroundColor: '#FFFFFF',
//     textColor: '#1E293B',
//     isEnabled: true,
//     order: 0,
//   });

//   useEffect(() => {
//     if (pageId) {
//       fetchSections();
//     }
//   }, [pageId]);

//   const fetchSections = async () => {
//     try {
//       setLoading(true);
//       const response = await sectionAPI.getSections(pageId);
//       setSections(response.data.sections || []);
//     } catch (error) {
//       setError('Failed to fetch sections');
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleEditSection = (section) => {
//     setSelectedSection(section);
//     setSectionForm({
//       type: section.type || 'hero',
//       title: section.title || '',
//       subtitle: section.subtitle || '',
//       content: section.content || '',
//       buttonText: section.buttonText || '',
//       buttonLink: section.buttonLink || '',
//       imageUrl: section.imageUrl || '',
//       backgroundColor: section.backgroundColor || '#FFFFFF',
//       textColor: section.textColor || '#1E293B',
//       isEnabled: section.isEnabled !== false,
//       order: section.order || sections.length + 1,
//     });
//     setEditDialogOpen(true);
//   };

//   const handleSaveSection = async () => {
//     try {
//       if (selectedSection) {
//         await sectionAPI.updateSection(selectedSection.id, sectionForm);
//         setSections(sections.map(section => 
//           section.id === selectedSection.id ? { ...section, ...sectionForm } : section
//         ));
//         setSuccess('Section updated successfully');
//       } else {
//         const response = await sectionAPI.createSection(pageId, sectionForm);
//         setSections([...sections, response.data.section]);
//         setSuccess('Section created successfully');
//       }
//       setEditDialogOpen(false);
//       resetForm();
//     } catch (error) {
//       setError('Failed to save section');
//       console.error(error);
//     }
//   };

//   const handleDeleteSection = async (sectionId) => {
//     if (!window.confirm('Are you sure you want to delete this section?')) return;
    
//     try {
//       await sectionAPI.deleteSection(sectionId);
//       setSections(sections.filter(s => s.id !== sectionId));
//       setSuccess('Section deleted successfully');
//     } catch (error) {
//       setError('Failed to delete section');
//       console.error(error);
//     }
//   };

//   const handleToggleSection = async (sectionId, isEnabled) => {
//     try {
//       await sectionAPI.toggleSection(sectionId);
//       setSections(sections.map(section => 
//         section.id === sectionId ? { ...section, isEnabled: !isEnabled } : section
//       ));
//       setSuccess('Section visibility updated');
//     } catch (error) {
//       setError('Failed to update section');
//       console.error(error);
//     }
//   };

//   const resetForm = () => {
//     setSelectedSection(null);
//     setSectionForm({
//       type: 'hero',
//       title: '',
//       subtitle: '',
//       content: '',
//       buttonText: '',
//       buttonLink: '',
//       imageUrl: '',
//       backgroundColor: '#FFFFFF',
//       textColor: '#1E293B',
//       isEnabled: true,
//       order: sections.length + 1,
//     });
//   };

//   const sectionTypes = [
//     { value: 'hero', label: 'Hero Section', icon: <TitleIcon /> },
//     { value: 'features', label: 'Features Grid', icon: <GridIcon /> },
//     { value: 'testimonials', label: 'Testimonials', icon: <TextIcon /> },
//     { value: 'cta', label: 'Call to Action', icon: <ButtonIcon /> },
//     { value: 'content', label: 'Content Block', icon: <TextIcon /> },
//     { value: 'stats', label: 'Statistics', icon: <GridIcon /> },
//   ];

//   if (loading) {
//     return (
//       <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
//         <LinearProgress sx={{ width: '100%' }} />
//       </Box>
//     );
//   }

//   return (
//     <Box>
//       {/* Header */}
//       <Paper sx={{ p: 3, mb: 3, borderRadius: 2 }}>
//         <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
//           <Box>
//             <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
//               Section Editor
//             </Typography>
//             <Typography variant="body1" sx={{ color: '#64748B' }}>
//               {pageId ? `Editing Page: ${pageId}` : 'Manage all sections'}
//             </Typography>
//           </Box>
//           <Button
//             variant="contained"
//             startIcon={<AddIcon />}
//             onClick={() => {
//               resetForm();
//               setEditDialogOpen(true);
//             }}
//             sx={{
//               backgroundColor: '#10B981',
//               '&:hover': { backgroundColor: '#059669' },
//             }}
//           >
//             Add Section
//           </Button>
//         </Box>
//       </Paper>

//       {/* Error/Success Messages */}
//       {error && (
//         <Alert severity="error" sx={{ mb: 3 }} onClose={() => setError('')}>
//           {error}
//         </Alert>
//       )}
//       {success && (
//         <Alert severity="success" sx={{ mb: 3 }} onClose={() => setSuccess('')}>
//           {success}
//         </Alert>
//       )}

//       {/* Sections List */}
//       <Grid container spacing={3}>
//         {sections.map((section, index) => (
//           <Grid item xs={12} key={section.id}>
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.3, delay: index * 0.1 }}
//             >
//               <Card sx={{ border: '1px solid #E2E8F0', borderRadius: 2 }}>
//                 <CardContent sx={{ p: 3 }}>
//                   <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//                     <DragIcon sx={{ color: '#64748B', cursor: 'move' }} />
//                     <Box sx={{ flex: 1 }}>
//                       <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
//                         <Typography variant="h6" sx={{ fontWeight: 600 }}>
//                           {section.title || `Section ${section.order}`}
//                         </Typography>
//                         <Chip
//                           label={section.type}
//                           size="small"
//                           sx={{
//                             backgroundColor: '#F1F5F9',
//                             color: '#475569',
//                           }}
//                         />
//                         <Chip
//                           label={`Order: ${section.order}`}
//                           size="small"
//                           variant="outlined"
//                         />
//                       </Box>
//                       {section.subtitle && (
//                         <Typography variant="body2" color="text.secondary" gutterBottom>
//                           {section.subtitle.substring(0, 100)}...
//                         </Typography>
//                       )}
//                     </Box>
//                     <Box sx={{ display: 'flex', gap: 1 }}>
//                       <IconButton
//                         size="small"
//                         onClick={() => handleToggleSection(section.id, section.isEnabled)}
//                       >
//                         {section.isEnabled ? <ViewIcon /> : <HideIcon />}
//                       </IconButton>
//                       <IconButton
//                         size="small"
//                         onClick={() => handleEditSection(section)}
//                       >
//                         <EditIcon />
//                       </IconButton>
//                       <IconButton
//                         size="small"
//                         onClick={() => handleDeleteSection(section.id)}
//                       >
//                         <DeleteIcon />
//                       </IconButton>
//                     </Box>
//                   </Box>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           </Grid>
//         ))}
//       </Grid>

//       {/* Empty State */}
//       {sections.length === 0 && (
//         <Paper sx={{ p: 8, textAlign: 'center', borderRadius: 2, mt: 3 }}>
//           <GridIcon sx={{ fontSize: 60, color: '#CBD5E1', mb: 2 }} />
//           <Typography variant="h6" gutterBottom>
//             No sections yet
//           </Typography>
//           <Typography variant="body1" sx={{ color: '#64748B', mb: 3 }}>
//             Add sections to build your page content
//           </Typography>
//           <Button
//             variant="contained"
//             startIcon={<AddIcon />}
//             onClick={() => {
//               resetForm();
//               setEditDialogOpen(true);
//             }}
//           >
//             Add First Section
//           </Button>
//         </Paper>
//       )}

//       {/* Section Editor Dialog */}
//       <Dialog 
//         open={editDialogOpen} 
//         onClose={() => {
//           setEditDialogOpen(false);
//           resetForm();
//         }} 
//         maxWidth="md" 
//         fullWidth
//       >
//         <DialogTitle>
//           <Typography variant="h6" sx={{ fontWeight: 600 }}>
//             {selectedSection ? 'Edit Section' : 'Create New Section'}
//           </Typography>
//         </DialogTitle>
//         <DialogContent>
//           <Tabs value={activeTab} onChange={(e, newValue) => setActiveTab(newValue)} sx={{ mb: 3 }}>
//             <Tab label="Content" />
//             <Tab label="Style" />
//             <Tab label="Settings" />
//           </Tabs>

//           {activeTab === 0 && (
//             <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
//               <FormControl fullWidth>
//                 <InputLabel>Section Type</InputLabel>
//                 <Select
//                   value={sectionForm.type}
//                   onChange={(e) => setSectionForm({ ...sectionForm, type: e.target.value })}
//                   label="Section Type"
//                 >
//                   {sectionTypes.map((type) => (
//                     <MenuItem key={type.value} value={type.value}>
//                       <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                         {type.icon}
//                         {type.label}
//                       </Box>
//                     </MenuItem>
//                   ))}
//                 </Select>
//               </FormControl>

//               <TextField
//                 label="Title"
//                 value={sectionForm.title}
//                 onChange={(e) => setSectionForm({ ...sectionForm, title: e.target.value })}
//                 fullWidth
//               />

//               <TextField
//                 label="Subtitle"
//                 value={sectionForm.subtitle}
//                 onChange={(e) => setSectionForm({ ...sectionForm, subtitle: e.target.value })}
//                 fullWidth
//                 multiline
//                 rows={2}
//               />

//               <TextField
//                 label="Content"
//                 value={sectionForm.content}
//                 onChange={(e) => setSectionForm({ ...sectionForm, content: e.target.value })}
//                 fullWidth
//                 multiline
//                 rows={6}
//                 placeholder="Enter your content here..."
//               />

//               <Accordion>
//                 <AccordionSummary expandIcon={<ExpandMoreIcon />}>
//                   <Typography>Button Settings</Typography>
//                 </AccordionSummary>
//                 <AccordionDetails>
//                   <Grid container spacing={2}>
//                     <Grid item xs={6}>
//                       <TextField
//                         label="Button Text"
//                         value={sectionForm.buttonText}
//                         onChange={(e) => setSectionForm({ ...sectionForm, buttonText: e.target.value })}
//                         fullWidth
//                       />
//                     </Grid>
//                     <Grid item xs={6}>
//                       <TextField
//                         label="Button Link"
//                         value={sectionForm.buttonLink}
//                         onChange={(e) => setSectionForm({ ...sectionForm, buttonLink: e.target.value })}
//                         fullWidth
//                       />
//                     </Grid>
//                   </Grid>
//                 </AccordionDetails>
//               </Accordion>

//               <Accordion>
//                 <AccordionSummary expandIcon={<ExpandMoreIcon />}>
//                   <Typography>Image Settings</Typography>
//                 </AccordionSummary>
//                 <AccordionDetails>
//                   <TextField
//                     label="Image URL"
//                     value={sectionForm.imageUrl}
//                     onChange={(e) => setSectionForm({ ...sectionForm, imageUrl: e.target.value })}
//                     fullWidth
//                     helperText="Enter image URL or upload from Media Library"
//                   />
//                   <Button
//                     startIcon={<ImageIcon />}
//                     variant="outlined"
//                     sx={{ mt: 2 }}
//                   >
//                     Select from Media Library
//                   </Button>
//                 </AccordionDetails>
//               </Accordion>
//             </Box>
//           )}

//           {activeTab === 1 && (
//             <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
//               <Box>
//                 <Typography variant="subtitle2" gutterBottom>
//                   Background Color
//                 </Typography>
//                 <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//                   <Box
//                     sx={{
//                       width: 40,
//                       height: 40,
//                       backgroundColor: sectionForm.backgroundColor,
//                       border: '1px solid #E2E8F0',
//                       borderRadius: 1,
//                     }}
//                   />
//                   <TextField
//                     value={sectionForm.backgroundColor}
//                     onChange={(e) => setSectionForm({ ...sectionForm, backgroundColor: e.target.value })}
//                     size="small"
//                     sx={{ flex: 1 }}
//                     placeholder="#FFFFFF"
//                   />
//                 </Box>
//               </Box>

//               <Box>
//                 <Typography variant="subtitle2" gutterBottom>
//                   Text Color
//                 </Typography>
//                 <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//                   <Box
//                     sx={{
//                       width: 40,
//                       height: 40,
//                       backgroundColor: sectionForm.textColor,
//                       border: '1px solid #E2E8F0',
//                       borderRadius: 1,
//                     }}
//                   />
//                   <TextField
//                     value={sectionForm.textColor}
//                     onChange={(e) => setSectionForm({ ...sectionForm, textColor: e.target.value })}
//                     size="small"
//                     sx={{ flex: 1 }}
//                     placeholder="#1E293B"
//                   />
//                 </Box>
//               </Box>

//               <Accordion>
//                 <AccordionSummary expandIcon={<ExpandMoreIcon />}>
//                   <Typography>Advanced Styling</Typography>
//                 </AccordionSummary>
//                 <AccordionDetails>
//                   <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
//                     <Box>
//                       <Typography variant="body2" gutterBottom>
//                         Text Alignment
//                       </Typography>
//                       <RadioGroup 
//                         row 
//                         value="left"
//                         onChange={(e) => console.log(e.target.value)}
//                       >
//                         <FormControlLabel value="left" control={<Radio />} label="Left" />
//                         <FormControlLabel value="center" control={<Radio />} label="Center" />
//                         <FormControlLabel value="right" control={<Radio />} label="Right" />
//                       </RadioGroup>
//                     </Box>
//                   </Box>
//                 </AccordionDetails>
//               </Accordion>
//             </Box>
//           )}

//           {activeTab === 2 && (
//             <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
//               <FormGroup>
//                 <FormControlLabel
//                   control={
//                     <Switch
//                       checked={sectionForm.isEnabled}
//                       onChange={(e) => setSectionForm({ ...sectionForm, isEnabled: e.target.checked })}
//                     />
//                   }
//                   label="Enable Section"
//                 />
//               </FormGroup>

//               <TextField
//                 label="Order"
//                 type="number"
//                 value={sectionForm.order}
//                 onChange={(e) => setSectionForm({ ...sectionForm, order: parseInt(e.target.value) || 0 })}
//                 fullWidth
//                 helperText="Lower numbers appear first"
//               />

//               <TextField
//                 label="Custom CSS Class"
//                 fullWidth
//                 helperText="Add custom CSS classes for advanced styling"
//               />

//               <TextField
//                 label="Section ID"
//                 fullWidth
//                 helperText="Unique ID for custom JavaScript hooks"
//               />
//             </Box>
//           )}
//         </DialogContent>
//         <DialogActions sx={{ p: 3 }}>
//           <Button 
//             onClick={() => {
//               setEditDialogOpen(false);
//               resetForm();
//             }}
//             startIcon={<CloseIcon />}
//           >
//             Cancel
//           </Button>
//           <Button
//             variant="contained"
//             onClick={handleSaveSection}
//             startIcon={<SaveIcon />}
//           >
//             {selectedSection ? 'Update Section' : 'Create Section'}
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Box>
//   );
// };

// export default SectionEditor;

// frontend/src/components/admin/SectionEditor.jsx
import React, { useState, useEffect } from 'react';
import {
  Box,
  Paper,
  Typography,
  Grid,
  TextField,
  Button,
  IconButton,
  Chip,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Card,
  CardContent,
  CardActions,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Alert,
  Snackbar,
  FormControlLabel,
  Switch,
  Tooltip,
  CircularProgress,
} from '@mui/material';
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  Save as SaveIcon,
  Add as AddIcon,
  Reorder as ReorderIcon,
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
  ArrowUpward as ArrowUpwardIcon,
  ArrowDownward as ArrowDownwardIcon,
  ContentCopy as DuplicateIcon,
  Close as CloseIcon,
  Check as CheckIcon,
  Error as ErrorIcon,
  PhotoLibrary as MediaIcon,
  Code as CodeIcon,
  Title as TitleIcon,
  FormatAlignLeft as TextIcon,
  Image as ImageIcon,
  VideoLibrary as VideoIcon,
  TableChart as TableIcon,
  Widgets as WidgetIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { sectionAPI } from '../../services/api';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const SectionEditor = () => {
  const { pageId } = useParams();
  const navigate = useNavigate();
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [editingSection, setEditingSection] = useState(null);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
  const [newSection, setNewSection] = useState({
    type: 'text',
    title: '',
    content: '',
    order: 0,
    isActive: true,
    metadata: {},
  });

  useEffect(() => {
    fetchSections();
  }, [pageId]);

  const fetchSections = async () => {
    try {
      setLoading(true);
      const response = await sectionAPI.getSections(pageId);
      setSections(response.data.sections || []);
    } catch (error) {
      console.error('Error fetching sections:', error);
      setSnackbar({
        open: true,
        message: 'Failed to load sections',
        severity: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleAddSection = () => {
    setEditingSection(null);
    setNewSection({
      type: 'text',
      title: '',
      content: '',
      order: sections.length,
      isActive: true,
      metadata: {},
    });
    setOpenDialog(true);
  };

  const handleEditSection = (section) => {
    setEditingSection(section);
    setNewSection({
      type: section.type,
      title: section.title,
      content: section.content,
      order: section.order,
      isActive: section.isActive,
      metadata: section.metadata || {},
    });
    setOpenDialog(true);
  };

  const handleSaveSection = async () => {
    try {
      setSaving(true);
      const sectionData = {
        ...newSection,
        pageId,
        order: editingSection ? editingSection.order : sections.length,
      };

      let response;
      if (editingSection) {
        response = await sectionAPI.updateSection(editingSection.id, sectionData);
      } else {
        response = await sectionAPI.createSection(sectionData);
      }

      setSnackbar({
        open: true,
        message: editingSection ? 'Section updated successfully' : 'Section created successfully',
        severity: 'success',
      });
      setOpenDialog(false);
      fetchSections();
    } catch (error) {
      console.error('Error saving section:', error);
      setSnackbar({
        open: true,
        message: 'Failed to save section',
        severity: 'error',
      });
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteSection = async (sectionId) => {
    if (window.confirm('Are you sure you want to delete this section?')) {
      try {
        await sectionAPI.deleteSection(sectionId);
        setSnackbar({
          open: true,
          message: 'Section deleted successfully',
          severity: 'success',
        });
        fetchSections();
      } catch (error) {
        console.error('Error deleting section:', error);
        setSnackbar({
          open: true,
          message: 'Failed to delete section',
          severity: 'error',
        });
      }
    }
  };

  const handleToggleActive = async (section) => {
    try {
      await sectionAPI.updateSection(section.id, {
        ...section,
        isActive: !section.isActive,
      });
      setSnackbar({
        open: true,
        message: `Section ${!section.isActive ? 'activated' : 'deactivated'} successfully`,
        severity: 'success',
      });
      fetchSections();
    } catch (error) {
      console.error('Error toggling section:', error);
    }
  };

  const handleReorder = async (result) => {
    if (!result.destination) return;

    const items = Array.from(sections);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    // Update order for all items
    const updatedItems = items.map((item, index) => ({
      ...item,
      order: index,
    }));

    setSections(updatedItems);

    // Update order in backend
    try {
      await Promise.all(
        updatedItems.map((item) =>
          sectionAPI.updateSection(item.id, { order: item.order })
        )
      );
    } catch (error) {
      console.error('Error updating order:', error);
    }
  };

  const sectionTypes = [
    { value: 'text', label: 'Text Section', icon: <TextIcon />, color: '#10B981' },
    { value: 'image', label: 'Image Section', icon: <ImageIcon />, color: '#3B82F6' },
    { value: 'video', label: 'Video Section', icon: <VideoIcon />, color: '#8B5CF6' },
    { value: 'table', label: 'Table Section', icon: <TableIcon />, color: '#F59E0B' },
    { value: 'widget', label: 'Widget Section', icon: <WidgetIcon />, color: '#EF4444' },
    { value: 'code', label: 'Code Section', icon: <CodeIcon />, color: '#06B6D4' },
  ];

  const getSectionIcon = (type) => {
    const sectionType = sectionTypes.find((t) => t.value === type);
    return sectionType ? sectionType.icon : <WidgetIcon />;
  };

  const getSectionColor = (type) => {
    const sectionType = sectionTypes.find((t) => t.value === type);
    return sectionType ? sectionType.color : '#64748B';
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box>
      {/* Header */}
      <Paper sx={{ p: 3, mb: 3, borderRadius: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
              Section Editor
            </Typography>
            <Typography variant="body1" sx={{ color: '#64748B' }}>
              Manage sections for this page. Drag and drop to reorder.
            </Typography>
          </Box>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={handleAddSection}
            sx={{
              backgroundColor: '#10B981',
              '&:hover': { backgroundColor: '#059669' },
            }}
          >
            Add New Section
          </Button>
        </Box>
      </Paper>

      {/* Sections List */}
      <DragDropContext onDragEnd={handleReorder}>
        <Droppable droppableId="sections">
          {(provided) => (
            <Box {...provided.droppableProps} ref={provided.innerRef}>
              {sections.length === 0 ? (
                <Paper sx={{ p: 6, textAlign: 'center', borderRadius: 2 }}>
                  <Typography variant="h6" gutterBottom sx={{ color: '#64748B' }}>
                    No sections yet
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#94A3B8', mb: 3 }}>
                    Start by adding your first section
                  </Typography>
                  <Button
                    variant="outlined"
                    startIcon={<AddIcon />}
                    onClick={handleAddSection}
                  >
                    Create First Section
                  </Button>
                </Paper>
              ) : (
                sections.map((section, index) => (
                  <Draggable key={section.id} draggableId={section.id.toString()} index={index}>
                    {(provided) => (
                      <motion.div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <Card sx={{ mb: 2, borderRadius: 2, border: '1px solid #E2E8F0' }}>
                          <CardContent sx={{ p: 3 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <Box {...provided.dragHandleProps}>
                                  <ReorderIcon sx={{ color: '#64748B', cursor: 'grab' }} />
                                </Box>
                                <Box
                                  sx={{
                                    width: 40,
                                    height: 40,
                                    backgroundColor: `${getSectionColor(section.type)}15`,
                                    borderRadius: 2,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: getSectionColor(section.type),
                                  }}
                                >
                                  {getSectionIcon(section.type)}
                                </Box>
                                <Box>
                                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                    {section.title || 'Untitled Section'}
                                  </Typography>
                                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 0.5 }}>
                                    <Chip
                                      label={section.type.toUpperCase()}
                                      size="small"
                                      sx={{
                                        backgroundColor: `${getSectionColor(section.type)}15`,
                                        color: getSectionColor(section.type),
                                        fontWeight: 500,
                                      }}
                                    />
                                    <Chip
                                      label={`Order: ${section.order}`}
                                      size="small"
                                      variant="outlined"
                                    />
                                  </Box>
                                </Box>
                              </Box>
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Tooltip title={section.isActive ? 'Active' : 'Inactive'}>
                                  <IconButton
                                    size="small"
                                    onClick={() => handleToggleActive(section)}
                                    sx={{
                                      color: section.isActive ? '#10B981' : '#EF4444',
                                    }}
                                  >
                                    {section.isActive ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                  </IconButton>
                                </Tooltip>
                                <Tooltip title="Edit">
                                  <IconButton
                                    size="small"
                                    onClick={() => handleEditSection(section)}
                                  >
                                    <EditIcon />
                                  </IconButton>
                                </Tooltip>
                                <Tooltip title="Delete">
                                  <IconButton
                                    size="small"
                                    onClick={() => handleDeleteSection(section.id)}
                                    sx={{ color: '#EF4444' }}
                                  >
                                    <DeleteIcon />
                                  </IconButton>
                                </Tooltip>
                              </Box>
                            </Box>
                            <Typography
                              variant="body2"
                              sx={{
                                color: '#64748B',
                                display: '-webkit-box',
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                              }}
                            >
                              {section.content || 'No content'}
                            </Typography>
                          </CardContent>
                        </Card>
                      </motion.div>
                    )}
                  </Draggable>
                ))
              )}
              {provided.placeholder}
            </Box>
          )}
        </Droppable>
      </DragDropContext>

      {/* Add/Edit Dialog */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)} maxWidth="md" fullWidth>
        <DialogTitle>
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            {editingSection ? 'Edit Section' : 'Add New Section'}
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Box sx={{ pt: 2 }}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel>Section Type</InputLabel>
                  <Select
                    value={newSection.type}
                    onChange={(e) => setNewSection({ ...newSection, type: e.target.value })}
                    label="Section Type"
                  >
                    {sectionTypes.map((type) => (
                      <MenuItem key={type.value} value={type.value}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          <Box sx={{ color: type.color }}>{type.icon}</Box>
                          {type.label}
                        </Box>
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Section Title"
                  value={newSection.title}
                  onChange={(e) => setNewSection({ ...newSection, title: e.target.value })}
                  placeholder="Enter section title"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Content"
                  value={newSection.content}
                  onChange={(e) => setNewSection({ ...newSection, content: e.target.value })}
                  placeholder="Enter section content"
                  multiline
                  rows={6}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={newSection.isActive}
                      onChange={(e) => setNewSection({ ...newSection, isActive: e.target.checked })}
                    />
                  }
                  label="Active Section"
                />
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions sx={{ p: 3, pt: 0 }}>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button
            variant="contained"
            onClick={handleSaveSection}
            disabled={saving}
            startIcon={saving ? <CircularProgress size={20} /> : <SaveIcon />}
            sx={{
              backgroundColor: '#10B981',
              '&:hover': { backgroundColor: '#059669' },
            }}
          >
            {saving ? 'Saving...' : editingSection ? 'Update Section' : 'Create Section'}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
          icon={snackbar.severity === 'success' ? <CheckIcon /> : <ErrorIcon />}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default SectionEditor;