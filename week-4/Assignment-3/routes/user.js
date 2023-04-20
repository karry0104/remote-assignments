import express from "express";
import * as user from "../controllers/user.js";

const router = express.Router();

router.get("/", user.home);

router.post("/signup", user.signUp);

router.post("/signin", user.signIn);

router.get("/member", user.member);

export default router;
