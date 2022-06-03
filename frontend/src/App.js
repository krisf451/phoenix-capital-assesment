import React from "react";
import { Toaster } from "react-hot-toast";
import { Routes, Route, Navigate } from "react-router-dom";
import { useStateContext } from "./context/StateContext";
import {
  Navbar,
  Home,
  Auth,
  Owners,
  LandHoldings,
  PrivateRoute,
} from "./components";

const App = () => {
  const { mode, authData } = useStateContext();
  return (
    <div
      className={`min-h-screen max-w-7xl mx-auto w-full border border-black ${
        mode === "Dark" ? "dark" : ""
      }`}
    >
      <Toaster />
      <Navbar />
      <Routes>
        <Route path="/" element={<PrivateRoute component={Home} />} />
        <Route
          path="/auth"
          element={authData === null ? <Auth /> : <Navigate to="/" replace />}
        />
        <Route
          path="/landHoldings"
          element={<PrivateRoute component={LandHoldings} />}
        />
        <Route path="/owners" element={<PrivateRoute component={Owners} />} />
      </Routes>
    </div>
  );
};

export default App;
