"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";

export const getAllTasks = async () => {
  const res = await fetch("http://localhost:3003/tasks", { cache: "no-store" });
  const tasks = await res.json();
  return tasks;
};

const TaskSchema = z.object({
  id: z.string(),
  text: z
    .string()
    .min(1, "タイトルを入力してください")
    .max(50, "50文字以内で入力してください"),
});

export type State = {
  errors?: {
    text?: string[];
  };
  message?: string | null;
};

export const addTask = async (prevState: State, formData: FormData) => {
  const validatedFields = TaskSchema.safeParse({
    text: formData.get("text"),
  });
  if (!validatedFields.success) {
    // バリデーションエラー時の処理
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  await fetch("http://localhost:3003/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text: validatedFields.data.text, updatedAt: new Date() }),
  }).catch((err) => console.log(err));
  revalidatePath("/app/components/TaskList");
  return { message: "登録が完了しました！" };
};

export const updateTask = async (id: string ,prevState: State, formData: FormData) => {
  const validatedFields = TaskSchema.safeParse({
    id: id,
    text: formData.get("text"),
  });
  if (!validatedFields.success) {
    // バリデーションエラー時の処理
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    };
  }
  await fetch(`http://localhost:3003/tasks/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text: validatedFields.data.text, updatedAt: new Date() }),
  }).catch((err) => console.log(err));
  revalidatePath("/app/components/Task");
  return { success: true };
};
