import "./Attribute.css";

function Attribute({ attr, type, isBanned, addBannedAttr }) {
  const handleClick = () => {
    addBannedAttr({ type, attr });
  };
  return (
    <div className="barrio-regular-font">
      <p
        className={`cocktail-attribute ${isBanned ? "attr-banned" : ""}`}
        onClick={handleClick}
      >
        {attr}
      </p>
    </div>
  );
}

export default Attribute;
