import {
  Box,
  Card,
  CardContent,
  Divider,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import ShowMoreDrawer from "./ShowMoreDrawer";
import { calcDiscount } from "../utils/helpers";

export default function ProductDetailsContent({
  details: {
    brand,
    title,
    category,
    price,

    description,

    discountPercentage,
  },
}) {
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
          <Box component="p">{category.replace("-", " ").toUpperCase()} |</Box>
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
