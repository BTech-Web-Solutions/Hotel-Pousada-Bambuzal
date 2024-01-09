import React, { useState, useEffect } from "react";
import { Box, Button, MenuItem, Select } from "@mui/material";
import ModalInput from "../ModalInput";
import checkTokenBefore from "../../../checkTokenBefore";
import { getCookie } from "../../../hooks/useCookies";

const apiKey = process.env.NEXT_PUBLIC_API_AUTH_KEY;
const apiURL = process.env.NEXT_PUBLIC_API_URL;

const AddUserModal = ({ setAddUser }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleCancel = () => {
    setAddUser(false);
  };

  const handleCreate = async () => {
    try {
      const result = await fetch(`${apiURL}/users/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: apiKey,
        },
        body: JSON.stringify({
          name: name,
          surname: surname,
          email: email,
          password: password,
          role: role,
          admEmail: getCookie("admEmail"),
        }),
      });
      const data = await result.json();

      alert(
        data.message === "User created!"
          ? "Usuário criado com sucesso!"
          : "Erro ao criar usuário!"
      );
      setAddUser(false);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  const checkAndCreate = async () => {
    try {
      const isTokenValid = await checkTokenBefore();

      if (isTokenValid) {
        handleCreate();
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
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setAddUser(false);
        }
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
          justifyContent: "space-around",
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
          Criando Novo Usuário
        </h1>
        <h3>Nome:</h3>
        <ModalInput
          id="name"
          variant="outlined"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        />
        <h3>Sobrenome:</h3>
        <ModalInput
          id="surname"
          variant="outlined"
          onChange={(e) => {
            setSurname(e.target.value);
          }}
          value={surname}
        />
        <h3>Email:</h3>
        <ModalInput
          id="email"
          variant="outlined"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
        <h3>Senha:</h3>
        <ModalInput
          id="password"
          type="password"
          variant="outlined"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
        />
        <h3>Cargo:</h3>
        <Select
          defaultValue="Funcionário"
          value={role === "" ? "Funcionário" : role}
          onChange={(e) => {
            setRole(e.target.value);
          }}
          sx={{
            color: "#fff",
            border: "2px solid #fff",

            "&:hover": {
              border: "2px solid #eb5310",
            },
          }}
        >
          <MenuItem value="Administrador">Administrador</MenuItem>
          <MenuItem value="Funcionário">Funcionário</MenuItem>
        </Select>
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
            onClick={(e) => {
              e.preventDefault();
              checkAndCreate();
            }}
          >
            CRIAR
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AddUserModal;
