import { TaskType } from "../lib/difinitions";
import Task from "./Task";

interface TaskTypeProps {
  tasks: TaskType[];
}

export default async function TaskList({tasks}:TaskTypeProps) {
  return (
    <ul className="space-y-3">
      {tasks.map((task) => (
        <Task task={task} key={task.updatedAt} />
      ))}
    </ul>
  );
}
