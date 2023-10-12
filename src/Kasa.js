import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Banner from "./components/banner/Banner";
import Main from "./pages/main/Main";
import Card from "./components/card/Card";
import APropos from "./pages/a-propos/Apropos";
import Navbar from "./navbar/Navbar";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Main>
        <Banner />
        <Card />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/apropos" element={<APropos />} />
        </Routes>
      </Main>
    </Router>
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);

function App() {
  return <div className="App"></div>;
}

export default App;
