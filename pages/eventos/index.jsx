import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

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

    const token = localStorage.getItem("token");

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

  return <h1>Eventos</h1>;
}
