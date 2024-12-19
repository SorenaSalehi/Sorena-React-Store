import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Grid2,
} from "@mui/material";
import {
  ContactSupport,
  Edit,
  EditLocation,
  LocationCity,
} from "@mui/icons-material";
import { Navigate, NavLink, useNavigate } from "react-router";
import toast from "react-hot-toast";
import { useUser } from "../Features/authentication/useUser";
import { useAuthContext } from "../context/AuthProvider";

export default function Dashboard() {
  const { user } = useAuthContext();
  const navigate = useNavigate();

  function handleProfile(user) {
    console.log(user);
    if (!user) {
      navigate("/login"); 
    } else if (user?.id) {
      navigate("/profile"); 
    }
  }

  return (
    <Box
      component="section"
      sx={{
        padding: 2,
        backgroundColor: "background.default",
        borderRadius: "8px",
        boxShadow: 3,
        maxWidth: 600,
        margin: "auto",
        mt: 4,
      }}
    >
      {/* Header Section */}
      <Box
        component="header"
        sx={{
          textAlign: "center",
          mb: 4,
        }}
      >
        <Grid2
          container
          spacing={2}
          justifyContent="center"
          alignItems="center"
          sx={{ maxWidth: 600, margin: "0 auto" }}
        >
          <Grid2 item xs={6}>
            <NavLink
              style={{ textDecoration: "none" }}
              onClick={() =>
                toast.error("You have not Any order", {
                  duration: 2000,
                })
              }
            >
              <Typography
                variant="button"
                sx={{
                  backgroundColor: "secondary.main",
                  color: "white",
                  px: 2,
                  py: 1,
                  borderRadius: "16px",
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: "secondary.dark",
                  },
                }}
                value="currentOrders"
              >
                Current Orders
              </Typography>
            </NavLink>
          </Grid2>
          <Grid2 item xs={6}>
            <NavLink
              style={{ textDecoration: "none" }}
              onClick={() =>
                toast.error("You have not Any order", {
                  duration: 2000,
                })
              }
            >
              <Typography
                variant="button"
                sx={{
                  backgroundColor: "success.main",
                  color: "white",
                  px: 2,
                  py: 1,
                  borderRadius: "16px",
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: "success.dark",
                  },
                }}
                value="delivered"
              >
                Delivered
              </Typography>
            </NavLink>
          </Grid2>
        </Grid2>
      </Box>

      {/* //*Profile Settings Section */}
      <List
        sx={{
          width: "100%",
          bgcolor: "background.paper",
          borderRadius: "8px",
          boxShadow: 1,
        }}
      >
        <ListItem divider onClick={() => handleProfile(user)}>
          <ListItemText primary="Profile" />
          <IconButton color="primary" aria-label="edit profile">
            <Edit />
          </IconButton>
        </ListItem>
        <ListItem divider onClick={() => navigate("/shoppingBasket")}>
          <ListItemText primary="Shopping basket" />
          <IconButton color="secondary" aria-label="Shopping basket">
            <Edit />
          </IconButton>
        </ListItem>
        <ListItem divider onClick={() => navigate("/wishlist")}>
          <ListItemText primary="Wishlist" />
          <IconButton color="primary" aria-label="Wishlist">
            <Edit />
          </IconButton>
        </ListItem>

        <ListItem>
          <ListItemText primary="Contact Me" />
          <IconButton color="primary" aria-label="contact support">
            <ContactSupport />
          </IconButton>
        </ListItem>
      </List>
    </Box>
  );
}
