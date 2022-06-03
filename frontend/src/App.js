import React from "react";
import { useStateContext } from "./context/StateContext";

const App = () => {
  const { mode, setMode } = useStateContext();
  console.log(mode, test);
  return (
    <div
      className={`min-h-screen w-full flex justify-center items-center ${
        mode === "Dark" ? "dark" : ""
      }`}
    >
      <div className="dark:bg-black bg-gray-200 h-screen w-full flex justify-center items-center">
        <button
          className="text-green-500 underline text-3xl dark:text-white"
          onClick={() => setMode(mode === "Dark" ? "" : "Dark")}
        >
          Tailwind Test
        </button>
      </div>
    </div>
  );
};

export default App;
