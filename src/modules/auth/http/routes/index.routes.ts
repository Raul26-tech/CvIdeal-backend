import { Router } from "express";
import { container } from "src/framework/container/inversify.config";
import { AuthController } from "../controllers/auth.controller";

export const authRoutes = Router();

const authController = container.resolve(AuthController);

authRoutes.post("/", authController.handle.bind(authController));
