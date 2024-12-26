import { Box, Fab } from "@mui/material";
import React, { useRef, useState } from "react";
import { ArrowUpward } from "@mui/icons-material";

import ProductsList from "../Features/products/ProductsList";
import Category from "../ui/Category";

export default function Products() {
  const [category, setCategory] = useState(null);

  //*refs for scrolling
  const HeadRef = useRef(null);
  const ProductsRef = useRef(null);

  //*scroll to top
  function handleGoTop() {
    HeadRef.current?.scrollIntoView({ behavior: "smooth" });
  }
  //*handle category change and Scroll to products
  function handleCategory(value) {
    setCategory(value);
    ProductsRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      {/* //*categories */}
      <Category handleCategory={handleCategory} HeadRef={HeadRef} />

      {/* //*products list */}
      <Box
        component="div"
        sx={{ paddingX: "2rem", position: "relative" }}
        ref={ProductsRef}
      >
        <ProductsList category={category} />

        {/* //*go to top */}
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
