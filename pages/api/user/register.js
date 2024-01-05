import { register } from "../../../services/user";

export default async function handler(req, res) {
  try {
    await register(req.body);
    res.status(200).json({ msg: "User created successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}
