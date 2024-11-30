import { DataSource } from "typeorm";
import { config } from "dotenv";
import { User } from "@modules/user/entities/user.entity";
import { Task } from "@modules/task/entities/task.entity";

config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [User, Task],
  migrations: [`${__dirname}/migrations/*{.ts,.js}`],
});

export const connectDatabase = async () => {
  try {
    const dataSource = await AppDataSource.initialize();
    console.log("Data Source has been initialized!");
    await dataSource.runMigrations();
    console.log("Migrations has been executed!");
    return dataSource;
  } catch (err) {
    console.log("Error during Data Source initialization", err);
  }
};
