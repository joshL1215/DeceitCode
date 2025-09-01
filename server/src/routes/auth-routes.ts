import { Router } from "express";
import { loginHandler, registerHandler } from "../controllers/auth-controller.js";

const authRoutes = Router();

authRoutes.post("/register", registerHandler)
authRoutes.post("/login", loginHandler)
// authRoutes.delete("/logout", logoutHandler)

export default authRoutes;
