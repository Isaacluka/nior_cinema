// server.js
import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";

// const express = require("express");
const app = express();
app.use(cors());
app.use(express.json());

const SECRET = "noir_super_secret";
const waitlist =[];

app.get ("/", (req, res) => {
  res.send("Backend is running!!!");
});

//Email capture

app.post("/api/waitlist", async (req, res) => {

  let location = "Unknown";

  try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();
        location = data.country_name || "Unkown";
      } catch(err) {
        console.log("Could not get location, defaulting to Unknown");
      }

  await fetch("https://sheetdb.io/api/v1/7gralaadmp8tb", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify({
                data: [req.body]
             })
        });
        
  // const { email, role, location } = req.body;

  // if (!email || !role) {
  //   return res.status(400).json({ message: "Email and role required" });
  // }
  
  // const exists = waitlist.find(entry => entry.email === email);

  // if (exists) {
  //   return res.status(409).json({ message: "Email already on waitlist" });
  // }

  // try {
  //   // Save email (example using array for now)
  //   waitlist.push({
  //     Email,
  //     Role,
  //     Location: location || "Unknown",
  //     DateJoined: new Date()
  //   });

  //   res.status(200).json({ message: "Successfully joined waitlist" });
  // } catch (error) {
  //   res.status(500).json({ message: "Server error" });
  // }
});

app.get("/api/waitlist", (req, res) => {
  res.send("Waitlist API working");
});
app.get("/api/waitlist/all", (req, res) => {
  res.json(waitlist);
});
// Renamed Server to server

// Fake database (replace with MongoDB later)
app.post("/api/review", (req, res) => {
  const { rating } = req.body;
  console.log(req.body);

  if (!rating || rating < 1 || rating > 5) {
    return res.status(400).json({ message: "Invalid rating" });
  }

  // TODO: Save to database

  res.json({ message: "Review saved successfully" });
});

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
const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log("Server running");
});