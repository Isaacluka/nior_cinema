// server.js
import express from "express";
import rateLimit from "express-rate-limit";
import validator from "validator";
import cors from "cors";
import jwt from "jsonwebtoken";


// const express = require("express");
const app = express();
app.use(cors());
app.use(express.json());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});

const SECRET = "noir_super_secret";
const waitlist =[];

app.get ("/", (req, res) => {
  res.send("Backend is running!!!");
});

//Email capture

app.post("/api/waitlist", limiter, async (req, res) => {

  let location = "Unknown";

  const {Email, Role} = req.body;

  if(!Email || !Role) {
    return res.status(400).json({message: "Email and role required"})
  }

  if (!validator.isEmail(Email)) {
    return res.status(400).json({message:"Invalid email"})
  }

  try {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();
    location = data.country_name || "Unknown";
  } catch(err) {
    console.log("Could not get location, defaulting to Unknown");
  }

  try{
    const sheetResponse = await fetch("https://sheetdb.io/api/v1/7gralaadmp8tb/search?Email=" + Email);

    const existing = await sheetResponse.json();

    if(existing.length > 0) {
      return res.status(409).json({message: "Email already on waitlist"});
    }
    
    await fetch("https://sheetdb.io/api/v1/7gralaadmp8tb", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body:JSON.stringify({
            data: [{
              ...req.body,
            Location: location,
            DateJoined: new Date().toISOString()
          }]
        })
    });

    res.status(200).json({message: "Added to waitlist"})
      
  }
  catch (error) {
    res.status(500).json({
      message: "Server error"
    });
  }
  
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