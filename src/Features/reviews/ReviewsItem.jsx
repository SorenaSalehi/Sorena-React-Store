import { Box, Divider, Rating, Typography } from "@mui/material";
import { AccessTime } from "@mui/icons-material";

const reviews = [
  {
    id: 1,
    name: "Oscar Powers",
    date: "yesterday",
    rating: 3,
    feedback: "Very dissatisfied!",
  },
  {
    id: 2,
    name: "Eli Ward",
    date: "last week",
    rating: 4,
    feedback: "Fast shipping!",
  },
  {
    id: 3,
    name: "Stella Hughes",
    date: "2 months ago",
    rating: 5,
    feedback: "Highly impressed!",
  },
  {
    id: 4,
    name: "Stella Hughes",
    date: "2 months ago",
    rating: 1,
    feedback: "Not what I expected.",
  },
  {
    id: 5,
    name: "Stella Hughes",
    date: "2 months ago",
    rating: 1,
    feedback: "Not what I expected.",
  },
  {
    id: 6,
    name: "Stella Hughes",
    date: "2 months ago",
    rating: 1,
    feedback: "Not what I expected.",
  },
  {
    id: 7,
    name: "Stella Hughes",
    date: "2 months ago",
    rating: 1,
    feedback: "Not what I expected.",
  },
];

export default function ReviewsItem() {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "lightgray",
        borderRadius: "1rem",
        padding: "1rem",
        maxWidth: 600,
        mx: "auto",
      }}
    >
      {reviews.map((review, index) => (
        <Box key={review.id} sx={{ mb: index < reviews.length - 1 ? 2 : 0 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h6">{review.name}</Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <AccessTime fontSize="small" color="action" />
              <Typography
                variant="caption"
                sx={{ color: "gray", fontStyle: "italic" }}
              >
                {review.date}
              </Typography>
            </Box>
          </Box>
          <Rating value={review.rating} readOnly />
          <Typography variant="body2" sx={{ mt: 0.5 }}>
            {review.feedback}
          </Typography>
          {index < reviews.length - 1 && <Divider sx={{ mt: 1.5 }} />}
        </Box>
      ))}
    </Box>
  );
}
