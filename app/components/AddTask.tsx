"use client";
import { addTask, State } from "../lib/action";
import { useActionState } from "react";

export default function AddTask() {
  const initialState: State = { message: null, errors: {} };
  const [state, formAction, isPending] = useActionState(addTask, initialState);
  return (
    <form action={formAction} className="mb-4 space-y-3">
      <input
        name="text"
        type="text"
        className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:border-blue-400"
      />
      {state?.errors?.text && <p className="text-red-500">{state.errors.text}</p>}
      {state?.message && <p className="text-green-500">{state.message}</p>}
      <button disabled={isPending} className="w-full px-4 py-2 text-white bg-blue-500 rounded transform hover:bg-blue-499 hover:scale-95 duration-200">
        Add Task
      </button>
    </form>
  );
}
