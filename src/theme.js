import { Roboto } from "@next/font/google";
import { createTheme } from "@mui/material/styles";
<<<<<<< HEAD
import { red } from "@mui/material/colors";
=======
import { red, grey } from "@mui/material/colors";
>>>>>>> db-and-auth

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
<<<<<<< HEAD
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
=======
      main: "#212121",
      text: "#fff",
    },
    secondary: {
      main: "#181818",
>>>>>>> db-and-auth
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
