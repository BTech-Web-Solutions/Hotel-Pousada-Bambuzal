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

export default function Restaurante() {
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
          Restaurante
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
          Em nosso restaurante, começamos o dia com um café da manhã delicioso,
          oferecemos opções variadas para o almoço e, à noite, transformamos o
          ambiente em uma pizzaria, servindo também petiscos e caldos. Uma
          experiência gastronômica completa do amanhecer ao anoitecer.
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
    img: new URL("/src/images/Restaurante/restaurante_5.jpg", import.meta.url),
    title: "Restaurante 5",
    cols: 2,
    rows: 2,
  },
  {
    img: new URL("/src/images/Restaurante/restaurante_15.jpg", import.meta.url),
    title: "Restaurante 15",
    cols: 2,
    rows: 2,
  },
  {
    img: new URL("/src/images/Restaurante/restaurante.jpg", import.meta.url),
    title: "Restaurante 1",
    rows: 2,
  },
  {
    img: new URL("/src/images/Restaurante/restaurante_2.jpg", import.meta.url),
    title: "Restaurante 2",
    rows: 2,
    cols: 2,
  },
  {
    img: new URL("/src/images/Restaurante/restaurante_3.jpg", import.meta.url),
    title: "Restaurante 3",
    rows: 2,
  },
  {
    img: new URL("/src/images/Restaurante/restaurante_4.jpg", import.meta.url),
    title: "Restaurante 4",
    cols: 2,
    rows: 2,
  },

  {
    img: new URL("/src/images/Restaurante/restaurante_6.jpg", import.meta.url),
    title: "Restaurante 6",
    cols: 2,
    rows: 2,
  },
  {
    img: new URL("/src/images/Restaurante/restaurante_7.jpg", import.meta.url),
    title: "Restaurante 7",
    cols: 2,
    rows: 2,
  },
  {
    img: new URL("/src/images/Restaurante/restaurante_8.jpg", import.meta.url),
    title: "Restaurante 8",
    cols: 2,
    rows: 2,
  },
  {
    img: new URL("/src/images/Restaurante/restaurante_9.jpg", import.meta.url),
    title: "Restaurante 9",
    cols: 2,
    rows: 2,
  },
  {
    img: new URL("/src/images/Restaurante/restaurante_10.jpg", import.meta.url),
    title: "Restaurante 10",
    cols: 2,
    rows: 2,
  },
  {
    img: new URL("/src/images/Restaurante/restaurante_11.jpg", import.meta.url),
    title: "Restaurante 11",
    cols: 2,
    rows: 2,
  },
  {
    img: new URL("/src/images/Restaurante/restaurante_12.jpg", import.meta.url),
    title: "Restaurante 12",
    cols: 2,
    rows: 2,
  },
  {
    img: new URL("/src/images/Restaurante/restaurante_13.jpg", import.meta.url),
    title: "Restaurante 13",
    cols: 2,
    rows: 2,
  },
  {
    img: new URL("/src/images/Restaurante/restaurante_14.jpg", import.meta.url),
    title: "Restaurante 14",
    cols: 2,
    rows: 2,
  },
];
