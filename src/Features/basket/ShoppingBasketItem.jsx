import React, { useState } from "react";
import { Box, Typography, IconButton, Divider, Fab } from "@mui/material";
import { Delete, Remove, Add, Favorite } from "@mui/icons-material";

import { useRemoveFromBasket } from "./useRemoveFromBasket";
import ProductImageSwiper from "../../ui/ProductImgSwiper";
import { calcDiscount } from "../../utils/helpers";
import toast from "react-hot-toast";

export default function ShoppingBasketItem({ item, itemQuantity }) {
  const { removeFromBasket, isLoadingRemove } = useRemoveFromBasket();
  const {
    id,
    images,
    title,
    warrantyInformation,
    brand,
    shippingInformation,
    stock,
    price,
    discountPercentage,
  } = item;
  console.log(itemQuantity);
  const quantity = itemQuantity?.find(
    (q) => Number(q.productId) === id
  )?.quantity;
  console.log(quantity);

  function handleDelete({ productId, from }) {
    removeFromBasket(
      { productId, from },
      {
        onSuccess: () =>
          toast.success(`${title} Was Successfully Remove From Basket`, {
            duration: 4000,
          }),
      }
    );
  }

  return (
    <Box sx={{ padding: "1rem", textAlign: "center" }}>
      {
        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
              alignItems: "center",
            }}
          >
            {/* Basket Item */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: "1rem",
                alignItems: "center",
                width: "100%",
                maxWidth: "600px",
                padding: "1rem",
                boxShadow: 3,
                borderRadius: "8px",
              }}
            >
              <Fab
                // onClick={() => handleAddToWishlist(item)}
                sx={{
                  margin: " 0 0.5rem",
                  padding: "0.5rem",
                  width: "max-Content",
                  height: "max-content",
                }}
              >
                <Favorite fontSize="small" />
              </Fab>
              <Box sx={{ width: "200px" }}>
                <ProductImageSwiper images={images} />
              </Box>
              <Box sx={{ flex: 1, textAlign: "left" }}>
                <Typography variant="h6">{title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  Warranty: {warrantyInformation}
                </Typography>
                {brand && (
                  <Typography variant="body2" color="text.secondary">
                    Brand: {brand}
                  </Typography>
                )}
                <Typography variant="body2" color="text.secondary">
                  Availability: {stock} in Stock
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Shipping: {shippingInformation}
                </Typography>
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <IconButton
                    disabled={quantity === 1}
                    color="primary"
                    // onClick={() => handleDecQuantity(id)}
                  >
                    <Remove />
                  </IconButton>
                  <Typography>{quantity}</Typography>
                  <IconButton
                    color="primary"
                    // onClick={() => handleAddQuantity(id)}
                  >
                    <Add />
                  </IconButton>
                </Box>
                <Typography variant="h6" mt={1}>
                  {calcDiscount(price, discountPercentage)}
                </Typography>
                <IconButton
                  color="error"
                  onClick={() =>
                    handleDelete({ productId: id, from: "basket" })
                  }
                >
                  <Delete />
                </IconButton>
              </Box>
            </Box>
          </Box>
          {/* Total Section */}
          <Divider sx={{ my: 3 }} />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              maxWidth: "600px",
              margin: "0 auto",
              padding: "1rem",
            }}
          ></Box>
        </Box>
      }
    </Box>
  );
}
