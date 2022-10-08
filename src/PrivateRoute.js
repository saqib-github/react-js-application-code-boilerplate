import React from "react";
import { Navigate } from "react-router-dom";
import PrivateLayout from "./Layout/private";
import { isLoggedIn } from "./lib/auth";

const PrivateRoute = ({ children }) => {
  const auth = isLoggedIn();
  if (!auth) {
    return <Navigate to="/" replace />;
  }
  return <PrivateLayout>{children}</PrivateLayout>;
};

export default PrivateRoute;
