import "./App.css";
import TaskCard from "./components/TaskCard";
import tasks from "./data/TasksData";
import statuses from "./data/StatusesData";

function App() {
  const columns = statuses.map((status) => {
    const taksInColumn = tasks.filter((task) => task.status === status);
    return {
      status,
      tasks: taksInColumn,
    };
  });

  return (
    <>
      <h1 className="text-3xl text-center">React TS Kanban Dashboard</h1>
      <div className="flex divide-x">
        {columns.map((column) => (
          <div key={column.status}>
            <h2 className="text-center text-3xl p-2 capitalize font-bold text-gray-500">
              {column.status}
            </h2>
            {column.tasks.map((task) => (
              <TaskCard task={task} />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
