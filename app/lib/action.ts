"use server";

import { revalidatePath } from "next/cache";
import { v4 as uuidv4 } from "uuid";

export const getAllTasks = async () => {
  const res = await fetch("http://localhost:3003/tasks", { cache: "no-store" });
  const tasks = await res.json();
  return tasks;
};

export const addTask = async (formData: FormData) => {
  const id = uuidv4();
  const text = formData.get("text");
  await fetch("http://localhost:3003/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, text }),
  });
  revalidatePath("/app/components/TaskList");
};
