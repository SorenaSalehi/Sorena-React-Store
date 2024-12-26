import {
  Add,
  Favorite,
  Remove,
  ShoppingBasket,
  Delete,
} from "@mui/icons-material";
import { Box, Fab, IconButton, Typography, Tooltip } from "@mui/material";
import React from "react";
import { useShopContext } from "../context/ShopContext";

export default function ItemBtns({ type, productId, quantity, isDetails }) {
  const {
    handleAddTo,
    handleRemoveFrom,
    handleUpdateQuantity,
    isAddingTo,
    isRemovingFrom,
    isUpdatingQuantity,
  } = useShopContext();

  // Handle actions based on the type
  const handleAction = (actionType) => {
    if (type === "basket" && actionType === "addToWishlist") {
      handleAddTo({ productId, to: "wishlist" });
    } else if (type === "wishlist" && actionType === "addToBasket") {
      handleAddTo({ productId, to: "basket" });
    } else if (actionType === "remove") {
      handleRemoveFrom({ productId, from: type });
    }
  };

  //*for main page
  if (!type) {
    return (
      <Box
        component="div"
        sx={{
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Tooltip title="Add to Basket">
          <Fab
            onClick={() => handleAddTo({ productId, to: "basket" })}
            disabled={isAddingTo}
            size="small"
          >
            <ShoppingBasket />
          </Fab>
        </Tooltip>
        <Tooltip title="Add to Wishlist">
          <Fab
            onClick={() => handleAddTo({ productId, to: "wishlist" })}
            disabled={isAddingTo}
            size="small"
          >
            <Favorite />
          </Fab>
        </Tooltip>
      </Box>
    );
  }

  return (
    <Box
      component="div"
      sx={{
        margin: "1rem",
        padding: "1rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      {/* Add or Remove Actions */}
      <Box component="div" sx={{ display: "flex", gap: "1rem" }}>
        {type === "basket" && (
          <>
            <Tooltip title="Add to Wishlist">
              <Fab
                onClick={() => handleAction("addToWishlist")}
                disabled={isAddingTo}
                size="small"
              >
                <Favorite />
              </Fab>
            </Tooltip>
            <Tooltip title="Remove from Basket">
              <Fab
                onClick={() => handleAction("remove")}
                disabled={isRemovingFrom}
                size="small"
                color="error"
              >
                <Delete />
              </Fab>
            </Tooltip>
          </>
        )}
        {type === "wishlist" && (
          <>
            <Tooltip title="Add to Basket">
              <Fab
                onClick={() => handleAction("addToBasket")}
                disabled={isAddingTo}
                size="small"
              >
                <ShoppingBasket />
              </Fab>
            </Tooltip>
            <Tooltip title="Remove from Wishlist">
              <Fab
                onClick={() => handleAction("remove")}
                disabled={isRemovingFrom}
                size="small"
                color="error"
              >
                <Delete />
              </Fab>
            </Tooltip>
          </>
        )}
      </Box>

      {/* Quantity Controls for Basket Items */}
      {type === "basket" && !isDetails && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <Tooltip title="Decrease Quantity">
            <Fab
              disabled={quantity === 1 || isUpdatingQuantity}
              color="primary"
              onClick={() =>
                handleUpdateQuantity({
                  productId,
                  quantity,
                  type: "decrease",
                })
              }
              size="small"
            >
              <Remove />
            </Fab>
          </Tooltip>
          <Tooltip title="Total Quantity">
            <Fab size="medium" color="success">
              {quantity}
            </Fab>
          </Tooltip>
          <Tooltip title="Increase Quantity">
            <Fab
              color="primary"
              onClick={() =>
                handleUpdateQuantity({
                  productId,
                  quantity,
                  type: "increase",
                })
              }
              disabled={isUpdatingQuantity}
              size="small"
            >
              <Add />
            </Fab>
          </Tooltip>
        </Box>
      )}
    </Box>
  );
}
