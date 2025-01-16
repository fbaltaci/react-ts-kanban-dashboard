import "./App.css";
import TaskCard from "./components/TaskCard";
import { Task } from "./types/Task";

const tasks: Task[] = [
  { title: "Conduct User Interviews", id: "UX-23", points: 8 },
  { title: "Optimize Database Queries", id: "DB-17", points: 13 },
  { title: "Design Landing Page", id: "UI-09", points: 5 },
  { title: "Implement Authentication", id: "BE-12", points: 10 },
];

function App() {
  return (
    <>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </>
  );
}

export default App;
