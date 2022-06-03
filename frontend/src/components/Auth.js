import React, { useState } from "react";
import { signin, signup } from "../api";
import { useStateContext } from "../context/StateContext";
import { useNavigate } from "react-router-dom";
import buttonSpinner from "../assets/button-spinner.svg";
import toast from "react-hot-toast";

const Auth = () => {
  const { isLoading, setIsLoading, setAuthData } = useStateContext();
  const navigate = useNavigate();
  const [hasAccount, setHasAccount] = useState(true);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    localStorage.removeItem("user");

    if (hasAccount) {
      signin(formValues)
        .then((res) => {
          localStorage.setItem("user", JSON.stringify(res?.data));
          setAuthData(JSON.parse(localStorage.getItem("user")));
          navigate("/");
          toast.success("Signed in Successfully!");
          setIsLoading(false);
        })
        .catch((e) => console.log(e));
    } else {
      signup(formValues)
        .then((res) => {
          localStorage.setItem("user", JSON.stringify(res?.data));
          setAuthData(JSON.parse(localStorage.getItem("user")));
          navigate("/");
          toast.success("Signed up Successfully!");
          setIsLoading(false);
        })
        .catch((e) => console.log(e));
    }
    clear();
  };

  const clear = () => {
    setFormValues({ email: "", password: "" });
  };

  const switchMode = () => {
    setHasAccount((prev) => !prev);
  };
  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="h-screen w-full flex justify-center items-center bg-main-bg dark:bg-main-dark-bg">
      <div className="w-[400px] h-[400px] bg-white rounded-lg shadow-xl dark:shadow-none flex flex-col items-center dark:bg-secondary-dark-bg border dark:border-white">
        <h1 className="text-2xl text-extrabold my-6 dark:text-white">
          {hasAccount ? "Signin" : "Signup"}
        </h1>
        <form
          className="flex items-center flex-col w-full"
          onSubmit={handleSubmit}
        >
          <label className="text-gray-700 text-sm font-bold mb-2 dark:text-white">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            className="h-12 shadow appearance-none border rounded w-3/4 text-gray-700 mb-2 leading-tight focus:outline-none pl-4"
            value={email}
            onChange={handleChange}
          />
          <label className="text-gray-700 text-sm font-bold mb-2 dark:text-white">
            Password
          </label>
          <input
            type="password"
            name="password"
            required
            className="h-12 shadow appearance-none border rounded w-3/4 text-gray-700 mb-2 leading-tight focus:outline-none pl-4"
            value={password}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="bg-blue-400 text-white h-12 w-3/4 rounded-md transition-all hover:bg-blue-500 duration-300 ease-in-out mt-4 flex justify-center items-center"
          >
            {isLoading ? (
              <img src={buttonSpinner} alt="spinner" className="h-12 w-12" />
            ) : !hasAccount ? (
              "Sign Up"
            ) : (
              "Sign In"
            )}
          </button>
        </form>

        <div className="flex justify-end items-center w-3/4 mt-2">
          <button
            onClick={switchMode}
            type="button"
            className="dark:text-white"
          >
            {!hasAccount
              ? "Already have an account? Sign In"
              : "Don't have an account? Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
