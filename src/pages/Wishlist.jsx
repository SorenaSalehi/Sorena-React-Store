import React from "react";
import { useShopContext } from "../context/ShopContext";
import { Box, Button, Typography } from "@mui/material";
import { NavLink } from "react-router";

import ProductItem from "../Features/products/ProductItem";
import NotLoggedIn from "../ui/NotLoggedIn";
import LoadingCar from "../ui/LoadingCar";

export default function Wishlist() {
  const {
    user_id,
    isWishlistLoading,
    wishlistDetails,
    isWishlistDetailsLoading,
  } = useShopContext();

  //*if user is not logged in
  if (!user_id) {
    return <NotLoggedIn />;
  }

  //*if wishlist is Loading
  if (isWishlistDetailsLoading || isWishlistLoading) return <LoadingCar />;

  //*if wishlist is empty
  if (wishlistDetails?.length === 0) {
    return (
      <Typography component="h5" variant="h5" sx={{ textAlign: "center" }}>
        Your Wishlist is Empty 🥲
      </Typography>
    );
  }

  return (
    <Box component="ul" sx={{ listStyle: "none" }}>
      {wishlistDetails?.map((item) => (
        <ProductItem item={item} key={item.id} type="wishlist" />
      ))}
    </Box>
  );
}
