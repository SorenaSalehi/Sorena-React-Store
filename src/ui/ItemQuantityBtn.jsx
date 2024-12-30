import { Add, Remove } from "@mui/icons-material";
import { Box, Fab, Tooltip } from "@mui/material";
import React from "react";

export default function ItemQuantityBtn({
  productId,
  basket,
  handleUpdateQuantity,
  isUpdatingQuantity,
}) {
  const quantity = basket?.find(
    (q) => Number(q.productId) === productId
  )?.quantity;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "0.5rem",
        "& .MuiButtonBase-root": {
          width: "max-content",
          height: "max-content",
        },
      }}
    >
      <Tooltip title="Decrease Quantity">
        <Fab
          disabled={quantity === 1 || isUpdatingQuantity}
          onClick={() =>
            handleUpdateQuantity({
              productId,
              quantity,
              type: "decrease",
            })
          }
          color="error"
        >
          <Remove />
        </Fab>
      </Tooltip>
      <Tooltip title="Total Quantity">
        <Fab
          sx={{
            color: "text.primary",
            fontSize: "1.5rem",
            padding: "0.2rem 0.8rem",
          }}
        >
          {quantity}
        </Fab>
      </Tooltip>
      <Tooltip title="Increase Quantity">
        <Fab
          onClick={() =>
            handleUpdateQuantity({
              productId,
              quantity,
              type: "increase",
            })
          }
          disabled={isUpdatingQuantity}
          color="success"
        >
          <Add />
        </Fab>
      </Tooltip>
    </Box>
  );
}
