import "./assets/css/app.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import UpperHeader from "./components/header/UpperHeader";
import Header from "./components/header/Header";
import ServicesDetail from "./pages/ServicesDetail";
import Services from "./pages/Services";
import ScrollToTop from "./components/ScrollToTop";
import HeaderDown from "./components/header/HeaderDown";
import NotFound from "./pages/NotFound";
import Advocates from "./pages/Advocates";
import SingleAdvocate from "./pages/SingleAdvocate";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <UpperHeader />
        <HeaderDown />
        <Header />
        <Routes>
          <Route path="/*" element={<NotFound />} />

          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Advocates />} />
          <Route path="/about" element={<About />} />
          <Route path="/team/:id" element={<SingleAdvocate />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServicesDetail />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
