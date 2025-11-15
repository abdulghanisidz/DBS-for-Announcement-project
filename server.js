const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Enable CORS only for your WordPress site
app.use(cors({
  origin: "https://siteforschool2.wuaze.com"
}));

// Connect to MongoDB Atlas
const mongoUsername = process.env.MONGO_USERNAME || "abdulghanisidz";
const mongoPassword = process.env.MONGO_PASSWORD || "";
const mongoCluster = "mongodbase.grsajl8.mongodb.net";
const mongoDatabase = "schoolApp";

const mongoURI = `mongodb+srv://${mongoUsername}:${mongoPassword}@${mongoCluster}/${mongoDatabase}?retryWrites=true&w=majority`;

mongoose.connect(mongoURI)
.then(() => console.log("✅ Connected to MongoDB Atlas"))
.catch(err => console.error("❌ MongoDB connection error:", err));

// Announcement Schema
const announcementSchema = new mongoose.Schema({
  message: String,
  date: { type: Date, default: Date.now }
});

// Model
const Announcement = mongoose.model("Announcement", announcementSchema);

// Routes

// GET announcements (for frontend)
app.get("/announcements", async (req, res) => {
  try {
    const announcements = await Announcement.find().sort({ date: -1 });
    res.json(announcements);
  } catch (err) {
    res.status(500).json({ error: "Error fetching announcements" });
  }
});

// POST announcements (restricted, use terminal/cURL)
app.post("/announcements", async (req, res) => {
  const { message } = req.body;
  if (!message) return res.status(400).json({ error: "Message required" });

  try {
    const newAnnouncement = new Announcement({ message });
    await newAnnouncement.save();
    res.json({ status: "ok", message: "Announcement saved!" });
  } catch (err) {
    res.status(500).json({ error: "Error saving announcement" });
  }
});

app.listen(port, () => {
  console.log(`✅ Server running on port ${port}`);
});
