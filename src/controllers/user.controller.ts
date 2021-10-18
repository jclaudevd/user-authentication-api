import { Response } from "express";
import { MiddlewareRequest } from "../utilities/types/middleware-request.interface";
import User from "../database/models/user.model";

export const getUser = async (req: MiddlewareRequest, res: Response) => {
  const claims = req.claims;
  const user = await User.findOne({ where: { email: claims.email } });
  if (!user) return res.status(404).send({ error: "User not found" });

  res.status(200).send({ user });
};
