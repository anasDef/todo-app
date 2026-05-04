import "./UserName.css";
import { FaRegUser } from "react-icons/fa";
import { useEffect, useState } from "react"; // for input

export default function UserName({ handleEnterClick }) {
  // === Hooks / State ===
  const [name, setName] = useState("");
  const [closeSection, setCloseSection] = useState(false);

  // Effect: listen for a global Enter key to submit the name.
  // Why: allows keyboard submission from anywhere in the dialog for faster UX.
  // Note: this file keeps the existing behavior intentionally; adding a
  // removal/cleanup would be recommended to avoid duplicate listeners on
  // re-renders, but was avoided here to keep changes strictly to comments.
  useEffect(() => {
    document.body.addEventListener("keyup", (e) => {
      if (e.key == "Enter" && name.length > 2) {
        handleEnterClick(name);
        setCloseSection(true);
      }
    });
  }, [name]);

  // === Handlers ===
  const handleInputChange = (e) => setName(e.target.value);

  // === Main Render logic ===
  return (
    <section
      className="user-name"
      role="dialog"
      aria-labelledby="user-name-title"
      style={closeSection ? { display: "none" } : null}
    >
      <div className="overlay" aria-hidden="true"></div>

      <div className="user-name__container">
        <h2 id="user-name-title" className="user-name__title">
          Your Name
        </h2>

        <div className="user-name__input-container">
          <FaRegUser className="user-name__input-icon" aria-hidden="true" />
          <input
            type="text"
            className="user-name__input"
            value={name}
            placeholder="Enter your user name.."
            aria-label="Enter your name"
            onChange={(e) => {
              handleInputChange(e);
            }}
          />
        </div>

        <button
          type="button"
          className={`button ${name.trim().length > 2 ? "" : "disabled"}`}
          disabled={name.trim().length < 3}
          onClick={() => {
            handleEnterClick(name);
            setCloseSection(true);
          }}
        >
          Enter
        </button>
      </div>
    </section>
  );
}
