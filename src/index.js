import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "swiper/css/bundle";
// import './component/Gallery/Slider.css'
import App from "./App";
import { useQuery } from "react-query";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
  <BrowserRouter>
    <React.StrictMode>
      <App></App>
    </React.StrictMode>
  </BrowserRouter>
  </QueryClientProvider>
);
