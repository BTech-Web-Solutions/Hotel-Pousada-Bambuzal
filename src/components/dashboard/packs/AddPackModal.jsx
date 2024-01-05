import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import ModalInput from "../ModalInput";
import moment from "moment";
import checkTokenBefore from "../../../checkTokenBefore";

const apiKey = process.env.NEXT_PUBLIC_API_AUTH_KEY;
const apiURL = process.env.NEXT_PUBLIC_API_URL;

const AddPackModal = ({ setAddPack }) => {
  const [title, setTitle] = useState("");
  const [firstDate, setFirstDate] = useState("");
  const [lastDate, setLastDate] = useState("");
  const [description, setDescription] = useState("");

  const handleCancel = () => {
    setAddPack(false);
  };

  const handleCreate = async () => {
    try {
      const result = await fetch(`${apiURL}/packs/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: apiKey,
        },
        body: JSON.stringify({
          title,
          firstDate: moment(firstDate, "YYYY-MM-DD").format("YYYY-MM-DD"),
          lastDate: moment(lastDate, "YYYY-MM-DD").format("YYYY-MM-DD"),
          description,
        }),
      });
      const data = await result.json();
      alert(
        data.message === "Pack created successfully"
          ? "Pack criado com sucesso!"
          : "Erro ao criar pack!"
      );
      setAddPack(false);
    } catch (error) {
      console.error("Error creating pack:", error);
    }
  };

  const checkAndCreate = async () => {
    try {
      const isTokenValid = await checkTokenBefore();

      if (isTokenValid) {
        handleCreate();
      }
    } catch (error) {
      console.error("Error checking token:", error);
    }
  };

  return (
    <Box
      sx={{
        position: "absolute",
        top: "0",
        left: "0",
        width: "100vw",
        height: "100vh",
        bgcolor: "#0008",
        zIndex: "999",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setAddPack(false);
        }
      }}
    >
      <Box
        sx={{
          width: {
            xs: "90%",
            sm: "80%",
            md: "50%",
            lg: "40%",
            xl: "35rem",
          },
          height: {
            xs: "90%",
            sm: "80%",
            md: "100%",
            lg: "90%",
            xl: "80%",
          },
          border: "2px solid #eb5310",
          backgroundColor: "#222e",
          borderRadius: "1rem",
          padding: "2rem",
          position: "relative",
          cursor: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <Box
          sx={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            cursor: "pointer",
            "&:hover": {
              transform: "scale(1.3)",
            },
            bgcolor: "#eb5310",
            padding: "0.5rem",
            borderRadius: "999px",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5rem"
            height="1.5rem"
            fill="currentColor"
            viewBox="0 0 16 16"
            onClick={handleCancel}
          >
            <path
              fillRule="evenodd"
              d="M.146 1.146a.5.5 0 01.708 0L8 7.293l7.146-6.147a.5.5 0 11.708.708L8.707 8l7.147 7.146a.5.5 0 01-.708.708L8 8.707l-7.146 7.147a.5.5 0 01-.708-.708L7.293 8 .146 1.854a.5.5 0 010-.708z"
            />
          </svg>
        </Box>
        <h1
          style={{
            fontWeight: "bold",
            marginBottom: "-5px",
          }}
        >
          Criando Novo Pacote
        </h1>
        <h3>Título:</h3>
        <ModalInput
          id="title"
          variant="outlined"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: {
              xs: "1rem",
              sm: "5rem",
              md: "10rem",
              lg: "10rem",
              xl: "10rem",
            },
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "50%",
            }}
          >
            <h3>Início:</h3>
            <ModalInput
              id="firstDate"
              label=""
              variant="outlined"
              type="Date"
              onChange={(e) => {
                setFirstDate(e.target.value);
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "50%",
            }}
          >
            <h3>Término:</h3>
            <ModalInput
              id="lastDate"
              label=""
              variant="outlined"
              type="Date"
              onChange={(e) => {
                setLastDate(e.target.value);
              }}
            />
          </div>
        </Box>
        <h3>Descrição:</h3>
        <ModalInput
          id="mensagem"
          variant="outlined"
          rows={5}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          sx={{
            overflowY: "scroll",
          }}
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "2rem",
          }}
        >
          <Button
            sx={{
              padding: "0.5rem 1rem",
              borderRadius: "999px",
              border: "2px solid #ff003a",
              color: "#fff",
              fontSize: "1.2rem",
              cursor: "pointer",
              "&:hover": {
                transform: "scale(1.1)",
                backgroundColor: "#ff003a",
                border: "none",
              },
            }}
            onClick={handleCancel}
          >
            CANCELAR
          </Button>
          <Button
            sx={{
              padding: "0.5rem 1rem",
              borderRadius: "999px",
              border: "2px solid #eb5310",
              color: "#fff",
              fontSize: "1.2rem",
              cursor: "pointer",
              "&:hover": {
                transform: "scale(1.1)",
                backgroundColor: "#eb5100",
                border: "none",
              },
            }}
            onClick={(e) => {
              e.preventDefault();
              checkAndCreate();
            }}
          >
            CRIAR
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AddPackModal;
