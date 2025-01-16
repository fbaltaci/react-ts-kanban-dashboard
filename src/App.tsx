import "./App.css";
import TaskCard from "./components/task-card";

function App() {
  return (
    <>
      {TaskCard("Conduct User Interviews", "UX-23", 8)}
      {TaskCard("Optimize Database Queries", "DB-17", 13)}
      {TaskCard("Design Landing Page", "UI-09", 5)}
    </>
  );
}

export default App;
