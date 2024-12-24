import { Paper, Typography } from "@mui/material";
import React from "react";
import UpdateAccountForm from "../ui/UpdateAccountForm";

export default function AccountSetting() {
  return (
    <Paper sx={{ p: 2, textAlign: "center" }}>
      <Typography variant="h4">Account Setting</Typography>
      <Typography variant="h6">
        You Can Change Your Email And Password Here:
      </Typography>
      <UpdateAccountForm />
    </Paper>
  );
}
