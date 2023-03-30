import { Box } from "@mui/material";
import React from "react";
import AcomodacoesCard from "../../src/components/AcomodacoesCard";
import Navbar from "../../src/components/Navbar";

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
        {/* Card1 */}
        <AcomodacoesCard
          src="https://github.com/brodrigues0ll/Hotel-Pousada-Bambuzal/blob/main/src/images/SuiteSimples/1.jpg?raw=true"
          title="Suíte Simples"
          desc="Suítes com Vista para o rio, uma ótima opção para se ouvir as
          águas do rio Sana."
          configTitle="Configuração do Quarto:"
          configDesc=" 1 Cama de Casal"
          sizeTitle="Tamanho do Quarto:"
          sizeDesc="20m²"
          goTo={1}
        />

        {/* Card2 */}
        <AcomodacoesCard
          src="https://github.com/brodrigues0ll/Hotel-Pousada-Bambuzal/blob/main/src/images/ChaleDuplo/1.jpg?raw=true"
          title="Chalé Duplo"
          desc="Chalé composto por garagem privativa, varanda com rede onde se
          pode desfrutar de uma paisagem deslumbrante das montanhas,
          piscinas e do Rio Sana."
          configTitle="Configuração do Quarto:"
          configDesc=" 1 Cama de Casal"
          configDesc1="1 Mesa redonda de dois Lugares"
          sizeTitle="Tamanho do Quarto:"
          sizeDesc="20m²"
          goTo={2}
        />

        {/* Card3 */}
        <AcomodacoesCard
          src="https://github.com/brodrigues0ll/Hotel-Pousada-Bambuzal/blob/main/src/images/ChaleTriplo/1.jpg?raw=true"
          title="Chalé Triplo"
          desc="Chalé composto por garagem privativa, varanda com rede onde se
          pode desfrutar de uma paisagem deslumbrante. Além de um amplo
          espaço interno."
          configTitle="Configuração do Quarto:"
          configDesc=" 1 Cama de Casal"
          configDesc1="1 Cama de Solteiro"
          configDesc2="1 Mesa redonda de dois Lugares"
          sizeTitle="Tamanho do Quarto:"
          sizeDesc="20m²"
          goTo={3}
        />

        {/* Card4 */}
        <AcomodacoesCard
          src="https://github.com/brodrigues0ll/Hotel-Pousada-Bambuzal/blob/main/src/images/ChaleFamilia/1.jpg?raw=true"
          title="Chalé Família"
          desc="Temos opções para quem ama viajar em família e que querem
          ficar juntinhos. Com dois quartos, nossos chalés família são
          perfeitos para acomodar todos com conforto."
          configTitle="Configuração do Quarto:"
          configDesc=" 1 Cama de Casal"
          configDesc1="1 Cama de Solteiro"
          sizeTitle="Tamanho do Quarto:"
          sizeDesc="20m²"
          goTo={4}
        />
      </Box>
    </>
  );
};

export default index;
