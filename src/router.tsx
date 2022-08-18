import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { userAuth } from "./contexts/auth";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Settings from "./pages/Settings";

const Router = () => {
  const { logged } = userAuth();
  return (
    <Routes>
      {logged ? (
        <>
          <Route path="/" element={<Home />} />
          <Route path="/settings" element={<Settings />} />
        </>
      ) : (
        <Route path="/login" element={<Login />} />
      )}
      <Route path="*" element={<Navigate to={logged ? "/" : "/login"} />} />
    </Routes>
  );
};

export default Router;
