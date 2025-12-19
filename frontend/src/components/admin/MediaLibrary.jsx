// // frontend/src/components/admin/MediaLibrary.jsx
// import React, { useState, useEffect, useRef } from 'react';
// import {
//   Box,
//   Paper,
//   Typography,
//   Button,
//   IconButton,
//   Chip,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Alert,
//   Grid,
//   Card,
//   CardMedia,
//   CardContent,
//   CardActions,
//   TextField,
//   MenuItem,
//   Select,
//   FormControl,
//   InputLabel,
//   Checkbox,
//   LinearProgress,
// } from '@mui/material';
// import {
//   CloudUpload as UploadIcon,
//   Delete as DeleteIcon,
//   Edit as EditIcon,
//   Search as SearchIcon,
//   FilterList as FilterIcon,
//   GridView as GridViewIcon,
//   ViewList as ListViewIcon,
//   Image as ImageIcon,
//   VideoLibrary as VideoIcon,
//   InsertDriveFile as FileIcon,
//   ContentCopy as CopyIcon,
//   Visibility as ViewIcon,
//   Download as DownloadIcon,
//   Close as CloseIcon,
//   Check as CheckIcon,
// } from '@mui/icons-material';
// import { motion } from 'framer-motion';
// import { mediaAPI } from '../../services/api';

// const MediaLibrary = () => {
//   const [media, setMedia] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const [uploading, setUploading] = useState(false);
//   const [uploadProgress, setUploadProgress] = useState(0);
//   const [search, setSearch] = useState('');
//   const [filterType, setFilterType] = useState('all');
//   const [viewMode, setViewMode] = useState('grid');
//   const [selectedMedia, setSelectedMedia] = useState([]);
//   const [uploadDialogOpen, setUploadDialogOpen] = useState(false);
//   const [editDialogOpen, setEditDialogOpen] = useState(false);
//   const [currentMedia, setCurrentMedia] = useState(null);
//   const [mediaForm, setMediaForm] = useState({
//     name: '',
//     description: '',
//     tags: [],
//     altText: '',
//   });
//   const fileInputRef = useRef(null);

//   useEffect(() => {
//     fetchMedia();
//   }, []);

