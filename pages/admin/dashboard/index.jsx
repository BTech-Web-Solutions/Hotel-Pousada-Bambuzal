import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getCookie, deleteCookie } from "../../../src/hooks/useCookies";
import { Box } from "@mui/material";
import Aside from "../../../src/components/dashboard/Aside";

const apiKey = process.env.NEXT_PUBLIC_API_AUTH_KEY;
const apiURL = process.env.NEXT_PUBLIC_API_URL;
const apiURLLocal = process.env.NEXT_PUBLIC_API_URL_LOCAL;

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
    <>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          backgroundColor: "#101010",
        }}
      >
        <Aside />
      </Box>
    </>
  );
};

export default Dashboard;
