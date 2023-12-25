import fs from "fs";
import path from "path";
import bcrypt from "bcrypt";

const filePath = path.join(__dirname, "/pages/api/user", "db.json");

export const register = async (body) => {
  try {
    const requiredFields = {
      name: "Name is required",
      surname: "Surname is required",
      password: "Password is required",
      email: "Email is required",
    };
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
    const users = querySnapshot.docs.map((doc) => doc.data());
    const existEmail = users.find((user) => user.email === body.email);
    if (existEmail) throw new Error("Email already exists");

    for (const field in requiredFields) {
      if (!body[field]) throw new Error(requiredFields[field]);
    }
    body.roles = ["user"];

    const salt = await bcrypt.genSalt(10);
    body.password = await bcrypt.hash(body.password, salt);

    const newUserRef = await addDoc(collection(database, "users"), body);
    const newUser = { id: newUserRef.id, ...body };

    return newUser;
  } catch (err) {
    throw new Error(err.message);
  }
};

export const login = async (body) => {
  try {
    const querySnapshot = await getDocs(collection(database, "users"));
    const users = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    const user = users.find((user) => user.email === body.email);
    if (!user) throw new Error("User not found");

    const validPassword = await bcrypt.compare(body.password, user.password);
    if (!validPassword) throw new Error("Invalid password");

    const token = jwt.sign(
      {
        id: user.id,
        name: user.name,
        surname: user.surname,
        email: user.email,
        roles: user.roles,
      },
      process.env.JWT_SECRET
    );

    return { user, token };
  } catch (err) {
    throw new Error(err.message);
  }
};
