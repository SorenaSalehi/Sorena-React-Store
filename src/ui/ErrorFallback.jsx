import { Box } from "@mui/material";
import React from "react";

export default function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <Box>
      <p>Something went Wrong!!</p>
      <h1>{error.message}</h1>
      <button onClick={resetErrorBoundary}>Try Again</button>
    </Box>
  );
}
