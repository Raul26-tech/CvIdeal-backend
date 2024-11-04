import "express-async-errors";
import express from "express";
import { connectDatabase } from "../db/connection.db";

export const app = express();

app.use(express.json());

// Iniciando conexão com o banco de dados
connectDatabase();
