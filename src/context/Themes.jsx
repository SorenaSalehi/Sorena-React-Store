import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light", // Light mode
    primary: {
      main: "#FF0000", // Customize primary color
    },
    secondary: {
      main: "#000000", // Customize secondary color
    },
    background: {
      default: "#f5f5f5", // Default background color
      paper: "#ffffff", // Paper background color
      paperFade: "#ffffff99", // Paper background color
      appBar: "#03AED2",
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
      main: "#000000",
    },
    secondary: {
      main: "#FF0000",
    },

    background: {
      default: "#000000", // Dark background
      paper: "#3D0000",
      paperFade: "#3D000099",
      appBar: "#950101",
    },
    text: {
      primary: "#ffffff", // Primary text in dark mode
      secondary: "#aaaaaa",
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Arial', sans-serif",
    caption: {
      fontSize: "0.5rem",
    },
  },
  components: {
    MuiRating: {
      styleOverrides: {
        icon: {
          fontSize: "0.5rem", // Custom size for Rating icons
        },
      },
    },
  },
});

export { lightTheme, darkTheme };
