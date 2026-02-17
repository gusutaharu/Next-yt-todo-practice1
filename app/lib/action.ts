'use server';

export const getAllTasks = async () => {
  const res = await fetch("http://localhost:3003/tasks",{cache:"no-store"});
  const tasks = await res.json();
  return tasks;
};