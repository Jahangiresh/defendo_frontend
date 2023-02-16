import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import "../admin/assets/libs/boxicons-2.1.1/css/boxicons.min.css";
import "../admin/scss/App.scss";
import Dashboard from "../admin/pages/Dashboard";
import MainLayout from "../admin/layout/MainLayout";
import Orders from "../admin/pages/Orders";
import PageSettings from "../admin/pages/PageSettings";
import Users from "../admin/pages/Users";
import Login from "../admin/pages/Login";
import Settings from "../admin/pages/Settings";
import MainInfo from "../admin/pages/MainInfo";
import Services from "../admin/pages/Services";
import ServiceDetails from "../admin/pages/ServiceDetails";
import CreateService from "../admin/pages/CreateService";
import axios from "axios";
import Login from "../admin/pages/Login";
import Settings from "../admin/pages/Settings";
import Services from "../admin/pages/Services";
import Advocates from "../admin/pages/Advocates";

const AdminLayout = () => {
  const user = localStorage.getItem("user");
  // if (user) {
  //   const { accessToken, refreshToken } = JSON.parse(user);
  //   // setInterval(() => {
  //   const get = async () => {
  //     await axios
  //       .post("../../api/v1/authentication/refreshtokenlogin", {
  //         accessToken: accessToken,
  //         refreshToken: refreshToken,
  //       })
  //       .then((res) => {
  //         console.log(res);
  //         // localStorage.removeItem("user");
  //         // localStorage.setItem("user", res.data);
  //         user = res.data;
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };
  //   get();
  //   // }, 10000);
  // }
  return (
    <Router>
      <Routes>
        {user ? (
          <Route path="/admin" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="/admin/orders" element={<Orders />} />
            <Route path="/admin/services" element={<Services />} />
            <Route path="/admin/services/:id" element={<ServiceDetails />} />
            <Route path="/admin/service/create" element={<CreateService />} />
            <Route path="admin/customers" element={<Users />} />
            <Route path="/admin/maininfo" element={<MainInfo />} />
            <Route path="/admin/settings" element={<Settings />} />
            <Route path="/admin/stats" element={<Blank />} />
            <Route path="/admin/homepage" element={<PageSettings />} />
            <Route path="/admin/login" element={<Login />} />
            <Route path="/admin/services" element={<Services />} />
            <Route path="/admin/setting" element={<Settings />} />
            <Route path="/admin/advocates" element={<Advocates />} />
          </Route>
        ) : (
          <Route path="/admin" element={<Login />} />
        )}
      </Routes>
    </Router>
  );
};

export default AdminLayout;
