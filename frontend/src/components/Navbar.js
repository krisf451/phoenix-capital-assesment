import React from "react";
import { useStateContext } from "../context/StateContext";
import { HiOutlineLightBulb, HiMoon } from "react-icons/hi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { mode, setMode } = useStateContext();
  return (
    <div className="dark:bg-black bg-gray-200 h-16 mb-4 w-full flex justify-between items-center fixed top-0 left-0">
      {/* Logo */}
      <Link
        to="/"
        className="mx-6 transition-all cursor-pointer transform duration-500 hover:translate-x-0.5 ease-linear"
      >
        <p className="text-gray-600 dark:text-gray-400">
          PHOENIX{" "}
          <span className="text-gray-800 dark:text-white">CAPITAL GROUP</span>
        </p>
      </Link>
      {/* Links */}
      <div className="flex flex-1 justify-around ml-6 text-sm transition-all">
        <Link
          to="/admin"
          className="dark:text-white transform duration-300 ease-in-out hover:text-blue-500 hover:dark:text-gray-400"
        >
          DASHBOARD
        </Link>
        <Link
          to="/landHoldings"
          className="uppercase dark:text-white transform duration-300 ease-in-out hover:text-blue-500 hover:dark:text-gray-400"
        >
          Land Holdings
        </Link>
        <Link
          to="/owners"
          className="uppercase dark:text-white transform duration-300 ease-in-out hover:text-blue-500 hover:dark:text-gray-400"
        >
          Owners
        </Link>
      </div>
      {/* Theme Stuff */}
      <div
        className="dark:text-white mx-6"
        onClick={() => setMode(mode === "Dark" ? "" : "Dark")}
      >
        {mode === "Dark" ? (
          <HiOutlineLightBulb size={50} />
        ) : (
          <HiMoon size={50} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
