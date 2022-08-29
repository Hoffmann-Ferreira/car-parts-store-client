import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { userAuth } from "./contexts/auth";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SettingsCategories from "./pages/SettingsCategories";
import SettingsProducts from "./pages/SettingsProducts";

const Router = () => {
  const { logged } = userAuth();
  return (
    <Routes>
      {logged ? (
        <>
          <Route path="/" element={<Home />} />
          <Route path="/settings/products" element={<SettingsProducts />} />
          <Route path="/settings/categories" element={<SettingsCategories />} />
          <Route path="/settings/users" element={<SettingsProducts />} />
        </>
      ) : (
        <Route path="/login" element={<Login />} />
      )}
      <Route path="*" element={<Navigate to={logged ? "/" : "/login"} />} />
    </Routes>
  );
};

export default Router;
