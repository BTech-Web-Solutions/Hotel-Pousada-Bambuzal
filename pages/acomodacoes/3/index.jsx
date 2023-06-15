import { Box, Typography } from "@mui/material";
import React from "react";
import Navbar from "../../../src/components/Navbar";

const index = () => {
  return (
    <>
      <Navbar />

      <Box>
        <Typography variant="h1">Chalé Triplo</Typography>
      </Box>
    </>
  );
};

export default index;
