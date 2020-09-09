const path = require("path");
const express = require("express");
const router = express.Router();

//shows home page
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

//shows stats page
router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

//shows exercise page where exercise data is entered
router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

module.exports = router;
