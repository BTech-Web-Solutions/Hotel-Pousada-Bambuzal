import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { Box, Typography } from "@mui/material";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function Chales() {
  const [selectedImage, setSelectedImage] = React.useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleModalClose = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Box>
        <Typography
          sx={{
            marginBottom: "2rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          variant="h4"
        >
          Chalés
        </Typography>

        <Typography
          variant="p"
          sx={{
            display: "flex",
            margin: "1rem 0",
            fontSize: {
              xs: "1rem",
              sm: "1rem",
              md: "1.2rem",
              lg: "1.5rem",
              xl: "1.5rem",
            },
          }}
        >
          Os chalés da Pousada Bambuzal são verdadeiros refúgios encantadores.
          Com uma atmosfera que mescla rusticidade e conforto, cada chalé
          oferece uma estadia acolhedora em meio à natureza exuberante.
          Completos e bem equipados, esses chalés proporcionam um ambiente
          relaxante, muitos deles com varandas privativas que presenteiam os
          hóspedes com vistas deslumbrantes do entorno verdejante. Seja para
          descansar ou apreciar a serenidade, os chalés da Pousada Bambuzal são
          o lugar ideal para uma estadia tranquila e memorável.
        </Typography>
      </Box>

      <ImageList
        sx={{
          width: "80%",
          height: 500,
          margin: "0 auto",
        }}
        variant="quilted"
        cols={4}
        rowHeight={121}
      >
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 2}
            rows={item.rows || 1}
          >
            <img
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
              style={{ cursor: "pointer" }}
              onClick={() => handleImageClick(item.img)}
            />
          </ImageListItem>
        ))}
      </ImageList>

      <Dialog
        open={Boolean(selectedImage)}
        onClose={handleModalClose}
        sx={{
          "& .MuiDialog-paper": {
            p: 0,
            m: 0,
            maxWidth: {
              xs: "80%",
              sm: "80%",
              md: "80%",
              lg: "80%",
              xl: "50%",
            },
            maxHeight: "auto",
            height: "auto",
            width: {
              xs: "100%",
              sm: "100%",
              md: "50%",
              lg: "50%",
              xl: "60%",
            },
          },
        }}
      >
        <DialogContent>
          <img src={selectedImage} style={{ maxWidth: "100%" }} />
        </DialogContent>
      </Dialog>
      <hr />
    </>
  );
}

const itemData = [
  {
    img: new URL("/src/images/ChaleDuplo/chale_duplo.jpg", import.meta.url),
    title: "Chale Duplo",
  },
  {
    img: new URL("/src/images/ChaleDuplo/chale_duplo_2.jpg", import.meta.url),
    title: "Chale Duplo 2",
  },
  {
    img: new URL("/src/images/ChaleDuplo/chale_duplo_3.jpg", import.meta.url),
    title: "Chale Duplo 3",
    cols: 2,
  },
  {
    img: new URL("/src/images/ChaleDuplo/chale_duplo_4.jpg", import.meta.url),
    title: "Chale Duplo 4",
    cols: 2,
  },
  {
    img: new URL("/src/images/ChaleDuplo/chale_duplo_5.jpg", import.meta.url),
    title: "Chale Duplo 5",
    rows: 2,
    cols: 2,
  },
  {
    img: new URL("/src/images/AcomodPages/ChaleDuplo/1.jpg", import.meta.url),
    title: "Chale Duplo 6",
    rows: 2,
    cols: 2,
  },
  {
    img: new URL("/src/images/ChaleTriplo/1.jpg", import.meta.url),
    title: "Chale Triplo",
  },
  {
    img: new URL("/src/images/ChaleTriplo/chale_triplo.jpg", import.meta.url),
    title: "Chale Triplo 1",
    rows: 2,
    cols: 2,
  },
  {
    img: new URL("/src/images/ChaleTriplo/chale_triplo_2.jpg", import.meta.url),
    title: "Chale Triplo 2",
  },
  {
    img: new URL("/src/images/ChaleTriplo/chale_triplo_3.jpg", import.meta.url),
    title: "Chale Triplo 3",
    cols: 2,
  },
  {
    img: new URL("/src/images/ChaleTriplo/chale_triplo_4.jpg", import.meta.url),
    title: "Chale Triplo 4",
    cols: 2,
  },
  {
    img: new URL("/src/images/ChaleTriplo/chale_triplo_5.jpg", import.meta.url),
    title: "Chale Triplo 5",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: new URL("/src/images/ChaleFamilia/1.jpg", import.meta.url),
    title: "Chale Familia",
  },
  {
    img: new URL("/src/images/ChaleFamilia/chale_familia.jpg", import.meta.url),
    title: "Chale Familia 1",
    rows: 2,
    cols: 2,
  },
  {
    img: new URL(
      "/src/images/ChaleFamilia/chale_familia_2.jpg",
      import.meta.url
    ),
    title: "Chale Familia 2",
  },
  {
    img: new URL(
      "/src/images/ChaleFamilia/chale_familia_3.jpg",
      import.meta.url
    ),
    title: "Chale Familia 3",
    cols: 2,
  },
  {
    img: new URL(
      "/src/images/ChaleFamilia/chale_familia_4.jpg",
      import.meta.url
    ),
    title: "Chale Familia 4",
    cols: 2,
  },
  {
    img: new URL(
      "/src/images/ChaleFamilia/chale_familia_5.jpg",
      import.meta.url
    ),
    title: "Chale Familia 5",
    rows: 2,
    cols: 2,
  },
  {
    img: new URL(
      "/src/images/ChaleFamilia/chale_familia_6.jpg",
      import.meta.url
    ),
    title: "Chale Familia 6",
  },
  {
    img: new URL(
      "/src/images/ChaleFamilia/chale_familia_7.jpg",
      import.meta.url
    ),
    title: "Chale Familia 7",
  },
];
