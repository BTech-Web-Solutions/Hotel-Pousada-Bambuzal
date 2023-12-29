import React, { useEffect } from "react";
import { Box, Paper, Typography } from "@mui/material";
import { useRouter } from "next/router";

const Section = ({ title, onClick, className }) => {
  const router = useRouter();

  return (
    <Box
      sx={{
        color: "#fff",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "0.5rem 0.5rem",
        borderRadius: "0.5rem",
        transition: "background-color 0.3s",
        bgcolor: "#3333",

        "&:hover": {
          backgroundColor: "#5555",
        },

        "&.active, &:active": {
          backgroundColor: "#8888",
        },
      }}
      onClick={onClick}
      className={className}
    >
      <Typography variant="h5">{title}</Typography>
    </Box>
  );
};

export default Section;
