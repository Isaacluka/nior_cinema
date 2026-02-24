// server.js
import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";

const app = express();
app.use(cors());
app.use(express.json());

const SECRET = "noir_super_secret";

// Fake database (replace with MongoDB later)
const validPins = ["12345678", "87654321"];

app.post("/api/verify", (req, res) => {
  const { pin } = req.body;

  if (!pin) {
    return res.status(400).json({ message: "PIN required" });
  }

  if (!validPins.includes(pin)) {
    return res.status(401).json({ message: "Invalid access key" });
  }

  const token = jwt.sign({ access: true }, SECRET, { expiresIn: "2h" });

  res.json({ token });
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log("Server running");
});