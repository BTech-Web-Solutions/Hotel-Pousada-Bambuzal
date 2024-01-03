import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getCookie, deleteCookie } from "../../../src/hooks/useCookies";
import Aside from "../../../src/components/dashboard/Aside";
import UsersPage from "./UsersPage";
import EventsPage from "./EventsPage";
import Layout from "../../../src/components/dashboard/Layout";

import { Box } from "@mui/material";

const apiKey = process.env.NEXT_PUBLIC_API_AUTH_KEY;
const apiURL = process.env.NEXT_PUBLIC_API_URL;

const Dashboard = () => {
  const [isValidToken, setIsValidToken] = useState(false);
  const router = useRouter();

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
    checkToken();
  }, []);

  if (!isValidToken) {
    return null;
  }

  return (
    <Box
      sx={{
        color: "#fff",
        // display: "flex",
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
