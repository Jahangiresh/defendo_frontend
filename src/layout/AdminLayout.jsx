import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../admin/assets/libs/boxicons-2.1.1/css/boxicons.min.css";
import "../admin/scss/App.scss";
import Dashboard from "../admin/pages/Dashboard";
import MainLayout from "../admin/layout/MainLayout";
import Login from "../admin/pages/Login";
import Settings from "../admin/pages/Settings";
import Services from "../admin/pages/Services";
import Advocates from "../admin/pages/Advocates";

const AdminLayout = () => {
  return (
    <div className="admin-wrapper">
      <Router>
        <Routes>
          <Route path="/admin" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="/admin/login" element={<Login />} />
            <Route path="/admin/services" element={<Services />} />
            <Route path="/admin/setting" element={<Settings />} />
            <Route path="/admin/advocates" element={<Advocates />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default AdminLayout;
