import { Router } from "express";
import {
  deleteTask,
  getAlltasks,
  postTasks,
  putTask,
} from "../controllers/tasksController.js";

const tasksRoutes = Router();

tasksRoutes.get("/", getAlltasks);
tasksRoutes.post("/", postTasks);
tasksRoutes.put("/:id", putTask);
tasksRoutes.delete("/:id", deleteTask);

export default tasksRoutes;
