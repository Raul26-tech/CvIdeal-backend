import dotenv from "dotenv";
import * as env from "env-var";

interface IAuth {
  secretToken: string;
  expiresInToken: number;
  secretRefreshToken: string;
  expiresInRefreshToken: number;
}

switch (process.env.ENVIRONMENT) {
  case "local":
    dotenv.config({ path: ".env.local" });
    break;
  case "prod":
    dotenv.config({ path: ".env.prod" });
    break;
  default:
    dotenv.config({ path: ".env" });
}

export default {
  secretToken: env.get("AUTH_SECRET_TOKEN").required().asString(),
  expiresInToken: env.get("AUTH_EXPIRES_IN_TOKEN").required().asIntPositive(),
  secretRefreshToken: env
    .get("AUTH_SECRET_REFRESH_TOKEN")
    .required()
    .asString(),
  expiresInRefreshToken: env
    .get("AUTH_EXPIRES_IN_REFRESH_TOKEN")
    .required()
    .asIntPositive(),
} as IAuth;
