import { getTasksService } from "../services/tasksService.js";

const getAlltasks = (req, res) => {
  const tasks = getTasksService();

  res.status(200).json(tasks);
};

export { getAlltasks };
