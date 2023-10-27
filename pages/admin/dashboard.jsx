import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getCookie } from "../../src/hooks/useCookies";
import useTokenValidation from "../../src/hooks/useTokenValidation";
import { Box } from "@mui/material";
import db from "../../pages/api/db.json";

import { database } from "/firebase/firebaseConfig";
import { doc, getDoc, setDoc, deleteField } from "firebase/firestore";

const Dashboard = () => {
  const [isValidToken, setIsValidToken] = useState(false);
  const [loggedUser, setLoggedUser] = useState();

  const router = useRouter();

  // if (!isValidToken) {
  //   return null;
  // }

  const getTokenFromDB = async () => {
    const id = getCookie("dbId");
    const docRef = doc(database, "users", id);
    const docSnap = await getDoc(docRef);
    return docSnap.data().token;
  };

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

    const checkAndRedirect = async () => {
      const token = await getTokenFromDB();
      if (!token) {
        router.push("/admin");
      } else {
        const isValid = await checkTokenValidity(token);
        if (!isValid) {
          router.push("/admin");
        } else {
          setIsValidToken(true);
        }
      }
    };

    checkAndRedirect();
  }, []);

  if (!isValidToken) {
    return null;
  }

  const getLoggedUser = async () => {
    const token = await getTokenFromDB();
    if (!token) return;
    const loggedUser = token ? JSON.parse(atob(token.split(".")[1])) : null;
    const docRef = doc(database, "users", loggedUser.id);
    const docSnap = await getDoc(docRef);
    const user = docSnap.data();
    setLoggedUser(user);
  };
  getLoggedUser();

  const handleLogOut = async () => {
    const token = await getTokenFromDB();
    const id = getCookie("dbId");
    const docRef = doc(database, "users", id);
    await setDoc(docRef, { token: deleteField() }, { merge: true });
    router.push("/admin");
  };

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
              onClick={handleLogOut}
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
