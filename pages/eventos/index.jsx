import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { setCookie, getCookie, deleteCookie } from "../../src/hooks/useCookies";

export default function Events() {
  const router = useRouter();
  const [isValidToken, setIsValidToken] = useState(false);

  useEffect(() => {
    const checkTokenValidity = async (token) => {
      const response = await fetch("http://localhost:3000/api/user/validate", {
        method: "POST",
        body: JSON.stringify({ token }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      return response.ok;
    };

    const token = getCookie("token");

    const checkAndRedirect = async () => {
      if (!token || !(await checkTokenValidity(token))) {
        router.push("/eventos/admin");
      } else {
        setIsValidToken(true); // Define a variável isValidToken como verdadeira se o token for válido.
      }
    };

    checkAndRedirect();
  }, []);

  if (!isValidToken) {
    return null; // Não renderiza nada se o token não for válido (ou se a verificação ainda não foi concluída).
  }

  const handleLogout = () => {
    deleteCookie("token");
    router.push("/eventos/admin");
  };

  return (
    <>
      <h1
        style={{
          marginTop: "2rem",
          marginBottom: "1rem",
          textAlign: "center",
          color: "#fff",
        }}
      >
        Eventos
      </h1>
      <button
        onClick={handleLogout}
        style={{
          marginTop: "1rem",
          padding: "0.5rem 1rem",
          border: "none",
          borderRadius: "0.5rem",
          backgroundColor: "#fff",
          color: "#000",
          cursor: "pointer",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          fontSize: "1rem",
          fontWeight: "bold",

          ":hover": {
            backgroundColor: "#000",
            color: "#000",
          },
        }}
      >
        LogOut
      </button>
    </>
  );
}
