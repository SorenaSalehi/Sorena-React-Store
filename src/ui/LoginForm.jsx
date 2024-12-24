import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useLogin } from "../Features/authentication/useLogin";
import { useAuthContext } from "../context/AuthProvider";
import { NavLink } from "react-router";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function LoginForm() {
  const { register, formState, reset, handleSubmit } = useForm();
  const { errors } = formState;
  const { login, isLogin } = useLogin();
  const { setUser } = useAuthContext();
  const [showPassword, setShowPassword] = useState(false);
  console.log(isLogin);
  function onSubmit({ email, password }) {
    login(
      { email, password },
      {
        onSuccess: ({ user }) => {
          setUser(user);
        },
      }
    );
  }

  function togglePassword() {
    setShowPassword((prev) => !prev);
  }

  return (
    <Paper elevation={5}>
      <Box
        onSubmit={handleSubmit(onSubmit)}
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          padding: "5rem",
        }}
      >
        <Box
          component="div"
          sx={{ display: "flex", alignItems: "center", gap: "1rem" }}
        >
          <TextField
            id="email"
            variant="outlined"
            label="email"
            defaultValue="hehima2597@lofiey.com"
            sx={{ flexGrow: "1" }}
            {...register("email", {
              required: "this field is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "please provide a valid email",
              },
            })}
            error={errors.email}
            helperText={errors.email?.message}
            disabled={isLogin}
          />
        </Box>
        <Box
          component="div"
          sx={{ display: "flex", alignItems: "center", gap: "1rem" }}
        >
          <TextField
            id="password"
            variant="outlined"
            label="password"
            type={showPassword ? "text" : "password"}
            defaultValue="12345678"
            sx={{ flexGrow: "1" }}
            {...register("password", {
              required: "password is required!!",
              minLength: {
                value: 8,
                message: "Password must be at least 8 Characters Long!!",
              },
            })}
            error={errors.password}
            helperText={errors.password?.message}
            disabled={isLogin}
            InputProps={{
              endAdornment: (
                <IconButton onClick={togglePassword}>
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              ),
            }}
          />
        </Box>{" "}
        <Button variant="contained" type="submit" disabled={isLogin}>
          {isLogin ? <CircularProgress /> : "Login"}
        </Button>
        <NavLink to="/guest">Be My Quest</NavLink>
      </Box>
    </Paper>
  );
}
