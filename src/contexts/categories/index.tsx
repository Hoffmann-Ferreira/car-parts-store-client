import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { api } from "../../Services";
import { Category } from "../../types";
import { userAuth } from "../auth";

interface CategoriesProviderProps {
  children: ReactNode;
}

interface CategoriesProviderData {
  categories: Category[];
  handleGetCategories: () => void;
}

const CategoriesContext = createContext<CategoriesProviderData>(
  {} as CategoriesProviderData
);

export const CategoriesProvider = ({ children }: CategoriesProviderProps) => {
  const { logged } = userAuth();

  const [categories, setCategories] = useState<Category[]>([]);

  const handleGetCategories = () => {
    const token = localStorage.getItem("token");

    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    api.get("/category", headers).then((res) => {
      setCategories(res.data);
    });
  };

  useEffect(() => {
    if (logged && categories.length === 0) handleGetCategories();
  }, [logged]);

  return (
    <CategoriesContext.Provider value={{ categories, handleGetCategories }}>
      {children}
    </CategoriesContext.Provider>
  );
};

export const useCategories = () => useContext(CategoriesContext);
