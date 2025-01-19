const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const profilesFilePath = path.join(__dirname, "src/mockData/profiles.json");


function loadProfiles() {
  return new Promise((resolve, reject) => {
    fs.readFile(profilesFilePath, "utf8", (err, data) => {
      if (err) {
        return reject("Failed to read profiles data.");
      }
      try {
        const profiles = JSON.parse(data); 
        resolve(profiles);
      } catch (parseErr) {
        reject("Failed to parse profiles data.");
      }
    });
  });
}


function saveProfiles(profiles) {
  return new Promise((resolve, reject) => {
    const updatedData = JSON.stringify(profiles, null, 2); 
    fs.writeFile(profilesFilePath, updatedData, "utf8", (err) => {
      if (err) {
        return reject("Failed to save profiles data.");
      }
      resolve();
    });
  });
}


app.get("/api/profiles", async (req, res) => {
  try {
    const profiles = await loadProfiles();
    res.json(profiles);
  } catch (error) {
    res.status(500).json({ error });
  }
});


app.post("/api/profiles", async (req, res) => {
  const newProfile = req.body;

 
  if (!newProfile.name || !newProfile.image || !newProfile.description) {
    return res.status(400).json({ error: "Missing required profile fields." });
  }

  try {
    const profiles = await loadProfiles();
    newProfile.id = Date.now(); 
    profiles.push(newProfile);

    await saveProfiles(profiles);
    res.status(201).json(newProfile);
  } catch (error) {
    res.status(500).json({ error });
  }
});


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://172.18.16.199:${PORT}`);
});
