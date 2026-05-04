import "./Header.css";
import { RiLeafFill } from "react-icons/ri";
import { FaRegMoon } from "react-icons/fa";
import { FaRegSun } from "react-icons/fa6";
import { IoGridOutline } from "react-icons/io5";
import { FaListUl } from "react-icons/fa";

export default function Header({ setTheme, theme, setTasksView }) {
  const handleToggleViewClick = (event) => {
    setTasksView(event.currentTarget.value);
  };

  const handleToggleThemeClick = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="header">
      <div className="header__container container">
        <div className="header__logo" aria-label="logo">
          <RiLeafFill className="header__logo-icon" />
          <span>TODO</span>
        </div>

        <div className="header__buttons">
          <button className="header__button" onClick={handleToggleThemeClick}>
            {theme === "dark" ? <FaRegSun /> : <FaRegMoon />}
          </button>

          <div className="header__toggle-view-btns desktop-only">
            <button
              className="header__button"
              value="grid"
              onClick={(e) => {
                handleToggleViewClick(e);
              }}
            >
              <IoGridOutline value="grid" />
            </button>

            <button
              className="header__button"
              value="list"
              onClick={(e) => {
                handleToggleViewClick(e);
              }}
            >
              <FaListUl value="list" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
