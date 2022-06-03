import React from "react";
import { Triangle } from "react-loader-spinner";

const Loader = ({ color }) => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <Triangle ariaLabel="loading-indicator" color={color} />
    </div>
  );
};

export default Loader;
