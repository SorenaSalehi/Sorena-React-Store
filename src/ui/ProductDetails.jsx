import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, Divider, Fab, Rating } from "@mui/material";
import { Favorite, ShoppingBasket } from "@mui/icons-material";
import ShowMoreDrawer from "./ShowMoreDrawer";
import ProductImageSwiper from "./ProductImgSwiper";
import ProductDetailsContent from "./ProductDetailsContent";

export default function ProductDetails() {
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
        <ProductImageSwiper autoplay={100000} />
      </div>
      {/* //*wishlist and shopping basket*/}
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
      {/* Scrolling Content */}
      <ProductDetailsContent />
    </Box>
  );
}
