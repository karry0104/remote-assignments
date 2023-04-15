const express = require("express");
const router = express.Router();

router.get("/myName", (req, res) => {
  const userName = req.cookies.username;
  if (userName) {
    // getting stored username from the browser cookies
    res.render("user", { name: req.cookies.username });
  } else {
    res.redirect("/trackName");
  }
});

router.get("/trackName", (req, res) => {
  const userName = req.cookies.username;
  if (userName) {
    res.redirect("/myName");
  } else {
    res.render("user");
  }
});

router.post("/trackName", (req, res) => {
  res.cookie("username", req.body.username);
  if (!req.body.username) {
    res.render("trackname", { Welcome: "Enter your name" });
  } else {
    res.redirect("/myName");
  }
});

router.post("/goodbye", (req, res) => {
  res.clearCookie("username");
  res.redirect("/trackName");
});

module.exports = router;
