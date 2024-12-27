import { Typography } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <>
      <Typography component="p">
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
    </>
  );
}
