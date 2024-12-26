import React, { createContext, useContext, useState } from "react";

import { useAuthContext } from "./AuthProvider";
import { useBasket } from "../Features/basket/useBasket";
import toast from "react-hot-toast";
import { useAddTo } from "../Features/basket/useAddTo";
import { useRemoveFrom } from "../Features/basket/useRemoveFrom";
import { useUpdateQuantity } from "../Features/basket/useUpdateQuantity";
import { useWishlist } from "../Features/wishlist/useWishlist";
import { useWishlistDetails } from "../Features/wishlist/useWishlistDetails";
import { useBasketDetails } from "../Features/basket/useBasketDetails";

const ShopContext = createContext();

export function ShopProvider({ children }) {
  const { user_id } = useAuthContext();

  const [currentProduct, setCurrentProduct] = useState(null);
  //*wishlist or basket
  const [type, setType] = useState(null);
  const { basket, isBasketLoading } = useBasket({
    user_id,
    from: "basket",
  });
  const { wishlist, isWishlistLoading } = useWishlist({
    user_id,
    from: "wishlist",
  });

  const { basketDetails, isBasketDetailsLoading } = useBasketDetails(basket);
  const { wishlistDetails, isWishlistDetailsLoading } =
    useWishlistDetails(wishlist);

  const { addTo, isAddingTo } = useAddTo();
  const { removeFrom, isRemovingFrom } = useRemoveFrom();
  const { updateQuantity, isUpdatingQuantity } = useUpdateQuantity();

  const basketItems = basket?.map((item) => item.productId) || [];
  const wishlistItems = wishlist?.map((item) => item.productId) || [];

  function handleAddTo({ productId, to }) {
    if (!user_id) {
      toast.error("Please Login First", {
        duration: 4000,
      });
      return;
    }
    if (!productId || !to) {
      toast.error("Something Went Wrong ,Try Again", {
        duration: 4000,
      });
      return;
    }

    //* Check if the product is already in the wishlist
    if (to === "wishlist" && wishlistItems.includes(String(productId))) {
      toast.error(`You have already added this item to your wishlist`, {
        duration: 4000,
      });
      return;
    }

    //* Check if the product is already in the basket , if so increase the quantity
    if (to === "basket" && basketItems.includes(String(productId))) {
      const quantity = basket?.find(
        (q) => Number(q.productId) === productId
      )?.quantity;
      updateQuantity(
        { productId, quantity, type: "increase" },
        {
          onSuccess: () => {
            toast.success(
              `You have This Item Already In Your Shopping Basket`,
              {
                duration: 6000,
              }
            );
          },
        }
      );
      return;
    }

    //* Add the product to the basket or wishlist if it's not already there
    addTo(
      { user_id, productId, to },

      {
        onSuccess: () => {
          toast.success(`One Item Was Successfully Added to your ${to}`, {
            duration: 4000,
          });
        },

        onError: () => {
          toast.error("Something Went Wrong!!");
        },
      }
    );
  }

  //*remove from basket or wishlist
  function handleRemoveFrom({ productId, from }) {
    if (!user_id) {
      toast.error("Please Login First", {
        duration: 4000,
      });
      return;
    }

    if (!productId || !from) {
      toast.error("Something Went Wrong ,Try Again");
      return;
    }

    removeFrom(
      { user_id, productId, from },
      {
        onSuccess: () => {
          toast.success(`One Item Was Successfully Remove from your ${from}`, {
            duration: 4000,
          });
        },
        onError: () => toast.error("Something Went Wrong!!"),
      }
    );
  }

  //*update quantity for basket
  function handleUpdateQuantity({ productId, quantity, type }) {
    if (!user_id) {
      toast.error("Please Login First", {
        duration: 4000,
      });
      return;
    }

    if (!productId || !quantity || !type) {
      toast.error("Something Went Wrong ,Try Again");
      return;
    }

    updateQuantity(
      { productId, quantity, type },
      {
        onError: () => {
          toast.error("Something Went Wrong ,Try Again");
        },
      }
    );
  }

  return (
    <ShopContext.Provider
      value={{
        user_id,

        currentProduct,
        setCurrentProduct,

        type,
        setType,

        basket,
        isBasketLoading,

        wishlist,
        isWishlistLoading,

        isAddingTo,
        isRemovingFrom,
        isUpdatingQuantity,

        basketDetails,
        isBasketDetailsLoading,

        wishlistDetails,
        isWishlistDetailsLoading,

        handleUpdateQuantity,
        handleAddTo,
        handleRemoveFrom,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}

// Custom hook for using shop context
export const useShopContext = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error("useShopContext must be used within a ShopProvider");
  }
  return context;
};
