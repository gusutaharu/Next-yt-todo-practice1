import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { getAllTasks } from "./lib/action";

export default async function Home() {
  const tasks = await getAllTasks();

  return (
    <main className="min-h-screen bg-gray-200 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-700 -mt-32">
        Nextjs 13 Todo App
      </h1>
      <div className="w-full max-w-xl mt-5">
        <div className="bg-white rounded-lg shadow-md w-full px-8 py-6">
          <AddTask />
          <TaskList tasks={tasks} />
        </div>
      </div>
    </main>
  );
}
