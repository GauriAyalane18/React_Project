const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const profilesFilePath = path.join(__dirname, "src/mockData/profiles.js");

// Endpoint to fetch profiles
app.get("/api/profiles", (req, res) => {
  fs.readFile(profilesFilePath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Failed to read profiles data." });
    }
    const profiles = eval(data.match(/(?<=export const profiles = ).+/)[0]); // Extract array from file
    res.json(profiles);
  });
});

// Endpoint to add a new profile
app.post("/api/profiles", (req, res) => {
  const newProfile = req.body;
  fs.readFile(profilesFilePath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Failed to read profiles data." });
    }
    const profiles = eval(data.match(/(?<=export const profiles = ).+/)[0]);
    profiles.push(newProfile);

    const updatedData = `export const profiles = ${JSON.stringify(profiles, null, 2)};`;
    fs.writeFile(profilesFilePath, updatedData, "utf8", (err) => {
      if (err) {
        return res.status(500).json({ error: "Failed to save profile." });
      }
      res.status(201).json(newProfile);
    });
  });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://172.18.16.199:${PORT}`);
});
