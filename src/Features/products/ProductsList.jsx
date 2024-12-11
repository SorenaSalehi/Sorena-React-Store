import { Box, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";

import ProductItem from "./ProductItem";

export default function ProductsList() {
  const navigate = useNavigate();
  return (
    <Box component="ul">
      <Typography component="li" onClick={() => navigate("product/details")}>
        <ProductItem />
      </Typography>
      <Typography component="li" onClick={() => navigate("product/details")}>
        <ProductItem />
      </Typography>
      <Typography component="li" onClick={() => navigate("product/details")}>
        <ProductItem />
      </Typography>
      <Typography component="li" onClick={() => navigate("product/details")}>
        <ProductItem />
      </Typography>
    </Box>
  );
}
