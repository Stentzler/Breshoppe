import { AuthProvider } from "./auth";
import { CartProvider } from "./cart";
import { FilterProvider } from "./filtro";
import { ProductsProvider } from "./products";
import { UserProvider } from "./user";

const GlobalProvider = ({ children }) => {
  return (
    <>
      <AuthProvider>
        <UserProvider>
          <FilterProvider>
            <ProductsProvider>
              <CartProvider>{children}</CartProvider>
            </ProductsProvider>
          </FilterProvider>
        </UserProvider>
      </AuthProvider>
    </>
  );
};

export default GlobalProvider;
