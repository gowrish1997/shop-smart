import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import "swiper/css/bundle";
// import './component/Gallery/Slider.css'
import App from "./App";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
  </BrowserRouter>
);
