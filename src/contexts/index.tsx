import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "../assets/styles/theme";
import { AuthProvider } from "./auth";
import { CategoriesProvider } from "./Categories";
import { ProductsProvider } from "./Products";
import { UserProvider } from "./Users";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <UserProvider>
          <AuthProvider>
            <CategoriesProvider>
              <ProductsProvider>{children}</ProductsProvider>
            </CategoriesProvider>
          </AuthProvider>
        </UserProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default Providers;
