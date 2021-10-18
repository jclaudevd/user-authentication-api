import express from "express";
import cors from "cors";
import sequelize from "./database";
import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/user.routes";
import config from "../config";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

sequelize
  .sync()
  .then(() => app.listen(config.port, () => console.log(`Server running on port ${config.port}`)))
  .catch((err) => console.log(err));
