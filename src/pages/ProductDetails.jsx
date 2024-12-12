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

export default function ProductDetails() {
  const params = useParams();
  const { productById, isLoading } = useProductById(params.productId);
  const { currentProduct, setCurrentProduct } = useShopContext();

  useEffect(() => {
    if (productById) {
      setCurrentProduct(productById);
    }
  }, [productById]);

  if (isLoading) return <div>is loading</div>;

  return (
    <Box component="div" style={{ position: "relative" }}>
      {/* Fixed Image */}
      <div
        style={{
          position: "fixed",
          top: 45,
          left: 0,
          width: "100%",
          height: "75vh",
        }}
      >
        {/* //*imgs  */}
        <ProductImageSwiper autoplay={100000} images={productById.images} />
      </div>

      {/* //*wishlist and shopping basket btn*/}
      <Box component="div" sx={{ position: "fixed" }}>
        <Fab
          sx={{
            margin: " 0 0.5rem",
            padding: "0.5rem",
            width: "max-Content",
            height: "max-content",
          }}
        >
          <ShoppingBasket fontSize="small" />
        </Fab>
        <Fab
          sx={{
            margin: " 0 0.5rem",
            padding: "0.5rem",
            width: "max-Content",
            height: "max-content",
          }}
        >
          <Favorite fontSize="small" />
        </Fab>
      </Box>

      {/* //*Scrolling Content */}
      <ProductDetailsContent details={productById} />
    </Box>
  );
}
