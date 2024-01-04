import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getCookie, deleteCookie } from "../../../src/hooks/useCookies";
import Aside from "../../../src/components/dashboard/Aside";
import UsersPage from "./UsersPage";
import EventsPage from "./EventsPage";
import Layout from "../../../src/components/dashboard/Layout";
import { Box } from "@mui/material";
import Loading from "../../../src/components/Loading"; // Importe o componente Loading

const apiKey = process.env.NEXT_PUBLIC_API_AUTH_KEY;
const apiURL = process.env.NEXT_PUBLIC_API_URL;

const Dashboard = () => {
  const [isValidToken, setIsValidToken] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Adicione um estado para o carregamento
  const router = useRouter();

  const checkToken = async () => {
    const cookie = getCookie("admEmail");
    if (cookie === "" || cookie === null) {
      router.push("/admin");
    } else {
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

      if (data.message === "Invalid credentials") {
        deleteCookie("admEmail");
        router.push("/admin");
      } else {
        setIsValidToken(true);
      }
    }

    setIsLoading(false); // Desativar o carregamento após a verificação do token
  };

  useEffect(() => {
    checkToken();
  }, []);

  if (isLoading) {
    return <Loading />; // Mostrar o componente Loading enquanto está carregando
  }

  if (!isValidToken) {
    return null;
  }

  return (
    <Box
      sx={{
        color: "#fff",
      }}
    >
      <Layout>
        <Aside />
        {router.query.page === "users" && <UsersPage />}
        {router.query.page === "events" && <EventsPage />}
      </Layout>
    </Box>
  );
};

export default Dashboard;
