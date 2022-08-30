import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { api } from "../../Services";
import { User } from "../../types";
import { userAuth } from "../auth";

interface UserProviderProps {
  children: ReactNode;
}

interface UserProviderData {
  users: User[];
  handleGetUsers: () => void;
}

const UserContext = createContext<UserProviderData>({} as UserProviderData);

export const UserProvider = ({ children }: UserProviderProps) => {
  const { logged } = userAuth();

  const [users, setUsers] = useState<User[]>([]);

  const handleGetUsers = () => {
    const token = localStorage.getItem("token");

    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    api.get("/users", headers).then((res) => {
      setUsers(res.data);
    });
  };

  useEffect(() => {
    if (logged && users.length === 0) handleGetUsers();
  }, [logged]);

  return (
    <UserContext.Provider value={{ users, handleGetUsers }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUsers = () => useContext(UserContext);
