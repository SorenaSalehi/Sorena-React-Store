import React from "react";
import { Box, Button, Card, Typography } from "@mui/material";

import { useShopContext } from "../context/ShopContext";
import { calcCountPrice } from "../utils/helpers";
import ProductItem from "../Features/products/ProductItem";
import NotLoggedIn from "../ui/NotLoggedIn";
import LoadingCar from "../ui/LoadingCar";
import ItemQuantityBtn from "../ui/ItemQuantityBtn";

export default function ShoppingBasket() {
  const {
    user_id,
    basket,
    isBasketLoading,
    basketDetails,
    isBasketDetailsLoading,
    handleUpdateQuantity,
    isUpdatingQuantity,
  } = useShopContext();

  //*if user is not logged in
  if (!user_id) {
    return <NotLoggedIn />;
  }

  //*if basket is loading
  if (isBasketDetailsLoading || isBasketLoading) return <LoadingCar />;

  //*if basket is empty
  if (basketDetails?.length === 0) {
    return (
      <Typography component="h5" variant="h5" sx={{ textAlign: "center" }}>
        Your Shopping Basket is Empty 🥲
      </Typography>
    );
  }

  //*calc items count and total price (some item has quantity and must also calc them)
  const { itemCount, totalPrice } = calcCountPrice({
    basketDetails,
    basket,
  });

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Shopping Cart<Typography variant="h6">{itemCount} Items</Typography>
        <Typography variant="h6">
          Total Price : {totalPrice.toFixed(2)} $
        </Typography>
      </Typography>
      <Box component="ul" sx={{ listStyle: "none" }}>
        {basketDetails?.map((item) => (
          <Card sx={{ paddingBottom: "1rem", marginBottom: "1rem" }}>
            <ProductItem item={item} key={item?.id} type="basket" />
            <ItemQuantityBtn
              key={item?.id}
              productId={item?.id}
              basket={basket}
              handleUpdateQuantity={handleUpdateQuantity}
              isUpdatingQuantity={isUpdatingQuantity}
            />
          </Card>
        ))}
      </Box>

     
    </>
  );
}
