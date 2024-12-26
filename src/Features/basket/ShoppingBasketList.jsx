import React from "react";
import ShoppingBasketItem from "./ShoppingBasketItem";
import { Box, Button, Typography } from "@mui/material";
import { calcCountPrice, calcDiscount } from "../../utils/helpers";
import { useShopContext } from "../../context/ShopContext";

export default function ShoppingBasketList({ basketDetails }) {
  const { basket, isBasketLoading } = useShopContext();

  if (isBasketLoading) return <div>loading ...</div>;

  if (!basketDetails) return null;
  //*calc items count and total price (some item has quantity and must also calc them)
  const { itemCount, totalPrice } = calcCountPrice({
    basketDetails,
    basket,
  });

  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        Your Basket
      </Typography>
      {/* //!must reuse product Item */}
      {basketDetails?.map((item) => (
        <ShoppingBasketItem item={item} key={item.id} itemQuantity={basket} />
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
