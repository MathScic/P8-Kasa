import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Banner from "./components/banner/Banner";
import Main from "./pages/main/Main";
import APropos from "./pages/a-propos/Apropos";
import Navbar from "./navbar/Navbar";
import Flat from "./pages/flat/Flat";

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Navbar />
        <Banner />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="apropos" element={<APropos />} />
          <Route path="flat" element={<Flat />} />
        </Routes>
      </Router>
      <Footer />
    </React.StrictMode>
  );
}

export default App;
