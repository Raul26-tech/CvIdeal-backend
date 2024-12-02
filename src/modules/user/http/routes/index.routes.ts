import { Router } from "express";
import { CreateUserController } from "../controllers/create-user.controller";
import { container } from "src/framework/container/inversify.config";
import { isAuthenticated } from "src/framework/http/middlewares/IsAuthenticated";

export const userRoutes = Router();

const createUserController = container.resolve(CreateUserController);

userRoutes.post("/", createUserController.handle.bind(createUserController));
