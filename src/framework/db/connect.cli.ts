import { DataSource } from "typeorm";
import { config } from "dotenv";

config();

const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_EXTERNAL_HOST,
  port: Number(process.env.DB_EXTERNAL_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: ["dist/**/*.entity.js"],
  migrations: ["dist/framework/db/migrations/*.js"],
});

export default AppDataSource;
