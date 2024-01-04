import React, { useState } from "react";

const DeleteUserModal = ({ selectedUser, setDeleteUser }) => {
  const [userId, setUserId] = useState(selectedUser.id);
  const [userName, setUserName] = useState(selectedUser.name);
  const [userSurname, setUserSurname] = useState(selectedUser.surname);
  const [userEmail, setUserEmail] = useState(selectedUser.email);

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

  const checkAndDelete = async () => {
    try {
      const isTokenValid = await checkTokenBefore();

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
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={handleCancel}>
          &times;
        </span>
        <h2>Deletar Usuário</h2>
        <p>
          Tem certeza que deseja deletar o usuário {userName} {userSurname} (
          {userEmail})?
        </p>
        <button type="button" onClick={checkAndDelete}>
          Deletar Usuário
        </button>
      </div>
    </div>
  );
};

export default DeleteUserModal;
