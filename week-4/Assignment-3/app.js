import express from "express";
import bodyParser from "body-parser";
import router from "./routes/user.js";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "pug");

app.use(router);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(3000);
