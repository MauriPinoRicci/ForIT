import { Router } from "express";
import { getAlltasks } from "../controllers/tasksController.js";

const tasksRoutes = Router();

tasksRoutes.get("/", getAlltasks);

export default tasksRoutes;
