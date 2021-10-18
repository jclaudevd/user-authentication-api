require("dotenv").config();

const PORT = process.env.PORT;
const SQL_DATABASE = process.env.SQL_DATABASE;
const SQL_USERNAME = process.env.SQL_USERNAME;
const SQL_PASSWORD = process.env.SQL_PASSWORD;
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_AUDIENCE = process.env.JWT_AUDIENCE;
const JWT_ISSUER = process.env.JWT_ISSUER;

if (!PORT) throw new Error("Missing env PORT");
if (!SQL_DATABASE) throw new Error("Missing env SQL_DATABASE");
if (!SQL_USERNAME) throw new Error("Missing env SQL_USERNAME");
if (!SQL_PASSWORD) throw new Error("Missing env SQL_PASSWORD");
if (!JWT_SECRET) throw new Error("Missing env JWT_SECRET");
if (!JWT_AUDIENCE) throw new Error("Missing env JWT_AUDIENCE");
if (!JWT_ISSUER) throw new Error("Missing env JWT_ISSUER");

const config = {
  port: PORT,
  sql: {
    database: SQL_DATABASE,
    username: SQL_USERNAME,
    password: SQL_PASSWORD,
  },
  jwt: {
    secret: JWT_SECRET,
    audience: JWT_AUDIENCE,
    issuer: JWT_ISSUER,
  },
};

export default config;
