import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuthContext } from "../context/AuthProvider";
import { useUpdateAccount } from "../Features/user/useUpdateAccount";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function ResetPassword() {
  const { updateAccount, isUpdating } = useUpdateAccount();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  function onSubmit({ email, password }) {
    updateAccount(
      { email, password },
      {
        onSuccess: () => {
          toast.success("Password updated successfully", { duration: 5000 });
          navigate("/login");
        },

        onError: (error) => {
          toast.error(error.message);
        },
      }
    );
  }

  const password = watch("password");
  function togglePassword() {
    setShowPassword((prev) => !prev);
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: "3rem",
      }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Typography component="h4" variant="h4">
        Enter Your New Password:
      </Typography>
      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <TextField
          type="email"
          variant="outlined"
          label="Email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
              message: "Invalid email address",
            },
          })}
          error={errors?.email}
          helperText={errors?.email?.message}
          disabled={isUpdating}
        />

        <TextField
          type={showPassword ? "text" : "password"}
          variant="outlined"
          label="Password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 6 characters",
            },
          })}
          error={errors?.password}
          helperText={errors?.password?.message}
          disabled={isUpdating}
          InputProps={{
            endAdornment: (
              <IconButton onClick={togglePassword}>
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            ),
          }}
        />
        <TextField
          type={showPassword ? "text" : "password"}
          variant="outlined"
          label="Confirm Password"
          {...register("confirmPassword", {
            required: "Confirm Password is required",
            validate: (value) =>
              value === password || "The passwords do not match",
          })}
          error={errors?.confirmPassword}
          helperText={errors?.confirmPassword?.message}
          disabled={isUpdating}
          InputProps={{
            endAdornment: (
              <IconButton onClick={togglePassword}>
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            ),
          }}
        />
        <Button type="submit" variant="contained" disabled={isUpdating}>
          Reset Password
        </Button>
      </Box>
    </Box>
  );
}
