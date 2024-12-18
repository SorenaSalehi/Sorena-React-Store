import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, Divider, Fab, Rating } from "@mui/material";
import { Favorite, ShoppingBasket } from "@mui/icons-material";
import ShowMoreDrawer from "../ui/ShowMoreDrawer";
import ProductImageSwiper from "../ui/ProductImgSwiper";
import ProductDetailsContent from "../ui/ProductDetailsContent";
import { useParams } from "react-router";
import { useProductById } from "../Features/products/useProductById";
import { useShopContext } from "../context/ShopContext";
import { useAddToBasket } from "../Features/basket/useAddTobasket";
import { useBasket } from "../Features/basket/useBasket";
import { useRemoveFromBasket } from "../Features/basket/useRemoveFromBasket";
import { useAuthContext } from "../context/AuthProvider";
import { useUpdateQuantity } from "../Features/basket/useUpdateQuantity";
import toast from "react-hot-toast";

export default function ProductDetails() {
  const params = useParams();
  const { productById, isLoading } = useProductById(params.productId);
  const { user } = useAuthContext();
  const { basket } = useBasket({ userId: user?.id, from: "basket" });

  const { addToBasket, isLoadingAddToBasket } = useAddToBasket();
  const { removeFromBasket, isLoadingRemove } = useRemoveFromBasket();
  const { updateQuantity, isUpdatingQuantity } = useUpdateQuantity();

  const { currentProduct, setCurrentProduct, wishlist } = useShopContext();

  useEffect(() => {
    if (productById) {
      setCurrentProduct(productById);
    }
  }, [productById]);
  console.log(productById);
  if (isLoading) return <div>is loading</div>;

  const isWishlistItem = wishlist?.some((item) => item.id === productById?.id);

  function handleAddTo({ user_id, productId, from }) {
    if (!user_id || !productId || !from) return;

    const isAlreadyExist = basket
      ?.map((item) => {
        return Number(item.productId);
      })
      .includes(productId);

    if (isAlreadyExist) {
      const quantity = basket?.find(
        (q) => Number(q.productId) === productId
      )?.quantity;
      updateQuantity(
        { productId, quantity, type: "increase" },
        {
          onSuccess: () => {
            toast.success(
              `You have *(${productById?.title})* Already In Your Shopping Basket`,
              {
                duration: 6000,
              }
            );
          },
        }
      );
      return;
    }

    if (from === "basket") {
      addToBasket(
        { user_id, productId, from },

        {
          onSuccess: () => {
            toast.success(`${title} Was Successfully  Added to your ${from}`, {
              duration: 4000,
            });
          },

          onError: () => {
            toast.error("Something Went Wrong!!");
          },
        }
      );
    }
    if (from === "wishlist") {
      addToWishlist(
        { user_id, productId, from },

        {
          onSuccess: () => {
            toast.success(`${title} Was Successfully  Added to your ${from}`, {
              duration: 4000,
            });
          },

          onError: () => {
            toast.error("Something Went Wrong!!");
          },
        }
      );
    }
  }

  return (
    <Box component="div" style={{ position: "relative", margin: "1rem 1rem" }}>
      {/* Fixed Image */}
      <Typography
        component="div"
        style={{
          position: "fixed",
          top: "20%",
          left: "50%",
          right: "50%",
          transform: "translateX(-50%)",
          width: "80%",
          height: "75vh",
        }}
      >
        {/* //*imgs  */}
        <ProductImageSwiper autoplay={100000} images={productById.images} />
      </Typography>

      {/* //*wishlist and shopping basket btn*/}
      <Box component="div" sx={{ position: "fixed" }}>
        <Fab
          sx={{
            margin: " 0 0.5rem",
            padding: "0.5rem",
            width: "max-Content",
            height: "max-content",
          }}
          onClick={() =>
            handleAddTo({
              productId: productById?.id,
              user_id: user?.id,
              from: "basket",
            })
          }
        >
          <ShoppingBasket fontSize="small" />
        </Fab>
        {!isWishlistItem && (
          <Fab
            sx={{
              margin: " 0 0.5rem",
              padding: "0.5rem",
              width: "max-Content",
              height: "max-content",
            }}
            onClick={() =>
              handleAddTo({
                productId: productById?.id,
                user_id: user?.id,
                from: "wishlist",
              })
            }
          >
            <Favorite fontSize="small" />
          </Fab>
        )}
      </Box>

      {/* //*Scrolling Content */}
      <ProductDetailsContent details={productById} />
    </Box>
  );
}
