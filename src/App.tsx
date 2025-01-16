import "./App.css";
import TaskCard from "./components/TaskCard";

function App() {
  return (
    <>
      <TaskCard task={{ title: "Conduct User Interviews", id: "UX-23", points: 8 }} />
      <TaskCard task={{ title: "Optimize Database Queries", id: "DB-17", points: 13 }} />
      <TaskCard task={{ title: "Design Landing Page", id: "UI-09", points: 5 }} />
      <TaskCard task={{ title: "Implement Authentication", id: "BE-12", points: 10 }} />
    </>
  );
}

export default App;
