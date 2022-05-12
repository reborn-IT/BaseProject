import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root")); //Returns an object
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
