export interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: Date;
}

export interface TaskListProps {
  tasks: Task[];
  onToggleComplete?: (taskId: string, completed: boolean) => void;
  onEdit?: (task: Task) => void;
}

