import { Box, Divider, Rating, Typography } from "@mui/material";
import { AccessTime } from "@mui/icons-material";
import { useShopContext } from "../../context/ShopContext";
import { format } from "date-fns";

export default function ReviewsItem() {
  const { currentProduct } = useShopContext();
  const reviews = currentProduct?.reviews;
  console.log(reviews);

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "background.default",
        borderRadius: "1rem",
        padding: "1rem",
        maxWidth: 600,
        mx: "auto",
      }}
    >
      {reviews?.map((review, index) => (
        <Box
          key={review.reviewerEmail}
          sx={{ mb: index < reviews.length - 1 ? 2 : 0 }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h6">{review.reviewerName}</Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <AccessTime fontSize="small" color="action" />
              <Typography
                variant="caption"
                sx={{ color: "gray", fontStyle: "italic" }}
              >
                {format(review.date, "MMMM dd, yyyy || hh:mm:ss a")}
              </Typography>
            </Box>
          </Box>
          <Rating value={review.rating} readOnly />
          <Typography variant="body2" sx={{ mt: 0.5 }}>
            {review.comment}
          </Typography>
          {index < reviews.length - 1 && <Divider sx={{ mt: 1.5 }} />}
        </Box>
      ))}
    </Box>
  );
}
