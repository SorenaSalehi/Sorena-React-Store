import React from "react";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { useSignup } from "../Features/authentication/useSignup";
import { useNavigate } from "react-router";

export default function SignupForm() {
  const { register, formState, handleSubmit, reset } = useForm();
  const { errors } = formState;
  const { signup, isLoading } = useSignup();
  const navigate = useNavigate();

  async function onSubmit({ name, lastName, email, password }) {
    const success = await signup({ name, lastName, email, password });

    if (success) {
      reset(); // Reset form fields
      navigate("/"); // Navigate to the home page
    } else {
      console.error("Signup failed!"); // Handle errors if needed
    }
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
          <label htmlFor="name">Name: *</label>
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

        {/* Last Name Field */}
        <Box
          component="div"
          sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
        >
          <label htmlFor="lastName">Last Name: *</label>
          <TextField
            id="lastName"
            variant="outlined"
            label="Last Name"
            {...register("lastName", { required: "This field is required!" })}
            error={!!errors.lastName}
            helperText={errors.lastName?.message}
            disabled={isLoading}
          />
        </Box>

        {/* Email Field */}
        <Box
          component="div"
          sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
        >
          <label htmlFor="email">Email: *</label>
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
          <label htmlFor="password">Password: *</label>
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
        </Box>

        <Button variant="contained" type="submit" disabled={isLoading}>
          Submit
        </Button>
      </Box>
    </Paper>
  );
}
