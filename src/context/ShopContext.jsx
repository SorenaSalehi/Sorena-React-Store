import React, { createContext, useCallback, useContext, useState } from "react";

import { useAuthContext } from "./AuthProvider";
import { useUserItems } from "../Features/hooks/useUserItems";
import toast from "react-hot-toast";
import { useAddTo } from "../Features/hooks/useAddTo";
import { useRemoveFrom } from "../Features/hooks/useRemoveFrom";
import { useUpdateQuantity } from "../Features/hooks/useUpdateQuantity";
import { useItemsDetails } from "../Features/hooks/useItemsDetails";

const ShopContext = createContext();

export function ShopProvider({ children }) {
  const { user_id } = useAuthContext();

  const [currentProduct, setCurrentProduct] = useState({});
  //*wishlist or basket
  const [type, setType] = useState(null);

  //*user items ids from database
  const { items: basket, isItemsLoading: isBasketLoading } = useUserItems({
    user_id,
    from: "basket",
  });
  const { items: wishlist, isItemsLoading: isWishlistLoading } = useUserItems({
    user_id,
    from: "wishlist",
  });

  //*fetch items details from api by user items id
  const {
    itemsDetails: basketDetails,
    isItemsDetailsLoading: isBasketDetailsLoading,
  } = useItemsDetails({ queryKey: "basketDetails", items: basket });
  const {
    itemsDetails: wishlistDetails,
    isItemsDetailsLoading: isWishlistDetailsLoading,
  } = useItemsDetails({ queryKey: "wishlistDetails", items: wishlist });

  const { addTo, isAddingTo } = useAddTo();
  const { removeFrom, isRemovingFrom } = useRemoveFrom();
  const { updateQuantity, isUpdatingQuantity } = useUpdateQuantity();

  const basketItems = basket?.map((item) => item.productId) || [];
  const wishlistItems = wishlist?.map((item) => item.productId) || [];

  const handleAddTo = useCallback(
    ({ productId, to }) => {
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

      // Check if the product is already in the wishlist
      if (to === "wishlist" && wishlistItems.includes(String(productId))) {
        toast.error(`You have already added this item to your wishlist`, {
          duration: 4000,
        });
        return;
      }

      // Check if the product is already in the basket, if so increase the quantity
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

      // Add the product to the basket or wishlist if it's not already there
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
    },
    [user_id, wishlistItems, basketItems, basket, updateQuantity, addTo]
  );

  const handleRemoveFrom = useCallback(
    ({ productId, from }) => {
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
            toast.success(
              `One Item Was Successfully Removed from your ${from}`,
              {
                duration: 4000,
              }
            );
          },
          onError: () => toast.error("Something Went Wrong!!"),
        }
      );
    },
    [user_id, removeFrom]
  );

  const handleUpdateQuantity = useCallback(
    ({ productId, quantity, type }) => {
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
    },
    [user_id, updateQuantity]
  );

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
