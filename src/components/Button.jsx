import React from "react";
import Button from "@mui/material/Button";

export default function TheButton({ title, onClick }) {
  return (
    <Button
      onClick={onClick}
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
        fontWeight: "400",
        fontSize: {
          xs: "0.7rem",
          sm: "1rem",
          md: "1rem",
          lg: "1rem",
          xl: "1.5rem",
        },
        ":hover": {
          bgcolor: "#eb5422",
        },
      }}
    >
      {title}
    </Button>
  );
}

// background-color: #eb5422c8;
// color: white;
// border: none;
// border-radius: 50px;
// box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
// padding: 8px 50px;
// font-weight: 100;
// font-size: 1.5rem;
// :hover {
//   background-color: #eb5422;
// }
