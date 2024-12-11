import { Box, Container, Grid2, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";

import ProductItem from "./ProductItem";
import { useProducts } from "./useProducts";

const items = Array.from({ length: 10 }, (_, i) => i + 1);

export default function ProductsList() {
  const navigate = useNavigate();
  const { allProducts, isLoading } = useProducts();

  if (isLoading) return <div>is Loading</div>;

  const first = allProducts.at(0).products;
  console.log(first);

  return (
    <Box component="ul" sx={{ listStyle: "none" }}>
      {first?.map((item) => (
        <Typography>
          <ProductItem item={item} />
        </Typography>
      ))}
      {/* <Typography component="li" onClick={() => navigate("product/details")}>
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
      </Typography> */}
    </Box>
  );
}
