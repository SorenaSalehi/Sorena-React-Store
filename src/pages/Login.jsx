import React from "react";
import SignupForm from "../ui/SignupForm";
import LoginForm from "../ui/LoginForm";
import { Box, Button, Card, Typography } from "@mui/material";
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
      <Card>
        <Button onClick={() => navigate("/signup")}>Signup</Button>
        <Button onClick={() => navigate("/forgotPassword")}>
          Forgot Password
        </Button>
      </Card>
    </Box>
  );
}
