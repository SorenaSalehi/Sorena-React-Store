import { Box, Button, IconButton, Paper, TextField } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useUpdateAccount } from "../Features/user/useUpdateAccount";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router";

export default function AccountSetting() {
  const { updateAccount, isUpdating } = useUpdateAccount();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm();

  const password = watch("password", "");
  function onSubmit({ email, password }) {
    updateAccount({
      email,
      password,
      onSuccess: () => {
        toast.success(`You Have Been Successfully Updated Your Account 🎉`);

        navigate(-1);
      },

      onError: (error) => {
        toast.error(error.message);
      },
    });
  }

  function togglePassword() {
    setShowPassword((prev) => !prev);
  }

  return (
    <Paper sx={{ p: 2 }}>
      <h1>Account Setting</h1>
      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column", gap: 2, p: 2 }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          {...register("email", {
            required: "Email is Required!!",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please provide a valid Email!",
            },
          })}
          error={errors?.email}
          helperText={errors?.email?.message}
          disabled={isUpdating}
        />
        <TextField
          id="password"
          label="password"
          type={showPassword ? "text" : "password"}
          variant="outlined"
          {...register("password", {
            required: "Password is Required!!",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters long.",
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
          id="confirmedPassword"
          label="Confirm Password"
          type={showPassword ? "text" : "password"}
          variant="outlined"
          {...register("confirmedPassword", {
            required: "Password is Required!!",
            validate: (value) =>
              value === password || "The passwords do not match",
          })}
          error={!!errors.confirmedPassword}
          helperText={errors?.confirmedPassword?.message}
          disabled={isUpdating}
        />
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </Box>
    </Paper>
  );
}
