import { IoClose } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { useState } from "react";
import { getFormattedDate } from "../utils/utils";
import "./AddTask.css";

function AddTask({ handleAddTaskClick, showAddTask, handleCloseTaskClick }) {
  // === Hooks / State ===
  const [task, setTask] = useState({
    taskName: "",
    description: "",
    state: "not-started",
    type: "normal",
  });

  // === Handlers ===
  /**
   * Update a single property on the task state object.
   * @param {Event} event - change event from the input/textarea/radio
   * @param {string} key - task property to update (e.g. 'taskName', 'description', 'type')
   */
  const handleInputChange = (event, key) => {
    setTask({ ...task, [key]: event.target.value });
  };

  // === Main Render logic ===
  return (
    <section className={`add-task ${showAddTask ? "add-task--active" : ""}`}>
      <div className="add-task__container container">
        <article className="add-task__card" aria-labelledby="add-task-title">
          {/* Card header */}
          <header className="add-task__header">
            <h1 className="add-task__title" id="add-task-title">
              New Task
            </h1>
            <button
              className="add-task__icon-button"
              type="button"
              aria-label="Close"
              onClick={handleCloseTaskClick}
            >
              <IoClose aria-hidden="true" />
            </button>
          </header>

          {/* Static preview form */}
          <form className="add-task__form">
            {/* task name */}
            <div className="add-task__field">
              <label className="add-task__label" htmlFor="task-name">
                Task Name
              </label>
              <input
                id="task-name"
                className="add-task__input"
                name="task-name"
                placeholder="What needs to be done?"
                type="text"
                value={task.taskName}
                onChange={(e) => {
                  handleInputChange(e, "taskName");
                }}
              />
            </div>

            {/* task description */}
            <div className="add-task__field add-task__field--textarea">
              <label className="add-task__label" htmlFor="task-description">
                Description
              </label>
              <textarea
                className="add-task__input add-task__input--textarea"
                id="task-description"
                name="task-description"
                placeholder="Add details, notes, or links..."
                value={task.description}
                onChange={(e) => {
                  handleInputChange(e, "description");
                }}
              />
            </div>

            {/* Priority radio cards */}
            <fieldset className="add-task__priority">
              <legend className="add-task__label">Priority Level</legend>
              <div
                className="add-task__priority-grid"
                aria-label="Priority options"
              >
                {/* important card */}
                <label className="add-task__priority-card add-task__priority-card--important">
                  <input
                    className="add-task__priority-input"
                    name="priority"
                    type="radio"
                    value="important"
                    onChange={(e) => {
                      handleInputChange(e, "type");
                    }}
                  />
                  <div className="add-task__priority-name">
                    <span className="add-task__priority-dot" />
                    <span>Important!</span>
                  </div>
                  <span className="add-task__priority-note">Do this first</span>
                </label>

                {/* normal card */}
                <label className="add-task__priority-card add-task__priority-card--normal">
                  <input
                    className="add-task__priority-input"
                    defaultChecked
                    name="priority"
                    type="radio"
                    value="normal"
                    onChange={(e) => {
                      handleInputChange(e, "type");
                    }}
                  />
                  <div className="add-task__priority-name">
                    <span className="add-task__priority-dot" />
                    <span>Normal</span>
                  </div>
                  <span className="add-task__priority-note">Standard task</span>
                </label>

                {/* not important card */}
                <label className="add-task__priority-card add-task__priority-card--low">
                  <input
                    className="add-task__priority-input"
                    name="priority"
                    type="radio"
                    value="notImportant"
                    onChange={(e) => {
                      handleInputChange(e, "type");
                    }}
                  />
                  <div className="add-task__priority-name">
                    <span className="add-task__priority-dot" />
                    <span>Not Important</span>
                  </div>
                  <span className="add-task__priority-note">
                    If time permits
                  </span>
                </label>
              </div>
            </fieldset>

            {/* Static action preview */}
            <div className="add-task__actions">
              <button
                className={`button ${task.taskName.length < 1 ? "disabled" : ""}`}
                type="button"
                disabled={task.taskName.length < 1}
                onClick={() => {
                  handleAddTaskClick({
                    ...task,
                    id: Date.now(),
                    date: getFormattedDate(),
                  });

                  setTask({
                    ...task,
                    taskName: "",
                    description: "",
                    type: "normal",
                  });
                }}
              >
                <FaPlus className="add-task__submit-icon" aria-hidden="true" />
                <span>Add Task</span>
              </button>
            </div>
          </form>
        </article>
      </div>
    </section>
  );
}

export default AddTask;
