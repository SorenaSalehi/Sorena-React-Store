import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, Rating } from "@mui/material";

export default function ProductDetails() {
  const [isBlurred, setIsBlurred] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsBlurred(window.scrollY > 100); // Blur when scrolled down 100px
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ height: "200vh", position: "relative" }}>
      {/* Fixed Image */}
      <div
        style={{
          position: "fixed",
          top: 45,
          left: 0,
          width: "100%",
          height: "75vh",
          backgroundImage:
            "url(https://cdn.dummyjson.com/products/images/mens-watches/Brown%20Leather%20Belt%20Watch/1.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: isBlurred ? "blur(8px)" : "none",
          transition: "filter 0.3s ease",
        }}
      ></div>

      {/* Scrolling Content */}
      <Card
        sx={{
          marginTop: "60vh",
          padding: "2rem",
          backgroundColor: "white",
          position: "relative",
        }}
      >
        <CardContent>
          <Box
            sx={{ borderBottom: "0.1rem solid gray", marginBottom: "0.5rem" }}
          >
            <Typography>Fashion Timepieces</Typography>

            <Typography gutterBottom variant="h5" component="div">
              Brown Leather Belt Watch
            </Typography>
          </Box>
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
          <Typography sx={{ marginTop: "1rem" }}>
            The Brown Leather Belt Watch is a stylish timepiece with a classic
            design. Featuring a genuine leather strap and a sleek dial, it adds
            a touch of sophistication to your look.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
