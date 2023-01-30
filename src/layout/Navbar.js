import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiOutlineLogout } from "react-icons/hi";
import { USER_CONTEXT } from "../Context/AuthContext";
const Navbar = () => {
  const { totalPaid, token, setToken, loadingUser, setLoadingUser } =
    useContext(USER_CONTEXT);

  useEffect(() => {
    setToken(localStorage.getItem("access-token"));
    setLoadingUser(false);
  }, [setToken, loadingUser, token]);

  const handleLogout = () => {
    setToken(localStorage.removeItem("access-token"));
    setLoadingUser(false);
  };

  return (
    <div className=" bg-gradient-to-r from-green-400 to-blue-500">
      <nav className="navbar max-w-[1440px] mx-auto">
        <div className="flex-1 items-center justify-start">
          <Link to="/">
            <div className="flex items-center">
              <img
                className="w-16"
                src="https://i.ibb.co/N2pL617/pngtree-modern-power-logo-image-487711-removebg-preview.png"
                alt="Logo"
              />
              <p className="text-2xl text-white font-bold">Power Hack</p>
            </div>
          </Link>
        </div>
        <div className="flex gap-2">
          <ul className="flex items-center ">
            {token ? (
              <>
                <p className="text-xl text-white mr-3">
                  PaidTotal: {totalPaid}
                </p>
                {""}
                <li onClick={handleLogout} className="mr-3 cursor-pointer">
                  <HiOutlineLogout className="text-3xl text-white" />
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
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
