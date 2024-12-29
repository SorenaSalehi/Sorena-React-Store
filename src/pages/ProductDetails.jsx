import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { ShoppingBasket } from "@mui/icons-material";

import ProductImageSwiper from "../ui/ProductImgSwiper";
import ProductDetailsContent from "../ui/ProductDetailsContent";
import { useShopContext } from "../context/ShopContext";
import ItemBtns from "../ui/ItemBtns";

export default function ProductDetails() {
  const { currentProduct, type } = useShopContext();

  return (
    <Box component="div" style={{ position: "relative" }}>
      {/* Fixed Image */}
      <Typography
        component="div"
        style={{
          position: "fixed",
          top: "10%",
          left: "50%",
          right: "50%",
          transform: "translateX(-50%)",
          width: "80%",
        }}
      >
        {/* //*imgs  */}
        <ProductImageSwiper autoplay={100000} images={currentProduct?.images} />
      </Typography>

      {/* //*btns Group by type */}
      <Box component="div" sx={{ position: "absolute", right: 0 }}>
        <ItemBtns type={type} productId={currentProduct?.id} isDetails={true} />
      </Box>

      {/* //*Scrolling Content */}
      <ProductDetailsContent />
    </Box>
  );
}
