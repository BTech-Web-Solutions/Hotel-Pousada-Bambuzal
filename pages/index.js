import * as React from "react";
import Link from "next/link";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Navbar from "../src/components/Navbar";
import Typography from "@mui/material/Typography";
import Carrousel from "../src/components/Carrousel";
import styled from "styled-components";
import { Accordion, AccordionSummary, Box } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import TheButton from "../src/components/Button";
import About from "../src/components/About";
import Footer from "../src/components/Footer";
import theme from "../src/theme";

import events from "./api/events.json";

export default function Index() {
  return (
    <Box>
      <ThemeProvider theme={theme}>
        <Navbar />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              zIndex: "5",
              maxWidth: "1300px",
              width: {
                xs: "90%",
                sm: "90%",
                md: "80%",
                lg: "80%",
                xl: "80%",
              },
              height: {
                xs: "60%",
                sm: "60%",
                md: "60%",
                lg: "60%",
                xl: "60%",
              },
              display: "flex",
              flexDirection: "column",
              justifyContent: {
                xs: "space-evenly",
              },
              // bgcolor: "#fff",
            }}
          >
            <Typography
              variant="h1"
              component="h1"
              sx={{
                color: "white",
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: {
                  xs: "3rem",
                  sm: "5rem",
                  md: "4rem",
                  lg: "5rem",
                },
              }}
            >
              Lugar de Paz
            </Typography>

            <Typography
              variant="h1"
              component="h1"
              sx={{
                color: "white",
                fontWeight: "300",
                fontSize: {
                  xs: "1.5rem",
                  sm: "3rem",
                  md: "2rem",
                  lg: "3rem",
                },
                marginTop: {
                  xs: "1rem",
                  sm: "1rem",
                  md: "2rem",
                  lg: "3rem",
                },
                width: {
                  xs: "100%",
                  sm: "100%",
                  md: "80%",
                  lg: "80%",
                  xl: "80%",
                },
              }}
            >
              Um paraíso em meio às montanhas da região serrana de Macaé para
              você desfrutar da natureza com requinte e qualidade.
            </Typography>

            <Box
              sx={{
                marginTop: {
                  xs: "2rem",
                  sm: "2rem",
                  md: "2rem",
                  lg: "3rem",
                },
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Link
                style={{ textDecoration: "none" }}
                href="https://book.securebookings.net/roomrate?id=c4dd3ad1-0057-1672770166-46f7-a98b-44ec5a1f6793&lang=br"
              >
                <TheButton
                  width={{
                    xs: "60vw",
                    sm: "100%",
                    md: "100%",
                    lg: "100%",
                    xl: "100%",
                  }}
                  fontSize={{
                    xs: "1rem",
                    sm: "1.8rem",
                    md: "1.5rem",
                    lg: "1.5rem",
                    xl: "1.5rem",
                  }}
                  title="Reserve Agora"
                />
              </Link>
            </Box>
          </Box>

          <Carrousel />
        </Box>

        <About />

        <Box
          sx={{
            bgcolor: "secondary.main",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            color: "white",
            padding: {
              xs: "2rem",
              sm: "2rem",
              md: "2rem",
              lg: "3rem",
              xl: "3rem",
            },
            gap: "1rem",
          }}
        >
          <Typography variant="h3">Eventos</Typography>
          <Typography variant="h5">
            Aqui se econtra o quadro de todos os eventos que acontecem durante o
            ano no nosso lugarzinho! 💝{" "}
          </Typography>

          <br />

          <Box
            sx={{
              // bgcolor: "red",
              display: "flex",
              flexDirection: {
                xs: "column",
                sm: "column",
                md: "column",
                lg: "row",
                xl: "row",
              },
              justifyContent: "space-evenly",
              alignItems: "flex-start",

              flexWrap: "wrap",
            }}
          >
            {events.map((event) => (
              <Accordion
                key={event.id}
                sx={{
                  width: {
                    xs: "100%",
                    sm: "100%",
                    md: "100%",
                    lg: "45%",
                    xl: "45%",
                  },
                  bgcolor: "#212121",
                  color: "white",
                  marginBottom: "1rem",
                  borderRadius: "0.5rem",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                >
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "1rem",
                        sm: "1.5rem",
                        md: "1.5rem",
                        lg: "1.5rem",
                        xl: "1.5rem",
                      },
                      fontWeight: "300",
                    }}
                  >
                    {event.title} <b>no dia</b>{" "}
                    {event.date.split("-").reverse().join("/")}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    sx={{
                      fontWeight: "300",
                      fontSize: {
                        xs: "1rem",
                        sm: "1.5rem",
                        md: "1.5rem",
                        lg: "1.5rem",
                        xl: "1.5rem",
                      },
                    }}
                  >
                    As{" "}
                    {
                      //time formated to PT-BR 24h
                      event.time.split(":")[0] +
                        ":" +
                        event.time.split(":")[1] +
                        "h"
                    }
                    <br /> {event.description}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Box>

        <br />
        <br />

        <Footer />
      </ThemeProvider>
    </Box>
  );
}
