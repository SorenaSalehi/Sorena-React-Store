import React from "react";
import { Button, Typography } from "@mui/material";

import ShoppingBasketList from "../Features/basket/ShoppingBasketList";
import { useShopContext } from "../context/ShopContext";
import { NavLink } from "react-router";
import { Login } from "@mui/icons-material";

export default function ShoppingBasket() {
  const { user_id, isBasketLoading, basketDetails, isBasketDetailsLoading } =
    useShopContext();

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

  //* basket is empty
  if (basketDetails?.length === 0) {
    return (
      <Typography component="h2" variant="h2" sx={{ textAlign: "center" }}>
        Your Shopping Basket is Empty
      </Typography>
    );
  }

  return <ShoppingBasketList basketDetails={basketDetails} />;
}
