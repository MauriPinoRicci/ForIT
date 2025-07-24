"use client";

import { Button } from "@heroui/button";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/dropdown";
import { useEffect, useState } from "react";

import TaskForm from "../components/task-form";
import TaskItem from "../components/task-item";
import TaskList from "../components/task-list";
import { Task } from "../interface/Task";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState<Task | null>(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/tasks`)
      .then((res) => res.json())
      .then((data: Task[]) => setTasks(data));
  }, []);

  const handleCreateTask = (taskData: {
    title: string;
    description: string;
    completed: boolean;
  }) => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/tasks`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(taskData),
    })
      .then((res) => res.json())
      .then((newTask: Task) => {
        setTasks((prev) => [...prev, newTask]);
        setIsCreating(false);
        setSelectedTask(null);
      });
  };

  const handleUpdateTask = (
    id: string,
    taskData: {
      title: string;
      description: string;
      completed: boolean;
    }
  ) => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(taskData),
    })
      .then((res) => res.json())
      .then((updatedTask: Task) => {
        setTasks((prev) =>
          prev.map((t) => (t.id === updatedTask.id ? updatedTask : t))
        );
        setTaskToEdit(null);
        setIsCreating(false);
      });
  };

  const handleSelectTask = (taskId: string) => {
    const task = tasks.find((t) => String(t.id) === taskId);
    if (task) {
      setSelectedTask(task);
      setIsCreating(false);
      setTaskToEdit(null);
    }
  };

  return (
    <main className=" max-w-xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold mb-2">Mis tareas</h1>

      <div className="flex gap-4 items-center">
        <Button
          onPress={() => {
            setSelectedTask(null);
            setIsCreating(false);
            setTaskToEdit(null);
          }}
          color="primary"
          variant="shadow"
        >
          Mostrar todas las tareas
        </Button>

        <Dropdown>
          <DropdownTrigger>
            <Button
              aria-label="Seleccionar tarea"
              color="secondary"
              variant="shadow"
            >
              {selectedTask ? selectedTask.title : "Mostrar una tarea"}
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Seleccionar tarea"
            onAction={(key) => handleSelectTask(key as string)}
          >
            {tasks.map((task) => (
              <DropdownItem key={String(task.id)}>{task.title}</DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>

        <Button
          onPress={() => {
            setIsCreating(true);
            setSelectedTask(null);
            setTaskToEdit(null);
          }}
          color="success"
          variant="shadow"
        >
          Crear tarea
        </Button>
      </div>

      {isCreating || taskToEdit ? (
        <TaskForm
          onSubmit={(data) => {
            if (taskToEdit) {
              handleUpdateTask(taskToEdit.id, data);
            } else {
              handleCreateTask(data);
            }
          }}
          initialData={taskToEdit ?? undefined}
        />
      ) : selectedTask ? (
        <>
          <Button
            className="mb-4 px-4 py-2 rounded bg-gray-200 text-black"
            onPress={() => setSelectedTask(null)}
          >
            Volver a la lista
          </Button>
          <TaskItem task={selectedTask} />
        </>
      ) : (
        <TaskList
          tasks={tasks}
          onEdit={(task) => {
            setTaskToEdit(task);
            setIsCreating(false);
            setSelectedTask(null);
          }}
        />
      )}
    </main>
  );
}
