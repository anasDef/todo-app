import { FaRegTrashAlt } from "react-icons/fa";
import { VscSettings } from "react-icons/vsc";
import { VscDebugStart } from "react-icons/vsc";
import { useState } from "react";
import important from "../assets/important.svg";
import notImportant from "../assets/not-important.svg";
import normal from "../assets/normal.svg";
import "./todosList.css";

function TodosList({
  view,
  tasks,
  filter,
  handleActive,
  handleNotStarted,
  handleCompleted,
  handleAll,
  handleDeleteTaskClick,
  handleCheckTaskClick,
  handleTaskClick,
}) {
  const typeImages = {
    important: important,
    normal: normal,
    notImportant: notImportant,
  };

  const tasksList = tasks.map((task) => (
    <div className={`todos__task todos__task--${task.state}`}>
      <div className="todos__task-left">
        <button
          className={`todos__task-check ${
            task.state === "completed" ? "todos__task-check--checked" : ""
          }`}
          onClick={() => {
            handleCheckTaskClick(task.id);
          }}
        ></button>
        <div className="todos__task-info">
          <h3 className="todos__task-title">{task.taskName}</h3>
          <p className="todos__task-description">
            {task.description ? task.description : "No description"}
          </p>
        </div>
      </div>

      <div className="todos__task-right">
        <div className="todos__task-buttons">
          <button
            className="todos__task-button todos__task-button--delete"
            onClick={() => {
              handleDeleteTaskClick(task.id);
            }}
          >
            <FaRegTrashAlt />
          </button>

          <button
            className="todos__task-button todos__task-button--start"
            onClick={() => {
              handleTaskClick(task.id);
            }}
          >
            <VscDebugStart />
          </button>
        </div>

        <img src={typeImages[task.type]} alt={`${task.type} flag`} />
      </div>
    </div>
  ));

  const [showControls, setShowControls] = useState(false);

  const handleToggleClick = () => {
    setShowControls(!showControls);
  };

  const controlButtons = [
    {
      id: 1,
      name: "All",
      value: "all",
      function: handleAll,
    },
    {
      id: 2,
      name: "Not Started",
      value: "not-started",
      function: handleNotStarted,
    },
    {
      id: 3,
      name: "Active",
      value: "active",
      function: handleActive,
    },
    {
      id: 4,
      name: "Completed",
      value: "completed",
      function: handleCompleted,
    },
  ];

  const controlButtonsList = controlButtons.map((item) => {
    return (
      <button
        key={item.id}
        onClick={item.function}
        className={`todos__control-button ${item.value == filter ? "todos__control-button--active" : ""}`}
      >
        {item.name}
      </button>
    );
  });

  return (
    <section className="todos">
      <div className="todos__container container">
        <header className="todos__control">
          <h2 className="todos__title">Your Tasks</h2>

          <div className="todos__control-buttons">
            <ul
              className={`todos__control-buttons-list ${showControls ? "todos__control-buttons-list--active" : ""}`}
            >
              {controlButtonsList}
            </ul>
            <button
              className="todos__control-button todos__control-button--toggle"
              onClick={handleToggleClick}
            >
              <VscSettings />
            </button>
          </div>
        </header>

        <div className={`todos__list todos__list--${view}`}>{tasksList}</div>
      </div>
    </section>
  );
}

export default TodosList;
