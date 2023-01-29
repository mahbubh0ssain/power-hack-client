import axios from "axios";
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = { email, password };
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/login`, user)
      .then((res) => {
        form.reset();
        if (res?.data?.success) {
          Swal.fire(res?.data?.message);
          localStorage.setItem("access_token", res?.data?.token);
          navigate(from, { replace: true });
        }
        if (res?.data) {
          Swal.fire(res?.data?.message);
        }
      });
  };

  return (
    <div className="flex justify-center items-center my-5  min-h-[64.6vh] ">
      <div className="p-6 shadow-md rounded-xl">
        <h2 className="text-center text-4xl mb-6">Login Please</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-control w-full">
            <label>Email</label>
            <input
              required
              type="email"
              name="email"
              placeholder="Type your email"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label>Password</label>
            <input
              required
              type="password"
              name="password"
              placeholder="Type your password"
              className="input input-bordered w-full"
            />
          </div>
          <button className="btn btn-sm w-full mt-3" type="submit">
            Login
          </button>
        </form>
        <p className="pt-3">
          New to Power-Hack?
          <Link className="text-blue-400" to="/registration">
            {" "}
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
