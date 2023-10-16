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

export default function Ofuro() {
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
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Ofurô
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
    img: "https://media.githubusercontent.com/media/BTech-Web-Solutions/Hotel-Pousada-Bambuzal/main/src/images/Ofuro/ofuro.jpg",
    title: "Ofuro",
  },
  {
    img: "https://media.githubusercontent.com/media/BTech-Web-Solutions/Hotel-Pousada-Bambuzal/main/src/images/Ofuro/ofuro_2.jpg",
    title: "Ofuro 2",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://media.githubusercontent.com/media/BTech-Web-Solutions/Hotel-Pousada-Bambuzal/main/src/images/Ofuro/ofuro_3.jpg",
    title: "Ofuro 3",
  },
  {
    img: "https://media.githubusercontent.com/media/BTech-Web-Solutions/Hotel-Pousada-Bambuzal/main/src/images/Ofuro/ofuro_4.jpg",
    title: "Ofuro 4",
    cols: 2,
  },
  {
    img: "https://media.githubusercontent.com/media/BTech-Web-Solutions/Hotel-Pousada-Bambuzal/main/src/images/Ofuro/ofuro_5.jpg",
    title: "Ofuro 5",
    cols: 2,
  }
];
