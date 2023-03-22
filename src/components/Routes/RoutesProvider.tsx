import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("views/Home"));

const RoutesProvider: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default RoutesProvider;
