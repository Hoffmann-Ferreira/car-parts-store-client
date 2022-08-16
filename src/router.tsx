import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Settings from "./pages/Settings";

const Router = () => {
  const [logged, setLogged] = useState<boolean>(false);

  return (
    <Routes>
      {logged ? (
        <>
          <Route path="/" element={<Home setLogged={setLogged} />} />
          <Route
            path="/settings"
            element={<Settings setLogged={setLogged} />}
          />
        </>
      ) : (
        <Route path="/login" element={<Login setLogged={setLogged} />} />
      )}
      <Route path="*" element={<Navigate to={logged ? "/" : "/login"}/>}/>

    </Routes>
  );
};

export default Router;
