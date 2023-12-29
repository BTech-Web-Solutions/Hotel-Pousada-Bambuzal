import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";

const apiKey = process.env.NEXT_PUBLIC_API_AUTH_KEY;
const apiURL = process.env.NEXT_PUBLIC_API_URL;

const EventsPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const result = await fetch(`${apiURL}/events`);
      const data = await result.json();
      setEvents(data);
    };
    fetchApi();
  }, []);

  return (
    <>
      <Box
        sx={{
          overflowY: "scroll",
          height: "calc(100vh - 1rem)",
          width: "70%",
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          padding: "3rem 3rem",

          "&::-webkit-scrollbar": {
            width: "0.5rem",
            bgcolor: "#3333",
            borderRadius: "999px",
          },

          "&::-webkit-scrollbar-thumb": {
            bgcolor: "#eb5310",
            borderRadius: "999px",
          },
        }}
      >
        {events.map((event) => (
          <Box
            key={event.id}
            sx={{
              backgroundColor: "#4444",
              borderRadius: "1rem",
              padding: "1rem",
              marginBottom: "1rem",
              flexWrap: "wrap",
              width: "20rem",
              height: "20rem",
              boxShadow: "2px 5px 10px #000",

              "&:hover": {
                bgcolor: "#3333",
              },
            }}
          >
            <h1>Titulo:</h1>
            <h3>{event.title}</h3>
            <br />
            <div
              style={{
                display: "flex",
                gap: "1rem",
              }}
            >
              <h6>Data:</h6>
              <p>{event.date}</p>
              <h6>Hora:</h6>
              <p>{event.time}</p>
            </div>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default EventsPage;
