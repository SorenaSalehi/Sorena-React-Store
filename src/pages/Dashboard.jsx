import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import {
  ContactSupport,
  Edit,
  EditLocation,
  LocationCity,
} from "@mui/icons-material";
import { NavLink, useNavigate } from "react-router";
import Login from "./Login";

export default function Dashboard() {
  const navigate = useNavigate();

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
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <NavLink to="/wishlist" style={{ textDecoration: "none" }}>
            <Typography
              variant="button"
              sx={{
                backgroundColor: "primary.main",
                color: "white",
                px: 2,
                py: 1,
                borderRadius: "16px",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "primary.dark",
                },
              }}
            >
              Wishlist
            </Typography>
          </NavLink>

          <NavLink to="/currentOrders" style={{ textDecoration: "none" }}>
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

          <NavLink to="/delivered" style={{ textDecoration: "none" }}>
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
        </Box>
      </Box>

      {/* Profile Settings Section */}
      <List
        sx={{
          width: "100%",
          bgcolor: "background.paper",
          borderRadius: "8px",
          boxShadow: 1,
        }}
      >
        <ListItem divider>
          <ListItemText primary="Profile" />
          <IconButton
            color="primary"
            aria-label="edit profile"
            onClick={() => navigate("/dashboard/:profile")}
          >
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
