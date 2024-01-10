import { Box, Button } from "@mui/material";
import React from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const AddImagesInput = ({ onChange, eventId }) => {
  return (
    <Button
      startIcon={<CloudUploadIcon />}
      component="label"
      sx={{
        padding: "0.5rem 1rem",
        borderRadius: "999px",
        border: "2px solid #eb5310",
        color: "#fff",
        fontSize: "0.8rem",
        cursor: "pointer",
        "&:hover": {
          transform: "scale(1.1)",
          backgroundColor: "#eb5100",
          border: "none",
        },
      }}
    >
      Adicionar Imagens
      <input
        type="file"
        onChange={onChange}
        name="image"
        multiple={true}
        accept="image/*"
        style={{ display: "none" }}
      />
    </Button>
  );
};

export default AddImagesInput;
