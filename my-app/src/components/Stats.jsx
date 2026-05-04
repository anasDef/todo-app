import {
  IoHourglassOutline,
  IoRefreshOutline,
  IoCheckmarkCircleOutline,
} from "react-icons/io5";
import { MdAdd } from "react-icons/md";
import { getFormattedDate } from "../utils/utils";
import "./Stats.css";

export default function Stats({ user, tasks, handleNewTaskClick }) {
  const notStartedTasksCount = tasks.filter(
    (task) => task.state === "not-started",
  ).length;
  const activeTasksCount = tasks.filter(
    (task) => task.state === "active",
  ).length;
  const completedTasksCount = tasks.filter(
    (task) => task.state === "completed",
  ).length;

  return (
    <section className="stats">
      <div className="stats__container container">
        <header className="stats__welcome-message">
          <div className="stats__welcome-copy">
            <p className="stats__date">{getFormattedDate()}</p>
            <h1 className="stats__greeting">
              Good morning, {user ? user : "..."}
            </h1>
            <p className="stats__summary">
              {tasks.length > 0
                ? `You have ${tasks.length} tasks to focus on today. Take a deep breath.`
                : `You don't have any task today.`}
            </p>
          </div>
          <button
            type="button"
            className="stats__cta"
            onClick={handleNewTaskClick}
          >
            <MdAdd className="stats__cta-icon" aria-hidden />
            <span className="stats__cta-label">New Task</span>
          </button>
        </header>

        <div className="stats__stats-container">
          <article className="stats__card stats__card--not-started">
            <div className="stats__card-inner">
              <div className="stats__card-header">
                <span className="stats__card-label">Not started</span>
                <IoHourglassOutline className="stats__card-icon" aria-hidden />
              </div>
              <div className="stats__card-body">
                <span className="stats__card-value">
                  {notStartedTasksCount || 0}
                </span>
                <span className="stats__card-description">Tasks waiting</span>
              </div>
            </div>
            <span className="stats__card-accent" aria-hidden />
          </article>

          <article className="stats__card stats__card--in-progress">
            <div className="stats__card-inner">
              <div className="stats__card-header">
                <span className="stats__card-label">In progress</span>
                <IoRefreshOutline className="stats__card-icon" aria-hidden />
              </div>
              <div className="stats__card-body">
                <span className="stats__card-value">
                  {activeTasksCount || 0}
                </span>
                <span className="stats__card-description">
                  Currently active
                </span>
              </div>
            </div>
            <span className="stats__card-accent" aria-hidden />
          </article>

          <article className="stats__card stats__card--completed">
            <div className="stats__card-inner">
              <div className="stats__card-header">
                <span className="stats__card-label">Completed</span>
                <IoCheckmarkCircleOutline
                  className="stats__card-icon"
                  aria-hidden
                />
              </div>
              <div className="stats__card-body">
                <span className="stats__card-value">
                  {completedTasksCount || 0}
                </span>
                <span className="stats__card-description">Done this week</span>
              </div>
            </div>
            <span className="stats__card-accent" aria-hidden />
          </article>
        </div>
      </div>
    </section>
  );
}
