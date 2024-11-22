import environment from "@config/environment";
import { DataSource } from "typeorm";

let entitiesPath = "";
let migrationsPath = "";

switch (process.env.ENVIRONMENT) {
  case "dev":
    entitiesPath = "src/modules/**/entities/*.ts";
    migrationsPath = "src/framework/db/migrations/*.ts";
    break;
  case "prod":
    entitiesPath = "dist/modules/**/entities/*.js";
    migrationsPath = "dist/db/migrations/*.js";
    break;
  case "local":
    entitiesPath = "dist/modules/**/entities/*.js";
    migrationsPath = "dist/framework/db/migrations/*.js";
    break;
}

export const AppDataSource = new DataSource({
  type: environment.DB_TYPE,
  port: environment.DB_PORT,
  host: environment.DB_HOST,
  username: environment.DB_USERNAME,
  password: environment.DB_PASSWORD,
  database: environment.DB_DATABASE,
  entities: [entitiesPath],
  migrations: [migrationsPath],
  logging: environment.DB_LOGGING,
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
