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
  const [filter, setFilter] = useState("all");
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

  const handleTaskClick = (id) => {
    setTasks(
      [...tasks].map((task) =>
        task.id === id
          ? {
              ...task,
              state: task.state === "active" ? "not-started" : "active",
            }
          : task,
      ),
    );
  };

  const handleDeleteTaskClick = (id) => {
    setTasks([...tasks].filter((task) => task.id !== id));
  };

  const handleCheckTaskClick = (id) => {
    setTasks(
      [...tasks].map((task) =>
        task.id === id
          ? {
              ...task,
              state: task.state === "completed" ? "active" : "completed",
            }
          : task,
      ),
    );
  };

  const handleActiveTaskClick = () => setFilter("active");
  const handleCompletedTaskClick = () => setFilter("completed");
  const handleAllTaskClick = () => setFilter("all");
  const handleNotStartedTaskClick = () => setFilter("not-started");

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return task.state === "active";
    if (filter === "completed") return task.state === "completed";
    if (filter === "not-started") return task.state === "not-started";
    return true; // في حال كان الفلتر "all"
  });

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

      <TodosList
        view={tasksView}
        tasks={filteredTasks}
        filter={filter}
        handleActive={handleActiveTaskClick}
        handleAll={handleAllTaskClick}
        handleCompleted={handleCompletedTaskClick}
        handleNotStarted={handleNotStartedTaskClick}
        handleTaskClick={handleTaskClick}
        handleDeleteTaskClick={handleDeleteTaskClick}
        handleCheckTaskClick={handleCheckTaskClick}
      />

      {userName === "" ? (
        <UserName handleEnterClick={handleEnterNameClick} />
      ) : null}
    </main>
  );
}

export default App;
