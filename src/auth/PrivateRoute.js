// components/PrivateRoute.jsx
import { Navigate, useLocation } from "react-router-dom";
import React from "react";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const user = localStorage.getItem("user");

  return user ? (
    children
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};

export default PrivateRoute;
