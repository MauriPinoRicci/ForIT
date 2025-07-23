import { Task } from "./Task";

export interface TaskListProps {
  tasks: Task[];
  onToggleComplete?: (taskId: string, completed: boolean) => void;
  onEdit?: (task: Task) => void;
}
