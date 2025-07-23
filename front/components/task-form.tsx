"use client";

import { Button } from "@heroui/button";
import { Form } from "@heroui/form";
import { useState } from "react";

import { TaskFormProps } from "@/interface/TaskFormProps";

const TaskForm = ({ onSubmit, initialData }: TaskFormProps) => {
  const [title, setTitle] = useState(initialData?.title ?? "");
  const [description, setDescription] = useState(initialData?.description ?? "");
  const [completed, setCompleted] = useState(initialData?.completed ?? false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, description, completed });
  };

  return (
    <Form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="title">
          Título
        </label>
        <input
          id="title"
          type="text"
          className="w-full border rounded px-3 py-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          placeholder="Ingrese el título"
        />
      </div>

      <div>
        <label
          className="block text-sm font-medium mb-1"
          htmlFor="description"
        >
          Descripción
        </label>
        <textarea
          id="description"
          className="w-full border rounded px-3 py-2"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          placeholder="Ingrese la descripción"
          rows={4}
        />
      </div>

      <div className="flex items-center gap-2">
        <input
          id="completed"
          type="checkbox"
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
          className="cursor-pointer"
        />
        <label htmlFor="completed" className="text-sm select-none cursor-pointer">
          ¿Completada?
        </label>
      </div>

      <Button type="submit" color="primary">
        {initialData ? "Guardar cambios" : "Crear tarea"}
      </Button>
    </Form>
  );
};

export default TaskForm;
