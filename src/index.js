import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./Kasa";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Banner from "./components/banner/Banner";
import Main from "./pages/main/Main";
import Card from "./components/card/Card";
import APropos from "./pages/a-propos/Apropos";
import Navbar from "./navbar/Navbar";

const router = createBrowserRouter([
  {
    path:"/",
    element:<App />
  },
  {
    path:"/appartment",
    element:<h1>Nos appartements</h1>,
  },
  {
    path:"/apropos",
    element:<h1>A propos</h1>
  },
  {
    path:"/error",
    element:<h1>Error 404</h1>
  }

])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
