import spinner from "../assets/spinner.gif";
import "./Spinner.css";

function Spinner() {
  return (
    <div className="spinner-wrapper">
      <img
        src={spinner}
        alt="Loading..."
        width={100}
        height={100}
        className="spinner-image"
      />
      <p className="luckiest-guy-font">Loading cocktail...</p>
    </div>
  );
}

export default Spinner;
