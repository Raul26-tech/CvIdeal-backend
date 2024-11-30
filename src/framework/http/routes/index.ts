import { userRoutes } from "@modules/user/http/routes/index.routes";
import { Router } from "express";
import { authRoutes } from "@modules/auth/http/routes/index.routes";

const router = Router();

router.use("/user", userRoutes);
router.use("/auth", authRoutes);

export { router };
