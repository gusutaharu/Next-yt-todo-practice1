import { TaskType } from "../lib/difinitions";

interface TaskProps {
  task: TaskType;
}

export default function Task({ task }: TaskProps) {
  return (
    <li
      key={task.id}
      className="flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow"
    >
      <span>{task.text}</span>
      <div>
        <button className="text-green-500 mr-3">edit</button>
        <button className="text-red-500">delete</button>
      </div>
    </li>
  );
}
