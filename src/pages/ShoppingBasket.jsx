import React from "react";
import { Box, Button, Typography } from "@mui/material";

import { useShopContext } from "../context/ShopContext";
import { NavLink } from "react-router";
import { Login } from "@mui/icons-material";
import { calcCountPrice } from "../utils/helpers";
import ProductItem from "../Features/products/ProductItem";

export default function ShoppingBasket() {
  const {
    user_id,
    basket,
    isBasketLoading,
    basketDetails,
    isBasketDetailsLoading,
  } = useShopContext();

  //*if user is not logged in
  if (!user_id) {
    return (
      <Typography component="h2" variant="h2" sx={{ textAlign: "center" }}>
        Please Login First
        <NavLink to="/login">
          <Button>
            <Login />
          </Button>
        </NavLink>
      </Typography>
    );
  }

  //*if basket is loading
  if (isBasketDetailsLoading || isBasketLoading) return <div>loading ...</div>;

  //*if basket is empty
  if (basketDetails?.length === 0) {
    return (
      <Typography component="h2" variant="h2" sx={{ textAlign: "center" }}>
        Your Shopping Basket is Empty
      </Typography>
    );
  }

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
      <Box component="ul" sx={{ listStyle: "none" }}>
        {basketDetails?.map((item) => (
          // <ShoppingBasketItem item={item} key={item.id} itemQuantity={basket} />
          <ProductItem item={item} key={item.id} type="basket" />
        ))}
      </Box>
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
