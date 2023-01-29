import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const user = { name, email, password };
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/registration`, user)
      .then((res) => {
        if (res?.data?.success === false) {
          form.reset();
          Swal.fire(res?.data?.message);
          return;
        }
        if (
          res?.status === 200 &&
          res.data.message === "You are already registered"
        ) {
          form.reset();
          Swal.fire("Already registered, Please Login");
          return;
        }
        if (res?.status === 200 && res?.data?.token) {
          localStorage.setItem("access_token", res?.data?.token);
          form.reset();
          navigate("/");
          Swal.fire("Successful registered");
        }
      });
  };

  return (
    <div className="flex justify-center items-center my-5  min-h-[64.6vh] ">
      <div className="p-6 shadow-md rounded-xl">
        <h2 className="text-center text-4xl mb-6">Register Now</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-control w-full">
            <label>Name</label>
            <input
              required
              name="name"
              type="text"
              placeholder="Type your name"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label>Email</label>
            <input
              required
              name="email"
              type="email"
              placeholder="Type your password"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label>Password</label>
            <input
              required
              name="password"
              type="password"
              placeholder="Type your password"
              className="input input-bordered w-full"
            />
          </div>
          <button className="btn btn-sm w-full mt-3" type="submit">
            Register
          </button>
        </form>
        <p className="pt-3">
          Already have an account?
          <Link className="text-blue-400" to="/login">
            {" "}
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
