import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getCookie, deleteCookie } from "../../src/hooks/useCookies";
import Aside from "../../src/components/dashboard/Aside";
import UsersPage from "../../src/components/dashboard/UsersPage";
import EventsPage from "../../src/components/dashboard/EventsPage";

import { Box } from "@mui/material";

const apiKey = process.env.NEXT_PUBLIC_API_AUTH_KEY;
const apiURL = process.env.NEXT_PUBLIC_API_URL;

const Dashboard = () => {
  const [isValidToken, setIsValidToken] = useState(false);
  const [dashboardRoute, setDashboardRoute] = useState("dashboard");
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
        display: "flex",
        color: "#fff",
      }}
    >
      <Aside
        setDashboardRoute={setDashboardRoute}
        dashboardRoute={dashboardRoute}
      />

      {dashboardRoute === "dashboard" && <h1>Dashboard</h1>}
      {dashboardRoute === "users" && <UsersPage />}
      {dashboardRoute === "events" && <EventsPage />}
    </Box>
  );
};

export default Dashboard;
