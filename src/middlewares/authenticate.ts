import { Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { MiddlewareRequest } from "../utilities/types/middleware-request.interface";
import config from "../../config";

const authenticate = (req: MiddlewareRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).send({ error: "Missing Authorization: Bearer token" });
  if (!/^Bearer [-._A-Za-z0-9]+$/.test(authHeader)) return res.status(401).send({ error: "Invalid Authorization: Bearer token" });

  const token = authHeader.replace(/^Bearer /, "");

  try {
    const decodedToken = jwt.verify(token, config.jwt.secret);
    if (typeof decodedToken == "string") return res.status(401).send({ error: "Invalid JWT" });
    req.claims = decodedToken;
  } catch (e) {
    return res.status(401).send({ error: "Access token is invalid" });
  }

  next();
};

export default authenticate;
