import React from "react";
import { useShopContext } from "../../context/ShopContext";
import ShoppingBasketItem from "./ShoppingBasketItem";
import { Box, Button, Typography } from "@mui/material";
import { calcDiscount } from "../../utils/helpers";

export default function ShoppingBasketList() {
  const { basket } = useShopContext();
  const isEmpty = basket.length === 0 && true;

  if (isEmpty) return <div>basket is empty</div>;

  const itemMoreThenOne = basket?.filter((item) => item.quantity > 1);
  const itemsQuantities = itemMoreThenOne?.reduce(
    (acc, item) => acc + (item.quantity || 1),
    0
  );
  // console.log("quantity", itemsQuantities);
  // console.log("lengt", basket?.length);
  const itemCount =
    basket?.filter((item) => item.quantity === 1).length +
    (itemsQuantities || 0);
  // console.log("count", itemCount);
  // const totalPrice = basket?.reduce((acc, item) => acc + item.price, 0);

  const totalPrice = basket
    ?.reduce((acc, item) => {
      return (
        acc +
        Number(calcDiscount(item.price, item.discountPercentage)) *
          (item.quantity || 0)
      );
    }, 0)
    .toFixed(2);

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
