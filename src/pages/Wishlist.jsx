import React from "react";
import { useShopContext } from "../context/ShopContext";
import { Box, Typography } from "@mui/material";
import ProductItem from "../Features/products/ProductItem";
import { useAuthContext } from "../context/AuthProvider";
import { useWishlist } from "../Features/wishlist/useWishlist";
import { useBasketDetails } from "../Features/basket/useBasketDetails";
import { useWishlistDetails } from "../Features/wishlist/useWishlistDetails";

export default function Wishlist() {
  const { user } = useAuthContext();
  const { wishlist, isWishlistLoading } = useWishlist({
    userId: user?.id,
    from: "wishlist",
  });
  console.log(wishlist);
  const { wishlistDetails, isDetailsLoading } = useWishlistDetails(wishlist);

  if (isDetailsLoading || isWishlistLoading) return <div>loadibng ...</div>;
  

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
