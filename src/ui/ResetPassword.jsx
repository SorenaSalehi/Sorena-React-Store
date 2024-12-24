import { Paper, Typography } from "@mui/material";
import React from "react";
import UpdateAccountForm from "./UpdateAccountForm";

export default function ResetPassword() {
  return (
    <Paper sx={{ p: 2, textAlign: "center" }}>
      <Typography variant="h6">Enter Your New Password Here:</Typography>
      <UpdateAccountForm />
    </Paper>
  );
}
