const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const routesIndex = require("./routes/index");
const routesData = require("./routes/data");
const routesName = require("./routes/name");

const app = express();
app.use(cookieParser());

app.use(express.static("public"));

app.set("view engine", "pug");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(routesIndex);
app.use(routesData);
app.use(routesName);

app.use((req, res, next) => {
  res.render("error");
});

app.listen(3000);
