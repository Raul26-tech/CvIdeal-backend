import { userRoutes } from "@modules/user/http/routes/index.routes";
import { Router } from "express";
import { authRoutes } from "@modules/auth/http/routes/index.routes";
import { taskRoutes } from "@modules/task/http/routes/index.routes";

const router = Router();

// Authentication
router.use("/auth", authRoutes);

// Users
router.use("/user", userRoutes);

// Tasks
router.use("/task", taskRoutes);

export { router };
