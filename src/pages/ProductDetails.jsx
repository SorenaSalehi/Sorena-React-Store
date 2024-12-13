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
import toast from "react-hot-toast";

export default function ProductDetails() {
  const params = useParams();
  const { productById, isLoading } = useProductById(params.productId);
  const {
    currentProduct,
    setCurrentProduct,
    wishlist,
    addToWishlist,
    addToBasket,
  } = useShopContext();

  useEffect(() => {
    if (productById) {
      setCurrentProduct(productById);
    }
  }, [productById]);

  if (isLoading) return <div>is loading</div>;

  const isWishlistItem = wishlist?.some((item) => item.id === productById?.id);

  function handleAddItem(currentProduct, value) {
    if (value === "wishlist") {
      addToWishlist(currentProduct);
      toast.success(`${currentProduct.title} Added to Your Wishlist`, {
        duration: 2000,
      });
      console.log("afhbajf");
    } else {
      addToBasket(currentProduct);
      toast.success(`${currentProduct.title}  Added to Your Shopping Basket`, {
        duration: 2000,
      });
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
          onClick={() => handleAddItem(currentProduct, "shopping")}
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
            onClick={() => handleAddItem(currentProduct, "wishlist")}
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
