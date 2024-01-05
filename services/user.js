import fs from "fs";
import path from "path";
import bcrypt from "bcrypt";

const filePath = path.join(__dirname, "/pages/api/user", "db.json");

export const register = async (body) => {
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      console.log("Erro ao ler o arquivo: ", err);
      return;
    }
    const parsedFile = JSON.parse(data);
    const newUser = body;
    parsedFile[0].users.push(newUser);
    const updatedFile = JSON.stringify(parsedFile, null, 2);
    fs.writeFile(filePath, updatedFile, "utf-8", (err) => {
      if (err) {
        console.log("Erro ao tentar atualizar arquivo ", err);
        return;
      }
      console.log("Usuário adicionado com sucesso");
    });
  });
};
