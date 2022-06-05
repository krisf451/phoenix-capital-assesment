import React from "react";
import { useStateContext } from "../context/StateContext";
import { HiOutlineLightBulb, HiMoon } from "react-icons/hi";
import { AiOutlineMenu, AiOutlineProfile, AiOutlineHome } from "react-icons/ai";
import { BiLandscape, BiLogOutCircle } from "react-icons/bi";
import { GiMiner } from "react-icons/gi";

import { Link } from "react-router-dom";
import { Menu } from "@headlessui/react";

const Navbar = () => {
  const { mode, setMode, authData, setAuthData } = useStateContext();

  const logout = () => {
    localStorage.clear();
    setAuthData(null);
  };

  return (
    <div className="dark:bg-black bg-gray-200 h-16 w-full flex justify-between items-center">
      {/* Logo */}
      <div className="ml-4">
        <Link to="/" className="mx-6 cursor-pointer ">
          <p className="text-gray-600 dark:text-gray-400 whitespace-nowrap">
            PHOENIX{" "}
            <span className="text-gray-800 dark:text-white">CAPITAL GROUP</span>
          </p>
        </Link>
      </div>

      {/* Links */}
      <div
        className={`hidden md:flex flex-1 ml-6 text-sm transition-all ${
          authData === null ? "justify-end" : "justify-around"
        }`}
      >
        {authData !== null && (
          <>
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
          </>
        )}
        {authData === null ? (
          <Link
            to="/auth"
            className="uppercase dark:text-white transform duration-300 ease-in-out text-gray-500 hover:text-gray-700 hover:dark:text-gray-400"
          >
            Login
          </Link>
        ) : (
          <Link
            onClick={logout}
            to="/auth"
            className="uppercase dark:text-white transform duration-300 ease-in-out text-gray-500 hover:text-gray-700 hover:dark:text-gray-400"
          >
            Logout
          </Link>
        )}
      </div>

      {/* Right Side */}
      <div className="flex items-center justify-end w-auto">
        {/* User stuff */}
        {authData !== null && (
          <Link to="/profile">
            <div className="hidden rounded-full h-10 w-10 bg-gray-400 dark:bg-main-bg sm:flex justify-center items-center cursor-pointer">
              {authData.email[0].toUpperCase()}
            </div>
          </Link>
        )}
        <div
          className="dark:text-white mx-4 cursor-pointer"
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
        <Menu as="div" className="relative md:hidden">
          <Menu.Button className="cursor-pointer transition-all transform hover:rotate-90 duration-500 ease-linear mt-2 mr-2">
            <AiOutlineMenu
              size={25}
              color={mode === "Dark" ? "white" : "black"}
            />
          </Menu.Button>
          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-lg shadow-lg bg-main-bg dark:bg-main-dark-bg dark:text-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/"
                    className={`group rounded-lg flex items-center px-4 py-4 text-sm dark:text-white ${
                      active
                        ? "bg-secondary-dark-bg text-white"
                        : "text-gray-700"
                    }`}
                  >
                    <AiOutlineHome
                      className="mr-3 h-5 w-5 text-gray-400 group-hover:text-white dark:text-white"
                      aria-hidden="true"
                    />
                    Home
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/landHoldings"
                    className={`group rounded-lg flex items-center px-4 py-4 text-sm dark:text-white ${
                      active
                        ? "bg-secondary-dark-bg text-white"
                        : "text-gray-700"
                    }`}
                  >
                    <BiLandscape
                      className="mr-3 h-5 w-5 text-gray-400 group-hover:text-white dark:text-white"
                      aria-hidden="true"
                    />
                    Land Holdings
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/owners"
                    className={`group rounded-lg flex items-center px-4 py-4 text-sm dark:text-white ${
                      active
                        ? "bg-secondary-dark-bg text-white"
                        : "text-gray-700"
                    }`}
                  >
                    <GiMiner
                      className="mr-3 h-5 w-5 text-gray-400 group-hover:text-white dark:text-white"
                      aria-hidden="true"
                    />
                    Owners
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/auth"
                    onClick={logout}
                    className={`group rounded-lg flex items-center px-4 py-4 text-sm dark:text-white ${
                      active
                        ? "bg-secondary-dark-bg text-white"
                        : "text-gray-700"
                    }`}
                  >
                    <BiLogOutCircle
                      className="mr-3 h-5 w-5 text-gray-400 group-hover:text-white dark:text-white"
                      aria-hidden="true"
                    />
                    Logout
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/profile"
                    className={`group rounded-lg flex items-center px-4 py-4 text-sm dark:text-white ${
                      active
                        ? "bg-secondary-dark-bg text-white"
                        : "text-gray-700"
                    }`}
                  >
                    <AiOutlineProfile
                      className="mr-3 h-5 w-5 text-gray-400 group-hover:text-white dark:text-white"
                      aria-hidden="true"
                    />
                    Profile
                  </Link>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
