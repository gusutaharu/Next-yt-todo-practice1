"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";

export const getAllTasks = async () => {
  const res = await fetch("http://localhost:3003/tasks", { cache: "no-store" });
  const tasks = await res.json();
  return tasks;
};

const TaskSchema = z.object({
  text: z
    .string()
    .min(1, "タイトルを入力してください")
    .max(50, "50文字以内で入力してください"),
});

export const addTask = async (formData: FormData) => {
  const validatedFields = TaskSchema.safeParse({
    text: formData.get("text"),
  });
  if (!validatedFields.success) {
    // バリデーションエラー時の処理
    console.log(validatedFields.error.issues.map((issue) => issue.message));
    return;
  }
  const { text } = validatedFields.data;
  await fetch("http://localhost:3003/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  }).catch((err) => console.log(err));
  revalidatePath("/app/components/TaskList");
};
