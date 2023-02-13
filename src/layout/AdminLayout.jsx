import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../admin/assets/libs/boxicons-2.1.1/css/boxicons.min.css";
import "../admin/scss/App.scss";
import Blank from "../admin/pages/Blank";
import Dashboard from "../admin/pages/Dashboard";
import MainLayout from "../admin/layout/MainLayout";
import Orders from "../admin/pages/Orders";
import PageSettings from "../admin/pages/PageSettings";
import Products from "../admin/pages/Products";
import Users from "../admin/pages/Users";
import ProductDetails from "../admin/pages/ProductDetails";
import Login from "../admin/pages/Login";
import Settings from "../admin/pages/Settings";
import MainInfo from "../admin/pages/MainInfo";

const AdminLayout = () => {
  return (
    <div className="admin-wrapper">
      <Router>
        <Routes>
          <Route path="/admin" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="/admin/orders" element={<Orders />} />
            <Route path="/admin/products" element={<Products />} />
            <Route path="admin/customers" element={<Users />} />
            <Route path="admin/login" element={<Login />} />
            <Route path="admin/maininfo" element={<MainInfo />} />
            <Route path="admin/settings" element={<Settings />} />
            <Route path="admin/stats" element={<Blank />} />
            <Route path="admin/homepage" element={<PageSettings />} />
            <Route path="admin/productdetails" element={<ProductDetails />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default AdminLayout;
