import { Box, Grid2, Skeleton, Stack } from "@mui/material";
import React from "react";

export default function ProfileSkeleton() {
  return (
    <Stack spacing={1} sx={{ margin: "1rem auto", width: "90%" }}>
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="text" width="90%" height="10dvh" />
      <Skeleton variant="text" width="90%" height="10dvh" />
      <Skeleton variant="text" width="90%" height="10dvh" />
      <Skeleton variant="text" width="90%" height="10dvh" />
      <Skeleton variant="text" width="90%" height="10dvh" />
      <Skeleton variant="text" width="90%" height="10dvh" />
    </Stack>
  );
}
