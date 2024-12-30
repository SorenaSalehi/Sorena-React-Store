import {
  Box,
  Button,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useUpdateAccount } from "../Features/user/useUpdateAccount";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

export default function UpdateAccountForm() {
  const { updateAccount, isUpdating } = useUpdateAccount();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  function onSubmit({ email, password }) {
    console.log(email, password);
    updateAccount(
      { email, password },
      {
        onSuccess: () => {
          toast.success("Account Updated Successfully!!");
          reset();
          navigate(-1);
        },

        onError: (error) => {
          toast.error(error.message);
        },
      }
    );
  }

  const password = watch("password", "");
  function togglePassword() {
    setShowPassword((prev) => !prev);
  }

  return (
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
      <Button
        type="submit"
        variant="contained"
        sx={{ backgroundColor: "background.appBar" }}
      >
        Submit
      </Button>
    </Box>
  );
}
