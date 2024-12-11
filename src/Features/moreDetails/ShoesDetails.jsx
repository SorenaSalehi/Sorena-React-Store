import {
  Box,
  Divider,
  Typography,
  Card,
  CardContent,
  Grid2,
} from "@mui/material";
import {
  LocalShipping,
  Star,
  Category,
  CheckCircle,
  HourglassBottom,
} from "@mui/icons-material";

export default function WatchDetails() {
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
              <Typography variant="body1">15.9%</Typography>
            </Grid2>
            <Grid2 item xs={4}>
              <Typography component="p" color="text.secondary">
                Rating
              </Typography>
              <Typography variant="body1">
                <Star color="primary" /> 4.75
              </Typography>
            </Grid2>
            <Grid2 item xs={4}>
              <Typography component="p" color="text.secondary">
                Availability
              </Typography>
              <Typography variant="body1">
                <CheckCircle color="success" /> In Stock
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
            <b>Brand:</b> Nike
          </Typography>
          <Typography variant="body2">
            Nike Air Jordan 1 Red And Black
          </Typography>
        </CardContent>
      </Card>

      {/* Dimensions */}
      <Card>
        <CardContent>
          <Typography variant="h6">Specifications</Typography>
          <Typography variant="body1">
            <b>Weight:</b> 10
          </Typography>
          <Typography variant="body1">
            <b>Weight:</b> 10
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <b>Dimensions:</b> 18.39 x 10.82 x 10.52
          </Typography>
        </CardContent>
      </Card>

      {/* Warranty, Shipping, Stock */}
      <Card>
        <CardContent>
          <Typography variant="h6">Additional Info</Typography>
          <Typography variant="body1">
            <b>Warranty:</b> 3 months
          </Typography>
          <Typography variant="body1">
            <b>Shipping:</b> In one month
          </Typography>
          <Typography variant="body1">
            <b>Stock:</b> 69 units
          </Typography>
          <Typography variant="body1">
            <b>Return Policy:</b> 90 Days
          </Typography>
        </CardContent>
      </Card>

      {/* Categories */}
      <Card>
        <CardContent>
          <Typography variant="h6">Categories</Typography>
          <Typography variant="body2" color="text.secondary">
            <Category color="primary" /> Man, Fashion, Watches, Leather Watches
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
