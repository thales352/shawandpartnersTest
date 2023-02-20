import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./components/pages/__App";
import Switch from "./routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <App>
      <Switch />
    </App>
  </Router>
);
