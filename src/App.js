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
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServicesDetail />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
