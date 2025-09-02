import { Router } from "express";
import { fetchAllHandler, fetchOneHandler } from "../controllers/problem-controller.js";

const problemRoutes = Router();

problemRoutes.get("/", fetchAllHandler)
problemRoutes.get("/:slug", fetchOneHandler)

export default problemRoutes;
