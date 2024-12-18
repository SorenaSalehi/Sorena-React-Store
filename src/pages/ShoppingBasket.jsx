import React from "react";
import ShoppingBasketList from "../Features/basket/ShoppingBasketList";
import { useAuthContext } from "../context/AuthProvider";
import { useBasket } from "../Features/basket/useBasket";
import { useBasketDetails } from "../Features/basket/useBasketDetails";
import { Typography } from "@mui/material";

export default function ShoppingBasket() {
  const { user } = useAuthContext();
  // console.log("user", user);
  const { basket, isBasketLoading } = useBasket({
    userId: user?.id,
    from: "basket",
  });
  // console.log("basket", basket);
  const { basketDetails, isDetailsLoading } = useBasketDetails(basket);

  if (isDetailsLoading || isBasketLoading) return <div>loadibng ...</div>;
  // console.log("loading", isDetailsLoading);
  // console.log(basketDetails);

  if (basketDetails?.length === 0) {
    return (
      <Typography component="h2" variant="h2" sx={{ textAlign: "center" }}>
        Your Shopping Basket is Empty
      </Typography>
    );
  }

  return <ShoppingBasketList basketDetails={basketDetails} basket={basket} />;
}
