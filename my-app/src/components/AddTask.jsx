import { IoClose } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { useId, useState } from "react";
import "./AddTask.css";

function AddTask() {
  const [task,setTask] = useState({
    id: useId(),
    task: "",
    description: "",
    state: "",
    type: "",
    date: "",
  })

  const handleInputChange = () => {}

  return (
    <section className="add-task">
      <div className="add-task__container container">
        <article className="add-task__card" aria-labelledby="add-task-title">
          {/* Card header */}
          <header className="add-task__header">
            <h1 className="add-task__title" id="add-task-title">
              New Task
            </h1>
            <button className="add-task__icon-button" type="button" aria-label="Close">
              <IoClose aria-hidden="true" />
            </button>
          </header>

          {/* Static preview form */}
          <form className="add-task__form">
            <div className="add-task__field">
              <label className="add-task__label" htmlFor="task-name">
                Task Name
              </label>
              <input
                className="add-task__input"
                id="task-name"
                name="task-name"
                placeholder="What needs to be done?"
                type="text"
              />
            </div>

            <div className="add-task__field">
              <label className="add-task__label" htmlFor="task-description">
                Description
              </label>
              <textarea
                className="add-task__input add-task__input--textarea"
                id="task-description"
                name="task-description"
                placeholder="Add details, notes, or links..."
              />
            </div>

            {/* Priority radio cards */}
            <fieldset className="add-task__priority">
              <legend className="add-task__label">Priority Level</legend>
              <div className="add-task__priority-grid" aria-label="Priority options">
                <label className="add-task__priority-card add-task__priority-card--important">
                  <input
                    className="add-task__priority-input"
                    name="priority"
                    type="radio"
                    value="important"
                  />
                  <div className="add-task__priority-name">
                    <span className="add-task__priority-dot" />
                    <span>Important!</span>
                  </div>
                  <span className="add-task__priority-note">Do this first</span>
                </label>

                <label className="add-task__priority-card add-task__priority-card--normal">
                  <input
                    className="add-task__priority-input"
                    defaultChecked
                    name="priority"
                    type="radio"
                    value="normal"
                  />
                  <div className="add-task__priority-name">
                    <span className="add-task__priority-dot" />
                    <span>Normal</span>
                  </div>
                  <span className="add-task__priority-note">Standard task</span>
                </label>

                <label className="add-task__priority-card add-task__priority-card--low">
                  <input
                    className="add-task__priority-input"
                    name="priority"
                    type="radio"
                    value="not-important"
                  />
                  <div className="add-task__priority-name">
                    <span className="add-task__priority-dot" />
                    <span>Not Important</span>
                  </div>
                  <span className="add-task__priority-note">If time permits</span>
                </label>
              </div>
            </fieldset>

            {/* Static action preview */}
            <div className="add-task__actions">
              <button className="button" type="button">
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

