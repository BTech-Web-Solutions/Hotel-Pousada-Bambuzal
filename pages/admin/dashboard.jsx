import { useState } from "react";
import { useRouter } from "next/router";
import { getCookie } from "../../src/hooks/useCookies";
import useTokenValidation from "../../src/hooks/useTokenValidation";
import events from "../../pages/api/events.json";
import { Box } from "@mui/material";

const Dashboard = () => {
  const [isValidToken, setIsValidToken] = useState(false);
  const token = getCookie("token");
  const router = useRouter();

  useTokenValidation(token, router, setIsValidToken);

  if (!isValidToken) {
    return null;
  }

  return (
    <>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "primary.main",
          marginLeft: "-39rem",
        }}
      >
        <Box
          sx={{
            width: "1",
            height: "100vh",
            backgroundColor: "secondary.main",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          component={"aside"}
        ></Box>
      </Box>
    </>
  );
};

export default Dashboard;
