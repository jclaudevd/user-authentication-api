import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../database/models/user.model";
import config from "../../config";

export const signup = async (req: Request, res: Response) => {
  const { email, password, firstName, lastName } = req.body;

  const user = await User.findOne({ where: { email } });
  if (user) return res.status(400).send({ error: "Email is taken" });

  const hashedPassword = await bcrypt.hash(password, 10);

  await User.create({
    email,
    password: hashedPassword,
    firstName,
    lastName,
  });

  res.status(201).send();
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });
  if (!user) return res.status(404).send({ error: "User not found" });

  const isValidPassword = await bcrypt.compare(password, user.getDataValue("password"));
  if (!isValidPassword) return res.status(400).send({ error: "Invalid password" });

  const token = jwt.sign({ email }, config.jwt.secret, {
    expiresIn: "1h",
    audience: [config.jwt.audience],
    issuer: config.jwt.issuer,
    subject: user.getDataValue("id"),
  });

  res.status(200).send({ token });
};
