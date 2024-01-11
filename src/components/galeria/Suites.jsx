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

export default function Suites() {
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
          Suítes
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
          Desfrute de uma vista encantadora e relaxante do Rio Sana diretamente
          das nossas suítes. Oferecendo um cenário natural deslumbrante, nossas
          acomodações proporcionam uma conexão íntima com a natureza. Delicie-se
          com momentos de tranquilidade enquanto aprecia essa paisagem
          cativante, proporcionando uma estadia verdadeiramente relaxante e
          memorável.
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
    img: new URL("/src/images/SuitePremiun/suite.jpg", import.meta.url),
    title: "Suite Premiun",
    rows: 2,
  },
  {
    img: new URL("/src/images/SuitePremiun/suite_2.jpg", import.meta.url),
    title: "Suite Premiun 2",
    rows: 2,

    cols: 2,
  },
  {
    img: new URL("/src/images/SuitePremiun/suite_3.jpg", import.meta.url),
    title: "Suite Premiun 3",
    rows: 2,
  },
  {
    img: new URL("/src/images/SuitePremiun/suite_4.jpg", import.meta.url),
    title: "Suite Premiun 4",
    rows: 2,
    cols: 2,
  },
  {
    img: new URL("/src/images/SuitePremiun/suite_5.jpg", import.meta.url),
    title: "Suite Premiun 5",
    rows: 2,
    cols: 2,
  },
  {
    img: new URL("/src/images/SuitePremiun/suite_6.jpg", import.meta.url),
    title: "Suite Premiun 6",
    rows: 2,
    author: "@arwinneil",
    cols: 2,
  },
  {
    img: new URL("/src/images/SuiteSimples/suite_simples.jpg", import.meta.url),
    title: "Suite Simples",
    rows: 2,
  },
  {
    img: new URL(
      "/src/images/SuiteSimples/suite_simples_2.jpg",
      import.meta.url
    ),
    title: "Suite Simples 2",
    rows: 2,
  },
  {
    img: new URL(
      "/src/images/SuiteSimples/suite_simples_3.jpg",
      import.meta.url
    ),
    title: "Suite Simples 3",
    rows: 2,

    cols: 2,
  },
  {
    img: new URL(
      "/src/images/SuiteSimples/suite_simples_4.jpg",
      import.meta.url
    ),
    title: "Suite Simples 4",
    rows: 2,
  },
  {
    img: new URL(
      "/src/images/SuiteSimples/suite_simples_5.jpg",
      import.meta.url
    ),
    title: "Suite Simples 5",
    rows: 2,
  },
  {
    img: new URL(
      "/src/images/SuiteSimples/suite_simples_6.jpg",
      import.meta.url
    ),
    title: "Suite Simples 6",
    rows: 2,
    cols: 4,
  },
];
