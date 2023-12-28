import React from "react";
import Navbar from "../../src/components/Navbar";
import Footer from "../../src/components/Footer";
import AcomodacaoCard from "../../src/components/AcomodacaoCard";
import { Box } from "@mui/material";

import SuiteSimplesBG from "../../src/images/SuiteSimples/1.jpg";
import ChaleDuploBG from "../../src/images/ChaleDuplo/1.jpg";
import ChaleTriploBG from "../../src/images/ChaleTriplo/1.jpg";
import ChaleFamiliaBG from "../../src/images/ChaleFamilia/1.jpg";

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
          image="https://media.githubusercontent.com/media/BTech-Web-Solutions/Hotel-Pousada-Bambuzal/5012d1dc8326958cd79ff6cf51fe76b7877b884d/src/images/ChaleDuplo/chale_duplo.jpg"
          title="Suíte Simples"
          desc="Suítes com Vista para o rio, uma ótima opção para se ouvir as
          águas do rio Sana."
          linkTo="1"
        />

        <AcomodacaoCard
          image=""
          title="Chalé Duplo"
          desc="Chalé composto por garagem privativa, varanda com rede onde se
          pode desfrutar de uma paisagem deslumbrante das montanhas,
          piscinas e do Rio Sana."
          linkTo="2"
        />

        <AcomodacaoCard
          image=""
          title="Chalé Triplo"
          desc="Chalé composto por garagem privativa, varanda com rede onde se
          pode desfrutar de uma paisagem deslumbrante. Além de um amplo
          espaço interno."
          linkTo="3"
        />

        <AcomodacaoCard
          image=""
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
