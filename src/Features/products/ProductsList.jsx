import { Box, Container, Grid2, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";

import ProductItem from "./ProductItem";
import { useProducts } from "./useProducts";
import { useOneProduct } from "./useOneProduct";

export default function ProductsList({ category }) {
  const navigate = useNavigate();
  const { allProducts, isLoading: isAllProdLoading } = useProducts();
  const { oneProduct, isLoading: isOneProdLoading } = useOneProduct(category);

  if (isAllProdLoading || isOneProdLoading) return <div>is Loading</div>;

  //*flatMap for get the arrays of object and then making it shuffle
  const allResults = allProducts
    ?.flatMap((obj) => obj.products)
    .sort(() => Math.random() - 0.5);
  const showingResults = oneProduct ? oneProduct.products : allResults;
  
  return (
    <Box component="ul" sx={{ listStyle: "none" }}>
      {showingResults?.map((item) => (
        <Typography key={item.id}>
          <ProductItem item={item} />
        </Typography>
      ))}
    </Box>
  );
}
