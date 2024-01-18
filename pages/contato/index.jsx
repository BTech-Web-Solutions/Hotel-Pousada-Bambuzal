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
          justifyContent: "center",
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
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: "#fff",
                padding: "1rem",
                textAlign: "center",
                marginLeft: {
                  xs: "0",
                  sm: "-1.3rem",
                  md: "-3rem",
                  lg: "0",
                  xl: "-5rem",
                },
              }}
            >
              Nos siga nas redes sociais
            </Typography>

            <Box
              sx={{
                display: "flex",
                width: "50%",
                justifyContent: "space-evenly",
                marginBottom: "3rem",
                marginLeft: {
                  xs: "0",
                  sm: "-1.3rem",
                  md: "-3rem",
                  lg: "0",
                  xl: "-5rem",
                },
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
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default index;
