import React, { createContext, useState, useContext } from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [mode, setMode] = useState("Dark");
  return (
    <Context.Provider value={{ mode, setMode }}>{children}</Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
