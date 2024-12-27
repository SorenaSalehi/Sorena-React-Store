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
  AccountCircleRounded,
  ContactSupport,
  FavoriteRounded,
  ManageAccountsRounded,
  PersonRemoveRounded,
  ShoppingBasketRounded,
} from "@mui/icons-material";
import { NavLink, useNavigate } from "react-router";
import toast from "react-hot-toast";

import { useAuthContext } from "../context/AuthProvider";
import { useLogout } from "../Features/authentication/useLogout.js";
import AlertDialog from "../ui/AlertDialog";
import Footer from "../ui/Footer.jsx";

export default function Dashboard() {
  const { user, setUser } = useAuthContext();
  const { logout, isLoginOut } = useLogout();
  const navigate = useNavigate();

  function handleProfile() {
    if (!user) {
      navigate("/login");
    } else {
      navigate("/profile");
    }
  }
  function handleAccount() {
    if (!user) {
      navigate("/login");
    } else {
      navigate("/account");
    }
  }

  const handleLogout = () => {
    logout();
    setUser(null);
  };

  return (
    <>
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
          {/* //*user details */}
          <ListItem divider onClick={() => handleProfile()}>
            <ListItemText primary="Profile" />
            <IconButton color="primary" aria-label="edit profile">
              <AccountCircleRounded />
            </IconButton>
          </ListItem>
          {/* //*Account setting */}
          <ListItem divider onClick={() => handleAccount()}>
            <ListItemText primary="Account" />
            <IconButton color="primary" aria-label="edit profile">
              <ManageAccountsRounded />
            </IconButton>
          </ListItem>
          {/* //*shopping basket */}
          <ListItem divider onClick={() => navigate("/shoppingBasket")}>
            <ListItemText primary="Shopping basket" />
            <IconButton color="primary" aria-label="Shopping basket">
              <ShoppingBasketRounded />
            </IconButton>
          </ListItem>
          {/* //*wishlist */}
          <ListItem divider onClick={() => navigate("/wishlist")}>
            <ListItemText primary="Wishlist" />
            <IconButton color="primary" aria-label="Wishlist">
              <FavoriteRounded />
            </IconButton>
          </ListItem>{" "}
          {/* //*logout */}
          <AlertDialog
            label="Logout"
            dialogTitle="Are you Sure For Login Out?"
            onSubmit={handleLogout}
            user={user}
          />
          {/* //*delete Account */}
        </List>
      </Box>
      <Footer />
    </>
  );
}
