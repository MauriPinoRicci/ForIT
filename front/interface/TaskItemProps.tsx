import { Task } from "./Task";

export interface TaskItemProps {
  task: Task;
  onToggleComplete?: (taskId: string, completed: boolean) => void;
}