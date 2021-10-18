import { JSONSchema4 } from "json-schema";

const schema: JSONSchema4 = {
  type: "object",
  properties: {
    email: {
      type: "string",
      format: "email",
      pattern: "^\\S+@\\S+\\.\\S+$",
      minLength: 6,
      maxLength: 30,
      required: true,
    },
    password: {
      type: "string",
      minLength: 6,
      maxLength: 30,
      required: true,
    },
    firstName: {
      type: "string",
      minLength: 1,
      maxLength: 30,
      required: true,
    },
    lastName: {
      type: "string",
      minLength: 1,
      maxLength: 30,
      required: true,
    },
  },
};

export default schema;
