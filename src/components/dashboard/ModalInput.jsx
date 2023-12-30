import { Box, TextField } from "@mui/material";
import * as React from "react";

export default function ModalInput({
  id,
  label,
  variant,
  rows,
  type,
  value,
  onChange,
}) {
  return (
    <TextField
      value={value}
      id={id}
      type={type ? type : "text"}
      label={label}
      variant={variant}
      multiline={id === "mensagem" ? true : false}
      onChange={onChange}
      rows={rows ? rows : 1}
      sx={{
        width: "100%",
        marginBottom: "1rem",
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "#fff",
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
            borderColor: "#eb5422",
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
