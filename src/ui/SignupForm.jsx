import React, { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useSignup } from "../Features/authentication/useSignup";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function SignupForm() {
  const {
    register,
    formState,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const { signup, isLoading } = useSignup();
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  function onSubmit({ email, password }) {
    signup(
      { email, password },
      {
        onSuccess: () => {
          toast.success(`You Have Been Successfully Signup ,Dear ${name} 🎉`);
          navigate(-1);
        },
      }
    );
  }

  const password = watch("password", "");
  function togglePassword() {
    setShowPassword((prev) => !prev);
  }

  return (
    <Paper elevation={5}>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          padding: "5rem",
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Email Field */}

        <TextField
          id="email"
          variant="outlined"
          label="Email"
          {...register("email", {
            required: "This field is required!",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please provide a valid Email!",
            },
          })}
          error={!!errors.email}
          helperText={errors.email?.message}
          disabled={isLoading}
        />

        {/* Password Field */}

        <TextField
          id="password"
          variant="outlined"
          label="Password"
          type={showPassword ? "text" : "password"}
          {...register("password", {
            required: "This field is required!",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters long.",
            },
          })}
          error={!!errors.password}
          helperText={errors.password?.message}
          disabled={isLoading}
          InputProps={{
            endAdornment: (
              <IconButton onClick={togglePassword}>
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            ),
          }}
        />
        <TextField
          id="confirmPassword"
          variant="outlined"
          label="Confirm Password"
          type={showPassword ? "text" : "password"}
          {...register("confirmPassword", {
            required: "This field is required!",
            validate: (value) =>
              value === password || "The passwords do not match",
          })}
          error={!!errors.confirmPassword}
          helperText={errors?.confirmPassword?.message}
          disabled={isLoading}
          InputProps={{
            endAdornment: (
              <IconButton onClick={togglePassword}>
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            ),
          }}
        />

        <Button variant="contained" type="submit" disabled={isLoading}>
          Submit
        </Button>
      </Box>
    </Paper>
  );
}
