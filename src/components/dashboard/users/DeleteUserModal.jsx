import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import checkTokenBefore from "../../../checkTokenBefore";

const DeleteUserModal = ({ selectedUser, setDeleteUser }) => {
  const [userId, setUserId] = useState(selectedUser.id);
  const [userName, setUserName] = useState(selectedUser.name);
  const [userSurname, setUserSurname] = useState(selectedUser.surname);
  const [userEmail, setUserEmail] = useState(selectedUser.email);
  const [userRole, setUserRole] = useState(selectedUser.role);

  const apiKey = process.env.NEXT_PUBLIC_API_AUTH_KEY;
  const apiURL = process.env.NEXT_PUBLIC_API_URL;

  const handleCancel = () => {
    setDeleteUser(false);
  };

  const handleDelete = async () => {
    try {
      const result = await fetch(`${apiURL}/users/delete/${userId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: apiKey,
        },
      });
      const data = await result.json();
      alert(
        data.message === "User deleted!"
          ? "Usuário deletado com sucesso!"
          : "Erro ao deletar usuário!"
      );
      setDeleteUser(false);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const cantDeleteIfADM1 = () => {
    if (selectedUser.role === "Administrador1") {
      alert("Você não pode deletar um usuário administrador!");
      setDeleteUser(false);
      return true;
    }
  };

  const checkAndDelete = async () => {
    try {
      const isTokenValid = await checkTokenBefore();

      if (cantDeleteIfADM1()) {
        return;
      }

      if (isTokenValid) {
        handleDelete();
      } else {
        alert("Você não tem permissão para deletar usuários!");
      }
    } catch (error) {
      console.error("Error checking token:", error);
    }
  };

  return (
    <Box
      sx={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100vw",
        height: "100vh",
        bgcolor: "#0008",
        zIndex: "999",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: {
            xs: "90%",
            sm: "80%",
            md: "50%",
            lg: "40%",
            xl: "35rem",
          },
          height: {
            xs: "90%",
            sm: "80%",
            md: "100%",
            lg: "90%",
            xl: "80%",
          },
          border: "2px solid #eb5310",
          backgroundColor: "#222e",
          borderRadius: "1rem",
          padding: "2rem",
          position: "relative",
          cursor: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <Box
          sx={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            cursor: "pointer",
            "&:hover": {
              transform: "scale(1.3)",
            },
            bgcolor: "#eb5310",
            padding: "0.5rem",
            borderRadius: "999px",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5rem"
            height="1.5rem"
            fill="currentColor"
            viewBox="0 0 16 16"
            onClick={handleCancel}
          >
            <path
              fillRule="evenodd"
              d="M.146 1.146a.5.5 0 01.708 0L8 7.293l7.146-6.147a.5.5 0 11.708.708L8.707 8l7.147 7.146a.5.5 0 01-.708.708L8 8.707l-7.146 7.147a.5.5 0 01-.708-.708L7.293 8 .146 1.854a.5.5 0 010-.708z"
            />
          </svg>
        </Box>
        <h1
          style={{
            fontWeight: "bold",
            marginBottom: "-5px",
          }}
        >
          Deletar Usuário
        </h1>

        <div>
          <h2>Nome</h2>
          <p>{userName}</p>
        </div>

        <div>
          <h2>Sobrenome</h2>
          <p>{userSurname}</p>
        </div>

        <div>
          <h2>Email</h2>
          <p>{userEmail}</p>
        </div>

        <h3>Tem certeza que deseja deletar este usuário?</h3>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "2rem",
          }}
        >
          <Button
            sx={{
              padding: "0.5rem 1rem",
              borderRadius: "999px",
              border: "2px solid #ff003a",
              color: "#fff",
              fontSize: "1.2rem",
              cursor: "pointer",
              "&:hover": {
                transform: "scale(1.1)",
                backgroundColor: "#ff003a",
                border: "none",
              },
            }}
            onClick={handleCancel}
          >
            CANCELAR
          </Button>
          <Button
            sx={{
              padding: "0.5rem 1rem",
              borderRadius: "999px",
              border: "2px solid #eb5310",
              color: "#fff",
              fontSize: "1.2rem",
              cursor: "pointer",
              "&:hover": {
                transform: "scale(1.1)",
                backgroundColor: "#eb5100",
                border: "none",
              },
            }}
            onClick={checkAndDelete}
          >
            DELETAR
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default DeleteUserModal;
