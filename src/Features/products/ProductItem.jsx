import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import { Box, Typography, Rating, Divider, Fab } from "@mui/material";
import "swiper/css";
import ProductImageSwiper from "../../ui/ProductImgSwiper";
import { useNavigate, useSearchParams } from "react-router";
import { Favorite, Remove, ShoppingBasket } from "@mui/icons-material";
import { useShopContext } from "../../context/ShopContext";
import toast from "react-hot-toast";

export default function ProductItem({ item, type }) {
  const navigate = useNavigate();
  const { addToBasket, addToWishlist, removeFromWishlist } = useShopContext();

  const {
    id,
    brand,
    category,
    images,
    price,
    rating,
    title,
    tags,
    discountPercentage,
  } = item;
  function handleNavigate() {
    navigate(`/product/${id}`);
  }

  function handleAddItem(item, value) {
    if (value === "wishlist") {
      console.log(item);
      addToWishlist(item);
      toast.success(`${item.title} Added to Your Wishlist`, {
        duration: 2000,
      });
      console.log("afhbajf");
    } else {
      addToBasket(item);
      toast.success("One Item Added to Your Shopping Basket", {
        duration: 2000,
      });
    }
  }
  function handleRemove(title, id) {
    removeFromWishlist(id);
    toast.success(`${title} remove from Wishlist!!`, {
      duration: 2000,
    });
  }

  return (
    <Card
      component="li"
      sx={{ margin: "1rem 3rem", position: "relative", borderRadius: "1rem" }}
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
        <Typography>{discountPercentage}% OFF</Typography>
      </Box>

      {/* //*wishlist and shopping basket btn*/}
      <Box component="div" sx={{ margin: "1rem", padding: "1rem" }}>
        <Fab
          onClick={() => handleAddItem(item, "shopping")}
          sx={{
            margin: " 0 0.5rem",
            padding: "0.5rem",
            width: "max-Content",
            height: "max-content",
          }}
        >
          <ShoppingBasket fontSize="small" />
        </Fab>
        {type === "wishlist" ? (
          <Fab
            onClick={() => handleRemove(title, id)}
            sx={{
              margin: " 0 0.5rem",
              padding: "0.5rem",
              width: "max-Content",
              height: "max-content",
            }}
          >
            <Remove fontSize="small" />
          </Fab>
        ) : (
          <Fab
            onClick={() => handleAddItem(item, "wishlist")}
            sx={{
              margin: " 0 0.5rem",
              padding: "0.5rem",
              width: "max-Content",
              height: "max-content",
            }}
          >
            <Favorite fontSize="small" />
          </Fab>
        )}
      </Box>
      <CardActionArea>
        {/* Product Details */}
        <CardContent onClick={handleNavigate}>
          {/* Image Slider */}
          <ProductImageSwiper images={images} />

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
            <Box component="p">
              {category.replace("-", " ").toUpperCase()} |{" "}
              {tags[0].toUpperCase()}
            </Box>
            <Box component="p">Price: {price} $</Box>
            <Rating name="read-only" value={rating} readOnly />
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
