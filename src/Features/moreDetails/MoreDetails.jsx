import { Box, Typography, Card, CardContent, Grid2 } from "@mui/material";
import { Star, Category, CheckCircle } from "@mui/icons-material";
import { useShopContext } from "../../context/ShopContext";

export default function MoreDetails() {
  const { currentProduct } = useShopContext();

  const {
    discountPercentage,
    rating,
    brand,
    category,
    returnPolicy,
    shippingInformation,
    tags,
    title,
    warrantyInformation,
    dimensions: { width, height, depth } = {},
    stock,
    weight,
  } = currentProduct || {};
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        p: 2,
        overflow: "auto",
        maxWidth: 600,
        mx: "auto",
      }}
    >
      {/* Discount, Rating, Availability */}
      <Card>
        <CardContent>
          <Typography variant="h6">Quick Overview</Typography>
          <Grid2
            container
            spacing={2}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Grid2 item xs={4}>
              <Typography component="p" color="text.secondary">
                Discount
              </Typography>
              <Typography variant="body1">{discountPercentage}%</Typography>
            </Grid2>
            <Grid2 item xs={4}>
              <Typography component="p" color="text.secondary">
                Rating
              </Typography>
              <Typography
                variant="body1"
                sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                <Star color="info" />
                <Typography variant="body1">{rating}</Typography>
              </Typography>
            </Grid2>
            <Grid2 item xs={4}>
              <Typography component="p" color="text.secondary">
                Availability
              </Typography>
              <Typography
                variant="body1"
                sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                <CheckCircle color="success" />
                {stock > 0 ? ` in Stock` : "Non-Existent"}
              </Typography>
            </Grid2>
          </Grid2>
        </CardContent>
      </Card>

      {/* Product Details */}
      <Card>
        <CardContent>
          <Typography variant="h6" sx={{ opacity: "70%" }}>
            Product Details
          </Typography>
          <Typography variant="body1">
            <Typography component="b" sx={{ opacity: "70%" }}>
              Brand:
            </Typography>{" "}
            {brand}
          </Typography>
          <Typography variant="body2">{title}</Typography>
        </CardContent>
      </Card>

      {/* Dimensions */}
      <Card>
        <CardContent>
          <Typography variant="h6" sx={{ opacity: "70%" }}>
            Specifications
          </Typography>

          <Typography variant="body1">
            <Typography component="b" sx={{ opacity: "70%" }}>
              Weight:
            </Typography>{" "}
            {weight}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <b>Dimensions:</b> depth ({depth}) x width ({width}) x height (
            {height})
          </Typography>
        </CardContent>
      </Card>

      {/* Warranty, Shipping, Stock */}
      <Card>
        <CardContent>
          <Typography variant="h6" sx={{ opacity: "70%" }}>
            Additional Info
          </Typography>
          <Typography variant="body1">
            <Typography component="b" sx={{ opacity: "70%" }}>
              Warranty:
            </Typography>{" "}
            {warrantyInformation}
          </Typography>
          <Typography variant="body1">
            <Typography component="b" sx={{ opacity: "70%" }}>
              Shipping:
            </Typography>{" "}
            {shippingInformation}
          </Typography>
          <Typography variant="body1">
            <Typography component="b" sx={{ opacity: "70%" }}>
              Stock:
            </Typography>{" "}
            {stock} units
          </Typography>
          <Typography variant="body1">
            <Typography component="b" sx={{ opacity: "70%" }}>
              Return Policy:
            </Typography>{" "}
            {returnPolicy}
          </Typography>
        </CardContent>
      </Card>

      {/* Categories */}
      <Card>
        <CardContent>
          <Typography variant="h6" sx={{ opacity: "70%" }}>
            Categories
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              my: "0.5rem",
            }}
          >
            <Category color="success" />{" "}
            {category?.replace("-", " ").toUpperCase()},{" "}
            {tags?.[0]?.toUpperCase()}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
