import React from "react";
import Navbar from "../../src/components/Navbar";
import Footer from "../../src/components/Footer";
import AcomodacaoCard from "../../src/components/AcomodacaoCard";
import { Box } from "@mui/material";

const images = () => {
  const SuiteSimplesBG = new URL(
    "../../src/images/SuiteSimples/1.jpg",
    import.meta.url
  );

  const ChaleDuploBG = new URL(
    "../../src/images/ChaleDuplo/1.jpg",
    import.meta.url
  );

  const ChaleTriploBG = new URL(
    "../../src/images/ChaleTriplo/1.jpg",
    import.meta.url
  );

  const ChaleFamiliaBG = new URL(
    "../../src/images/ChaleFamilia/1.jpg",
    import.meta.url
  );

  return { SuiteSimplesBG, ChaleDuploBG, ChaleTriploBG, ChaleFamiliaBG };
};

const index = () => {
  return (
    <>
      <Navbar />

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <AcomodacaoCard
          image={images().SuiteSimplesBG}
          title="Suíte Simples"
          desc="Suítes com Vista para o rio, uma ótima opção para se ouvir as
          águas do rio Sana."
          linkTo="1"
        />

        <AcomodacaoCard
          image={images().ChaleDuploBG}
          title="Chalé Duplo"
          desc="Chalé composto por garagem privativa, varanda com rede onde se
          pode desfrutar de uma paisagem deslumbrante das montanhas,
          piscinas e do Rio Sana."
          linkTo="2"
        />

        <AcomodacaoCard
          image={images().ChaleTriploBG}
          title="Chalé Triplo"
          desc="Chalé composto por garagem privativa, varanda com rede onde se
          pode desfrutar de uma paisagem deslumbrante. Além de um amplo
          espaço interno."
          linkTo="3"
        />

        <AcomodacaoCard
          image={images().ChaleFamiliaBG}
          title="Chalé Família"
          desc="Temos opções para quem ama viajar em família e que querem
          ficar juntinhos. Com dois quartos, nossos chalés família são
          perfeitos para acomodar todos com conforto."
          linkTo="4"
        />
      </Box>

      <Footer />
    </>
  );
};

export default index;
