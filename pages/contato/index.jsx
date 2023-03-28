import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Navbar from "../../src/components/Navbar";
import ContactCard from "../../src/components/ContactCard";
import Image from "next/image";
import Link from "next/link";
import ContactInput from "../../src/components/ContactInput";

import location from "../../src/images/Icons/location.svg";
import telephone from "../../src/images/Icons/telephone.svg";
import mail from "../../src/images/Icons/mail.svg";
import whatsapp from "../../src/images/Icons/whatsapp.svg";
import facebook from "../../src/images/Icons/facebook.svg";
import instagram from "../../src/images/Icons/instagram.svg";
import TheButton from "../../src/components/Button";

const index = () => {
  return (
    <>
      <Navbar />

      <Grid
        container
        rowSpacing={10}
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column-reverse",
            sm: "column-reverse",
            md: "column-reverse",
            lg: "row",
            xl: "row",
          },
          alignItems: "center",
          position: "relative",
          padding: "3rem 0",
        }}
      >
        <Grid
          item
          xs={15}
          sm={10}
          md={6}
          lg={6}
          xl={5}
          sx={{
            position: {
              xs: "relative",
              sm: "relative",
              md: "relative",
              lg: "absolute",
              xl: "absolute",
            },
            zIndex: "1",
            marginLeft: {
              xs: "0",
              sm: "0",
              md: "0",
              lg: "0",
              xl: "10%",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid
              container
              rowSpacing={2}
              sx={{
                display: "flex",
                flexDirection: {
                  xs: "column",
                  sm: "row",
                  md: "row",
                  lg: "row",
                  xl: "row",
                },
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid item xs={10} sm={5} md={5} lg={5} xl={6}>
                <ContactCard
                  src={location}
                  alt="Localização"
                  title="Nossa Localização"
                  p="ESTRADA DO SANA Nº 2000 SANA, MACAÉ - RJ"
                />
              </Grid>
              <Grid item xs={10} sm={5} md={5} lg={5} xl={6}>
                <ContactCard
                  src={telephone}
                  alt="Telefone"
                  title="Número de Telefone"
                  p="(22) 9 8811-2400"
                />
              </Grid>
              <Grid item xs={10} sm={5} md={5} lg={5} xl={6}>
                <ContactCard
                  src={whatsapp}
                  alt="Whatsapp"
                  title="Chame no Whatsapp"
                  p="(22) 9 8811-2400"
                />
              </Grid>
              <Grid item xs={10} sm={5} md={5} lg={5} xl={6}>
                <ContactCard
                  src={mail}
                  alt="E-mail"
                  title="Envie um Email"
                  p="hotelpousadabambuzal@gmail.com"
                />
              </Grid>
              <Typography
                variant="h4"
                sx={{
                  color: "#fff",
                  padding: "1rem",
                  marginTop: "2rem",
                  textAlign: "center",
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

                <Link
                  href="https://www.instagram.com/hpbambuzal/"
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
                      src={instagram}
                      alt="Icone-de-Instagram"
                    />
                  </Box>
                </Link>
              </Box>
            </Grid>
          </Box>
        </Grid>

        <Grid
          item
          sx={{
            marginRight: {
              xs: "0",
              sm: "0",
              md: "0",
              lg: "5%",
              xl: "10%",
            },
            width: {
              xs: "90%",
              sm: "75%",
              md: "80%",
              lg: "100%",
              xl: "100%",
            },
          }}
        >
          <Box
            sx={{
              // bgcolor: "red",
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
            }}
          >
            <Box
              sx={{
                border: "3px solid #000",
                display: "flex",
                flexDirection: "column",
                alignItems: "",
                justifyContent: "space-evenly",
                bgcolor: "#181818",

                color: "#fff",
                padding: {
                  xs: "8rem 2rem",
                  sm: "8rem 5rem",
                  md: "8rem",
                  lg: "8rem",
                  xl: "8rem",
                },
                width: {
                  xs: "100%",
                  sm: "100%",
                  md: "100%",
                  lg: "56%",
                  xl: "50%",
                },
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
        </Grid>
      </Grid>
    </>
  );
};

export default index;
