"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDatabase = exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const env_var_1 = __importDefault(require("env-var"));
const dotenv_1 = __importDefault(require("dotenv"));
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
dotenv_1.default.config({ path: ".env" });
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: env_var_1.default.get("DB_HOST").required().asString(),
    port: env_var_1.default.get("DB_PORT").required().asPortNumber(),
    username: env_var_1.default.get("DB_USERNAME").required().asString(),
    password: env_var_1.default.get("DB_PASSWORD").required().asString(),
    database: env_var_1.default.get("DB_DATABASE").required().asString(),
    migrations: [migrationsPath],
    entities: [entitiesPath],
});
const connectDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dataSource = yield exports.AppDataSource.initialize();
        console.log("Data Source has been initialized!");
        yield dataSource.runMigrations();
        console.log("Migrations has been executed!");
        return dataSource;
    }
    catch (err) {
        console.log("Error during Data Source initialization", err);
    }
});
exports.connectDatabase = connectDatabase;
//# sourceMappingURL=connection.db.js.map