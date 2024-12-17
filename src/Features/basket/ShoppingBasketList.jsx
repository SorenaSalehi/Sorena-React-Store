import React from "react";
import { useShopContext } from "../../context/ShopContext";
import ShoppingBasketItem from "./ShoppingBasketItem";
import { Box, Button, Typography } from "@mui/material";
import { calcDiscount } from "../../utils/helpers";
import { useBasket } from "./useBasket";
import { useAuthContext } from "../../context/AuthProvider";
import { useBasketDetails } from "./useBasketDetails";

export default function ShoppingBasketList() {
  const { user } = useAuthContext();
  const { basket } = useBasket({ userId: user?.id, from: "basket" });
  const { basketDetails, isDetailsLoading } = useBasketDetails(basket);

  if (isDetailsLoading) return <div>loadibng ...</div>;
  console.log("loading", isDetailsLoading);
  console.log(basketDetails);

  if (!isDetailsLoading && basketDetails?.length === 0) {
    return (
      <Typography component="h2" variant="h2" sx={{ textAlign: "center" }}>
        Your Shopping Basket is Empty
      </Typography>
    );
  }

  const result = basketDetails?.reduce(
    (acc, item) => {
      const quantity = item.quantity || 1;
      const discountedPrice = Number(
        calcDiscount(item.price, item.discountPercentage)
      );

      acc.itemCount += quantity;
      acc.totalPrice += discountedPrice * quantity;

      return acc;
    },
    { itemCount: 0, totalPrice: 0 }
  ) || { itemCount: 0, totalPrice: 0 }; // Fallback if basketDetails is undefined

  const { itemCount, totalPrice } = result;

  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        Your Basket
      </Typography>
      {basketDetails?.map((item) => (
        <ShoppingBasketItem item={item} key={item.id} />
      ))}
      <Typography variant="h6">{itemCount} Item</Typography>
      <Typography variant="h6" color="primary">
        Total: ${totalPrice.toFixed(2)}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{
          mt: 2,
          padding: "0.75rem 2rem",
          textTransform: "uppercase",
          fontWeight: "bold",
        }}
      >
        Checkout
      </Button>
    </Box>
  );
}
