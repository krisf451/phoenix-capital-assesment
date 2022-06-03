import React, { createContext, useState, useContext } from "react";

const Context = createContext();
let user = JSON.parse(localStorage.getItem("user"));

export const StateContext = ({ children }) => {
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
