import React from "react";
import { useShopContext } from "../context/ShopContext";
import { Box, Typography } from "@mui/material";
import ProductItem from "../Features/products/ProductItem";
import { useAuthContext } from "../context/AuthProvider";
import { useWishlist } from "../Features/wishlist/useWishlist";

export default function Wishlist() {
  const { user } = useAuthContext();
  const { wishlist } = useWishlist({ userId: user?.id, from: "wishlist" });
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
