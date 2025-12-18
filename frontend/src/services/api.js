import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/v1';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth services
export const authAPI = {
  login: (data) => api.post('/auth/login', data),
  register: (data) => api.post('/auth/register', data),
  getMe: () => api.get('/auth/me'),
  updateProfile: (data) => api.put('/auth/updatedetails', data),
  updatePassword: (data) => api.put('/auth/updatepassword', data),
  logout: () => api.get('/auth/logout'),
};

// Page services
export const pageAPI = {
  getPages: () => api.get('/pages'),
  getPage: (slug) => api.get(`/pages/${slug}`),
  createPage: (data) => api.post('/pages', data),
  updatePage: (id, data) => api.put(`/pages/${id}`, data),
  deletePage: (id) => api.delete(`/pages/${id}`),
  getPageFull: (id) => api.get(`/pages/${id}/full`),
  reorderPages: (data) => api.put('/pages/reorder', data),
};

// Section services
export const sectionAPI = {
  getSections: (pageId) => api.get(`/sections/pages/${pageId}/sections`),
  getSection: (id) => api.get(`/sections/${id}`),
  createSection: (pageId, data) => api.post(`/sections/pages/${pageId}/sections`, data),
  updateSection: (id, data) => api.put(`/sections/${id}`, data),
  deleteSection: (id) => api.delete(`/sections/${id}`),
  toggleSection: (id) => api.put(`/sections/${id}/toggle`),
  reorderSections: (data) => api.put('/sections/reorder', data),
};

// Media services
export const mediaAPI = {
  uploadMedia: (formData) => {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };
    return api.post('/media/upload', formData, config);
  },
  getMedia: (params) => api.get('/media', { params }),
  getMediaById: (id) => api.get(`/media/${id}`),
  updateMedia: (id, data) => api.put(`/media/${id}`, data),
  deleteMedia: (id) => api.delete(`/media/${id}`),
  getTags: () => api.get('/media/tags'),
  getMediaByTag: (tag) => api.get(`/media/tags/${tag}`),
};

// Contact services
export const contactAPI = {
  submitEnquiry: (data) => api.post('/contact', data),
  getEnquiries: (params) => api.get('/contact', { params }),
  getEnquiry: (id) => api.get(`/contact/${id}`),
  updateEnquiry: (id, data) => api.put(`/contact/${id}`, data),
  addNote: (id, data) => api.post(`/contact/${id}/notes`, data),
  getStats: () => api.get('/contact/stats'),
};

// Chat services (temporary - will connect to backend later)
export const chatAPI = {
  createSession: () => Promise.resolve({ 
    data: { 
      success: true, 
      session: { 
        sessionId: `chat_${Date.now()}`,
        title: 'New Chat',
        createdAt: new Date().toISOString(),
      } 
    } 
  }),
  sendMessage: (sessionId, message) => Promise.resolve({ 
    data: { 
      success: true, 
      message: "Hello! I'm your AI assistant. How can I help you today?",
      session: { sessionId, title: message.substring(0, 50) }
    } 
  }),
  getSessions: () => Promise.resolve({ 
    data: { 
      success: true, 
      sessions: [] 
    } 
  }),
  getMessages: () => Promise.resolve({ 
    data: { 
      success: true, 
      messages: [] 
    } 
  }),
  updateTitle: () => Promise.resolve({ 
    data: { 
      success: true 
    } 
  }),
  deleteSession: () => Promise.resolve({ 
    data: { 
      success: true 
    } 
  }),
};

export default api;