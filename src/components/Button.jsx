import React from "react";
import Button from "@mui/material/Button";

export default function TheButton({ title }) {
  return (
    <Button
      variant="contained"
      color="primary"
      disableElevation
      sx={{
        bgcolor: "#eb5422c8",
        color: "white",
        border: "none",
        borderRadius: "50px",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.4)",
        padding: {
          xs: "8px 15px",
          sm: "8px 15px",
          md: "8px 15px",
          lg: "8px 50px",
          xl: "8px 50px",
        },
        fontWeight: "600",
        fontSize: {
          xs: "1.rem",
          sm: "1rem",
          md: "1rem",
          lg: "1rem",
          xl: "1.5rem",
        },
        ":hover": {
          bgcolor: "#eb5422",
        },
        width: {
          xs: "70vw",
          sm: "70vw",
          md: "100%",
          lg: "100%",
          xl: "100%",
        },
        height: {
          xs: "6vh",
          sm: "6vh",
          md: "100%",
          lg: "100%",
          xl: "100%",
        },
      }}
    >
      {title}
    </Button>
  );
}
