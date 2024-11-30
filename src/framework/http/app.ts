import "express-async-errors";
import express, { Request, Response } from "express";
import { connectDatabase } from "../db/connect.db";
import cors from "cors";
import "src/framework/container/inversify.config.ts";
import { router } from "./routes";
import { catchErrors } from "./middlewares/catchErrors";

export const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.use(router);

// Iniciando conexão com o banco de dados
connectDatabase();

app.use(catchErrors);
