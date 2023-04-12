const express = require("express");
const router = express.Router();
const cookieParser = require("cookie-parser");

router.use(cookieParser());

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
  res.render("trackname");
});

router.post("/trackName", (req, res) => {
  res.cookie("username", req.body.username);
  console.log(req.body.username);
  res.redirect("/myName");
});

module.exports = router;
