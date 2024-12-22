import React from "react";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { useSignup } from "../Features/authentication/useSignup";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

export default function SignupForm() {
  const { register, formState, handleSubmit, reset, watch } = useForm();
  const { errors } = formState;
  const { signup, isLoading } = useSignup();
  const navigate = useNavigate();

  const password = watch("password", "");

  function onSubmit({ name, email, password }) {
    signup(
      { name, email, password },
      {
        onSuccess: () => {
          toast.success(`You Have Been Successfully Signup ,Dear ${name} 🎉`);
          navigate("/");
        },
      }
    );
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
        {/* Name Field */}
        <Box
          component="div"
          sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
        >
          <TextField
            id="name"
            variant="outlined"
            label="Name"
            {...register("name", { required: "This field is required!" })}
            error={!!errors.name} // Highlight error in the TextField
            helperText={errors.name?.message} // Show error message
            disabled={isLoading}
          />
        </Box>

        {/* Email Field */}
        <Box
          component="div"
          sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
        >
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
        </Box>

        {/* Password Field */}
        <Box
          component="div"
          sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
        >
          <TextField
            id="password"
            variant="outlined"
            label="Password"
            type="password"
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
          />
          <TextField
            id="confirmPassword"
            variant="outlined"
            label="Confirm Password"
            type="password"
            {...register("confirmPassword", {
              required: "This field is required!",
              validate: (value) =>
                value === password || "The passwords do not match",
            })}
            error={!!errors.confirmPassword}
            helperText={errors?.confirmPassword?.message}
            disabled={isLoading}
          />
        </Box>

        <Button variant="contained" type="submit" disabled={isLoading}>
          Submit
        </Button>
      </Box>
    </Paper>
  );
}
