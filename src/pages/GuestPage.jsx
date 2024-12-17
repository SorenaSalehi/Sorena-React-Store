import { Box, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router";

export default function GuestPage() {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography>
        As The Quest You can easily Check all the App
        <br />
        But You Can't Save Your Shopping Basket And Wishlist!!
      </Typography>
      <NavLink to="/">Ok</NavLink>
    </Box>
  );
}
