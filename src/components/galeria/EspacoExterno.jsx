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

export default function EspacoExterno() {
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
          variant="h4"
          sx={{
            marginBottom: "2rem",
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          Espaço Externo
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
          Piscinas que oferecem tanto opções refrescantes quanto aquecidas,
          decks estrategicamente posicionados para apreciar vistas
          deslumbrantes, e mesas à beira do rio, criando um ambiente perfeito
          para desfrutar da serenidade das águas.
        </Typography>
      </Box>

      <ImageList
        sx={{ width: "80%", height: 500, margin: "0 auto" }}
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
    img: new URL("/src/images/EspacoExterno/ext_3.jpg", import.meta.url),
    title: "EspacoExterno 3",
    rows: 2,
  },
  {
    img: new URL("/src/images/EspacoExterno/ext_4.jpg", import.meta.url),
    title: "EspacoExterno 4",
    rows: 2,
  },
  {
    img: new URL("/src/images/EspacoExterno/ext_5.jpg", import.meta.url),
    title: "EspacoExterno 5",
    rows: 2,
  },
  {
    img: new URL("/src/images/EspacoExterno/ext_6.jpg", import.meta.url),
    title: "EspacoExterno 6",
    rows: 2,
  },
  {
    img: new URL("/src/images/EspacoExterno/ext_7.jpg", import.meta.url),
    title: "EspacoExterno 7",
    rows: 2,
  },
  {
    img: new URL("/src/images/EspacoExterno/ext_8.jpg", import.meta.url),
    title: "EspacoExterno 8",
    rows: 2,
  },
  {
    img: new URL("/src/images/EspacoExterno/ext_9.jpg", import.meta.url),
    title: "EspacoExterno 9",
    rows: 2,
  },
  {
    img: new URL("/src/images/EspacoExterno/ext_10.jpg", import.meta.url),
    title: "EspacoExterno 10",
    rows: 2,
  },
  {
    img: new URL("/src/images/EspacoExterno/ext_11.jpg", import.meta.url),
    title: "EspacoExterno 11",
    rows: 2,
  },
  {
    img: new URL("/src/images/EspacoExterno/ext_12.jpg", import.meta.url),
    title: "EspacoExterno 12",
    rows: 2,
  },
  {
    img: new URL("/src/images/EspacoExterno/ext_13.jpg", import.meta.url),
    title: "EspacoExterno 13",
    rows: 2,
  },
  {
    img: new URL("/src/images/EspacoExterno/ext_14.jpg", import.meta.url),
    title: "EspacoExterno 14",
    rows: 2,
  },
  {
    img: new URL("/src/images/EspacoExterno/ext_15.jpg", import.meta.url),
    title: "EspacoExterno 15",
    rows: 2,
  },
  {
    img: new URL("/src/images/EspacoExterno/ext_16.jpg", import.meta.url),
    title: "EspacoExterno 16",
    rows: 2,
  },
  {
    img: new URL("/src/images/EspacoExterno/ext_17.jpg", import.meta.url),
    title: "EspacoExterno 17",
    rows: 2,
  },
  {
    img: new URL("/src/images/EspacoExterno/ext_18.jpg", import.meta.url),
    title: "EspacoExterno 18",
    rows: 2,
  },
  {
    img: new URL("/src/images/EspacoExterno/ext_19.jpg", import.meta.url),
    title: "EspacoExterno 19",
    rows: 2,
  },
  {
    img: new URL("/src/images/EspacoExterno/ext_20.jpg", import.meta.url),
    title: "EspacoExterno 20",
    rows: 2,
  },
];
