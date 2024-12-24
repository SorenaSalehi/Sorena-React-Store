// src/features/authentication/UpdatePasswordForm.jsx
import { useEffect, useState } from "react";

import {
  Box,
  TextField,
  Button,
  Typography,
  Alert,
  Paper,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useUpdatePassword } from "../Features/authentication/useUpdatePassword";
import toast from "react-hot-toast";
import supabase from "../services/supabase";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function ResetPassword() {
  const navigate = useNavigate();
  const [tokenError, setTokenError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const { updatePassword, isPending } = useUpdatePassword();

  useEffect(() => {
    const hashFragment = window.location.hash;
    if (!hashFragment) {
      setTokenError(true);
      return;
    }

    const params = new URLSearchParams(hashFragment.substring(1));
    const accessToken = params.get("access_token");

    if (!accessToken) {
      setTokenError(true);
      setTimeout(() => navigate("/forgotPassword"), 3000);
      return;
    }

    // Set the session in Supabase
    supabase.auth
      .setSession({
        access_token: accessToken,
        refresh_token: params.get("refresh_token"),
      })
      .then(({ error }) => {
        if (error) {
          setTokenError(true);
          toast.error("Failed to set session");
          setTimeout(() => navigate("/forgotPassword"), 3000);
        }
      });
  }, [navigate]);

  function onSubmit(data) {
    updatePassword(data.password, {
      onSuccess: () => {
        toast.success("Password updated successfully");
        navigate("/login");
      },
      onError: (error) => {
        toast.error(error?.message || "Failed to update password");
      },
    });
  }

  const password = watch("password" || "");
  function togglePassword() {
    setShowPassword((prev) => !prev);
  }

  if (tokenError) {
    return (
      <Paper elevation={3} sx={{ p: 4, maxWidth: 400, mx: "auto", mt: 8 }}>
        <Alert severity="error">
          Invalid or expired reset link. Redirecting to password reset page...
        </Alert>
      </Paper>
    );
  }

  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 400, mx: "auto", mt: 8 }}>
      <Typography variant="h5" component="h1" gutterBottom>
        Update Password
      </Typography>

      <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <TextField
          fullWidth
          margin="normal"
          label="New Password"
          type={showPassword ? "text" : "password"}
          error={!!errors.password}
          helperText={errors.password?.message}
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
          })}
          InputProps={{
            endAdornment: (
              <IconButton onClick={togglePassword}>
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            ),
          }}
        />

        <TextField
          fullWidth
          margin="normal"
          label="Confirm Password"
          type={showPassword ? "text" : "password"}
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword?.message}
          {...register("confirmPassword", {
            required: "Please confirm your password",
            validate: (value) =>
              value === password || "The passwords do not match",
          })}
          InputProps={{
            endAdornment: (
              <IconButton onClick={togglePassword}>
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            ),
          }}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3 }}
          disabled={isPending}
        >
          {isPending ? "Updating Password..." : "Update Password"}
        </Button>
      </Box>
    </Paper>
  );
}
