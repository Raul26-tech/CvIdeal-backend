"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const connection_db_1 = require("../db/connection.db");
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json());
// Iniciando conexão com o banco de dados
(0, connection_db_1.connectDatabase)();
//# sourceMappingURL=app.js.map