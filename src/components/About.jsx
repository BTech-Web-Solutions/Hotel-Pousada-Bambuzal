import * as React from "react";
import Box from "@mui/material/Box";
import TheButton from "../components/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

import image1 from "../../src/images/ImageList/1.jpg";
import image7 from "../../src/images/ImageList/7.jpg";
import Image from "next/image";

export default function About() {
  return (
    <Box
      id="sobre"
      sx={{
        bgcolor: "#161616",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "1.5rem 0",
        padding: "3rem",
      }}
    >
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "column",
            md: "row",
            lg: "row",
            xl: "row",
          },
          marginLeft: {
            xs: "0rem",
            sm: "0rem",
            md: "5rem",
            lg: "2rem",
            xl: "10rem",
          },
          flexDirection: {
            xs: "column-reverse",
            sm: "column-reverse",
            md: "row",
            lg: "row",
            xl: "row",
          },
        }}
        spacing={2}
      >
        <Grid item xs={7}>
          <Box
            sx={{
              width: {
                xs: "180%",
                sm: "170%",
                md: "90%",
                lg: "90%",
                xl: "90%",
              },
              borderRadius: "20px",
            }}
          >
            <Image
              src={image1}
              alt="landscape"
              style={{ borderRadius: "20px", width: "100%", height: "100%" }}
            />
          </Box>
        </Grid>
        <Grid
          item
          xs={11}
          sm={11}
          md={5}
          lg={5}
          xl={5}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
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
            <Typography
              variant="h2"
              color="white"
              textAlign="center"
              sx={{
                fontSize: {
                  xs: "2rem",
                  sm: "3rem",
                  md: "2.3rem",
                  lg: "3rem",
                },
                marginBottom: "1rem",
                fontWeight: "700",
              }}
            >
              A Pousada
            </Typography>

            <Typography
              color="white"
              sx={{
                fontSize: {
                  xs: "1rem",
                  sm: "2rem",
                  md: "1.5rem",
                  lg: "2rem",
                },
              }}
            >
              São mais de <b>16.000 m²</b> da mais pura beleza natural da
              região.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "column",
            md: "row",
            lg: "row",
            xl: "row",
          },
          // bgcolor: 'red',
          marginRight: {
            xs: "0rem",
            sm: "0rem",
            md: "1.5rem",
            lg: "2.5rem",
            xl: "2rem",
          },
          marginTop: {
            xs: "0rem",
            sm: "0rem",
            md: "-2.5rem",
            lg: "-2.5rem",
            xl: "-2.5rem",
          },
        }}
        spacing={2}
      >
        <Grid item xs={7}>
          <Box
            sx={{
              width: {
                xs: "180%",
                sm: "170%",
                md: "90%",
                lg: "90%",
                xl: "90%",
              },
            }}
          >
            <Image
              src={image7}
              alt="landscape"
              style={{ borderRadius: "20px", width: "100%", height: "100%" }}
            />
          </Box>
        </Grid>
        <Grid
          item
          xs={11}
          sm={11}
          md={5}
          lg={5}
          xl={5}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              color="white"
              sx={{
                fontSize: {
                  xs: "1rem",
                  sm: "2rem",
                  md: "1.5rem",
                  lg: "2rem",
                },
                marginBottom: "1rem",
              }}
            >
              Perfeito para quem busca tranquilidade e contato com a natureza.
            </Typography>

            <Box>
              <TheButton title="Saiba Mais" />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
