import React from "react";

const Navbar = () => {
  return (
    <div className=" bg-red-300">
      <nav className="navbar max-w-[1440px] mx-auto">
        <div className="flex-1 items-center justify-start">
          <img
            className="w-12"
            src="https://i.ibb.co/N2pL617/pngtree-modern-power-logo-image-487711-removebg-preview.png"
            alt="Logo"
          />
          <p className="text-2xl">Power-Hack</p>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered"
            />
          </div>

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
