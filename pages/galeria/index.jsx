import { Box, Divider, Typography } from "@mui/material";
import Footer from "../../src/components/Footer";
import React from "react";
import Navbar from "../../src/components/Navbar";
import LobbyGallery from "../../src/components/galeria/LobbyGallery";
import Suites from "../../src/components/galeria/Suites";
import Chales from "../../src/components/galeria/Chales";
import Piscina from "../../src/components/galeria/Piscina";
import Ofuro from "../../src/components/galeria/Ofuro";
import Restaurante from "../../src/components/galeria/Restaurante";
import Rio from "../../src/components/galeria/Rio";
import EspacoExterno from "../../src/components/galeria/EspacoExterno";

const index = () => {
  return (
    <>
      <Navbar />

      <Box
        sx={{
          color: "white",
          padding: {
            xs: "1.5rem",
            sm: "1rem 5rem",
            md: "1rem 5rem",
            lg: "1rem 5rem",
            xl: "1rem 5rem",
          },
          width: {
            xs: "100%",
            sm: "100%",
            md: "80%",
            lg: "70%",
            xl: "70%",
          },
          margin: "auto",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          Galeria de fotos do Hotel Pousada Bambuzal
        </Typography>

        <Typography
          variant="p"
          sx={{
            display: "flex",
            margin: "1rem 0",
            marginBottom: "3rem",
            fontSize: {
              xs: "1rem",
              sm: "1.2rem",
              md: "1.2rem",
              lg: "1.5rem",
              xl: "1.5rem",
            },
          }}
        >
          Bem-vindo à nossa galeria de fotos do Hotel Pousada Bambuzal! Aqui,
          você encontrará uma seleção de imagens que mostram nossos chalés,
          suítes, áreas de lazer e outras instalações. Esperamos que essas fotos
          possam lhe dar uma ideia melhor de como é se hospedar conosco e
          ajudá-lo a planejar sua próxima viagem.
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <LobbyGallery />

          <div
            style={{
              width: "100%",
              height: "1px",
              border: "1px solid #a5a5a5",
              margin: "2rem 0",
            }}
          />

          <EspacoExterno />

          <div
            style={{
              width: "100%",
              height: "1px",
              border: "1px solid #a5a5a5",
              margin: "2rem 0",
            }}
          />

          <Suites />

          <div
            style={{
              width: "100%",
              height: "1px",
              border: "1px solid #a5a5a5",
              margin: "2rem 0",
            }}
          />

          <Chales />

          <div
            style={{
              width: "100%",
              height: "1px",
              border: "1px solid #a5a5a5",
              margin: "2rem 0",
            }}
          />

          <Rio />

          <div
            style={{
              width: "100%",
              height: "1px",
              border: "1px solid #a5a5a5",
              margin: "2rem 0",
            }}
          />

          <Ofuro />

          <div
            style={{
              width: "100%",
              height: "1px",
              border: "1px solid #a5a5a5",
              margin: "2rem 0",
            }}
          />

          <Piscina />

          <div
            style={{
              width: "100%",
              height: "1px",
              border: "1px solid #a5a5a5",
              margin: "2rem 0",
            }}
          />

          <Restaurante />
        </Box>
      </Box>

      <Footer />
    </>
  );
};

export default index;
