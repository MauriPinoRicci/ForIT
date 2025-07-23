import { Task } from "./Task";

export interface TaskFormProps {
  onSubmit: (data: {
    title: string;
    description: string;
    completed: boolean;
  }) => void;
  initialData?: Task;
}
