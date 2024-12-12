import { createContext, useContext, useState } from "react";
import { set } from "react-hook-form";

const ShopContext = createContext();

function ShopProvider({ children }) {
  const [currentProduct, setCurrentProduct] = useState(null);
  const [shoppingBasket, setShoppingBasket] = useState(null);
  const [wishlist, setWishlist] = useState(null);

  return (
    <ShopContext.Provider
      value={{ currentProduct, setCurrentProduct, shoppingBasket, wishlist }}
    >
      {children}
    </ShopContext.Provider>
  );
}

function useShopContext() {
  const Context = useContext(ShopContext);

  if (!Context) throw new Error("Shop context was used outside the provider");

  return Context;
}

export { ShopProvider, useShopContext };
