import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  try {
    const { token } = req.body;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    res.status(200).json({ user: decoded });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
}
