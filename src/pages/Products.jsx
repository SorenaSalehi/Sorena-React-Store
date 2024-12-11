import { Avatar, Box, Grid2 } from "@mui/material";
import React from "react";
import ProductsList from "../Features/products/ProductsList";
import { useProducts } from "../Features/products/useProducts";

const allSrc = [
  "men-shirt.webp",
  "men-watch.webp",
  "men-shoes.webp",
  "women-watch.jpeg",
  "women-shoes.jpeg",
  "women-shirt.jpeg",
];

export default function Products() {
  // const { allProducts, isLoading } = useProducts();

  // if (isLoading) return <div>loading</div>;

  // console.log(allProducts);

  return (
    <>
      {/* //*categories */}
      <Grid2 container spacing={2} columns={3} sx={{ margin: "4rem" }}>
        {allSrc.map((src) => (
          <Grid2 size={1}>
            <Box
              component="img"
              alt="default"
              src={src}
              sx={{ width: "100px", height: "100px", borderRadius: "50%" }}
            />
          </Grid2>
        ))}
      </Grid2>

      {/* //*products list */}
      <Box component="div" sx={{ paddingX: "2rem" }}>
        <ProductsList />
      </Box>
    </>
  );
}
