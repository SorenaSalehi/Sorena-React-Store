import { Box, Fab } from "@mui/material";
import React, { useRef, useState } from "react";
import { ArrowUpward } from "@mui/icons-material";

import ProductsList from "../Features/products/ProductsList";
import Category from "../ui/Category";
import { InView, useInView } from "react-intersection-observer";

export default function Products() {
  const [category, setCategory] = useState(null);
  const { ref } = useInView();
  const [showArrow, setShowArrow] = useState(false);
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
      <InView
        onChange={(inView) => {
          setShowArrow(!inView);
        }}
      >
        <Category handleCategory={handleCategory} HeadRef={HeadRef} ref={ref} />
      </InView>

      {/* //*products list */}
      <Box
        component="div"
        sx={{ padding: "1rem", position: "relative" }}
        ref={ProductsRef}
      >
        <ProductsList category={category} />

        {/* //*go to top */}
        {showArrow && (
          <Fab
            onClick={handleGoTop}
            sx={{
              position: "fixed",
              top: "80%",
              right: "1rem",
              zIndex: 1100,
              color: "text.btn",
              backgroundColor: "background.appBar",
            }}
          >
            <ArrowUpward />
          </Fab>
        )}
      </Box>
    </>
  );
}
