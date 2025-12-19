// import React from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import Home from './pages/Home';
// import About from './pages/About';
// import Services from './pages/Services';
// import Team from './pages/Team';
// import Contact from './pages/Contact';
// import AdminDashboard from './pages/AdminDashboard';
// import Login from './pages/Login';

// const AppRoutes = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/about" element={<About />} />
//       <Route path="/services" element={<Services />} />
//       <Route path="/team" element={<Team />} />
//       <Route path="/contact" element={<Contact />} />
//       <Route path="/admin/*" element={<AdminDashboard />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="*" element={<Navigate to="/" replace />} />
//     </Routes>
//   );
// };

// export default AppRoutes;


// frontend/src/AppRoutes.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Login from './pages/Login';
import AdminRoutes from './components/admin/AdminRoutes';
import { useSelector } from 'react-redux';

const AppRoutes = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/team" element={<Team />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={user ? <Navigate to="/admin" /> : <Login />} />
      <Route path="/admin/*" element={<AdminRoutes />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;