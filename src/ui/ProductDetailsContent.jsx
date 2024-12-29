import {
  Box,
  Card,
  CardContent,
  Divider,
  Rating,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import ShowMoreDrawer from "./ShowMoreDrawer";
import { calcDiscount } from "../utils/helpers";
import { useShopContext } from "../context/ShopContext";
import { useNavigate } from "react-router";

export default function ProductDetailsContent() {
  const {
    currentProduct: {
      brand,
      title,
      category,
      price,
      description,
      discountPercentage,
    },
  } = useShopContext();

  //*if user refresh the details page , then will current product remove and get empty page
  if (
    !brand &&
    !title &&
    !category &&
    !price &&
    !description &&
    !discountPercentage
  )
    return (
      <Card>
        <Typography component="p">
          Please Check Your Connection OR Refresh the Page
        </Typography>
      </Card>
    );

  return (
    <Card
      sx={{
        marginTop: "40vh",
        padding: "2rem",
        backgroundColor: "white",
        position: "relative",
        backgroundColor: "Background.default",
      }}
    >
      <CardContent
        style={{ backgroundColor: "background.paper", borderRadius: "1rem" }}
      >
        <Box sx={{ marginBottom: "0.5rem" }}>
          <Typography>{brand}</Typography>

          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
        </Box>
        <Divider />

        <Box
          component="div"
          sx={{
            color: "text.secondary",
            display: "flex",
            gap: "0.3rem",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Typography component="p" variant="caption">
            {category?.replace("-", " ").toUpperCase()} |
          </Typography>
          <Box
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <Typography variant="body2">Price: </Typography>
            <Typography
              sx={{
                textDecoration: "line-through",
                marginX: "0.3rem",
                color: "secondary.main",
              }}
              variant="caption"
            >
              {price}
            </Typography>
            <Typography variant="body2">&rarr;</Typography>
            <Typography
              variant="body2"
              sx={{
                marginX: "0.3rem",
                color: "primary.main",
              }}
            >
              {calcDiscount(price, discountPercentage)}
            </Typography>
          </Box>
          <Rating name="read-only" value={4} readOnly />
        </Box>
        <Divider />

        <Typography sx={{ marginTop: "1rem" }}>{description}</Typography>
        <Divider />
        <Box sx={{ display: "flex" }}>
          <ShowMoreDrawer section="reviews" />
          <ShowMoreDrawer section="more details" />
        </Box>
      </CardContent>
    </Card>
  );
}
