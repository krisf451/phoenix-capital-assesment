import React, { useState } from "react";

const Auth = () => {
  const [hasAccount, setHasAccount] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formValues;

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
      <div className="w-[400px] h-[300px] bg-white rounded-lg shadow-xl dark:shadow-none flex flex-col items-center dark:bg-secondary-dark-bg border dark:border-white">
        <h1 className="text-2xl text-extrabold my-6 dark:text-white">
          {hasAccount ? "Signin" : "Signup"}
        </h1>
        <label className="text-gray-700 text-sm font-bold mb-2 dark:text-white">
          Email
        </label>
        <input
          type="email"
          name="email"
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
          className="h-12 shadow appearance-none border rounded w-3/4 text-gray-700 mb-2 leading-tight focus:outline-none pl-4"
          value={password}
          onChange={handleChange}
        />
        <div className="flex justify-end items-center w-3/4 mt-2">
          <button onClick={switchMode} type="button">
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
