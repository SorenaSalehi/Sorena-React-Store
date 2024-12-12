import { Avatar, Box, Grid2, Paper } from "@mui/material";
import React, { useRef, useState } from "react";
import ProductsList from "../Features/products/ProductsList";
import { useProducts } from "../Features/products/useProducts";
import { useOneProduct } from "../Features/products/useOneProduct";

const allSrc = [
  { src: "men-shirt.webp", value: "mens-shirts" },
  { src: "men-watch.webp", value: "mens-watches" },
  { src: "men-shoes.webp", value: "mens-shoes" },
  { src: "women-watch.jpeg", value: "womens-watches" },
  { src: "women-shoes.jpeg", value: "womens-shoes" },
  { src: "women-shirt.jpeg", value: "womens-dresses" },
];

export default function Products() {
  const [category, setCategory] = useState(null);
  const ProductsRef = useRef(null);

  function handleCategory(value) {
    setCategory(value);
    ProductsRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      {/* //*categories */}
      <Grid2 container spacing={2} columns={3} sx={{ margin: "4rem" }}>
        {allSrc.map((src) => (
          <Grid2
            size={1}
            value={src.value}
            onClick={() => handleCategory(src.value)}
          >
            <Paper
              elevation={16}
              component="img"
              alt="default"
              src={src.src}
              sx={{ width: "50px", height: "50px", borderRadius: "50%" }}
            />
          </Grid2>
        ))}
      </Grid2>

      {/* //*products list */}
      <Box component="div" sx={{ paddingX: "2rem" }} ref={ProductsRef}>
        <ProductsList category={category} />
      </Box>
    </>
  );
}
