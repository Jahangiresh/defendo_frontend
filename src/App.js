import "./assets/css/app.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Services from "./pages/Services";
import Home from "./pages/Home";
import UpperHeader from "./components/header/UpperHeader";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <UpperHeader />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
