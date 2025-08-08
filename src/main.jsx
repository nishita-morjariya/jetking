import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// User Panel
import App from './App';
import AboutUs from './components/user/pages/AboutUs';
import Courses from './components/user/pages/Courses';
import Centers from './components/user/pages/Centers';
import Placements from './components/user/pages/Placements';
import Franchise from './components/user/pages/Franchise';
import Blog from './components/user/pages/Blog';
import ContactUs from './components/user/pages/ContactUs';

// Admin Panel
import Login from './components/admin/Login';
import AdminLayout from './components/admin/AdminLayout';
import Dashboard from './components/admin/Dashboard';
import ManageCustomer from './components/admin/pages/ManageCustomer';
import AddCategory from './components/admin/pages/AddCategory';
import AddCourse from './components/admin/pages/AddCourse';
import ManageContact from './components/admin/pages/ManageContact';
import ManageReview from './components/admin/pages/ManageReview';
import AddFranchise from './components/admin/pages/AddFranchise';
import ManageStaff from './components/admin/pages/ManageStaff';

// Error Pages
import ErrorApp from './components/Error'; // Admin 404
import UserError from './components/user/pages/UserError'; // New public 404

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>

        {/* User Panel Routes */}
        <Route path="/" element={<App />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/Centers" element={<Centers />} />
        <Route path="/Placements" element={<Placements />} />
        <Route path="/Franchise" element={<Franchise />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/ContactUs" element={<ContactUs />} />

        {/* Public error page */}
        <Route path="*" element={<UserError />} />

        {/* Admin Login */}
        <Route path="/admin-login" element={<Login />} />

        {/* Admin Protected Layout */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="ManageCustomer" element={<ManageCustomer />} />
          <Route path="AddCategory" element={<AddCategory />} />
          <Route path="AddCourse" element={<AddCourse />} />
          <Route path="ManageContact" element={<ManageContact />} />
          <Route path="AddFranchise" element={<AddFranchise />} />
          <Route path="ManageStaff" element={<ManageStaff />} />
          <Route path="ManageReview" element={<ManageReview />} />          

          {/* Admin error page */}
          <Route path="*" element={<ErrorApp />} />
        </Route>

      </Routes>
    </BrowserRouter>
  </StrictMode>
);
