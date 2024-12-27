import { Box, Grid2, Paper, Typography } from "@mui/material";
import React from "react";

import CategorySwiper from "../ui/CategorySwiper";

const allSrc = [
  { src: "men-shirt.jpg", value: "mens-shirts" },
  { src: "men-watch.jpg", value: "mens-watches" },
  { src: "men-shoes.jpg", value: "mens-shoes" },
  { src: "women-watch.jpg", value: "womens-watches" },
  { src: "women-shoes.jpg", value: "womens-shoes" },
  { src: "women-shirt.jpg", value: "womens-dresses" },
];

export default function Category({ handleCategory, HeadRef }) {
  return (
    <>
      <Typography
        component="h4"
        variant="h4"
        sx={{ textAlign: "center", padding: "1rem 0" }}
        ref={HeadRef}
      >
        Select Category{" "}
      </Typography>
      <Box component="div">
        <CategorySwiper images={allSrc} onClick={handleCategory} />
      </Box>
    </>
  );
}
