import "./Header.css";
import { RiLeafFill } from "react-icons/ri";
import { FaRegMoon } from "react-icons/fa";
import { FaRegSun } from "react-icons/fa6";
import { IoGridOutline } from "react-icons/io5";
import { FaListUl } from "react-icons/fa";

export default function Header({ setTheme, theme, setTasksView }) {
  // === Handlers ===
  /**
   * Use `currentTarget.value` to reliably read the button's value.
   * Reason: clicks may originate from child icon elements, so `event.target`
   * can be the icon, not the button.
   */
  const handleToggleViewClick = (event) => {
    setTasksView(event.currentTarget.value);
  };

  const handleToggleThemeClick = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // === Main Render logic ===
  return (
    <header className="header">
      <div className="header__container container">
        <div className="header__logo" aria-label="TODO logo">
          <RiLeafFill className="header__logo-icon" aria-hidden="true" />
          <span>TODO</span>
        </div>

        <div className="header__buttons">
          <button
            type="button"
            className="header__button"
            onClick={handleToggleThemeClick}
            aria-label={
              theme === "dark"
                ? "Switch to light theme"
                : "Switch to dark theme"
            }
          >
            {theme === "dark" ? (
              <FaRegSun aria-hidden="true" />
            ) : (
              <FaRegMoon aria-hidden="true" />
            )}
          </button>

          <div className="header__toggle-view-btns desktop-only">
            <button
              type="button"
              className="header__button"
              value="grid"
              aria-label="Show grid view"
              onClick={(e) => {
                handleToggleViewClick(e);
              }}
            >
              <IoGridOutline aria-hidden="true" />
            </button>

            <button
              type="button"
              className="header__button"
              value="list"
              aria-label="Show list view"
              onClick={(e) => {
                handleToggleViewClick(e);
              }}
            >
              <FaListUl aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
