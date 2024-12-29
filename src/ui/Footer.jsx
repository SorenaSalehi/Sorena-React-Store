import { Box, Typography } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <Box component="div" sx={{ position: "fixed", bottom: 70 }}>
      <Typography variant="caption">
        Crafted with ❤️ by Sorena. Connect with me on{" "}
        <Typography
          component="a"
          href="https://www.linkedin.com/in/sorenasalehi/"
        >
          Linkedln
        </Typography>{" "}
        or check out my work on{" "}
        <Typography component="a" href="https://github.com/SorenaSalehi">
          Github .
        </Typography>
      </Typography>
    </Box>
  );
}
