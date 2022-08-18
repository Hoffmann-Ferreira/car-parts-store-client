import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { User } from "../../types";
import axios from "axios";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthProviderData {
  logged: boolean;
  login: (params: LoginParams) => void;
  logout: () => void;
}

interface LoginParams {
  token: string;
  user: User;
}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const navigate = useNavigate();

  const [logged, setLogged] = useState<boolean>(false);

  const login = ({ token, user }: LoginParams) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    setLogged(true);
    navigate("/");
  };

  const logout = () => {
    localStorage.clear();
    setLogged(false);
    navigate("/login");
    toast.success("successfully logged out", {
      icon: "❗",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  };

  const checkTokenExperation = () => {
    const user = JSON.parse(localStorage.getItem("user") || "");
    const token = localStorage.getItem("token");

    const headers = {
      headers: {
        authorization: `Bearer ${token}`,
      },
    };

    axios
      .get(
        `https://car-parts-store-api.herokuapp.com/users/${user.id}`,
        headers
      )
      .then(() => {
        setLogged(true);
        navigate("/");
      })
      .catch(() => {
        logout();
        toast.error("need to login again", {
          icon: "❌",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) checkTokenExperation();
  }, []);

  return (
    <AuthContext.Provider value={{ logged, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const userAuth = () => useContext(AuthContext);
