import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const token = localStorage.getItem("access_token");
  
  const handleLogout = () => {
    localStorage.removeItem("access_token");
  };
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
          </Link>
        </div>
        <div className="flex-none gap-2">
          <ul className="flex ">
            {token ? (
              <>
                <li onClick={handleLogout} className="mr-3 cursor-pointer">
                  Logout
                </li>
              </>
            ) : (
              <>
                <Link to="/login">
                  <li className="mr-3">Login</li>
                </Link>
                <Link to="/registration">
                  <li className="mr-3">Register</li>
                </Link>
              </>
            )}
          </ul>

          <div className="w-12 rounded-full cursor-pointer ">
            PaidTotal: 
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
