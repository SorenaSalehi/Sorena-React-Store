import React from "react";
import { useShopContext } from "../context/ShopContext";
import { Box, Typography } from "@mui/material";
import ProductItem from "../Features/products/ProductItem";

export default function Wishlist() {
  const { wishlist } = useShopContext();
  console.log(wishlist);

  if (wishlist?.length < 1)
    return (
      <Typography component="h2" variant="h2" sx={{ textAlign: "center" }}>
        Your Wishlist is Empty
      </Typography>
    );

  return (
    <Box component="ul">
      {wishlist?.map((item) => (
        <ProductItem item={item} key={item.id} type="wishlist" />
      ))}
    </Box>
  );
}
