"use client";
import { TaskType } from "../lib/difinitions";
import { useState } from "react";
import { updateTask, State } from "../lib/action";
import { useActionState } from "react";

interface TaskProps {
  task: TaskType;
}

interface TaskState extends State {
  success: boolean;
}

export default function Task({ task }: TaskProps) {
  const [isEditing, setIsEditing] = useState(false);
  const initialState: TaskState = { message: null, errors: {}, success: false };
  const updateTaskWithId = updateTask.bind(null, task.id);
  const [state, formAction, isPending] = useActionState(
    updateTaskWithId,
    initialState,
  );
  const handleEdit = () => {
    setIsEditing(true);
  };

  const isCurrentlyEditing = isEditing && !state?.success;

  return (
    <li
      key={task.id}
      className=" flex justify-between  p-4 bg-white border-l-4 border-blue-500 rounded shadow"
    >
      {isCurrentlyEditing ? (
        <form
          action={formAction}
          className="flex justify-between w-full items-center"
        >
          <input
            type="text"
            name="text"
            defaultValue={task.text}
            className="rounded border-gray-400 border"
          />
          <div>
            <button
              disabled={isPending}
              className="text-blue-500 mr-3"
              type="submit"
            >
              Save
            </button>
          </div>
        </form>
      ) : (
        <div className="flex justify-between w-full ">
          <span>{task.text}</span>
          <div>
            <button className="text-green-500 mr-3" onClick={handleEdit}>
              Edit
            </button>
          </div>
        </div>
      )}
      <button className="text-red-500">delete</button>
    </li>
  );
}
