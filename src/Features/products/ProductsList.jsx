import { Box } from "@mui/material";
import React from "react";
import ProductItem from "./ProductItem";

// "womens-shoes",
//     "womens-watches"
//     "womens-dresses",
//     "mens-shirts",
//     "mens-shoes",
//     "mens-watches",

export default function ProductsList() {
  return (
    <Box component="ul">
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </Box>
  );
}
