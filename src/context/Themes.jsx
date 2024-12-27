import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light", // Light mode
    primary: {
      main: "#1976d2", // Customize primary color
    },
    secondary: {
      main: "#9c27b0", // Customize secondary color
    },
    background: {
      default: "#f5f5f5", // Default background color
      paper: "#ffffff", // Paper background color
    },
    text: {
      primary: "#000000", // Primary text color
      secondary: "#5f6368", // Secondary text color
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Arial', sans-serif", // Custom font family
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark", // Dark mode
    primary: {
      main: "#90caf9",
    },
    secondary: {
      main: "#f48fb1",
    },

    background: {
      default: "#121212", // Dark background
      paper: "#1d1d1d",
      appBar: "#83040c",
    },
    text: {
      primary: "#ffffff", // Primary text in dark mode
      secondary: "#aaaaaa",
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Arial', sans-serif",
  },
});

export { lightTheme, darkTheme };
