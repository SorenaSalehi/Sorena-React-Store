import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import { Box, Fab } from "@mui/material";
import { Favorite, ShoppingBasket } from "@mui/icons-material";

import ProductImageSwiper from "../ui/ProductImgSwiper";
import ProductDetailsContent from "../ui/ProductDetailsContent";
import { useParams } from "react-router";
import { useProductById } from "../Features/products/useProductById";
import { useShopContext } from "../context/ShopContext";
import ItemBtns from "../ui/ItemBtns";

export default function ProductDetails() {
  const { currentProduct, handleAddTo, handleRemoveFrom, type } =
    useShopContext();

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
        <ProductImageSwiper autoplay={100000} images={currentProduct.images} />
      </Typography>

      {/* //*btns Group by type */}
      <ItemBtns type={type} productId={currentProduct.id} isDetails={true} />

      {/* //*Scrolling Content */}
      <ProductDetailsContent />
    </Box>
  );
}
