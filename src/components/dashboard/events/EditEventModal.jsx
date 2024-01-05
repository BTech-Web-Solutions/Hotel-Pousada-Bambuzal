import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import ModalInput from "../ModalInput";
import moment from "moment";
import checkTokenBefore from "../../../checkTokenBefore";

const apiKey = process.env.NEXT_PUBLIC_API_AUTH_KEY;
const apiURL = process.env.NEXT_PUBLIC_API_URL;

const EditEventModal = ({ selectedEvent, setEditEvent }) => {
  const [nome, setNome] = useState(selectedEvent.title);
  const [dia, setDia] = useState(selectedEvent.date);
  const [hora, setHora] = useState(
    moment(selectedEvent.time, "HH:mm").format("HH:mm")
  );
  const [mensagem, setMensagem] = useState(selectedEvent.description);
  const [eventId, setEventId] = useState(selectedEvent.id);

  const handleCancel = () => {
    setEditEvent(false);
  };

  const handlePreEdit = async () => {
    try {
      const result = await fetch(`${apiURL}/events/edit/${eventId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: apiKey,
        },
        body: JSON.stringify({
          title: nome,
          date: dia,
          time: hora,
          description: mensagem,
        }),
      });
      const data = await result.json();
      alert(
        data.message === "Event updated!"
          ? "Evento atualizado com sucesso!"
          : "Erro ao atualizar evento!"
      );
      setEditEvent(false);
    } catch (error) {}
  };

  const handleSave = async () => {
    try {
      // Chama a função assíncrona checkTokenBefore e aguarda a resposta
      const isTokenValid = await checkTokenBefore();

      if (isTokenValid) {
        // Se o token for válido, continue com a lógica de salvamento
        await handlePreEdit();
      } else {
        // Se o token não for válido, exiba uma mensagem ao usuário
        alert("Você não tem permissão para editar eventos!");
      }
    } catch (error) {
      console.error("Erro ao verificar token:", error);
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
          setEditEvent(false);
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
          Editando Evento
        </h1>
        <p
          style={{
            marginBottom: "2rem",
            marginLeft: "2px",
          }}
        >
          ID: {eventId}
        </p>
        <h3>Título:</h3>
        <ModalInput
          id="nome"
          variant="outlined"
          onChange={(e) => {
            setNome(e.target.value);
          }}
          value={nome}
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
            <h3>Data:</h3>
            <ModalInput
              id="data"
              label=""
              variant="outlined"
              type="Date"
              value={dia}
              onChange={(e) => {
                setDia(e.target.value);
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
            <h3>Horário:</h3>
            <ModalInput
              id="hora"
              label=""
              variant="outlined"
              type="Time"
              value={hora}
              onChange={(e) => {
                setHora(e.target.value);
              }}
            />
          </div>
        </Box>
        <h3>Descrição:</h3>
        <ModalInput
          id="mensagem"
          variant="outlined"
          rows={5}
          value={mensagem}
          onChange={(e) => {
            setMensagem(e.target.value);
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
              handleSave();
            }}
          >
            SALVAR
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default EditEventModal;
