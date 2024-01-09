import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Box, Button } from "@mui/material";
import moment from "moment";
import EditEventModal from "../../../src/components/dashboard/events/EditEventModal";
import AddEventModal from "../../../src/components/dashboard/events/AddEventModal";
import DeleteEventModal from "../../../src/components/dashboard/events/DeleteEventModal";
import { deleteCookie, getCookie } from "../../../src/hooks/useCookies";
import Loading from "../../../src/components/Loading";

const apiKey = process.env.NEXT_PUBLIC_API_AUTH_KEY;
const apiURL = process.env.NEXT_PUBLIC_API_URL;

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [editEvent, setEditEvent] = useState(false);
  const [addEvent, setAddEvent] = useState(false);
  const [deleteEvent, setDeleteEvent] = useState(false);
  const [isValidToken, setIsValidToken] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();

  const modalEditEvent = (event) => {
    setSelectedEvent(event);
    setEditEvent(true);
  };

  const checkToken = async () => {
    const cookie = getCookie("admEmail");
    if (cookie === "" || cookie === null) {
      router.push("/admin");
    } else {
      const fetchApi = async () => {
        const result = await fetch(`${apiURL}/admin/token-validate`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: apiKey,
          },
          body: JSON.stringify({
            admEmail: getCookie("admEmail"),
          }),
        });

        const data = await result.json();
        setIsLoading(false);

        if (data.message === "Invalid credentials") {
          deleteCookie("admEmail");
          router.push("/admin");
        }
      };
      fetchApi();
      setIsValidToken(true);
    }
  };

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const result = await fetch(`${apiURL}/events`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: apiKey,
          },
        });
        const data = await result.json();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setIsLoading(false);
      }
    };
    checkToken();
    fetchApi();
  }, [editEvent, addEvent, deleteEvent]);

  return (
    <>
      {isLoading && <Loading position="absolute" w="100vh" left="38%" />}

      <Box
        sx={{
          width: "70%",
          position: "relative",
          overflowY: "hidden",
          height: "calc(100vh)",
        }}
      >
        <Box
          sx={{
            height: "calc(100vh - 1rem)",
            overflowY: "scroll",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            padding: "3rem 0",
            gap: {
              xs: "1rem",
              sm: "1.5rem",
              md: "2rem 1rem",
              lg: "2rem 2rem",
              xl: "2rem 6.1rem",
            },
            "&::-webkit-scrollbar": {
              width: "0.5rem",
              bgcolor: "#3333",
              borderRadius: "999px",
            },
            "&::-webkit-scrollbar-thumb": {
              bgcolor: "#eb5310",
              borderRadius: "999px",
              "&:hover": {
                bgcolor: "#eb2110",
              },
            },
          }}
        >
          {events.map((event) => (
            <Box
              key={event.id}
              sx={{
                position: "relative",
                backgroundColor: "#4444",
                borderRadius: "1rem",
                padding: "1rem",
                marginBottom: "1rem",
                flexWrap: "wrap",
                width: "16rem",
                height: "16rem",
                boxShadow: "2px 5px 10px #000",
              }}
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
                  <p>
                    {moment(event.date).locale("pt-br").format("DD/MM/YYYY")}
                  </p>
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

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  marginTop: "1rem",
                  position: "absolute",
                  bottom: "1rem",
                  left: "1rem",
                  borderRadius: "999px",
                  width: "2.5rem",
                  height: "2.5rem",
                  bgcolor: "#eb5310",
                  cursor: "pointer",
                  "&:hover": {
                    bgcolor: "#eb5310",
                    opacity: "0.8",
                    scale: "1.1",
                  },
                }}
                onClick={() => modalEditEvent(event)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 -0.5 21 21"
                  fill="#fff"
                >
                  <g transform="translate(-419.000000, -359.000000)">
                    <g transform="translate(56.000000, 160.000000)">
                      <path d="M384,209.210475 L384,219 L363,219 L363,199.42095 L373.5,199.42095 L373.5,201.378855 L365.1,201.378855 L365.1,217.042095 L381.9,217.042095 L381.9,209.210475 L384,209.210475 Z M370.35,209.51395 L378.7731,201.64513 L380.4048,203.643172 L371.88195,212.147332 L370.35,212.147332 L370.35,209.51395 Z M368.25,214.105237 L372.7818,214.105237 L383.18415,203.64513 L378.8298,199 L368.25,208.687714 L368.25,214.105237 Z" />
                    </g>
                  </g>
                </svg>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  marginTop: "1rem",
                  position: "absolute",
                  bottom: "1rem",
                  right: "1rem",
                  borderRadius: "999px",
                  width: "2.5rem",
                  height: "2.5rem",
                  bgcolor: "#eb5310",
                  cursor: "pointer",
                  "&:hover": {
                    bgcolor: "#eb5310",
                    opacity: "0.8",
                    scale: "1.1",
                  },
                }}
                onClick={() => {
                  setSelectedEvent(event);
                  setDeleteEvent(true);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#fff"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.5 1 C11.7761 1 12 1.22386 12 1.5 L12 2 L14.5 2 C14.7761 2 15 2.22386 15 2.5 C15 2.77614 14.7761 3 14.5 3 L14 3 L14 14.5 C14 14.7761 13.7761 15 13.5 15 L2.5 15 C2.22386 15 2 14.7761 2 14.5 L2 3 L1.5 3 C1.22386 3 1 2.77614 1 2.5 C1 2.22386 1.22386 2 1.5 2 L4 2 L4 1.5 C4 1.22386 4.22386 1 4.5 1 L11.5 1 Z M11.5 2 L4.5 2 L4.5 3 L11.5 3 L11.5 2 Z M3 4 L3 14 L13 14 L13 4 L3 4 Z M5 6 L5 12 L6 12 L6 6 L5 6 Z M8 6 L8 12 L9 12 L9 6 L8 6 Z M11 6 L11 12 L12 12 L12 6 L11 6 Z"
                  />
                </svg>
              </Box>
            </Box>
          ))}
        </Box>

        <div
          style={{
            width: "100%",
            position: "absolute",
            bottom: "2rem",
            display: "flex",
            justifyContent: "flex-end",
            paddingRight: "1rem",
          }}
        >
          <Button
            sx={{
              position: "relative",
              right: "0",
              bgcolor: "#eb5310",
              borderRadius: "999px",
              "&:hover": {
                opacity: "0.8",
                scale: "1.1",
                bgcolor: "#eb5310",
              },
            }}
            onClick={() => setAddEvent(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={40}
              height={50}
              fill="#fff"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 1 C8.55228 1 9 1.44772 9 2 L9 7 L14 7 C14.5523 7 15 7.44772 15 8 C15 8.55228 14.5523 9 14 9 L9 9 L9 14 C9 14.5523 8.55228 15 8 15 C7.44772 15 7 14.5523 7 14 L7 9 L2 9 C1.44772 9 1 8.55228 1 8 C1 7.44772 1.44772 7 2 7 L7 7 L7 2 C7 1.44772 7.44772 1 8 1 Z"
              />
            </svg>
          </Button>
        </div>
      </Box>

      <Box>
        {addEvent && <AddEventModal setAddEvent={setAddEvent} />}
        {editEvent && (
          <EditEventModal
            setEditEvent={setEditEvent}
            selectedEvent={selectedEvent}
          />
        )}
        {deleteEvent && (
          <DeleteEventModal
            setDeleteEvent={setDeleteEvent}
            selectedEvent={selectedEvent}
          />
        )}
      </Box>
    </>
  );
};

export default EventsPage;
