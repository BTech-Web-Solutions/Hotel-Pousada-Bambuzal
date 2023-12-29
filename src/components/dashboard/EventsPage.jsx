import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import moment from "moment";
import EditEventModal from "./EditEventModal";

const apiKey = process.env.NEXT_PUBLIC_API_AUTH_KEY;
const apiURL = process.env.NEXT_PUBLIC_API_URL;

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [editEvent, setEditEvent] = useState(false);

  const handleEditEvent = (event) => {
    setSelectedEvent(event);
    setEditEvent(true);
  };

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
          gap: {
            xs: "1rem",
            sm: "1.5rem",
            md: "2rem 1rem",
            lg: "2rem 2rem",
            xl: "2rem 6.1rem",
          },
          padding: "2.5rem 3rem",

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
              width: "15rem",
              height: "15rem",
              boxShadow: "2px 5px 10px #000",
              cursor: "pointer",

              "&:hover": {
                bgcolor: "#3333",
              },
            }}
            onClick={() => handleEditEvent(event)}
          >
            <h3
              style={{
                textAlign: "center",
                borderBottom: "1px solid #fff",
              }}
            >
              {event.title}
            </h3>
            <br />
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <div>
                <h6>Data:</h6>
                <p>{moment(event.date).locale("pt-br").format("DD/MM/YYYY")}</p>
              </div>
              <div
                style={{
                  borderLeft: "1px solid #fff",
                  paddingLeft: "1rem",
                }}
              >
                <h6>Horário:</h6>
                <p>{moment(event.time, "HH:mm").format("HH:mm")}</p>
              </div>
            </div>
          </Box>
        ))}
        {editEvent && (
          <EditEventModal
            setEditEvent={setEditEvent}
            selectedEvent={selectedEvent}
          />
        )}
      </Box>
    </>
  );
};

export default EventsPage;
