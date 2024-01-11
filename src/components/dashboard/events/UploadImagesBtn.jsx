import { Button } from "@mui/material";
import React from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const UploadImagesBtn = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      startIcon={<CloudUploadIcon />}
      component="label"
      sx={{
        padding: "0.5rem 1rem",
        borderRadius: "999px",
        border: "2px solid #eb5310",
        color: "#fff",
        cursor: "pointer",
        "&:hover": {
          transform: "scale(1.050)",
          backgroundColor: "#eb5100",
          border: "none",
        },
      }}
    >
      Salvar Imagens
    </Button>
  );
};

export default UploadImagesBtn;
