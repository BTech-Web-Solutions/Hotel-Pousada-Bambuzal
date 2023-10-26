import { Roboto } from "@next/font/google";
import { createTheme } from "@mui/material/styles";
import { red, grey } from "@mui/material/colors";

export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#212121",
      text: "#fff",
    },
    secondary: {
      main: "#181818",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
