import React, { useContext, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { USER_CONTEXT } from "../Context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { token, setToken, loading, setLoading } = useContext(USER_CONTEXT);
  const location = useLocation();
  useEffect(() => {
    setToken(localStorage.getItem("access_token"));
    setLoading(false);
  }, [token, loading, setLoading, setToken]);

  if (loading) {
    return <div>Loading...</div>;
  } else if (token) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
};

export default PrivateRoute;
