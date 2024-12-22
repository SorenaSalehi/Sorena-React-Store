import { Box, Grid2, Skeleton, Stack } from "@mui/material";
import React from "react";

export default function HomeSkeleton() {
  return (
    <Stack spacing={1} sx={{ margin: "1rem auto", width: "90%" }}>
      <Skeleton variant="rounded" width="90%" height="20dvh" />
      <Skeleton variant="rounded" width="90%" height="20dvh" />
      <Skeleton variant="rounded" width="90%" height="20dvh" />
    </Stack>
  );
}
