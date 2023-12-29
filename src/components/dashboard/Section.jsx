import React from "react";
import { Paper, Typography } from "@mui/material";
import { useRouter } from "next/router";

const Section = ({ title, href }) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <Paper
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
      elevation={3}
      className={isActive ? "active" : ""}
      onClick={handleClick}
    >
      <Typography variant="h5">{title}</Typography>
    </Paper>
  );
};

export default Section;
