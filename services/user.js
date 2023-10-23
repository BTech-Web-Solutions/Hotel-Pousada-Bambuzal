import { database } from "/firebase/firebaseConfig";
import { collection, getDocs, addDoc } from "firebase/firestore";
import jwt from "jsonwebtoken";

export const register = async (body) => {
  const requiredFields = {
    name: "Name is required",
    surname: "Surname is required",
    password: "Password is required",
    email: "Email is required",
  };
  const querySnapshot = await getDocs(collection(database, "users"));
  const users = querySnapshot.docs.map((doc) => doc.data());
  const existEmail = users.find((user) => user.email === body.email);
  if (existEmail) throw new Error("Email already exist");

  for (const field in requiredFields) {
    if (!body[field]) throw new Error(requiredFields[field]);
  }

  body.roles = ["user"];
  body.password = jwt.sign(body.password, process.env.JWT_SECRET);

  const newUser = await addDoc(collection(database, "users"), body);
  return newUser;
};

export const login = async (body) => {
  const querySnapshot = await getDocs(collection(database, "users"));
  const users = querySnapshot.docs.map((doc) => doc.data());
  const user = users.find((user) => user.email === body.email);
  if (!user) throw new Error("User not found");

  const password = jwt.sign(body.password, process.env.JWT_SECRET);
  if (user.password !== password) throw new Error("Password incorrect");

  return user;
};
