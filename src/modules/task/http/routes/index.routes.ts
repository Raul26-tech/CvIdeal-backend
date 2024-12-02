import { Router } from "express";
import { container } from "src/framework/container/inversify.config";
import { isAuthenticated } from "src/framework/http/middlewares/IsAuthenticated";
import { CreateTaskController } from "../controllers/create-task.controller";
import { UpdateTaskController } from "../controllers/update-task.controller";
import { DeleteTaskController } from "../controllers/delete-task.controller";
import { ListTaskController } from "../controllers/list-task.controller";

export const taskRoutes = Router();

const createTaskController = container.resolve(CreateTaskController);
const updateTaskController = container.resolve(UpdateTaskController);
const deleteTaskController = container.resolve(DeleteTaskController);
const listTaskController = container.resolve(ListTaskController);

taskRoutes.post(
  "/",
  isAuthenticated,
  createTaskController.handle.bind(createTaskController)
);

taskRoutes.patch(
  "/:id",
  isAuthenticated,
  updateTaskController.handle.bind(updateTaskController)
);

taskRoutes.delete(
  "/:id",
  isAuthenticated,
  deleteTaskController.handle.bind(deleteTaskController)
);

taskRoutes.get(
  "/",
  isAuthenticated,
  listTaskController.handle.bind(listTaskController)
);
