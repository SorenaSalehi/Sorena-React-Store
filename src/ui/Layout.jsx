import React, { useEffect } from "react";
import { Outlet } from "react-router";
import { Box } from "@mui/material";
import { InView, useInView } from "react-intersection-observer";

import Header from "./Header";
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
          padding: "10dvh 0",
        }}
      >
        <Outlet />
      </Box>

      <BottomNavigate />
    </Box>
  );
}
