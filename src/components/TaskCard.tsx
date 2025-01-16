import { TaskType } from "../types/TaskType";

const lowPriorityIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-blue-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 9l7 7 7-7" />
  </svg>
);
const mediumPriorityIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-yellow-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10h14" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 14h14" />
  </svg>
);
const highPriorityIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-red-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
  </svg>
);

const TaskCard = ({ task, updateTaskPoints }: { 
  task: TaskType,
  updateTaskPoints: (task: TaskType, points: number) => void 
}) => {
  const points = task.points || 0;

  return (
    <div className="border rounded-lg px-2 m-2 bg-gray-300 w-56">
      <div className="text-base font-base py-2">{task.title}</div>
      <div className="flex gap-4 justify-between py-2 text-gray-700">
        <div className="flex gap-2">
          <div>{task.id}</div>
          {task.priority === "low" && lowPriorityIcon}
          {task.priority === "medium" && mediumPriorityIcon}
          {task.priority === "high" && highPriorityIcon}
        </div>
        <div className="flex gap-2 items-center" >
          <button onClick={() => updateTaskPoints(task, points - 1)}>-</button>
          <div className="font-bold">{points}</div>
          <button onClick={() => updateTaskPoints(task, points + 1)}>+</button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
