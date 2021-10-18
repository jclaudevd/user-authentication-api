import express from "express";
import validateRequest from "../middlewares/validate-request";
import signupSchema from "../utilities/schemas/signup.schema";
import loginSchema from "../utilities/schemas/login.schema";
import { signup, login } from "../controllers/auth.controller";

const router = express.Router();

router.post("/signup", validateRequest(signupSchema), signup);
router.post("/login", validateRequest(loginSchema), login);

export default router;
