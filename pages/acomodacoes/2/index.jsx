import { Typography, Container, Box, Slider, Slide } from "@mui/material";
import React from "react";
import Navbar from "../../../src/components/Navbar";
import Footer from "../../../src/components/Footer";
import Image from "next/image";
import chaleDuplo1 from "../../../src/images/ChaleDuplo/1.jpg";

const index = () => {
  return (
    <>
      <Navbar />
      <Container
        sx={{
          marginTop: "3rem",
          marginBottom: "3rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              sm: "column",
              md: "row",
              lg: "row",
              xl: "row",
            },
            gap: "5rem",
          }}
        >
          <Box
            sx={{
              color: "#fff",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <Typography variant="h3">Chalé Duplo</Typography>

            <Typography variant="body1">
              Nossos chalés são compostos por garagem privativa, varando com
              rede onde se pode desfrutar de uma paisagem deslumbrante das
              montanhas, piscinas e do Rio Sana. Amplo espaço interno com camas
              tamanho queen, colchões magnéticos com infravermelho que
              proporcionará uma noite de sono perfeita, TV a cabo com 32",
              frigobar, ar condicionado e o chuveiro com água de nascentes sendo
              aquecido com energia solar contribuindo com sustentabilidade do
              planeta.
            </Typography>
          </Box>

          <Image
            src={chaleDuplo1}
            alt="Test"
            sizes="(min-width: 100px) 100vw,"
            width={600}
            height={400}
          />
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default index;
