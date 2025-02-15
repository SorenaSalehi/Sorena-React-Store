import {
  AppBar,
  Box,
  FormControlLabel,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";

import DarkModeSwitch from "../ui/DarkModeSwitch";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          padding: "1rem",
          backgroundColor: "background.appBar",
        }}
      >
        <Box
          component="div"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6">Sorena Store</Typography>
          <DarkModeSwitch />
        </Box>
      </AppBar>
    </Box>
  );
}
