const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

router.use(bodyParser.urlencoded({ extended: false }));
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
  res.render("user");
});

router.post("/trackName", (req, res) => {
  res.cookie("username", req.body.username);
  if (!req.body.username) {
    res.render("trackname", { Welcome: "Enter your name" });
  }
  res.redirect("/myName");
});

module.exports = router;
