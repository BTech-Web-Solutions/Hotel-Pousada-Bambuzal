import React, { use, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { setCookie, getCookie, deleteCookie } from "../../src/hooks/useCookies";
import useTokenValidation from "./useTokenValidation";

export default function Events() {
  const router = useRouter();

  useEffect(() => {
    useTokenValidation();
  }, []);

  const handleLogout = () => {
    deleteCookie("token");
    router.push("/admin");
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
