import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { USER_CONTEXT } from "../Context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { token, loadingUser } = useContext(USER_CONTEXT);
  console.log(token);
  if (loadingUser) {
    return <div>Loading...</div>;
  }

  if (token) {
    return children;
  }

  return <Navigate to="/login" />;
};

export default PrivateRoute;
