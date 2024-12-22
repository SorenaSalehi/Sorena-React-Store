import { Grid2, Paper, Typography } from "@mui/material";
import React from "react";

const allSrc = [
  { src: "men-shirt.webp", value: "mens-shirts" },
  { src: "men-watch.webp", value: "mens-watches" },
  { src: "men-shoes.webp", value: "mens-shoes" },
  { src: "women-watch.jpeg", value: "womens-watches" },
  { src: "women-shoes.jpeg", value: "womens-shoes" },
  { src: "women-shirt.jpeg", value: "womens-dresses" },
];

export default function Category({ handleCategory, HeadRef }) {
  return (
    <>
      <Typography component="h4" variant="h4" sx={{ textAlign: "center" }}>
        Select Category{" "}
      </Typography>
      <Grid2
        container
        spacing={2}
        columns={3}
        sx={{ margin: "2rem" }}
        ref={HeadRef}
      >
        {allSrc.map((src) => (
          <Grid2
            size={1}
            value={src.value}
            onClick={() => handleCategory(src.value)}
            component="button"
          >
            <Paper
              elevation={16}
              component="img"
              alt="default"
              src={src.src}
              sx={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                mx: "0.5rem",
              }}
            />
            <Typography
              component="p"
              variant="caption"
              sx={{ bgcolor: "lightBlue" }}
            >
              {src.value.replace("-", " ").toUpperCase()}
            </Typography>
          </Grid2>
        ))}
      </Grid2>
    </>
  );
}
