import { FaRegTrashAlt } from "react-icons/fa";
import { VscSettings } from "react-icons/vsc";
import { VscDebugStart } from "react-icons/vsc";
import { useState } from "react";
import { getFormattedDate } from "../utils/utils";
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
  // === Hooks / State ===
  // Map task types to their flag images (kept local and static for readability)
  const typeImages = {
    important: important,
    normal: normal,
    notImportant: notImportant,
  };

  // Build accessible task list: each entry is a listitem with an
  // `aria-labelledby` pointing to the task title so assistive tech reads
  // a concise label for each item.
  const tasksList = tasks.map((task) => (
    <div
      key={task.id}
      role="listitem"
      className={`todos__task todos__task--${task.state}`}
      aria-labelledby={`task-title-${task.id}`}
    >
      <div className="todos__task-left">
        <button
          type="button"
          className={`todos__task-check ${
            task.state === "completed" ? "todos__task-check--checked" : ""
          }`}
          aria-pressed={task.state === "completed"}
          aria-label={
            task.state === "completed"
              ? "Mark task as not completed"
              : "Mark task as completed"
          }
          onClick={() => {
            handleCheckTaskClick(task.id);
          }}
        ></button>
        <div className="todos__task-info">
          <h3 id={`task-title-${task.id}`} className="todos__task-title">
            {task.taskName}
          </h3>
          <p className="todos__task-description">
            {task.description ? task.description : "No description"}
          </p>
          <p className="todos__task-date">{getFormattedDate()}</p>
        </div>
      </div>

      <div className="todos__task-right">
        <div className="todos__task-buttons">
          <button
            type="button"
            className="todos__task-button todos__task-button--delete"
            aria-label="Delete task"
            onClick={() => {
              handleDeleteTaskClick(task.id);
            }}
          >
            <FaRegTrashAlt aria-hidden="true" />
          </button>

          <button
            type="button"
            className="todos__task-button todos__task-button--start"
            aria-label="Start task"
            onClick={() => {
              handleTaskClick(task.id);
            }}
          >
            <VscDebugStart aria-hidden="true" />
          </button>
        </div>

        <img src={typeImages[task.type]} alt={`${task.type} flag`} />
      </div>
    </div>
  ));

  const [showControls, setShowControls] = useState(false);

  // === Handlers ===
  // Toggle filter controls visibility
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
        type="button"
        onClick={item.function}
        aria-pressed={item.value == filter}
        aria-label={`Show ${item.name} tasks`}
        className={`todos__control-button ${item.value == filter ? "todos__control-button--active" : ""}`}
      >
        {item.name}
      </button>
    );
  });

  // === Main Render logic ===

  return (
    <section className="todos">
      <div className="todos__container container">
        <header className="todos__control">
          <h2 className="todos__title">Your Tasks</h2>

          <div className="todos__control-buttons">
            <div
              id="todos-controls"
              role="toolbar"
              aria-label="Task filters"
              className={`todos__control-buttons-list ${showControls ? "todos__control-buttons-list--active" : ""}`}
            >
              {controlButtonsList}
            </div>
            <button
              type="button"
              className="todos__control-button todos__control-button--toggle"
              aria-expanded={showControls}
              aria-controls="todos-controls"
              aria-label={showControls ? "Hide filters" : "Show filters"}
              onClick={handleToggleClick}
            >
              <VscSettings aria-hidden="true" />
            </button>
          </div>
        </header>

        <div role="list" className={`todos__list todos__list--${view}`}>
          {tasksList}
        </div>
      </div>
    </section>
  );
}

export default TodosList;
