const tasks = [
  {
    id: 1,
    title: "Comprar pan",
    description: "Ir a la panaderia",
    completed: false,
    createdAt: new Date(),
  },
  {
    id: 2,
    title: "Estudiar TypeScript",
    description: "Repasar interfaces",
    completed: true,
    createdAt: new Date(),
  },
  {
    id: 3,
    title: "Leer un libro",
    description: "Ficción o tecnología",
    completed: false,
    createdAt: new Date(),
  },
];

let id = 4;

const getTasksService = () => {
  return tasks;
};

const createTaskService = (taskData) => {
  const newTask = {
    id: id++,
    title: taskData.title,
    description: taskData.description || "",
    completed:
      typeof taskData.completed === "boolean" ? taskData.completed : false,
    createdAt: new Date(),
  };

  tasks.push(newTask);
  return newTask;
};

const modifyTaskService = (id, updatedData) => {
  const task = tasks.find((t) => t.id === id);

  if (!task) {
    return null;
  }

  if (updatedData.title !== undefined) {
    task.title = updatedData.title;
  }

  if (updatedData.description !== undefined) {
    task.description = updatedData.description;
  }

  if (updatedData.completed !== undefined) {
    task.completed = updatedData.completed;
  }

  return task;
};

const deleteTask = (id) => {
  const task = tasks.find((t) => t.id === id);

  if (!task) return null;

  tasks = tasks.filter((t) => t.id !== id);

  return task;
};

export { createTaskService, deleteTask, getTasksService, modifyTaskService };

