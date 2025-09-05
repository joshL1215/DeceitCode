import { Router } from "express";
import { fetchAllHandler, fetchOneHandler, judgeHandler } from "../controllers/problem-controller.js";

const problemRoutes = Router();

problemRoutes.get("/", fetchAllHandler)
problemRoutes.get("/:slug", fetchOneHandler)
problemRoutes.post("/judge/:slug", judgeHandler)

export default problemRoutes;
