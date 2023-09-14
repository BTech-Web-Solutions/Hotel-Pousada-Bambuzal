import { Typography, Container, Box, Slider, Slide } from "@mui/material";
import React from "react";
import Navbar from "../../../src/components/Navbar";
import Footer from "../../../src/components/Footer";
import ImageSlider from "../../../src/components/ImageSlider";

import photo1 from "../../../src/images/AcomodPages/ChaleFamilia/1.jpg";
import photo2 from "../../../src/images/AcomodPages/ChaleFamilia/2.jpg";
import photo3 from "../../../src/images/AcomodPages/ChaleFamilia/3.jpg";

const images = [photo1, photo2, photo3];

const index = () => {
  return (
    <>
      <Navbar />
      <Container
        sx={{
          marginTop: "3rem",
          marginBottom: "3rem",
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "column",
            md: "row",
            lg: "row",
            xl: "row",
          },
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

            width: {
              xs: "100%",
              sm: "100%",
              md: "70%",
              lg: "80%",
              xl: "80%",
            },
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
            <Typography variant="h3">Chalé Família</Typography>

            <Typography
              variant="body1"
              sx={{
                marginBottom: "1rem",
              }}
            >
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
        </Box>

        <ImageSlider images={images} />
      </Container>
      <Footer />
    </>
  );
};

export default index;
