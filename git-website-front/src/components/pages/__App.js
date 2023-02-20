import React from "react";
import { Route, Routes } from "react-router-dom";

const App = ({ routes }) => {
  return (
    <>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
      <div>
        <p>ola mundo</p>
      </div>
    </>
  );
};

export default App;
