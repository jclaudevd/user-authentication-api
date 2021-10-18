import { Request, Response, NextFunction } from "express";
import { JSONSchema4, validate } from "json-schema";

const validateRequest = (schema: JSONSchema4) => (req: Request, res: Response, next: NextFunction) => {
  const response = validate(req.body, schema);
  if (!response.valid) return res.status(400).send({ errors: response.errors });
  next();
};

export default validateRequest;
