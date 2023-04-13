const express = require("express");
const router = express.Router();

router.get("/data", (req, res) => {
  const par = parseInt(req.query.number);
  if (par) {
    let sum = 0;
    sum = ((par + 1) * par) / 2;
    res.send(`${sum}`);
  } else {
    res.send(`Lack of Parameter`);
  }
});

module.exports = router;
