import Home from "../pages/Home";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/header/Header";
import UpperHeader from "../components/header/UpperHeader";
import ScrollToTop from "../components/ScrollToTop";
import About from "../pages/About";
import Advocates from "../pages/Advocates";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import Services from "../pages/Services";
import News from "../pages/News";

import ServicesDetail from "../pages/ServicesDetail";
import SingleAdvocate from "../pages/SingleAdvocate";
import "../assets/css/layout.scss";
import SingleNews from "../pages/SingleNews";

const Layout = () => {
  return (
    <Router>
      <ScrollToTop />
      <UpperHeader />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Advocates />} />
        <Route path="/team/:id" element={<SingleAdvocate />} />
        <Route path="/blogs" element={<News />} />
        <Route path="/blogs/:id" element={<SingleNews />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<ServicesDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default Layout;
