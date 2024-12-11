import React, { useState } from "react";
import { Box, Typography, Button, IconButton, Divider } from "@mui/material";
import { Delete, Remove, Add } from "@mui/icons-material";

export default function ShoppingBasket() {
  const [isEmpty, setIsEmpty] = useState(false);

  return (
    <Box sx={{ padding: "1rem", textAlign: "center" }}>
      {isEmpty ? (
        <Typography variant="h5" color="text.secondary">
          Your Shopping Basket is empty 🥲
        </Typography>
      ) : (
        <Box>
          <Typography variant="h4" gutterBottom>
            Your Basket
          </Typography>
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
              <Box
                component="img"
                alt="Product Image"
                src="https://cdn.dummyjson.com/products/images/mens-watches/Brown%20Leather%20Belt%20Watch/1.png"
                sx={{
                  width: { xs: "100%", sm: "40%" },
                  height: "auto",
                  borderRadius: "8px",
                }}
              />
              <Box sx={{ flex: 1, textAlign: "left" }}>
                <Typography variant="h6">Brown Leather Belt Watch</Typography>
                <Typography variant="body2" color="text.secondary">
                  Warranty: 1 Year
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Brand: Premium
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Availability: In Stock
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Shipping: Free
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
                  <IconButton color="primary">
                    <Remove />
                  </IconButton>
                  <Typography>1</Typography>
                  <IconButton color="primary">
                    <Add />
                  </IconButton>
                </Box>
                <Typography variant="h6" mt={1}>
                  $120
                </Typography>
                <IconButton color="error">
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
          >
            <Typography variant="h6">
              Total: <span>(1 Item)</span>
            </Typography>
            <Typography variant="h6" color="primary">
              $120
            </Typography>
          </Box>
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
      )}
    </Box>
  );
}
