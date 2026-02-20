import { deleteTask } from "../lib/action";

export const DeleteButton = ({ id }: { id: string }) => {
  const dleteTaskWithId = deleteTask.bind(null, id);
  
  return (
    <form action={dleteTaskWithId}>
      <button className="text-red-500">delete</button>
    </form>
  );
};
