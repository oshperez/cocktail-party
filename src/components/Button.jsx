import "./Button.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBellConcierge } from "@fortawesome/free-solid-svg-icons";

function Button({ onClick }) {
  return (
    <div className="btn">
      <span className="btn-tag-wrapper outlined-text">
        <span className="btn-tag">Cocktail me!</span>
      </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="45"
        height="45"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#213547"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-redo-icon lucide-redo"
      >
        <path d="M21 7v6h-6" />
        <path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" />
      </svg>
      <FontAwesomeIcon
        icon={faBellConcierge}
        size="3x"
        className="btn-bell"
        onClick={onClick}
      />
    </div>
  );
}

export default Button;
