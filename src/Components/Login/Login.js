import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const handleSubmit = () => {};

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
              placeholder="Type your email"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label>Password</label>
            <input
              required
              type="password"
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
