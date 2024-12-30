import { Box, Container, Grid2, Typography } from "@mui/material";
import React from "react";

import ProductItem from "./ProductItem";
import { useProducts } from "./useProducts";
import { useOneProduct } from "./useOneProduct";
import HomeSkeleton from "../../ui/HomeSkeleton";

export default function ProductsList({ category }) {
  //*fetch All product by default
  const { allProducts, isLoading: isAllProdLoading } = useProducts();
  //*filter and fetch one product
  const { oneProduct, isLoading: isOneProdLoading } = useOneProduct(category);

  //loading ..........
  if (isAllProdLoading || isOneProdLoading) return <HomeSkeleton />;


  //*flatMap for get the arrays of object and then making it shuffle
  const allResults = allProducts
    ?.flatMap((obj) => obj.products)
    .sort(() => Math.random() - 0.5);
  const showingResults = oneProduct ? oneProduct.products : allResults;

  
  return (
    <Box component="ul" sx={{ listStyle: "none" }}>
      {showingResults?.map((item) => (
        <ProductItem item={item} key={item.id} />
      ))}
    </Box>
  );
}
