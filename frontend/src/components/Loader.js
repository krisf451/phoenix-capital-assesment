import React from "react";
import { ThreeDots } from "react-loader-spinner";

const Loader = ({ color }) => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <ThreeDots ariaLabel="loading-indicator" color={color} />
    </div>
  );
};

export default Loader;
