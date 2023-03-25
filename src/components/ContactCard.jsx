import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const ContactCard = ({ src, alt, title, p }) => {
  return (
    <Box
      sx={{
        border: "2px solid #000",
        bgcolor: "#181818",
        width: "16rem",
        height: "16rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        padding: "1rem",
      }}
    >
      <Image style={{ height: "50px" }} src={src} alt={alt} />
      <Typography sx={{ margin: "0.5rem", textAlign: "center" }} variant="h5">
        {title}
      </Typography>

      <Typography sx={{ textAlign: "center" }} variant="p">
        {p}
      </Typography>
    </Box>
  );
};

export default ContactCard;
