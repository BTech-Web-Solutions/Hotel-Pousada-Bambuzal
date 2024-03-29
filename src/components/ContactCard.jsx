import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const ContactCard = ({ src, alt, title, p }) => {
  return (
    <Box
      sx={{
        border: "3px solid #000",
        boxShadow: "5px 2px 30px -8px rgba(0,0,0,0.75)",
        bgcolor: "#181818",
        width: {
          xs: "15rem",
          sm: "15rem",
          md: "15rem",
          lg: "16rem",
          xl: "16rem",
        },
        height: {
          xs: "15rem",
          sm: "15rem",
          md: "15rem",
          lg: "16rem",
          xl: "16rem",
        },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        padding: "1rem",
        // flexWrap: "wrap",
      }}
    >
      <Image style={{ height: "50px", width: "50px" }} src={src} alt={alt} />
      <Typography
        sx={{
          margin: "0.5rem",
          textAlign: "center",
        }}
        variant="h5"
      >
        {title}
      </Typography>

      <Typography
        sx={{
          textAlign: "center",
          fontSize: {
            xs: "0.9rem",
            sm: "0.9rem",
            md: "0.9rem",
            lg: "1rem",
            xl: "1rem",
          },
          width: "100%",
          wordWrap: "break-word",
        }}
        variant="p"
      >
        {p}
      </Typography>
    </Box>
  );
};

export default ContactCard;
