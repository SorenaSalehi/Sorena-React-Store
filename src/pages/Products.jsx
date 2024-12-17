import { Avatar, Box, Fab, Grid2, Paper, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import ProductsList from "../Features/products/ProductsList";
import { useProducts } from "../Features/products/useProducts";
import { useOneProduct } from "../Features/products/useOneProduct";
import { ArrowUpward, Upcoming } from "@mui/icons-material";
import supabase from "../services/supabase";
import { data } from "react-router";
import { useUser } from "../Features/authentication/useUser";
import { useAddToBasket } from "../Features/basket/useAddTobasket";
import { useBasket } from "../Features/basket/useBasket";

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
  const { addToBasket, isLoading } = useAddToBasket();

  const HeadRef = useRef(null);
  const ProductsRef = useRef(null);

  function handleGoTop() {
    HeadRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  function handleCategory(value) {
    setCategory(value);
    ProductsRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      {/* //*categories */}
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

      {/* //*products list */}
      <Box
        component="div"
        sx={{ paddingX: "2rem", position: "relative" }}
        ref={ProductsRef}
      >
        <ProductsList category={category} />
        <Fab
          onClick={handleGoTop}
          sx={{
            position: "fixed",
            top: "80%",
            right: "1rem",
            zIndex: "100",
            backgroundColor: "red",
          }}
        >
          <ArrowUpward />
        </Fab>
      </Box>
    </>
  );
}
