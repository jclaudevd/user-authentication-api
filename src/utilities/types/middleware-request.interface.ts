import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";

export interface MiddlewareRequest extends Request {
  claims: JwtPayload;
}
