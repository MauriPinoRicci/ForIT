import {
  createTaskService,
  getTasksService,
  modifyTaskService,
} from "../services/tasksService.js";

const getAlltasks = (req, res) => {
  const tasks = getTasksService();

  res.status(200).json(tasks);
};

const postTasks = (req, res) => {
  const { title, description, completed } = req.body;

  if (!title || !description) {
    return res.status(400).json({ message: "Faltan campos requeridos." });
  }

  const newTask = createTaskService({ title, description, completed });

  res.status(201).json(newTask);
};

const putTask = (req, res) => {
  const id = Number(req.params.id);
  const { title, description, completed } = req.body;

  if (!title || !description) {
    return res.status(400).json({ message: "Faltan campos requeridos." });
  }

  const modifiedTask = modifyTaskService(id, { title, description, completed });

  if (!modifiedTask) {
    return res.status(404).json({ message: "Tarea no encontrada." });
  }

  res.status(200).json(modifiedTask);
};

const deleteTask = (req, res) => {
  const id = Number(req.params.id);

  const deletedTask = deleteTaskService(id);

  if (!deletedTask) {
    return res.status(404).json({ message: "Tarea no encontrada." });
  }

  res
    .status(200)
    .json({ message: "Tarea eliminada correctamente.", task: deletedTask });
};

export { deleteTask, getAlltasks, postTasks, putTask };
