import { login } from "../../../services/user";

export default async function handler(req, res) {
  try {
    const user = await login(req.body);
    res.status(200).json({ msg: "User logged successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}
