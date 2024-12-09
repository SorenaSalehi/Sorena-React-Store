import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Box, Rating } from "@mui/material";

export default function ProductItem() {
  return (
    <Card component="li" sx={{ margin: "1rem 0", position: "relative" }}>
      <CardActionArea>
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
        <CardMedia
          component="img"
          height="140"
          image="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Essence Mascara Lash Princess
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", display: "flex", gap: "1rem" }}
          >
            <Box component="p">man | beauty |</Box>
            <Box component="p">Price: 9.99 $</Box>
            <Rating name="read-only" value={4} readOnly />
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
