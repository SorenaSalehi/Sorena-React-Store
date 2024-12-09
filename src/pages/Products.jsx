import { Avatar, Box, Grid2 } from "@mui/material";
import React from "react";
import ProductsList from "../Features/products/ProductsList";

export default function Products() {
  return (
    <>
      {/* //*head img */}
      <Box
        component="img"
        src="productImg.png"
        sx={{ height: "10vh", width: "100%" }}
      />
      {/* //*categories */}

      <Grid2 container spacing={2} columns={3} sx={{ margin: "4rem" }}>
        <Grid2 size={1}>
          <Box
            component="img"
            alt="default"
            src="88.png"
            sx={{ width: "100px" }}
          />
        </Grid2>{" "}
        <Grid2 size={1}>
          <Box
            component="img"
            alt="default"
            src="88.png"
            sx={{ width: "100px" }}
          />
        </Grid2>{" "}
        <Grid2 size={1}>
          <Box
            component="img"
            alt="default"
            src="88.png"
            sx={{ width: "100px" }}
          />
        </Grid2>{" "}
        <Grid2 size={1}>
          <Box
            component="img"
            alt="default"
            src="88.png"
            sx={{ width: "100px" }}
          />
        </Grid2>{" "}
        <Grid2 size={1}>
          <Box
            component="img"
            alt="default"
            src="88.png"
            sx={{ width: "100px" }}
          />
        </Grid2>{" "}
        <Grid2 size={1}>
          <Box
            component="img"
            alt="default"
            src="88.png"
            sx={{ width: "100px" }}
          />
        </Grid2>
      </Grid2>

      {/* //*products */}
      <Box component="div" sx={{ paddingX: "2rem" }}>
        <ProductsList />
      </Box>
    </>
  );
}
