import React from "react";
import SignupForm from "../ui/SignupForm";
import LoginForm from "../ui/LoginForm";
import { Box, Button, Card, Divider, Typography } from "@mui/material";
import { useNavigate } from "react-router";

export default function Login() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "2rem",
      }}
    >
      <LoginForm />
      <Box
        component="div"
        sx={{
          textAlign: "center",
        }}
      >
        <Button
          sx={{ color: "background.appBar" }}
          onClick={() => navigate("/signup")}
        >
          Signup
        </Button>
        <Divider sx={{ marginY: "1rem" }} />
        <Button
          sx={{ color: "background.appBar" }}
          onClick={() => navigate("/forgotPassword")}
        >
          Forgot Password
        </Button>
      </Box>
    </Box>
  );
}
