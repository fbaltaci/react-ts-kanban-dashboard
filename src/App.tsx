import "./App.css";
import TaskCard from "./components/TaskCard";
import statuses from "./data/StatusesData";
import { TaskType } from "./types/TaskType";
import { StatusType } from "./types/StatusType";
import { useState } from "react";
import { tasksData as initialTasksData } from "./data/TasksData";

function App() {
  const [tasks, setTasks] = useState<TaskType[]>(initialTasksData);

  /**
   * Generates an array of column objects, each representing a status column in the Kanban board.
   * Each column object contains the status and an array of tasks filtered by that status.
   */
  const columns: { status: StatusType; tasks: TaskType[] }[] = statuses.map((status) => {
    const tasksInColumn = tasks.filter((task) => task.status === status);
    return {
      status,
      tasks: tasksInColumn,
    };
  });

  /**
   * Updates a task in the tasks array.
   *
   * @param {TaskType} task - The updated task object.
   */
  const updateTask = (task: TaskType) => {
    const updatedTasks = tasks.map((t) => {
      return t.id === task.id ? task : t;
    });
    setTasks(updatedTasks);
  };

  /**
   * Handles the drop event for a task card.
   *
   * @param {React.DragEvent<HTMLDivElement>} e - The drag event object.
   * @param {StatusType} status - The new status for the dropped task.
   */
  const handleDrop = (e: React.DragEvent<HTMLDivElement>, status: StatusType) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("id");
    const task = tasks.find((task) => task.id === id);
    if (task) {
      updateTask({ ...task, status });
    }
  };

  return (
    <>
      <h1 className="text-3xl text-center">React TS Kanban Board</h1>
      <div className="flex divide-x">
        {columns.map((column) => (
          <div key={column.status} onDrop={(e) => handleDrop(e, column.status)} onDragOver={(e) => e.preventDefault()}>
            <div className="flex justify-between text-3xl p-2 font-bold text-gray-500">
              <h2 className="text-center capitalize">{column.status}</h2>
              {column.tasks.reduce((total, task) => total + (task?.points || 0), 0)}
            </div>
            {column.tasks.map((task) => (
              <TaskCard key={task.id} task={task} updateTask={updateTask} />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
