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
        <Typography>
          Please Check Your Connection OR Refresh the Page
        </Typography>
      </Card>
    );

  return (
    <Card
      sx={{
        marginTop: "60vh",
        padding: "2rem",
        backgroundColor: "white",
        position: "relative",
        bgcolor: "lightgray",
      }}
    >
      <CardContent>
        <Box sx={{ marginBottom: "0.5rem" }}>
          <Typography>{brand}</Typography>

          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
        </Box>
        <Divider />

        <Typography
          variant="body2"
          sx={{ color: "text.secondary", display: "flex", gap: "0.3rem" }}
        >
          <Box component="p">{category?.replace("-", " ").toUpperCase()} |</Box>
          <Box component="p" sx={{ display: "flex" }}>
            Price:{" "}
            <Typography
              sx={{ textDecoration: "line-through", marginRight: "0.3rem" }}
            >
              {price}
            </Typography>
            <span>&rarr;</span>
            <Typography>{calcDiscount(price, discountPercentage)}</Typography>
          </Box>
          <Rating name="read-only" value={4} readOnly />
        </Typography>
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
