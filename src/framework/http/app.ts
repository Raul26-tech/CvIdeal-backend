import "express-async-errors";
import express from "express";
import { connectDatabase } from "../db/connect.db";
import cors from "cors";
import "src/framework/container/inversify.config.ts";
import { router } from "./routes";
import { catchErrors } from "./middlewares/catchErrors";
import redisClient from "../db/redis-cofig";

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

// Inicializando conexão com o Redis
redisClient.on("connect", () => {
  console.log(`Connected to Redis\n`);
});

redisClient.on("error", (err) => {
  console.error("Error connecting to Redis:", err);
});

// app.use(catchErrors);