//   const fetchMedia = async () => {
//     try {
//       setLoading(true);
//       const response = await mediaAPI.getMedia();
//       setMedia(response.data.media || []);
//     } catch (error) {
//       setError('Failed to fetch media');
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleFileUpload = async (event) => {
//     const files = Array.from(event.target.files);
//     if (files.length === 0) return;

//     setUploading(true);
//     setUploadProgress(0);

//     for (const file of files) {
//       const formData = new FormData();
//       formData.append('file', file);
//       formData.append('name', file.name);
//       formData.append('type', file.type);

//       try {
//         const config = {
//           headers: { 'Content-Type': 'multipart/form-data' },
//           onUploadProgress: (progressEvent) => {
//             const progress = Math.round(
//               (progressEvent.loaded * 100) / progressEvent.total
//             );
//             setUploadProgress(progress);
//           },
//         };

//         const response = await mediaAPI.uploadMedia(formData, config);
//         setMedia(prev => [response.data.media, ...prev]);
//         setSuccess(`${file.name} uploaded successfully`);
//       } catch (error) {
//         setError(`Failed to upload ${file.name}`);
//         console.error(error);
//       }
//     }

//     setUploading(false);
//     setUploadProgress(0);
//     setUploadDialogOpen(false);
//   };

//   const handleDeleteMedia = async (mediaId) => {
//     if (!window.confirm('Are you sure you want to delete this media?')) return;

//     try {
//       await mediaAPI.deleteMedia(mediaId);
//       setMedia(media.filter(m => m.id !== mediaId));
//       setSelectedMedia(selectedMedia.filter(id => id !== mediaId));
//       setSuccess('Media deleted successfully');
//     } catch (error) {
//       setError('Failed to delete media');
//       console.error(error);
//     }
//   };

//   const handleEditMedia = (mediaItem) => {
//     setCurrentMedia(mediaItem);
//     setMediaForm({
//       name: mediaItem.name || '',
//       description: mediaItem.description || '',
//       tags: mediaItem.tags || [],
//       altText: mediaItem.altText || '',
//     });
//     setEditDialogOpen(true);
//   };

//   const handleSaveMedia = async () => {
//     if (!currentMedia) return;

//     try {
//       await mediaAPI.updateMedia(currentMedia.id, mediaForm);
//       setMedia(media.map(m => 
//         m.id === currentMedia.id ? { ...m, ...mediaForm } : m
//       ));
//       setSuccess('Media updated successfully');
//       setEditDialogOpen(false);
//     } catch (error) {
//       setError('Failed to update media');
//       console.error(error);
//     }
//   };

//   const handleSelectMedia = (mediaId) => {
//     setSelectedMedia(prev => 
//       prev.includes(mediaId)
//         ? prev.filter(id => id !== mediaId)
//         : [...prev, mediaId]
//     );
//   };

//   const handleBulkDelete = async () => {
//     if (selectedMedia.length === 0) return;
//     if (!window.confirm(`Delete ${selectedMedia.length} selected items?`)) return;

//     try {
//       for (const mediaId of selectedMedia) {
//         await mediaAPI.deleteMedia(mediaId);
//       }
//       setMedia(media.filter(m => !selectedMedia.includes(m.id)));
//       setSelectedMedia([]);
//       setSuccess(`${selectedMedia.length} items deleted successfully`);
//     } catch (error) {
//       setError('Failed to delete selected items');
//       console.error(error);
//     }
//   };

//   const getMediaIcon = (type) => {
//     if (type.includes('image')) return <ImageIcon />;
//     if (type.includes('video')) return <VideoIcon />;
//     return <FileIcon />;
//   };

//   const filteredMedia = media.filter(item => {
//     const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase()) ||
//                          (item.description && item.description.toLowerCase().includes(search.toLowerCase()));
//     const matchesType = filterType === 'all' || item.type.includes(filterType);
//     return matchesSearch && matchesType;
//   });

//   const getFileSize = (bytes) => {
//     if (bytes < 1024) return bytes + ' bytes';
//     if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
//     return (bytes / 1048576).toFixed(1) + ' MB';
//   };

//   return (
//     <Box>
//       {/* Header */}
//       <Paper sx={{ p: 3, mb: 3, borderRadius: 2 }}>
//         <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
//           <Box>
//             <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
//               Media Library
//             </Typography>
//             <Typography variant="body1" sx={{ color: '#64748B' }}>
//               Upload and manage images, videos, and documents
//             </Typography>
//           </Box>
//           <Box sx={{ display: 'flex', gap: 2 }}>
//             {selectedMedia.length > 0 && (
//               <Button
//                 variant="outlined"
//                 color="error"
//                 startIcon={<DeleteIcon />}
//                 onClick={handleBulkDelete}
//               >
//                 Delete Selected ({selectedMedia.length})
//               </Button>
//             )}
//             <Button
//               variant="contained"
//               startIcon={<UploadIcon />}
//               onClick={() => fileInputRef.current.click()}
//               sx={{
//                 backgroundColor: '#10B981',
//                 '&:hover': { backgroundColor: '#059669' },
//               }}
//             >
//               Upload Media
//             </Button>
//           </Box>
//         </Box>

//         {/* Search and Filter */}
//         <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
//           <TextField
//             placeholder="Search media..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             InputProps={{
//               startAdornment: <SearchIcon sx={{ mr: 1, color: '#64748B' }} />,
//             }}
//             sx={{ flex: 1 }}
//           />
//           <FormControl sx={{ minWidth: 120 }}>
//             <InputLabel>Type</InputLabel>
//             <Select
//               value={filterType}
//               onChange={(e) => setFilterType(e.target.value)}
//               label="Type"
//             >
//               <MenuItem value="all">All Types</MenuItem>
//               <MenuItem value="image">Images</MenuItem>
//               <MenuItem value="video">Videos</MenuItem>
//               <MenuItem value="application">Documents</MenuItem>
//             </Select>
//           </FormControl>
//           <IconButton
//             onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
//             color={viewMode === 'grid' ? 'primary' : 'default'}
//           >
//             {viewMode === 'grid' ? <ListViewIcon /> : <GridViewIcon />}
//           </IconButton>
//         </Box>

//         {/* Upload Progress */}
//         {uploading && (
//           <Box sx={{ mt: 2 }}>
//             <Typography variant="body2" sx={{ mb: 1 }}>
//               Uploading...
//             </Typography>
//             <LinearProgress
//               variant="determinate"
//               value={uploadProgress}
//               sx={{
//                 height: 8,
//                 borderRadius: 4,
//               }}
//             />
//           </Box>
//         )}
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

//       {/* Hidden file input */}
//       <input
//         type="file"
//         ref={fileInputRef}
//         onChange={handleFileUpload}
//         multiple
//         style={{ display: 'none' }}
//         accept="image/*,video/*,application/pdf"
//       />

//       {/* Media Grid */}
//       {viewMode === 'grid' ? (
//         <Grid container spacing={3}>
//           {filteredMedia.map((item, index) => (
//             <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.3, delay: index * 0.05 }}
//               >
//                 <Card
//                   sx={{
//                     border: selectedMedia.includes(item.id) ? '2px solid #10B981' : '1px solid #E2E8F0',
//                     borderRadius: 2,
//                     overflow: 'hidden',
//                     position: 'relative',
//                   }}
//                 >
//                   <Box
//                     sx={{
//                       position: 'absolute',
//                       top: 8,
//                       left: 8,
//                       zIndex: 1,
//                     }}
//                   >
//                     <Checkbox
//                       checked={selectedMedia.includes(item.id)}
//                       onChange={() => handleSelectMedia(item.id)}
//                       sx={{
//                         color: 'white',
//                         '&.Mui-checked': {
//                           color: '#10B981',
//                         },
//                       }}
//                     />
//                   </Box>

//                   {item.type.includes('image') ? (
//                     <CardMedia
//                       component="img"
//                       height="200"
//                       image={item.url}
//                       alt={item.altText || item.name}
//                       sx={{ objectFit: 'cover' }}
//                     />
//                   ) : (
//                     <Box
//                       sx={{
//                         height: 200,
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         backgroundColor: '#F1F5F9',
//                       }}
//                     >
//                       {getMediaIcon(item.type)}
//                       <Typography variant="body2" sx={{ ml: 1 }}>
//                         {item.type.split('/')[1]}
//                       </Typography>
//                     </Box>
//                   )}

//                   <CardContent sx={{ p: 2 }}>
//                     <Typography variant="subtitle2" sx={{ fontWeight: 600 }} noWrap>
//                       {item.name}
//                     </Typography>
//                     <Typography variant="caption" sx={{ color: '#64748B' }}>
//                       {getFileSize(item.size || 0)} • {new Date(item.createdAt).toLocaleDateString()}
//                     </Typography>
//                   </CardContent>

//                   <CardActions sx={{ p: 1, justifyContent: 'space-between' }}>
//                     <IconButton
//                       size="small"
//                       onClick={() => handleEditMedia(item)}
//                     >
//                       <EditIcon fontSize="small" />
//                     </IconButton>
//                     <Box>
//                       <IconButton
//                         size="small"
//                         component="a"
//                         href={item.url}
//                         target="_blank"
//                       >
//                         <ViewIcon fontSize="small" />
//                       </IconButton>
//                       <IconButton
//                         size="small"
//                         onClick={() => handleDeleteMedia(item.id)}
//                       >
//                         <DeleteIcon fontSize="small" />
//                       </IconButton>
//                     </Box>
//                   </CardActions>
//                 </Card>
//               </motion.div>
//             </Grid>
//           ))}
//         </Grid>
//       ) : (
//         /* List View */
//         <Paper sx={{ borderRadius: 2 }}>
//           <Box sx={{ p: 2 }}>
//             {filteredMedia.map((item) => (
//               <Box
//                 key={item.id}
//                 sx={{
//                   display: 'flex',
//                   alignItems: 'center',
//                   p: 2,
//                   borderBottom: '1px solid #E2E8F0',
//                   '&:hover': {
//                     backgroundColor: '#F8FAFC',
//                   },
//                 }}
//               >
//                 <Checkbox
//                   checked={selectedMedia.includes(item.id)}
//                   onChange={() => handleSelectMedia(item.id)}
//                 />

//                 <Box sx={{ mx: 2 }}>
//                   {getMediaIcon(item.type)}
//                 </Box>

//                 <Box sx={{ flex: 1 }}>
//                   <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
//                     {item.name}
//                   </Typography>
//                   <Typography variant="body2" sx={{ color: '#64748B' }}>
//                     {item.type} • {getFileSize(item.size || 0)}
//                   </Typography>
//                 </Box>

//                 <Typography variant="body2" sx={{ color: '#64748B', mx: 2 }}>
//                   {new Date(item.createdAt).toLocaleDateString()}
//                 </Typography>

//                 <Box sx={{ display: 'flex', gap: 1 }}>
//                   <IconButton
//                     size="small"
//                     onClick={() => handleEditMedia(item)}
//                   >
//                     <EditIcon />
//                   </IconButton>
//                   <IconButton
//                     size="small"
//                     component="a"
//                     href={item.url}
//                     target="_blank"
//                   >
//                     <ViewIcon />
//                   </IconButton>
//                   <IconButton
//                     size="small"
//                     onClick={() => handleDeleteMedia(item.id)}
//                   >
//                     <DeleteIcon />
//                   </IconButton>
//                 </Box>
//               </Box>
//             ))}
//           </Box>
//         </Paper>
//       )}

//       {/* Empty State */}
//       {filteredMedia.length === 0 && (
//         <Paper sx={{ p: 8, textAlign: 'center', borderRadius: 2, mt: 3 }}>
//           <UploadIcon sx={{ fontSize: 60, color: '#CBD5E1', mb: 2 }} />
//           <Typography variant="h6" gutterBottom>
//             No media found
//           </Typography>
//           <Typography variant="body1" sx={{ color: '#64748B', mb: 3 }}>
//             {search ? 'Try adjusting your search' : 'Upload your first media file'}
//           </Typography>
//           <Button
//             variant="contained"
//             startIcon={<UploadIcon />}
//             onClick={() => fileInputRef.current.click()}
//           >
//             Upload Media
//           </Button>
//         </Paper>
//       )}

//       {/* Edit Media Dialog */}
//       <Dialog open={editDialogOpen} onClose={() => setEditDialogOpen(false)} maxWidth="sm" fullWidth>
//         <DialogTitle>
//           <Typography variant="h6" sx={{ fontWeight: 600 }}>
//             Edit Media Details
//           </Typography>
//         </DialogTitle>
//         <DialogContent>
//           <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
//             {currentMedia?.type.includes('image') && (
//               <Box sx={{ textAlign: 'center', mb: 2 }}>
//                 <img
//                   src={currentMedia.url}
//                   alt={currentMedia.altText}
//                   style={{ maxWidth: '100%', maxHeight: 200, borderRadius: 8 }}
//                 />
//               </Box>
//             )}

//             <TextField
//               label="Name"
//               value={mediaForm.name}
//               onChange={(e) => setMediaForm({ ...mediaForm, name: e.target.value })}
//               fullWidth
//             />

//             <TextField
//               label="Description"
//               value={mediaForm.description}
//               onChange={(e) => setMediaForm({ ...mediaForm, description: e.target.value })}
//               fullWidth
//               multiline
//               rows={3}
//             />

//             <TextField
//               label="Alt Text"
//               value={mediaForm.altText}
//               onChange={(e) => setMediaForm({ ...mediaForm, altText: e.target.value })}
//               fullWidth
//               helperText="For accessibility and SEO"
//             />

//             <TextField
//               label="Tags"
//               value={mediaForm.tags.join(', ')}
//               onChange={(e) => setMediaForm({ 
//                 ...mediaForm, 
//                 tags: e.target.value.split(',').map(tag => tag.trim()).filter(tag => tag) 
//               })}
//               fullWidth
//               helperText="Separate tags with commas"
//             />
//           </Box>
//         </DialogContent>
//         <DialogActions sx={{ p: 3 }}>
//           <Button onClick={() => setEditDialogOpen(false)}>Cancel</Button>
//           <Button
//             variant="contained"
//             onClick={handleSaveMedia}
//           >
//             Save Changes
//           </Button>
//         </DialogActions>
//       </Dialog>

//       {/* Upload Dialog */}
//       <Dialog open={uploadDialogOpen} onClose={() => setUploadDialogOpen(false)}>
//         <DialogTitle>Upload Media</DialogTitle>
//         <DialogContent>
//           <Box sx={{ p: 4, textAlign: 'center' }}>
//             <UploadIcon sx={{ fontSize: 60, color: '#CBD5E1', mb: 2 }} />
//             <Typography variant="h6" gutterBottom>
//               Drop files here or click to upload
//             </Typography>
//             <Typography variant="body2" sx={{ color: '#64748B', mb: 3 }}>
//               Supports images, videos, and documents
//             </Typography>
//             <Button
//               variant="contained"
//               component="label"
//               startIcon={<UploadIcon />}
//             >
//               Select Files
//               <input
//                 type="file"
//                 hidden
//                 multiple
//                 onChange={handleFileUpload}
//                 accept="image/*,video/*,application/pdf"
//               />
//             </Button>
//           </Box>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={() => setUploadDialogOpen(false)}>Cancel</Button>
//         </DialogActions>
//       </Dialog>
//     </Box>
//   );
// };

// export default MediaLibrary;


// frontend/src/components/admin/MediaLibrary.jsx
import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  Paper,
  Typography,
  Button,
  IconButton,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Alert,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Checkbox,
  LinearProgress,
  Tooltip,
} from '@mui/material';
import {
  CloudUpload as UploadIcon,
  Delete as DeleteIcon,
  Edit as EditIcon,
  Search as SearchIcon,
  FilterList as FilterIcon,
  GridView as GridViewIcon,
  ViewList as ListViewIcon,
  Image as ImageIcon,
  VideoLibrary as VideoIcon,
  InsertDriveFile as FileIcon,
  Visibility as ViewIcon,
  Download as DownloadIcon,
  Close as CloseIcon,
  Check as CheckIcon,
  Refresh as RefreshIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { mediaAPI } from '../../services/api';

const MediaLibrary = () => {
  const [media, setMedia] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [search, setSearch] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedMedia, setSelectedMedia] = useState([]);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [currentMedia, setCurrentMedia] = useState(null);
  const [mediaForm, setMediaForm] = useState({
    name: '',
    description: '',
    tags: [],
    altText: '',
  });
  const fileInputRef = useRef(null);

  useEffect(() => {
    fetchMedia();
  }, []);

  const fetchMedia = async () => {
    try {
      setLoading(true);
      const response = await mediaAPI.getMedia();
      setMedia(response.data.media || []);
    } catch (error) {
      setError('Failed to fetch media');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = async (event) => {
    const files = Array.from(event.target.files);
    if (files.length === 0) return;

    setUploading(true);
    setUploadProgress(0);

    for (const file of files) {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('name', file.name);
      formData.append('type', file.type);

      try {
        const config = {
          headers: { 'Content-Type': 'multipart/form-data' },
          onUploadProgress: (progressEvent) => {
            const progress = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setUploadProgress(progress);
          },
        };

        const response = await mediaAPI.uploadMedia(formData, config);
        setMedia(prev => [response.data.media, ...prev]);
        setSuccess(`${file.name} uploaded successfully`);
      } catch (error) {
        setError(`Failed to upload ${file.name}`);
        console.error(error);
      }
    }

    setUploading(false);
    setUploadProgress(0);
    if (event.target) event.target.value = '';
  };

  const handleDeleteMedia = async (mediaId) => {
    if (!window.confirm('Are you sure you want to delete this media?')) return;

    try {
      await mediaAPI.deleteMedia(mediaId);
      setMedia(media.filter(m => m.id !== mediaId));
      setSelectedMedia(selectedMedia.filter(id => id !== mediaId));
      setSuccess('Media deleted successfully');
    } catch (error) {
      setError('Failed to delete media');
      console.error(error);
    }
  };

  const handleEditMedia = (mediaItem) => {
    setCurrentMedia(mediaItem);
    setMediaForm({
      name: mediaItem.name || '',
      description: mediaItem.description || '',
      tags: mediaItem.tags || [],
      altText: mediaItem.altText || '',
    });
    setEditDialogOpen(true);
  };

  const handleSaveMedia = async () => {
    if (!currentMedia) return;

    try {
      await mediaAPI.updateMedia(currentMedia.id, mediaForm);
      setMedia(media.map(m => 
        m.id === currentMedia.id ? { ...m, ...mediaForm } : m
      ));
      setSuccess('Media updated successfully');
      setEditDialogOpen(false);
    } catch (error) {
      setError('Failed to update media');
      console.error(error);
    }
  };

  const handleSelectMedia = (mediaId) => {
    setSelectedMedia(prev => 
      prev.includes(mediaId)
        ? prev.filter(id => id !== mediaId)
        : [...prev, mediaId]
    );
  };

  const handleBulkDelete = async () => {
    if (selectedMedia.length === 0) return;
    if (!window.confirm(`Delete ${selectedMedia.length} selected items?`)) return;

    try {
      for (const mediaId of selectedMedia) {
        await mediaAPI.deleteMedia(mediaId);
      }
      setMedia(media.filter(m => !selectedMedia.includes(m.id)));
      setSelectedMedia([]);
      setSuccess(`${selectedMedia.length} items deleted successfully`);
    } catch (error) {
      setError('Failed to delete selected items');
      console.error(error);
    }
  };

  const getMediaIcon = (type) => {
    if (type?.includes('image')) return <ImageIcon />;
    if (type?.includes('video')) return <VideoIcon />;
    return <FileIcon />;
  };

  const filteredMedia = media.filter(item => {
    const matchesSearch = item.name?.toLowerCase().includes(search.toLowerCase()) ||
                         (item.description && item.description.toLowerCase().includes(search.toLowerCase()));
    const matchesType = filterType === 'all' || item.type?.includes(filterType);
    return matchesSearch && matchesType;
  });

  const getFileSize = (bytes) => {
    if (!bytes) return '0 bytes';
    if (bytes < 1024) return bytes + ' bytes';
    if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / 1048576).toFixed(1) + ' MB';
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'Unknown';
    return new Date(dateString).toLocaleDateString();
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
        <LinearProgress sx={{ width: '100%' }} />
      </Box>
    );
  }

  return (
    <Box>
      {/* Header */}
      <Paper sx={{ p: 3, mb: 3, borderRadius: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
          <Box>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
              Media Library
            </Typography>
            <Typography variant="body1" sx={{ color: '#64748B' }}>
              Upload and manage images, videos, and documents
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 2 }}>
            {selectedMedia.length > 0 && (
              <Button
                variant="outlined"
                color="error"
                startIcon={<DeleteIcon />}
                onClick={handleBulkDelete}
              >
                Delete Selected ({selectedMedia.length})
              </Button>
            )}
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              multiple
              style={{ display: 'none' }}
              accept="image/*,video/*,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            />
            <Button
              variant="contained"
              startIcon={<UploadIcon />}
              onClick={() => fileInputRef.current?.click()}
              sx={{
                backgroundColor: '#10B981',
                '&:hover': { backgroundColor: '#059669' },
              }}
            >
              Upload Media
            </Button>
          </Box>
        </Box>

        {/* Search and Filter */}
        <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
          <TextField
            placeholder="Search media..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            InputProps={{
              startAdornment: <SearchIcon sx={{ mr: 1, color: '#64748B' }} />,
            }}
            sx={{ flex: 1 }}
          />
          <FormControl sx={{ minWidth: 120 }}>
            <InputLabel>Type</InputLabel>
            <Select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              label="Type"
            >
              <MenuItem value="all">All Types</MenuItem>
              <MenuItem value="image">Images</MenuItem>
              <MenuItem value="video">Videos</MenuItem>
              <MenuItem value="application">Documents</MenuItem>
            </Select>
          </FormControl>
          <IconButton
            onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
            color={viewMode === 'grid' ? 'primary' : 'default'}
          >
            {viewMode === 'grid' ? <ListViewIcon /> : <GridViewIcon />}
          </IconButton>
          <IconButton onClick={fetchMedia}>
            <RefreshIcon />
          </IconButton>
        </Box>

        {/* Upload Progress */}
        {uploading && (
          <Box sx={{ mt: 2 }}>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Uploading...
            </Typography>
            <LinearProgress
              variant="determinate"
              value={uploadProgress}
              sx={{
                height: 8,
                borderRadius: 4,
              }}
            />
          </Box>
        )}
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

      {/* Media Grid */}
      {viewMode === 'grid' ? (
        <Grid container spacing={3}>
          {filteredMedia.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Card
                  sx={{
                    border: selectedMedia.includes(item.id) ? '2px solid #10B981' : '1px solid #E2E8F0',
                    borderRadius: 2,
                    overflow: 'hidden',
                    position: 'relative',
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 8,
                      left: 8,
                      zIndex: 1,
                    }}
                  >
                    <Checkbox
                      checked={selectedMedia.includes(item.id)}
                      onChange={() => handleSelectMedia(item.id)}
                      sx={{
                        color: 'white',
                        '&.Mui-checked': {
                          color: '#10B981',
                        },
                      }}
                    />
                  </Box>

                  {item.type?.includes('image') ? (
                    <CardMedia
                      component="img"
                      height="200"
                      image={item.url || 'https://via.placeholder.com/300x200?text=Image'}
                      alt={item.altText || item.name}
                      sx={{ objectFit: 'cover' }}
                    />
                  ) : (
                    <Box
                      sx={{
                        height: 200,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#F1F5F9',
                      }}
                    >
                      {getMediaIcon(item.type)}
                      <Typography variant="body2" sx={{ ml: 1 }}>
                        {item.type?.split('/')[1] || 'file'}
                      </Typography>
                    </Box>
                  )}

                  <CardContent sx={{ p: 2 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600 }} noWrap>
                      {item.name || 'Untitled'}
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#64748B' }}>
                      {getFileSize(item.size)} • {formatDate(item.createdAt)}
                    </Typography>
                  </CardContent>

                  <CardActions sx={{ p: 1, justifyContent: 'space-between' }}>
                    <IconButton
                      size="small"
                      onClick={() => handleEditMedia(item)}
                    >
                      <EditIcon fontSize="small" />
                    </IconButton>
                    <Box>
                      <Tooltip title="Preview">
                        <IconButton
                          size="small"
                          component="a"
                          href={item.url}
                          target="_blank"
                        >
                          <ViewIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Delete">
                        <IconButton
                          size="small"
                          onClick={() => handleDeleteMedia(item.id)}
                        >
                          <DeleteIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  </CardActions>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      ) : (
        /* List View */
        <Paper sx={{ borderRadius: 2 }}>
          <Box sx={{ p: 2 }}>
            {filteredMedia.map((item) => (
              <Box
                key={item.id}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  p: 2,
                  borderBottom: '1px solid #E2E8F0',
                  '&:hover': {
                    backgroundColor: '#F8FAFC',
                  },
                }}
              >
                <Checkbox
                  checked={selectedMedia.includes(item.id)}
                  onChange={() => handleSelectMedia(item.id)}
                />

                <Box sx={{ mx: 2 }}>
                  {getMediaIcon(item.type)}
                </Box>

                <Box sx={{ flex: 1 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    {item.name || 'Untitled'}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#64748B' }}>
                    {item.type} • {getFileSize(item.size)}
                  </Typography>
                </Box>

                <Typography variant="body2" sx={{ color: '#64748B', mx: 2 }}>
                  {formatDate(item.createdAt)}
                </Typography>

                <Box sx={{ display: 'flex', gap: 1 }}>
                  <IconButton
                    size="small"
                    onClick={() => handleEditMedia(item)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    size="small"
                    component="a"
                    href={item.url}
                    target="_blank"
                  >
                    <ViewIcon />
                  </IconButton>
                  <IconButton
                    size="small"
                    onClick={() => handleDeleteMedia(item.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </Box>
            ))}
          </Box>
        </Paper>
      )}

      {/* Empty State */}
      {filteredMedia.length === 0 && (
        <Paper sx={{ p: 8, textAlign: 'center', borderRadius: 2, mt: 3 }}>
          <UploadIcon sx={{ fontSize: 60, color: '#CBD5E1', mb: 2 }} />
          <Typography variant="h6" gutterBottom>
            No media found
          </Typography>
          <Typography variant="body1" sx={{ color: '#64748B', mb: 3 }}>
            {search ? 'Try adjusting your search' : 'Upload your first media file'}
          </Typography>
          <Button
            variant="contained"
            startIcon={<UploadIcon />}
            onClick={() => fileInputRef.current?.click()}
          >
            Upload Media
          </Button>
        </Paper>
      )}

      {/* Edit Media Dialog */}
      <Dialog open={editDialogOpen} onClose={() => setEditDialogOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Edit Media Details
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
            {currentMedia?.type?.includes('image') && (
              <Box sx={{ textAlign: 'center', mb: 2 }}>
                <img
                  src={currentMedia.url || 'https://via.placeholder.com/300x200?text=Image'}
                  alt={currentMedia.altText}
                  style={{ maxWidth: '100%', maxHeight: 200, borderRadius: 8 }}
                />
              </Box>
            )}

            <TextField
              label="Name"
              value={mediaForm.name}
              onChange={(e) => setMediaForm({ ...mediaForm, name: e.target.value })}
              fullWidth
            />

            <TextField
              label="Description"
              value={mediaForm.description}
              onChange={(e) => setMediaForm({ ...mediaForm, description: e.target.value })}
              fullWidth
              multiline
              rows={3}
            />

            <TextField
              label="Alt Text"
              value={mediaForm.altText}
              onChange={(e) => setMediaForm({ ...mediaForm, altText: e.target.value })}
              fullWidth
              helperText="For accessibility and SEO"
            />

            <TextField
              label="Tags"
              value={mediaForm.tags.join(', ')}
              onChange={(e) => setMediaForm({ 
                ...mediaForm, 
                tags: e.target.value.split(',').map(tag => tag.trim()).filter(tag => tag) 
              })}
              fullWidth
              helperText="Separate tags with commas"
            />
          </Box>
        </DialogContent>
        <DialogActions sx={{ p: 3 }}>
          <Button onClick={() => setEditDialogOpen(false)} startIcon={<CloseIcon />}>
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleSaveMedia}
            startIcon={<CheckIcon />}
          >
            Save Changes
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default MediaLibrary;