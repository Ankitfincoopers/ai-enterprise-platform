// frontend/src/routes/AdminRoutes.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AdminDashboard from '../../pages/AdminDashboard';
import PageManager from './PageManager';
import SectionEditor from './SectionEditor';
import MediaLibrary from './MediaLibrary';
import UserManager from './UserManager';
import Settings from './Settings';
import Analytics from './Analytics';
import ContactManager from './ContactManager';
import { useSelector } from 'react-redux';

const AdminRoutes = () => {
  const { user } = useSelector((state) => state.auth);

  // Redirect non-admin users
  if (!user || user.role !== 'admin') {
    return <Navigate to="/login" />;
  }

  return (
    <Routes>
      <Route index element={<AdminDashboard />} />
      <Route path="pages" element={<PageManager />} />
      <Route path="pages/edit/:pageId" element={<SectionEditor />} />
      <Route path="sections" element={<SectionEditor />} />
      <Route path="media" element={<MediaLibrary />} />
      <Route path="users" element={<UserManager />} />
      <Route path="settings" element={<Settings />} />
      <Route path="analytics" element={<Analytics />} />
      <Route path="contacts" element={<ContactManager />} />
    </Routes>
  );
};

export default AdminRoutes;