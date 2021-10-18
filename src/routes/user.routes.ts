import express from "express";
import authenticate from "../middlewares/authenticate";
import { getUser } from "../controllers/user.controller";

const router = express.Router();

router.get("/", authenticate, getUser);

export default router;
