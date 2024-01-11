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

export default function LobbyGallery() {
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
          Recepção do Hotel
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
          Seja bem-vindo ao nosso Hotel! Ao chegar, você será direcionado à
          nossa recepção, que funciona diariamente das 7h às 22h. Nossa equipe
          estará pronta para recebê-lo calorosamente e auxiliá-lo durante toda a
          sua estadia. Estamos totalmente preparados para fornecer informações
          detalhadas sobre as nossas instalações, oferecer orientações úteis e
          compartilhar dicas preciosas sobre as maravilhas da região de Sana que
          você não pode perder.
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
    img: new URL("/src/images/Lobby/lobby_inside.jpg", import.meta.url),
    title: "Lobby",
    rows: 2,
  },
  {
    img: new URL("/src/images/Lobby/lobby_entrance.jpg", import.meta.url),
    title: "Entrance",
    rows: 2,
    cols: 2,
  },
  {
    img: new URL("/src/images/Lobby/lobby_inside_2.jpg", import.meta.url),
    title: "Lobby Inside",
    rows: 2,
  },
  {
    img: new URL("/src/images/Lobby/lobby_inside_3.jpg", import.meta.url),
    title: "Lobby Close",
    cols: 2,
    rows: 2,
  },
];
