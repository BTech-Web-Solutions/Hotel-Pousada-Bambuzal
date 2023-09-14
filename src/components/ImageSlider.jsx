import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";

const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [images.length]);

  return (
    <Box
      className="image-slider"
      sx={{
        backgroundImage: `url(${images[currentImageIndex].src})`,
        height: "500px",
        width: "100%",
        maxWidth: "800px",
        minWidth: "100px",
        maxHeight: "600px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        margin: {
          xs: "0 auto",
          sm: "0 auto",
          md: "0 0 0 auto",
          lg: "0 0 0 auto",
          xl: "0 0 0 auto",
        },
        borderRadius: "1.2rem",
      }}
    />
  );
};

export default ImageSlider;
