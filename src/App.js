import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";

import Login from "./pages/Login";
import Devices from "./pages/Devices";

import { Routes, Route, Navigate } from "react-router-dom";

export default function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Routes>
        <Route path="/devices" element={<Devices />} />
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>
    </React.Fragment>
  );
}
