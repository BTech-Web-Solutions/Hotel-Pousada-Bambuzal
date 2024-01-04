import React, { useState } from "react";

const AddUserModal = ({ setAddUser }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
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
          role: role,
        }),
      });
      const data = await result.json();
      alert(
        data.message === "User created successfully"
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
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={handleCancel}>
          &times;
        </span>
        <h2>Adicionar Usuário</h2>
        <form>
          <label>Nome:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Sobrenome:</label>
          <input
            type="text"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Função:</label>
          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
          <button type="button" onClick={checkAndCreate}>
            Criar Usuário
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUserModal;
