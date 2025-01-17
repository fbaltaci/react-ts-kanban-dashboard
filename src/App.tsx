import "./App.css";
import TaskCard from "./components/TaskCard";
import statuses from "./data/StatusesData";
import { TaskType } from "./types/TaskType";
import { useState } from "react";
import { tasksData as initialTasksData } from "./data/TasksData";

function App() {
  const [tasks, setTasks] = useState<TaskType[]>(initialTasksData);

  const columns = statuses.map((status) => {
    const taksInColumn = tasks.filter((task) => task.status === status);
    return {
      status,
      tasks: taksInColumn,
    };
  });

  const updateTaskPoints = (task: TaskType, points: number) => {
    const updatedTasks = tasks.map((t) => {
      return t.id === task.id ? { ...t, points } : t;
    });
    setTasks(updatedTasks);
  };

  const updateTaskTitle = (task: TaskType, title: string) => {
    const updatedTasks = tasks.map((t) => {
      return t.id === task.id ? { ...t, title } : t;
    });
    setTasks(updatedTasks);
  };

  return (
    <>
      <h1 className="text-3xl text-center">React TS Kanban Dashboard</h1>
      <div className="flex divide-x">
        {columns.map((column) => (
          <div key={column.status}>
            <div className="flex justify-between text-3xl p-2 font-bold text-gray-500">
              <h2 className="text-center capitalize">{column.status}</h2>
              {column.tasks.reduce((total, task) => total + (task?.points || 0), 0)}
            </div>
            {column.tasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                updateTaskPoints={updateTaskPoints}
                updateTaskTitle={updateTaskTitle}
              />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
