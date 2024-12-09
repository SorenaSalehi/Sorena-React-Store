import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React from "react";

export default function SignupForm() {
  return (
    <Paper elevation={5}>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          padding: "5rem",
        }}
      >
        <Box
          component="div"
          sx={{ display: "flex", alignItems: "center", gap: "1rem" }}
        >
          <label htmlFor="name">Name:</label>
          <TextField
            id="name"
            variant="outlined"
            label="Name"
            sx={{ flexGrow: "1" }}
          />
        </Box>
        <Box
          component="div"
          sx={{ display: "flex", alignItems: "center", gap: "1rem" }}
        >
          <label htmlFor="lastName">last Name:</label>
          <TextField
            id="lastName"
            variant="outlined"
            label="last Name"
            sx={{ flexGrow: "1" }}
          />
        </Box>{" "}
        <Box
          component="div"
          sx={{ display: "flex", alignItems: "center", gap: "1rem" }}
        >
          <label htmlFor="email">email:</label>
          <TextField
            id="email"
            variant="outlined"
            label="email"
            sx={{ flexGrow: "1" }}
          />
        </Box>
        <Box
          component="div"
          sx={{ display: "flex", alignItems: "center", gap: "1rem" }}
        >
          <label htmlFor="password">password:</label>
          <TextField
            id="password"
            variant="outlined"
            label="password"
            type="password"
            sx={{ flexGrow: "1" }}
          />
        </Box>
        <Button variant="contained">Submit</Button>
      </Box>
    </Paper>
  );
}
