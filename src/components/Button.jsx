import React from "react";
import Button from "@mui/material/Button";

export default function TheButton({ title, width, fontSize }) {
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
          sm: "8px 28px",
          md: "8px 28px",
          lg: "8px 50px",
          xl: "8px 50px",
        },
        fontWeight: "400",
        fontSize: { ...fontSize },
        ":hover": {
          bgcolor: "#eb5422",
        },
        width: { ...width },
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
