const express = require("express");
const router = express.Router();

router.get("/data", (req, res) => {
  const number = req.query.number;
  if (!number) {
    res.send("Lack of Parameter");
  } else if (+number < 0 || !Number.isInteger(+number)) {
    res.send("Must be Positive Integer");
  } else {
    const par = parseInt(number);
    let sum = 0;
    sum = ((par + 1) * par) / 2;
    res.send(`${sum}`);
  }
});

module.exports = router;
