import { createBrowserRouter } from "react-router-dom";
import ErrorElement from "../Components/ErrorElement/ErrorElement";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Main from "../layout/Main";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      // <PrivateRoute>
      <Main />
      // </PrivateRoute>
    ),
    errorElement: <ErrorElement />,
    children: [
      {
        path: "/registration",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
