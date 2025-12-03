import React from "react";
import { Routes, Route } from "react-router-dom";

import { 
  publicRoutes, 
  privateRoutes, 
  defaultRoutes 
} from "./routes.jsx";

const App = () => {
  return (
    <Routes>

      {/* PUBLIC ROUTES */}
      {publicRoutes.map((route, idx) => (
        <Route key={idx} path={route.path} element={route.element} />
      ))}

      {/* PRIVATE ROUTES */}
      {privateRoutes.map((route, idx) => (
        <Route key={idx} path={route.path} element={route.element} />
      ))}

      {/* DEFAULT */}
      {defaultRoutes.map((route, idx) => (
        <Route key={idx} path={route.path} element={route.element} />
      ))}

    </Routes>
  );
};

export default App;
