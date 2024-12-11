import { Box, TextField } from "@mui/material";
import React from "react";

export default function UserDetailsForm() {
  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: "1rem",
      }}
    >
      <Box
        component="div"
        sx={{ display: "flex", alignItems: "center", gap: "1rem" }}
      >
        <TextField
          id="Name"
          variant="outlined"
          label="Name"
          sx={{ flexGrow: "1" }}
        />
      </Box>
      <Box
        component="div"
        sx={{ display: "flex", alignItems: "center", gap: "1rem" }}
      >
        <TextField
          id="Last Name"
          variant="outlined"
          label="Last Name"
          sx={{ flexGrow: "1" }}
        />
      </Box>
    </Box>
  );
}
