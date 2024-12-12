import React from "react";
import { useShopContext } from "../../context/ShopContext";
import ShoppingBasketItem from "./ShoppingBasketItem";
import { Box, Button, Typography } from "@mui/material";

export default function ShoppingBasketList() {
  const { basket } = useShopContext();
  const isEmpty = basket.length === 0 && true;

  if (isEmpty) return <div>basket is empty</div>;

  const itemCount =
    basket?.reduce((acc, item) => acc + item.quantity, 0) + basket.length - 1;
  // const itemQuantity=
  const totalPrice = basket?.reduce((acc, item) => acc + item.price, 0);

  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        Your Basket
      </Typography>
      {basket?.map((item) => (
        <ShoppingBasketItem item={item} />
      ))}
      <Typography variant="h6">{itemCount} Item</Typography>
      <Typography variant="h6" color="primary">
        Total: ${totalPrice}
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
