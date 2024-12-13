import {
  Box,
  Divider,
  Typography,
  Card,
  CardContent,
  Grid,
  Grid2,
} from "@mui/material";
import {
  LocalShipping,
  Star,
  Category,
  CheckCircle,
  HourglassBottom,
} from "@mui/icons-material";
import { useShopContext } from "../../context/ShopContext";

export default function MoreDetails({ detailOf }) {
  const { currentProduct } = useShopContext();
  const {
    discountPercentage,
    rating,
    brand,
    availabilityStatus,
    category,
    price,
    returnPolicy,
    shippingInformation,
    tags,
    title,
    warrantyInformation,
    dimensions: { width, height, depth },
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
          <Grid2 container spacing={2}>
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
              <Typography variant="body1">
                <Star color="primary" /> {rating}
              </Typography>
            </Grid2>
            <Grid2 item xs={4}>
              <Typography component="p" color="text.secondary">
                Availability
              </Typography>
              <Typography variant="body1">
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
          <Typography variant="h6">Product Details</Typography>
          <Typography variant="body1">
            <b>Brand:</b> {brand}
          </Typography>
          <Typography variant="body2">{title}</Typography>
        </CardContent>
      </Card>

      {/* Dimensions */}
      <Card>
        <CardContent>
          <Typography variant="h6">Specifications</Typography>
          {category === "mens-shoes" && (
            <Typography variant="body1">
              <b>Sizes:</b> 38 | 39 | 41 | 42 | 44
            </Typography>
          )}
          {category === "womens-shoes" && (
            <Typography variant="body1">
              <b>Sizes:</b> 29 | 32 | 34 | 35 | 36
            </Typography>
          )}
          {category === "mens-shirts" && (
            <Typography variant="body1">
              <b>Sizes:</b> S | L | XL | 2Xl
            </Typography>
          )}{" "}
          {category === "womens-shirts" && (
            <Typography variant="body1">
              <b>Sizes:</b> XS | S | L
            </Typography>
          )}
          <Typography variant="body1">
            <b>Weight:</b> {weight}
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
          <Typography variant="h6">Additional Info</Typography>
          <Typography variant="body1">
            <b>Warranty:</b> {warrantyInformation}
          </Typography>
          <Typography variant="body1">
            <b>Shipping:</b> {shippingInformation}
          </Typography>
          <Typography variant="body1">
            <b>Stock:</b> {stock} units
          </Typography>
          <Typography variant="body1">
            <b>Return Policy:</b> {returnPolicy}
          </Typography>
        </CardContent>
      </Card>

      {/* Categories */}
      <Card>
        <CardContent>
          <Typography variant="h6">Categories</Typography>
          <Typography variant="body2" color="text.secondary">
            <Category color="primary" />{" "}
            {category.replace("-", " ").toUpperCase()}, {tags[0].toUpperCase()}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
