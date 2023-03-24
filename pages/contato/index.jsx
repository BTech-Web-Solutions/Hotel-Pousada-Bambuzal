import { Box, Input, TextField, Typography } from "@mui/material";
import React from "react";
import TheButton from "../../src/components/Button";
import ContactInput from "../../src/components/ContactInput";
import Navbar from "../../src/components/Navbar";

const index = () => {
  return (
    <>
      <Navbar position="0" />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          justifyContent: "center",
          // bgcolor: "#505050",
          height: "89vh",
          padding: "2rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "#181818",
            width: "50%",
            color: "#fff",
            padding: "2rem",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              marginBottom: "2rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bold",
            }}
          >
            Contato
          </Typography>

          <ContactInput id="nome" label="Nome" variant="outlined" />

          <ContactInput id="email" label="Email" variant="outlined" />

          <ContactInput id="telefone" label="Telefone" variant="outlined" />

          <ContactInput
            id="mensagem"
            label="Mensagem"
            variant="outlined"
            rows={6}
          />
        </Box>
      </Box>
    </>
  );
};

export default index;
