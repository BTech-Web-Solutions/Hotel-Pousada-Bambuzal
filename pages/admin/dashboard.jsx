import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getCookie } from "../../src/hooks/useCookies";
import useTokenValidation from "../../src/hooks/useTokenValidation";
import { Box } from "@mui/material";
import db from "../../pages/api/db.json";

const Dashboard = () => {
  const [isValidToken, setIsValidToken] = useState(false);
  const [loggedUser, setLoggedUser] = useState();

  const token = getCookie("token");
  const router = useRouter();

  // if (!isValidToken) {
  //   return null;
  // }

  useEffect(() => {
    const user = db.map((data) =>
      data.users.find((user) => user.email === "testregister@gmail.com")
    );
    setLoggedUser(...user);
  }, []);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          backgroundColor: "#101010",
        }}
      >
        <Box
          component={"aside"}
          sx={{
            width: "30%",
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
              width: "100%",
              height: "12%",
              color: "#fff",
              bgcolor: "#eb5322",
              borderRadius: "0 0.5rem 0 0",
              display: "flex",
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
                  {loggedUser?.name[0]}
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
                    {loggedUser?.name} {loggedUser?.surname}
                  </Box>
                  <Box
                    sx={{
                      fontSize: "0.8rem",
                    }}
                  >
                    {loggedUser?.roles && loggedUser.roles.includes("admin")
                      ? "Administrador"
                      : "Usuário"}
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
