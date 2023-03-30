import { Box, TextField } from "@mui/material";
import * as React from "react";

export default function ContactInput({ id, label, variant, rows }) {
  return (
    <TextField
      id={id}
      label={label}
      variant={variant}
      multiline={id === "mensagem" ? true : false}
      rows={rows ? rows : 1}
      sx={{
        width: "100%",
        marginBottom: "1rem",
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "#000",
            borderWidth: "2px",
          },
        },

        "& .MuiOutlinedInput-root:hover": {
          "& fieldset": {
            borderColor: "#eb5422",
          },
        },

        "& .MuiOutlinedInput-root.Mui-focused": {
          "& fieldset": {
            borderColor: "#fff",
          },
        },

        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "#eb5422",
        },

        "& .MuiOutlinedInput-input": {
          color: "#fff",
        },
        "& .MuiOutlinedInput-input:hover": {
          color: "#fff",
        },

        "& .MuiInputLabel-outlined": {
          color: "#eb5422",
        },
        "& .MuiInputLabel-outlined.Mui-focused": {
          color: "#eb5422",
        },
      }}
    />
  );
}
