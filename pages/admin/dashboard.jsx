import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { setCookie, getCookie, deleteCookie } from "../../src/hooks/useCookies";

const dashboard = () => {
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
        router.push("/admin");
      } else {
        setIsValidToken(true); // Define a variável isValidToken como verdadeira se o token for válido.
      }
    };

    checkAndRedirect();
  }, []);

  if (!isValidToken) {
    return null;
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
        fontSize: "3rem",
        color: "red",
      }}
    >
      dashboard
    </div>
  );
};

export default dashboard;
