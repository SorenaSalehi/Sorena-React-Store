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

export default function ProductDetailsContent() {
  return (
    <Card
      sx={{
        marginTop: "60vh",
        padding: "2rem",
        backgroundColor: "white",
        position: "relative",
      }}
    >
      <CardContent>
        <Box sx={{ marginBottom: "0.5rem" }}>
          <Typography>Fashion Timepieces</Typography>

          <Typography gutterBottom variant="h5" component="div">
            Brown Leather Belt Watch
          </Typography>
        </Box>
        <Divider />

        <Typography
          variant="body2"
          sx={{ color: "text.secondary", display: "flex", gap: "0.3rem" }}
        >
          <Box component="p">mens-watches | beauty |</Box>
          <Box component="p" sx={{ display: "flex" }}>
            Price:{" "}
            <Typography
              sx={{ textDecoration: "line-through", marginRight: "0.3rem" }}
            >
              89.99
            </Typography>
            <span>&rarr;</span>
            <Typography>79.99 $</Typography>
          </Box>
          <Rating name="read-only" value={4} readOnly />
        </Typography>
        <Divider />

        <Typography sx={{ marginTop: "1rem" }}>
          The Brown Leather Belt Watch is a stylish timepiece with a classic
          design. Featuring a genuine leather strap and a sleek dial, it adds a
          touch of sophistication to your look.
        </Typography>
        <Divider />
        <Box sx={{ display: "flex" }}>
          <ShowMoreDrawer section="reviews" />
          <ShowMoreDrawer section="more details" />
        </Box>
      </CardContent>
    </Card>
  );
}
