import React from "react";
import { useShopContext } from "../context/ShopContext";
import { Box, Typography } from "@mui/material";
import ProductItem from "../Features/products/ProductItem";

export default function Wishlist() {
  const {
    user_id,
    isWishlistLoading,
    wishlistDetails,
    isWishlistDetailsLoading,
  } = useShopContext();

  //*if user is not logged in
  if (!user_id) {
    return (
      <Typography component="h2" variant="h2" sx={{ textAlign: "center" }}>
        Please Login First
      </Typography>
    );
  }

  //*if wishlist is Loading
  if (isWishlistDetailsLoading || isWishlistLoading)
    return <div>loading ...</div>;

  //*if wishlist is empty
  if (wishlistDetails?.length === 0) {
    return (
      <Typography component="h2" variant="h2" sx={{ textAlign: "center" }}>
        Your Shopping Basket is Empty
      </Typography>
    );
  }

  return (
    <Box component="ul">
      {wishlistDetails?.map((item) => (
        <ProductItem item={item} key={item.id} type="wishlist" />
      ))}
    </Box>
  );
}
