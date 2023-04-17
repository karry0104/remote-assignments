const express = require("express");
const router = express.Router();

router.get("/myName", (req, res) => {
  const userName = req.cookies.username;
  if (userName) {
    // getting stored username from the browser cookies
    res.render("user", { name: req.cookies.username });
  } else {
    res.render("user");
  }
});

router.post("/trackName", (req, res) => {
  res.cookie("username", req.body.username);
  res.redirect("/myName");
});

router.post("/goodbye", (req, res) => {
  res.clearCookie("username");
  res.redirect("/myName");
});

module.exports = router;
