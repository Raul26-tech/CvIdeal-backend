import dotenv from "dotenv";
import * as env from "env-var";

interface IEnvironment {
  ENVIRONMENT: "dev" | "prod" | "test" | "local";
  PORT: number;
  DB_TYPE: "postgres";
  DB_PORT: number;
  DB_HOST: string;
  DB_USERNAME: string;
  DB_PASSWORD: string;
  DB_DATABASE: string;
  DB_LOGGING: boolean;
}

switch (process.env.ENVIRONMENT) {
  case "test":
    dotenv.config({ path: ".env.test" });
    break;
  case "local":
    dotenv.config({ path: ".env" });
    break;
  default:
    dotenv.config({ path: ".env" });
}

export default {
  ENVIRONMENT: env.get("ENVIRONMENT").required().asString(),
  PORT: env.get("PORT").required().asPortNumber(),
  DB_TYPE: env.get("DB_TYPE").required().asString(),
  DB_PORT: env.get("DB_PORT").required().asPortNumber(),
  DB_HOST: env.get("DB_HOST").required().asString(),
  DB_USERNAME: env.get("DB_USERNAME").required().asString(),
  DB_PASSWORD: env.get("DB_PASSWORD").required().asString(),
  DB_DATABASE: env.get("DB_DATABASE").required().asString(),
  DB_LOGGING: env.get("DB_LOGGING").asBool(),
} as IEnvironment;
