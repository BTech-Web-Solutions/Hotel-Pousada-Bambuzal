// Aside.jsx
import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Section from "../../../src/components/dashboard/Section";
import { useRouter } from "next/router";
import { getCookie, deleteCookie } from "../../../src/hooks/useCookies";

const apiKey = process.env.NEXT_PUBLIC_API_AUTH_KEY;
const apiURL = process.env.NEXT_PUBLIC_API_URL;

const Aside = () => {
  const [loggedUser, setLoggedUser] = useState({});
  const router = useRouter();

  const handleLogout = async () => {
    const result = await fetch(`${apiURL}/admin/logout`, {
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

    console.log("Logout response:", data);

    if (data.message === "User logged out!") {
      deleteCookie("admEmail");
      router.push("/admin");
      deleteCookie("admEmail");
    } else {
      console.log("Logout failed");
    }
  };

  const getUserByEmail = async () => {
    const admEmail = getCookie("admEmail");
    if (!admEmail) {
      alert("Você não está logado!");
      return;
    }

    try {
      const result = await fetch(`${apiURL}/admin/user-by-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: apiKey,
        },
        body: JSON.stringify({
          admEmail: admEmail,
        }),
      });

      const data = await result.json();
      setLoggedUser(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleRoute = (route) => {
    router.push(`/admin/dashboard?page=${route}`);
  };

  useEffect(() => {
    getUserByEmail();
  }, []);

  return (
    <Box
      component={"aside"}
      sx={{
        width: "30%", // Adjust this value as needed
        height: "100vh",
        backgroundColor: "secondary.main",
        display: "flex",
        flexDirection: "column",
        borderRight: "4px solid #eb5322",
        borderRadius: "0 1rem 1rem 0",
        boxShadow: "0 0 12px 0 #000",
      }}
    >
      <Box
        component={"section"}
        sx={{
          width: "101%",
          height: "12%",
          color: "#fff",
          bgcolor: "#eb5322",
          borderRadius: "0 0.5rem 0 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 1rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 1rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "4rem",
                height: "4rem",
                borderRadius: "50%",
                backgroundColor: "#fff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#eb5322",
                fontSize: "2rem",
                fontWeight: "bold",
              }}
            >
              {loggedUser.name ? loggedUser.name[0] : ""}
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "1rem",
              }}
            >
              <Box
                sx={{
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                }}
              >
                {loggedUser ? loggedUser.name : "Usuário"}{" "}
                {loggedUser ? loggedUser.surname : "Teste"}
              </Box>
              <Box
                sx={{
                  fontSize: "1rem",
                }}
              >
                {loggedUser.role}
              </Box>
            </Box>
          </Box>
        </Box>
        <button
          style={{
            padding: "0.5rem 1rem",
            borderRadius: "10px",
            backgroundColor: "#fff",
            border: "2px solid #000",
            cursor: "pointer",
            color: "#eb5322",
            fontWeight: "bold",
            fontSize: "1.2rem",
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "#eb5322";
            e.target.style.color = "#000";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "#fff";
            e.target.style.color = "#eb5322";
          }}
          onClick={handleLogout}
        >
          Sair
        </button>
      </Box>
      <Section
        title="Inicio"
        onClick={() => router.push("dashboard")}
        className={
          router.pathname === "/admin/dashboard" &&
          Object.keys(router.query).length === 0
            ? "active"
            : ""
        }
      />
      <Section
        title="Usuários"
        onClick={() => handleRoute("users")}
        className={router.query.page === "users" ? "active" : ""}
      />
      <Section
        title="Eventos"
        onClick={() => handleRoute("events")}
        className={router.query.page === "events" ? "active" : ""}
      />
    </Box>
  );
};

export default Aside;
