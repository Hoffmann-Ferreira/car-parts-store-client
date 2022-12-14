import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { api } from "../../Services";
import { Product } from "../../types";
import { userAuth } from "../auth";

interface ProductsProviderProps {
  children: ReactNode;
}

interface ProductsProviderData {
  products: Product[];
  handleGetProducts: () => void;
}

const ProductsContext = createContext<ProductsProviderData>(
  {} as ProductsProviderData
);

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const { logged } = userAuth();

  const [products, setProducts] = useState<Product[]>([]);

  const handleGetProducts = () => {
    const token = localStorage.getItem("token");

    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    api.get("/products", headers).then((res) => {
      setProducts(res.data);
    });
  };

  useEffect(() => {
    if (logged && products.length === 0) handleGetProducts();
  }, [logged]);

  return (
    <ProductsContext.Provider value={{ products, handleGetProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
