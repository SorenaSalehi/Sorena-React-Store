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
        height: "100dvh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Header />
      <Box
        component="section"
        sx={{
          width: "100dvw",
          display: "flex",
          flexDirection: "column",
          height: "80vh",
          overflow: "auto",
          padding: " 2rem 0 2rem",
        }}
      >
        <Outlet />
      </Box>
      <BottomNavigate />
    </Box>
  );
}
