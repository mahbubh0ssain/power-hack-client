import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" bg-red-300">
      <nav className="navbar max-w-[1440px] mx-auto">
        <div className="flex-1 items-center justify-start">
          <Link to="/">
            <img
              className="w-16"
              src="https://i.ibb.co/N2pL617/pngtree-modern-power-logo-image-487711-removebg-preview.png"
              alt="Logo"
            />
            {/* <p className="text-2xl">Power-Hack</p> */}
          </Link>
        </div>
        <div className="flex-none gap-2">
          <ul className="flex ">
            <Link to="/login">
              <li className="mr-3">Login</li>
            </Link>{" "}
            <Link to="/registration">
              <li className="mr-3">Register</li>
            </Link>
          </ul>

          <div
            title="Mahbub Hossain"
            className="w-12 rounded-full cursor-pointer "
          >
            <img
              src="https://i.ibb.co/N2pL617/pngtree-modern-power-logo-image-487711-removebg-preview.png"
              alt="User"
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
