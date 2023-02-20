import React from "react";
import { Routes, Route } from "react-router-dom";
import UserList from "./components/pages/UserList";
import UserDetails from "./components/pages/UserDetails";

const Switch = () => {
  return (
    <Routes>
      <Route path="/" element={<UserList />} />
      <Route path="/:since" element={<UserList />} />
      <Route path="/user/:login" element={<UserDetails />} />
    </Routes>
  );
};

export default Switch;
