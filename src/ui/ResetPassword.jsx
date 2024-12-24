import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useUpdatePassword } from "../Features/authentication/useUpdatePassword";
import { useEffect } from "react";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";

export default function UpdatePasswordForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const updatePassword = useUpdatePassword();

  // Check for valid access token on component mount
  useEffect(() => {
    const hashParams = new URLSearchParams(window.location.hash.substring(1));
    const accessToken = hashParams.get("access_token");

    if (!accessToken) {
      navigate("/forgotPassword");
    }
  }, [navigate]);

  const onSubmit = async (data) => {
    try {
      await updatePassword.mutateAsync(data.password);
      // Redirect to login on success
      navigate("/login");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Watch password field for confirmation validation
  const password = watch("password");

  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 400, mx: "auto", mt: 8 }}>
      <Typography variant="h5" component="h1" gutterBottom>
        Update Password
      </Typography>

      {updatePassword.isError && (
        <Alert severity="error" sx={{ mb: 2 }}>
          Failed to update password
        </Alert>
      )}

      <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <TextField
          fullWidth
          margin="normal"
          label="New Password"
          type="password"
          error={!!errors.password}
          helperText={errors.password?.message}
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
          })}
        />

        <TextField
          fullWidth
          margin="normal"
          label="Confirm Password"
          type="password"
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword?.message}
          {...register("confirmPassword", {
            required: "Please confirm your password",
            validate: (value) =>
              value === password || "The passwords do not match",
          })}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3 }}
          disabled={updatePassword.isPending}
        >
          {updatePassword.isPending ? "Updating..." : "Update Password"}
        </Button>
      </Box>
    </Paper>
  );
}
