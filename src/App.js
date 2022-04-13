import * as React from "react";
import Login from "./pages/Login";
import Devices from "./pages/Devices";

import { Routes, Route, Navigate } from "react-router-dom";
// import { AuthContext } from "./context/auth-context";

export default function App() {
  // const authContext = React.useContext(AuthContext);
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/devices" element={<Devices />} />
      <Route path="*" element={<Navigate to="/" replace={true} />} />
    </Routes>
  );
}
