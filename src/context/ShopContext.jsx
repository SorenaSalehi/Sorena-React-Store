import React, { createContext, useContext, useState, useCallback } from "react";

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  // Wishlist state
  const [wishlist, setWishlist] = useState([]);

  // Shopping Basket state
  const [basket, setBasket] = useState([]);

  // Current viewed product
  const [currentProduct, setCurrentProduct] = useState(null);

  // Wishlist actions
  const addToWishlist = useCallback((product) => {
    setWishlist((prev) => {
      // Prevent duplicates
      if (prev.some((item) => item.id === product.id)) return prev;
      return [...prev, product];
    });
  }, []);

  const removeFromWishlist = useCallback((productId) => {
    setWishlist((prev) => prev.filter((item) => item.id !== productId));
  }, []);

  // Basket actions
  const addToBasket = useCallback((product, quantity = 1) => {
    setBasket((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
  }, []);

  const removeFromBasket = useCallback((productId) => {
    setBasket((prev) => prev.filter((item) => item.id !== productId));
  }, []);

  const updateBasketQuantity = useCallback((productId, quantity) => {
    setBasket((prev) =>
      prev.map((item) => (item.id === productId ? { ...item, quantity } : item))
    );
  }, []);

  return (
    <ShopContext.Provider
      value={{
        // Wishlist
        wishlist,
        addToWishlist,
        removeFromWishlist,

        // Basket
        basket,
        addToBasket,
        removeFromBasket,
        updateBasketQuantity,

        // Current Product
        currentProduct,
        setCurrentProduct,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

// Custom hook for using shop context
export const useShopContext = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error("useShopContext must be used within a ShopProvider");
  }
  return context;
};
