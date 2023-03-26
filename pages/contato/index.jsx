import { Box, Input, Link, TextField, Typography } from "@mui/material";
import React from "react";
import TheButton from "../../src/components/Button";
import ContactCard from "../../src/components/ContactCard";
import ContactInput from "../../src/components/ContactInput";
import Navbar from "../../src/components/Navbar";
import Image from "next/image";

import location from "../../src/images/Icons/location.svg";
import telephone from "../../src/images/Icons/telephone.svg";
import whatsapp from "../../src/images/Icons/whatsapp.svg";
import mail from "../../src/images/Icons/mail.svg";
import facebook from "../../src/images/Icons/facebook.svg";
import instagram from "../../src/images/Icons/instagram.svg";

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
            md: "flex-start",
            lg: "flex-start",
            xl: "flex-start",
          },
          justifyContent: "center",
          // bgcolor: "#8080801f",
          marginLeft: {
            xs: "0",
            sm: "0",
            md: "0",
            lg: "0",
            xl: "7%",
          },
          height: "89vh",
          width: {
            xs: "100%",
            sm: "100%",
            md: "50%",
            lg: "50%",
            xl: "30%",
          },
          padding: {
            xs: "0",
            sm: "0",
            md: "1rem",
            lg: "1rem",
            xl: "2rem",
          },
          position: "absolute",
          zIndex: "1",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: {
              xs: "0",
              sm: "0",
              md: "0rem",
              lg: "0.5rem",
              xl: "1rem",
            },
            marginLeft: {
              xs: "0",
              sm: "0",
              md: "2rem",
              lg: "4rem",
              xl: "2rem",
            },
          }}
        >
          <ContactCard
            src={location}
            alt="Icone-de-Localização"
            title="Nossa Localização"
            p="ESTRADA DO SANA Nº 2000 SANA, MACAÉ - RJ"
          />

          <ContactCard
            src={telephone}
            alt="Icone-de-Telefone"
            title="Número de Telefone"
            p="(22) 9 8811-2400"
          />

          <ContactCard
            src={whatsapp}
            alt="Icone-de-Whatsapp"
            title="Chame no Whatsapp"
            p="(22) 9 8811-2400"
          />

          <ContactCard
            src={mail}
            alt="Icone-de-Email"
            title="Envie um Email"
            p="hotelpousadabambuzal@gmail.com"
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly",
            // bgcolor: "#8080801f",
            width: {
              xs: "100%",
              sm: "100%",
              md: "60%",
              lg: "70%",
              xl: "70%",
            },
            height: {
              xs: "100%",
              sm: "100%",
              md: "100%",
              lg: "15%",
              xl: "15%",
            },
            zIndex: "1",
            marginLeft: {
              xs: "0",
              sm: "0",
              md: "2rem",
              lg: "4rem",
              xl: "2rem",
            },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "#fff",
            }}
          >
            Nos siga nas redes sociais
          </Typography>

          <Box
            sx={{
              display: "flex",
              width: "50%",
              justifyContent: "space-evenly",
            }}
          >
            <Link
              href="https://www.facebook.com/HotelPousadaBambuzal"
              target="_blank"
            >
              <Box
                sx={{
                  bgcolor: "#101010",
                  padding: "0.5rem",
                  borderRadius: "50%",
                }}
              >
                <Image
                  style={{ height: "30px", width: "30px" }}
                  src={facebook}
                  alt="Icone-de-Facebook"
                />
              </Box>
            </Link>

            <Link href="https://www.instagram.com/hpbambuzal/" target="_blank">
              <Box
                sx={{
                  bgcolor: "#101010",
                  padding: "0.5rem",
                  borderRadius: "50%",
                }}
              >
                <Image
                  style={{ height: "30px", width: "30px" }}
                  src={instagram}
                  alt="Icone-de-Instagram"
                />
              </Box>
            </Link>
          </Box>
        </Box>
      </Box>

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
          marginRight: {
            xs: "0",
            sm: "0",
            md: "0",
            lg: "0",
            xl: "12%",
          },
        }}
      >
        <Box
          sx={{
            border: "2px solid #000",
            display: "flex",
            flexDirection: "column",
            alignItems: "",
            justifyContent: "space-evenly",
            bgcolor: "#181818",
            width: {
              xs: "100%",
              sm: "60%",
              md: "50%",
              lg: "60%",
              xl: "50%",
            },
            color: "#fff",
            padding: "8rem",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              marginBottom: "2rem",
              marginTop: "-5rem",
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

          <TheButton title="Enviar" />
        </Box>
      </Box>
    </>
  );
};

export default index;
