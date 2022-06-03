import React from "react";
import { useStateContext } from "../context/StateContext";
import { HiOutlineLightBulb, HiMoon } from "react-icons/hi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { mode, setMode } = useStateContext();
  return (
    <div className="dark:bg-black bg-gray-200 h-16 w-full flex justify-between items-center">
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
          to="/"
          className="uppercase dark:text-white transform duration-300 ease-in-out text-gray-500 hover:text-gray-700 hover:dark:text-gray-400"
        >
          Home
        </Link>
        <Link
          to="/landHoldings"
          className="uppercase dark:text-white transform duration-300 ease-in-out text-gray-500 hover:text-gray-700 hover:dark:text-gray-400"
        >
          Land Holdings
        </Link>
        <Link
          to="/owners"
          className="uppercase dark:text-white transform duration-300 ease-in-out text-gray-500 hover:text-gray-700 hover:dark:text-gray-400"
        >
          Owners
        </Link>
        <Link
          to="/auth"
          className="uppercase dark:text-white transform duration-300 ease-in-out text-gray-500 hover:text-gray-700 hover:dark:text-gray-400"
        >
          Login
        </Link>
      </div>
      {/* Theme Stuff */}
      <div
        className="dark:text-white mx-6 cursor-pointer"
        onClick={() => setMode(mode === "Dark" ? "" : "Dark")}
      >
        {mode === "Dark" ? (
          <HiOutlineLightBulb
            size={35}
            className="transition-all transform duration-500 ease-in-out hover:scale-125 opacity-80 hover:opacity-100"
          />
        ) : (
          <HiMoon
            size={35}
            className="transition-all transform duration-500 ease-in-out hover:scale-125 opacity-80 hover:opacity-100"
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
