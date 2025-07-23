"use client";

import { TaskItemProps } from "@/interface/TaskItemProps";
import { Card } from "@heroui/card";

const TaskItem = ({ task, onToggleComplete }: TaskItemProps) => {
  return (
    <Card className="p-4 border border-gray-200 shadow-sm">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold">{task.title}</h3>
          <p className="text-sm text-gray-600">{task.description}</p>
          <p className="text-xs text-gray-400 mt-1">
            Creado el {new Date(task.createdAt).toLocaleDateString()}
          </p>
        </div>
        <div className="flex flex-col items-end gap-1">
          <span
            className={`text-xs font-medium mt-1 p-2 ${
              task.completed ? "text-green-600" : "text-red-600"
            }`}
          >
            {task.completed ? "✅ Completada" : "❌ Pendiente"}
          </span>
        </div>
      </div>
    </Card>
  );
};

export default TaskItem;
