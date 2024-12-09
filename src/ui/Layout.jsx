import React from "react";
import Header from "./Header";
import BottomNavigation from "./BottomNavigation";
import { Outlet } from "react-router";
import { Box } from "@mui/material";

export default function Layout() {
  return (
    <Box
      component="div"
      sx={{
        width: "50%",
        height: "100dvh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Header />
      <Box component="section">
        <Outlet />
      </Box>
      <BottomNavigation />
    </Box>
  );
}
