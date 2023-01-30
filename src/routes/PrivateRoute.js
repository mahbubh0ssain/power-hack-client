import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { USER_CONTEXT } from "../Context/AuthContext";
import { MoonLoader } from "react-spinners";
const PrivateRoute = ({ children }) => {
  const { token, loadingUser } = useContext(USER_CONTEXT);
  console.log(token);
  if (loadingUser) {
    return (
      <div className="flex items-center justify-center">
        <MoonLoader color="#36d7b7" size={200} />
      </div>
    );
  }

  if (token) {
    return children;
  }

  return <Navigate to="/login" />;
};

export default PrivateRoute;
