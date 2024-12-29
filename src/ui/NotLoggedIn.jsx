import React from "react";
import { useShopContext } from "../context/ShopContext";
import { Box, Button, Typography } from "@mui/material";
import { NavLink } from "react-router";
import { Login } from "@mui/icons-material";

export default function NotLoggedIn() {
  return (
    <Box
      component="div"
      sx={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "5rem",
        "& .MuiIconButton-root": {
          color: "background.appBar",
        },
        "& .MuiSvgIcon-root": {
          color: "background.appBar",
          fontSize: "5rem",
        },
      }}
    >
      <Typography variant="h5">Please Login First</Typography>
      <NavLink to="/login">
        <Button>
          <Login />
        </Button>
      </NavLink>
    </Box>
  );
}
