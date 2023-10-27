import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { database } from "../firebase/firebaseConfig";
import { collection, onSnapshot, doc, updateDoc } from "firebase/firestore";

const test = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(database, "users"),
      (snapshot) => {
        const users = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setUsers(users);
      }
    );

    return () => {
      unsubscribe();
    };
  }, []);

  async function editName(id) {
    try {
      const docRef = doc(database, "users", id);

      await updateDoc(docRef, {
        name: "Trocou o Nome",
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Box
      sx={{
        color: "white",
      }}
    >
      <h1>Users</h1>
      {users.map((user) => (
        <div key={user.id}>
          <h1>Nome: </h1>
          <h2>
            {user.name} {user.surname}
            <button onClick={() => editName(user.id)}>EDITAR NOME</button>
          </h2>

          <h1>Email: </h1>
          <h2>{user.email}</h2>

          <h1>Roles: </h1>
          <ul>
            {user.roles.map((role) => (
              <li key={role}>{role}</li>
            ))}
          </ul>
        </div>
      ))}
    </Box>
  );
};

export default test;
