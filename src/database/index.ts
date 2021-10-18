import { Sequelize } from "sequelize";
import config from "../../config";
const { database, username, password } = config.sql;

const sequelize = new Sequelize(database, username, password, {
  dialect: "mysql",
  host: "localhost",
});

export default sequelize;
