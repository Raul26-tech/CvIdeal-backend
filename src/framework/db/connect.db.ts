import { DataSource } from "typeorm";
import environment from "../../shared/config/environment";

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

const host =
  process.env.ENVIRONMENT === "local"
    ? process.env.DB_EXTERNAL_HOST
    : process.env.DB_HOST;
const port =
  process.env.ENVIRONMENT === "local"
    ? Number(process.env.DB_EXTERNAL_PORT)
    : Number(process.env.DB_PORT);

export const AppDataSource = new DataSource({
  type: environment.DB_TYPE,
  host: host,
  port,
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
