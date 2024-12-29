import { Box, Skeleton, Stack } from "@mui/material";
import React from "react";

export default function MainFallback() {
  return (
    <Stack>
      <Skeleton variant="text" width="100%" height="10dvh" />

      <Box
        component="div"
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "1rem 5rem",
          marginBottom: "1rem",
          margin: "2rem auto ",
        }}
      >
        <Skeleton variant="circular" width={70} height={70} />
        <Skeleton variant="circular" width={70} height={70} />
        <Skeleton variant="circular" width={70} height={70} />
      </Box>
      <Box
        component="div"
        sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <Skeleton variant="rectangular" width="100%" height="20dvh" />
        <Skeleton variant="rectangular" width="100%" height="20dvh" />
        <Skeleton variant="rectangular" width="100%" height="20dvh" />
        <Skeleton variant="rectangular" width="100%" height="20dvh" />
      </Box>
      {/* <Skeleton variant="text" width="100%" height="10dvh" /> */}
    </Stack>
  );
}
