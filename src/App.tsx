import "./App.css";
import TaskCard from "./components/TaskCard";
import statuses from "./data/StatusesData";
import { TaskType } from "./types/TaskType";
import { StatusType } from "./types/StatusType";
import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([]);

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
    fetch(`http://localhost:3000/tasks/${task.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
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
    setCurrentlyHoveringOver(null);
    const id = e.dataTransfer.getData("id");
    const task = tasks.find((task) => task.id === id);
    if (task) {
      updateTask({ ...task, status });
    }
  };

  const [currentlyHoveringOver, setCurrentlyHoveringOver] = useState<StatusType | null>(null);

  /**
   * Handles the drag enter event for a column.
   *
   * @param status - The status of the column.
   */
  const handleDragEnter = (status: StatusType) => {
    setCurrentlyHoveringOver(status);
  };

  /**
   * Fetches tasks from the server and updates the tasks state.
   */
  useEffect(() => {
    fetch("http://localhost:3000/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, [currentlyHoveringOver]);

  return (
    <>
      <h1 className="text-3xl text-center">React TS Kanban Board</h1>
      <div className="flex divide-x">
        {columns.map((column) => (
          <div
            key={column.status}
            onDrop={(e) => handleDrop(e, column.status)}
            onDragOver={(e) => e.preventDefault()}
            onDragEnter={() => handleDragEnter(column.status)}>
            <div className="flex justify-between text-3xl p-2 font-bold text-gray-500">
              <h2 className="text-center capitalize">{column.status}</h2>
              {column.tasks.reduce((total, task) => total + (task?.points || 0), 0)}
            </div>
            <div className={`h-full ${currentlyHoveringOver === column.status ? "bg-gray-200" : ""}`}>
              {column.tasks.map((task) => (
                <TaskCard key={task.id} task={task} updateTask={updateTask} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
