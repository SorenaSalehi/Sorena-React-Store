import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import { Box, Typography, Rating, Divider, Fab, duration } from "@mui/material";
import "swiper/css";
import ProductImageSwiper from "../../ui/ProductImgSwiper";
import { useNavigate, useSearchParams } from "react-router";
import { Favorite, Remove, ShoppingBasket } from "@mui/icons-material";
import { useShopContext } from "../../context/ShopContext";
import { set } from "date-fns";
import ItemBtns from "../../ui/ItemBtns";

export default function ProductItem({ item, type }) {
  const { basket, setCurrentProduct, setType } = useShopContext();
  const navigate = useNavigate();

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

  const quantity = basket?.find((q) => Number(q.productId) === id)?.quantity;

  //*navigate to product details page
  function handleNavigate() {
    setCurrentProduct(item);
    setType(type);
    navigate(`/product/${id}`);
  }

  return (
    <Card
      component="li"
      sx={{ margin: "1rem 1rem", position: "relative", borderRadius: "1rem" }}
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

      {/* //*btns Group by type */}
      <ItemBtns type={type} productId={id} quantity={quantity} />

      {/* //*card Area */}
      <CardActionArea>
        {/* Product Details */}
        <CardContent onClick={handleNavigate}>
          {/* Image Slider */}
          <Box
            component="div"
            sx={{
              width: "40%",
              margin: "0 auto",
            }}
          >
            <ProductImageSwiper images={images} />
          </Box>

          <Typography gutterBottom variant="h6" component="p">
            {brand}
          </Typography>
          <Typography gutterBottom variant="body2" component="p">
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
            <Typography variant="caption" component="p">
              {category?.replace("-", " ").toUpperCase()} |{" "}
              {tags?.[0]?.toUpperCase()}
            </Typography>
            <Typography variant="caption" component="p">
              Price: {price} $
            </Typography>
            <Rating name="read-only" value={rating} readOnly size="small" />
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
