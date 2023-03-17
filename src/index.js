import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import BranchContextProvider from "./contexts/context";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
  // </React.StrictMode>
  <BranchContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </BranchContextProvider>
);
