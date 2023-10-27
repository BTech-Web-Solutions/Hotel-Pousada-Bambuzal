import { database } from "/firebase/firebaseConfig";
import { collection, getDocs, addDoc } from "firebase/firestore";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const register = async (body) => {
  try {
    const requiredFields = {
      name: "Name is required",
      surname: "Surname is required",
      password: "Password is required",
      email: "Email is required",
    };
    const querySnapshot = await getDocs(collection(database, "users"));
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
