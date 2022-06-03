import React, { createContext, useState, useContext } from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
  let user = JSON.parse(localStorage.getItem("user"));
  const [mode, setMode] = useState("Dark");
  const [authData, setAuthData] = useState(user ? user : null);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <Context.Provider
      value={{ mode, setMode, authData, setAuthData, isLoading, setIsLoading }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
