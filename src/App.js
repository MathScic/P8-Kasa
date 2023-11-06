import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Banner from "./components/banner/Banner";
import Main from "./pages/main/Main";
import APropos from "./pages/a-propos/Apropos";
import Navbar from "./navbar/Navbar";
import Flat from "./pages/flat/Flat";
import Error from "./components/error/Error";

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/apropos" element={<APropos />} />
          <Route path="/flat/:flatId" element={<Flat />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
      <Footer />
    </React.StrictMode>
  );
}

export default App;
