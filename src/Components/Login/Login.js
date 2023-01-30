import axios from "axios";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { USER_CONTEXT } from "../../Context/AuthContext";

const Login = () => {
  const { setToken, setLoadingUser } = useContext(USER_CONTEXT);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = { email, password };
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/api/login`, user)
      .then((res) => {
        if (res?.data?.success) {
          localStorage.setItem("access-token", res.data.token);
          setToken(localStorage.getItem("access-token"));
          form.reset();
          setLoadingUser(false);
          Swal.fire(res?.data?.message);
          navigate("/");
        }
        if (res?.data) {
          Swal.fire(res?.data?.message);
        }
      });
  };

  return (
    <div className="flex justify-center items-center my-5  min-h-[64.6vh]">
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
          <button
            className="btn btn-md w-full mt-3 bg-gradient-to-r from-green-400 to-blue-500 border-0"
            type="submit"
          >
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
