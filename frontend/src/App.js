import React from "react";
import { Toaster } from "react-hot-toast";
import { Routes, Route, Navigate } from "react-router-dom";
import { useStateContext } from "./context/StateContext";
import {
  Navbar,
  Auth,
  Owners,
  LandHoldings,
  PrivateRoute,
  Profile,
  CreateLandHolding,
  EditLandHolding,
  CreateOwner,
  EditOwner,
  Home,
} from "./components";

const App = () => {
  const { mode, authData } = useStateContext();
  return (
    <div className={`min-h-screen w-full ${mode === "Dark" ? "dark" : ""}`}>
      <Toaster />
      <Navbar />
      <Routes>
        <Route path="/*" element={<PrivateRoute component={Home} />} />
        <Route
          path="/auth"
          element={authData === null ? <Auth /> : <Navigate to="/" replace />}
        />
        <Route
          path="/landHoldings"
          element={<PrivateRoute component={LandHoldings} />}
        />
        <Route
          path="/landHoldings/add"
          element={<PrivateRoute component={CreateLandHolding} />}
        />
        <Route
          path="/landHoldings/:id/edit"
          element={<PrivateRoute component={EditLandHolding} />}
        />
        <Route path="/owners" element={<PrivateRoute component={Owners} />} />
        <Route
          path="/owners/add"
          element={<PrivateRoute component={CreateOwner} />}
        />
        <Route
          path="/owners/:id/edit"
          element={<PrivateRoute component={EditOwner} />}
        />
        <Route path="/profile" element={<PrivateRoute component={Profile} />} />
      </Routes>
    </div>
  );
};

export default App;
