"use client";

import { TaskListProps } from "../interface/Task";
import TaskItem from "./task-item";

const TaskList = ({ tasks, onToggleComplete, onEdit }: TaskListProps) => {
  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="flex justify-between items-center border p-4 rounded shadow"
        >
          <TaskItem task={task} onToggleComplete={onToggleComplete} />
          {onEdit && (
            <button
              onClick={() => onEdit(task)}
              className="ml-4 text-blue-600 hover:underline text-sm"
              title="Editar tarea"
            >
              ✏️
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default TaskList;
