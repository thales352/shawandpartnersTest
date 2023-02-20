import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import UserList from "./components/pages/UserList";
import UserDetails from "./components/pages/UserDetails";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/" element={<UserList />} />
      <Route path="/user/:login" element={<UserDetails />} />
    </Routes>
  </Router>
);
