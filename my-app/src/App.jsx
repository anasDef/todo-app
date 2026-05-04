import { useState, useEffect } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage.js";
import "./App.css";
import Header from "./components/Header.jsx";
import AddTask from "./components/AddTask.jsx";
import TodosList from "./components/todosList.jsx";
import UserName from "./components/UserName.jsx";
import Stats from "./components/Stats.jsx";

function App() {
  const [tasksView, setTasksView] = useLocalStorage("tasksView", "list");
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const [userName, setUserName] = useLocalStorage("userName", "");
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [showAddTask, setShowAddTask] = useState(false);

  // ======= USE EFFECTS ======== //
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // ======= EVENT HANDLERS ======== //
  const handleEnterNameClick = (name) => {
    setUserName(name);
  };

  const handleAddTaskClick = (taskObject) => {
    setTasks([...tasks, taskObject]);
  };

  const handleNewTaskClick = () => {
    setShowAddTask(!showAddTask);
  };

  return (
    <main className="app">
      <Header setTasksView={setTasksView} theme={theme} setTheme={setTheme} />

      <Stats
        user={userName}
        tasks={tasks}
        handleNewTaskClick={handleNewTaskClick}
      />

      <AddTask
        handleCloseTaskClick={handleNewTaskClick}
        handleAddTaskClick={handleAddTaskClick}
        showAddTask={showAddTask}
      />

      <TodosList />

      {JSON.parse(localStorage.getItem("userName")) == "" ? (
        <UserName handleEnterClick={handleEnterNameClick} />
      ) : null}
    </main>
  );
}

export default App;
