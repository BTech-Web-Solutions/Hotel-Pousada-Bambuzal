import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import ModalInput from "./ModalInput";
import moment from "moment";
import checkTokenBefore from "../../checkTokenBefore";

const apiKey = process.env.NEXT_PUBLIC_API_AUTH_KEY;
const apiURL = process.env.NEXT_PUBLIC_API_URL;

const DeleteEventModal = ({ selectedEvent, setDeleteEvent }) => {
  const [eventId, setEventId] = useState(selectedEvent.id);
  const [eventTitle, setEventTitle] = useState(selectedEvent.title);
  const [eventDate, setEventDate] = useState(selectedEvent.date);
  const [eventTime, setEventTime] = useState(selectedEvent.time);
  const [eventDescription, setEventDescription] = useState(
    selectedEvent.description
  );

  const handleCancel = () => {
    setDeleteEvent(false);
  };

  const handleDelete = async () => {
    try {
      // Adicione sua lógica para deletar o evento
      const result = await fetch(`${apiURL}/events/delete/${eventId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: apiKey,
        },
      });
      const data = await result.json();
      alert(
        data.message === "Event deleted successfully"
          ? "Evento deletado com sucesso!"
          : "Erro ao deletar evento!"
      );
      setDeleteEvent(false);
    } catch (error) {
      console.error("Erro ao deletar evento:", error);
    }
  };

  const checkAndDelete = async () => {
    try {
      const isTokenValid = await checkTokenBefore();

      if (isTokenValid) {
        handleDelete();
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
          setDeleteEvent(false);
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
          Deletar Evento
        </h1>
        <p
          style={{
            marginBottom: "2rem",
            marginLeft: "2px",
          }}
        >
          Título: {eventTitle}
        </p>

        <p
          style={{
            marginBottom: "2rem",
            marginLeft: "2px",
          }}
        >
          Data: {moment(eventDate).format("DD/MM/YYYY")}
        </p>

        <p
          style={{
            marginBottom: "2rem",
            marginLeft: "2px",
          }}
        >
          Horário: {eventTime}
        </p>

        <p
          style={{
            marginBottom: "2rem",
            marginLeft: "2px",
          }}
        >
          Descrição: {eventDescription}
        </p>
        <h3>Tem certeza que deseja deletar este evento?</h3>

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
            onClick={checkAndDelete}
          >
            DELETAR
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default DeleteEventModal;
