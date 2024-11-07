import { DataSource } from "typeorm";
import env from "env-var";
import dotenv from "dotenv";

let entitiesPath = "";
let migrationsPath = "";

switch (process.env.ENVIRONMENT) {
  case "dev":
    entitiesPath = "dist/modules/**/entities/*.js";
    migrationsPath = "dist/framework/db/migrations/*.js";
    break;
  case "prod":
    entitiesPath = "./dist/modules/**/entities/*.js";
    migrationsPath = "dist/framework/db/migrations/*.js";
    break;
  case "local":
    entitiesPath = "src/modules/**/entities/*.ts";
    migrationsPath = "src/framework/db/migrations/*.ts";
    break;
}

// Leitura das variáveis de ambiemte
// Está solução será provisioria, como ts-node não aceita o --env-file
// o dotenv será a opção primaria para configuração
dotenv.config({ path: ".env" });

export const AppDataSource = new DataSource({
  type: "postgres",
  host: env.get("DB_HOST").required().asString(),
  port: env.get("DB_PORT").required().asPortNumber(),
  username: env.get("DB_USERNAME").required().asString(),
  password: env.get("DB_PASSWORD").required().asString(),
  database: env.get("DB_DATABASE").required().asString(),
  migrations: [migrationsPath],
  entities: [entitiesPath],
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
