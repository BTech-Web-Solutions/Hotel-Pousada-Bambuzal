import { Box, Input, TextField, Typography } from "@mui/material";
import React from "react";
import TheButton from "../../src/components/Button";
import ContactInput from "../../src/components/ContactInput";
import Navbar from "../../src/components/Navbar";

const index = () => {
  return (
    <>
      <Navbar position="sticky" />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: {
            xs: "center",
            sm: "center",
            md: "flex-end",
            lg: "flex-end",
            xl: "flex-end",
          },
          justifyContent: "center",
          // bgcolor: "#505050",
          height: "85vh",
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
            width: {
              xs: "100%",
              sm: "60%",
              md: "50%",
              lg: "50%",
              xl: "50%",
            },
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
              textAlign: "center",
              fontSize: {
                xs: "1.8rem",
                sm: "2.5rem",
                md: "2.5rem",
                lg: "2.9rem",
                xl: "2.5rem",
              },
            }}
          >
            Entre em contato conosco
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
