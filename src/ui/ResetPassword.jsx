import { useEffect, useState } from "react";

import { Box, TextField, Button, Typography } from "@mui/material";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router";
import supabase from "../services/supabase";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  // Extract access token from URL hash
  const accessToken = new URLSearchParams(location.hash).get("access_token");
  console.log(accessToken);
  useEffect(() => {
    if (!accessToken) {
      toast.error("Invalid or expired token");
      navigate("/login");
    }
  }, [accessToken, navigate]);

  async function handleSubmit(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      // Update user's password using the access token
      const { error } = await supabase.auth.updateUser(
        { password },
        { accessToken }
      );

      if (error) throw error;
      toast.success("Password reset successfully!");
      navigate("/login");
    } catch (error) {
      toast.error(error.message || "Failed to reset password");
    }
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
    >
      <Typography variant="h5">Reset Your Password</Typography>
      <TextField
        type="password"
        label="New Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <TextField
        type="password"
        label="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />
      <Button type="submit" variant="contained">
        Reset Password
      </Button>
    </Box>
  );
}
