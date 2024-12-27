import React from "react";
import Header from "./Header";
import { Outlet } from "react-router";
import { Box } from "@mui/material";
import BottomNavigate from "./BottomNavigate";

export default function Layout() {
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Header />
      <Box
        component="section"
        sx={{
          width: "90dvw",
          display: "flex",
          flexDirection: "column",
          overflow: "auto",
          paddingTop: "10dvh",
        }}
      >
        <Outlet />
      </Box>

      <BottomNavigate />
    </Box>
  );
}
