import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ component: Component }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user?.token) {
    return <Component />;
  } else {
    return <Navigate to="/auth" />;
  }
};

export default PrivateRoute;
