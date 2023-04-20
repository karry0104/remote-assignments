import { checkUser, createUser } from "../models/database.js";

export const home = (req, res) => {
  res.render("layout");
};

export const signUp = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await checkUser(email, password);
    if (user) {
      res.render("layout", { message: "try again" });
    } else {
      const newUser = await createUser(email, password);
      res.redirect("/member");
    }
  } catch (err) {
    console.error(err);
  }
};

export const signIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await checkUser(email, password);
    if (user) {
      res.redirect("/member");
    } else {
      res.render("layout", { message: "try again" });
    }
  } catch (err) {
    console.error(err);
  }
};

export const member = (req, res) => {
  res.send("hello,member");
};
