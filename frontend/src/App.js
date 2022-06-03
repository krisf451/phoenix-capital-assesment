import React from "react";
import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";
import { useStateContext } from "./context/StateContext";
import { Navbar, Home, Auth, Owners, LandHoldings } from "./components";

const App = () => {
  const { mode } = useStateContext();
  return (
    <div
      className={`min-h-screen max-w-7xl mx-auto w-full border border-black ${
        mode === "Dark" ? "dark" : ""
      }`}
    >
      <Toaster />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/landHoldings" element={<LandHoldings />} />
        <Route path="/owners" element={<Owners />} />
      </Routes>
    </div>
  );
};

export default App;
