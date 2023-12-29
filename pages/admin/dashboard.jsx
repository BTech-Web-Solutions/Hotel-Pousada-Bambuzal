import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { setCookie, getCookie, deleteCookie } from "../../src/hooks/useCookies";
import { Box } from "@mui/material";

const apiKey = process.env.NEXT_PUBLIC_API_AUTH_KEY;
const apiURL = process.env.NEXT_PUBLIC_API_URL;

const Dashboard = () => {
  const [isValidToken, setIsValidToken] = useState(false);

  const router = useRouter();

  useEffect(() => {
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
          setCookie("admEmail", "");
          router.push("/admin");
        }
      };
      fetchApi();
      setIsValidToken(true);
    }
  }, []);

  const handleLogout = async () => {
    const result = await fetch(`${apiURL}/admin/logout`, {
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

    console.log("Logout response:", data);

    if (data.message === "User logged out!") {
      deleteCookie("admEmail");
      console.log("Cookie deleted");
      router.push("/admin");
    } else {
      console.log("Logout failed");
    }
  };

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
              width: "101%",
              height: "12%",
              color: "#fff",
              bgcolor: "#eb5322",
              borderRadius: "0 0.5rem 0 0",
              display: "flex",
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
                  U
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
                    Usuário Teste
                  </Box>
                  <Box
                    sx={{
                      fontSize: "0.8rem",
                    }}
                  >
                    Administrador
                  </Box>
                </Box>
              </Box>
            </Box>
            <button
              style={{
                padding: "0.5rem 1rem",
                borderRadius: "10px",
                backgroundColor: "#fff",
                border: "2px solid #000",
                cursor: "pointer",
                color: "#eb5322",
                fontWeight: "bold",
                fontSize: "1.2rem",
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "#eb5322";
                e.target.style.color = "#000";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "#fff";
                e.target.style.color = "#eb5322";
              }}
              onClick={handleLogout}
            >
              Sair
            </button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
