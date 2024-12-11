import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import { Box, Typography, Rating, Divider } from "@mui/material";
import "swiper/css";
import ProductImageSwiper from "../../ui/ProductImgSwiper";

export default function ProductItem({
  item: { brand, category, images, price, rating, title, tags },
}) {
  return (
    <Card
      component="li"
      sx={{ margin: "1rem 0", position: "relative", borderRadius: "1rem" }}
    >
      {/* Discount Badge */}
      <Box
        sx={{
          position: "absolute",
          top: "10px",
          right: "10px",
          backgroundColor: "red",
          color: "white",
          padding: "0.25rem 0.5rem",
          borderRadius: "4px",
          fontSize: "0.75rem",
          fontWeight: "bold",
        }}
      >
        25% OFF
      </Box>

      {/* Image Slider */}
      <ProductImageSwiper images={images}/>

      <CardActionArea>
        {/* Product Details */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {brand}
          </Typography>
          <Typography gutterBottom variant="body1" component="div">
            {title}
          </Typography>
          <Divider variant="middle" />
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              display: "flex",
              gap: "1rem",
              paddingTop: "1rem",
            }}
          >
            <Box component="p">{category} | {...tags}</Box>
            <Box component="p">Price: {price} $</Box>
            <Rating name="read-only" value={rating} readOnly />
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
