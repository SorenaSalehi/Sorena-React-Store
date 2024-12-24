import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useResetPassword } from "../Features/authentication/useResetPassword";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthProvider";

export default function ForgotPassword() {
  const { resetPassword, isPending } = useResetPassword();

  const {
    reset,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  function onSubmit({ email }) {
    resetPassword(
      { email },
      {
        onSuccess: () => {
          toast.success("Check your email for reset password link", {
            duration: 5000,
          });
          reset();
        },

        onError: (error) => {
          toast.error(error.message);
        },
      }
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        gap: "1rem",
        padding: "3rem",
      }}
    >
      <Typography component="h4" variant="h4">
        Reset Password
      </Typography>
      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          type="email"
          placeholder="Email"
          {...register("email", {
            required: true,
            pattern: {
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
              message: "Invalid email address",
            },
          })}
          error={errors?.email}
          helperText={errors?.email?.message}
          disabled={isPending}
        />
        <Button type="submit" variant="contained" disabled={isPending}>
          Reset Password
        </Button>
      </Box>
    </Box>
  );
}
