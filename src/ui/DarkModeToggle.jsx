import * as React from "react";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useDarkMode } from "../context/DarkModeProvider";
import { Fab } from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";

export default function DarkModeToggle() {
  const { isDarkMode, handleToggle } = useDarkMode();

  return <Fab>{isDarkMode ? <LightMode /> : <DarkMode />}</Fab>;
}
