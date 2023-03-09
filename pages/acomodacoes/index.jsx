import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Navbar from "../../src/components/Navbar";
import Footer from "../../src/components/Footer";
import suiteEntrada from "../../src/images/SuiteSimples/1.jpg";

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
        <Box>
          <Card
            sx={{
              maxWidth: "345px",
              color: "white",
              backgroundColor: "#1a1a1a",
              padding: "2rem",
              margin: "2rem",
              borderRadius: "1rem",
            }}
          >
            <CardActionArea>
              <CardMedia
                sx={{ borderRadius: "1rem" }}
                component="img"
                alt="Suíte Simples"
                height="140"
                image="https://github.com/brodrigues0ll/Hotel-Pousada-Bambuzal/blob/main/src/images/SuiteSimples/1.jpg?raw=true"
                title="Suíte Simples"
              />
              <CardContent sx={{ bgcolor: "#1A1A1A", color: "white" }}>
                <Typography gutterBottom variant="h4" component="h2">
                  Suíte Simples
                </Typography>
                <Typography variant="body2" color="white" component="p">
                  Suítes com Vista para o rio, uma ótima opção para se ouvir as
                  águas do rio Sana. <br />
                  <br />
                  <b>Configuração do Quarto:</b> <br />
                  1 Cama de Casal <br />
                  <b>Tamanho do Quarto:</b> <br /> 20m²
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions sx={{ bgcolor: "#1A1A1A" }}>
              <Button size="large" sx={{ color: "#eb5322" }}>
                Ver Mais
              </Button>
            </CardActions>
          </Card>
        </Box>

        <Box>
          <Card
            sx={{
              maxWidth: "345px",
              color: "white",
              backgroundColor: "#1a1a1a",
              padding: "2rem",
              margin: "2rem",
              borderRadius: "1rem",
            }}
          >
            <CardActionArea>
              <CardMedia
                sx={{ borderRadius: "1rem" }}
                component="img"
                alt="Chalé Duplo"
                height="140"
                image="https://github.com/brodrigues0ll/Hotel-Pousada-Bambuzal/blob/main/src/images/ChaleDuplo/1.jpg?raw=true"
                title="Chalé Duplo"
              />
              <CardContent sx={{ bgcolor: "#1A1A1A", color: "white" }}>
                <Typography gutterBottom variant="h4" component="h2">
                  Chalé Duplo
                </Typography>
                <Typography variant="body2" color="white" component="p">
                  Chalé composto por garagem privativa, varanda com rede onde se
                  pode desfrutar de uma paisagem deslumbrante das montanhas,
                  piscinas e do Rio Sana. <br />
                  <br />
                  <b>Configuração do Quarto:</b> <br />
                  1 Cama de Casal <br />
                  1 Mesa redonda de dois Lugares <br />
                  <b>Tamanho do Quarto:</b> <br /> 20m²
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions sx={{ bgcolor: "#1A1A1A" }}>
              <Button size="large" sx={{ color: "#eb5322" }}>
                Ver Mais
              </Button>
            </CardActions>
          </Card>
        </Box>

        <Box>
          <Card
            sx={{
              maxWidth: "345px",
              color: "white",
              backgroundColor: "#1a1a1a",
              padding: "2rem",
              margin: "2rem",
              borderRadius: "1rem",
            }}
          >
            <CardActionArea>
              <CardMedia
                sx={{ borderRadius: "1rem" }}
                component="img"
                alt="Chalé Triplo"
                height="140"
                image="https://github.com/brodrigues0ll/Hotel-Pousada-Bambuzal/blob/main/src/images/ChaleTriplo/1.jpg?raw=true"
                title="Chalé Triplo"
              />
              <CardContent sx={{ bgcolor: "#1A1A1A", color: "white" }}>
                <Typography gutterBottom variant="h4" component="h2">
                  Chalé Triplo
                </Typography>
                <Typography variant="body2" color="white" component="p">
                  Chalé composto por garagem privativa, varanda com rede onde se
                  pode desfrutar de uma paisagem deslumbrante das montanhas,
                  piscinas e do Rio Sana. <br />
                  <br />
                  <b>Configuração do Quarto:</b> <br />
                  1 Cama de Casal <br />
                  1 Cama de Solteiro <br />
                  1 Mesa redonda de dois Lugares <br />
                  <b>Tamanho do Quarto:</b> <br /> 20m²
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions sx={{ bgcolor: "#1A1A1A" }}>
              <Button size="large" sx={{ color: "#eb5322" }}>
                Ver Mais
              </Button>
            </CardActions>
          </Card>
        </Box>

        <Box>
          <Card
            sx={{
              maxWidth: "345px",
              color: "white",
              backgroundColor: "#1a1a1a",
              padding: "2rem",
              margin: "2rem",
              borderRadius: "1rem",
            }}
          >
            <CardActionArea>
              <CardMedia
                sx={{ borderRadius: "1rem" }}
                component="img"
                alt="Suíte Simples"
                height="140"
                image="https://github.com/brodrigues0ll/Hotel-Pousada-Bambuzal/blob/main/src/images/SuiteSimples/1.jpg?raw=true"
                title="Suíte Simples"
              />
              <CardContent sx={{ bgcolor: "#1A1A1A", color: "white" }}>
                <Typography gutterBottom variant="h4" component="h2">
                  Suíte Simples
                </Typography>
                <Typography variant="body2" color="white" component="p">
                  Suítes com Vista para o rio, uma ótima opção para se ouvir as
                  águas do rio Sana. <br />
                  <br />
                  <b>Configuração do Quarto:</b> <br />
                  1 Cama de Casal <br />
                  <b>Tamanho do Quarto:</b> <br /> 20m²
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions sx={{ bgcolor: "#1A1A1A" }}>
              <Button size="large" sx={{ color: "#eb5322" }}>
                Ver Mais
              </Button>
            </CardActions>
          </Card>
        </Box>
      </Box>

      <Footer />
    </>
  );
};

export default index;
