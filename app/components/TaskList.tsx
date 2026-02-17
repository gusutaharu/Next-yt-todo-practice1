export default function TaskList() {
  return (
    <ul className="space-y-3">
      <li className="flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow">
        <span>タスク１</span>
        <div>
          <button className="text-green-500 mr-3">edit</button>
          <button className="text-red-500">delete</button>
        </div>
      </li>
      <li className="flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow">
        <span>タスク2</span>
        <div>
          <button className="text-green-500 mr-3">edit</button>
          <button className="text-red-500">delete</button>
        </div>
      </li>
      <li className="flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow">
        <span>タスク3</span>
        <div>
          <button className="text-green-500 mr-3">edit</button>
          <button className="text-red-500">delete</button>
        </div>
      </li>
    </ul>
  );
}
