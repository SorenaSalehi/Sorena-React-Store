import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import { Box, Typography, Rating, Divider, Fab, duration } from "@mui/material";
import "swiper/css";
import ProductImageSwiper from "../../ui/ProductImgSwiper";
import { useNavigate } from "react-router";
import { useShopContext } from "../../context/ShopContext";
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
          padding: "0.25rem 0.5rem",
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            backgroundColor: "red",
            color: "text.primary",
            borderRadius: "0.5rem",
            padding: "0.2rem 0.5rem",
          }}
        >
          {discountPercentage}% OFF
        </Typography>

        {/* //*btns Group by type */}
        <ItemBtns key={id} type={type} productId={id} quantity={quantity} />
      </Box>

      {/* //*card Area */}
      <CardActionArea>
        {/* Product Details */}
        <CardContent onClick={handleNavigate}>
          {/* Image Slider */}
          <Box
            component="div"
            sx={{
              width: "60%",
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
          <Box
            component="div"
            sx={{
              color: "text.secondary",
              display: "flex",
              gap: "1rem",
              paddingTop: "1rem",
              alignItems: "center",
            }}
          >
            <Typography variant="caption" component="p">
              {category?.replace("-", " ").toUpperCase()} <br />{" "}
              {tags?.[0]?.toUpperCase()}
            </Typography>
            <Typography variant="caption" component="p">
              Price: <br />
              {price} $
            </Typography>
            <Rating name="read-only" value={rating} readOnly size="small" />
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
