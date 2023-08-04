const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
  console.log("Connected to the router");
  next();
});

// Define your routes here
router.get("/", (req, res) => {
  res.send("Hello, this is the homepage!");
});

router.get("/about", (req, res) => {
  res.send("Welcome to the About page!");
});

router.get("/contact", (req, res) => {
  res.send("Contact us at: contact@example.com");
});

module.exports = router;
