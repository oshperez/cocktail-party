import "./Attribute.css";

function Attribute({
  id,
  attr,
  type,
  isBanned,
  addBannedAttr,
  removeBannedAttr,
}) {
  const handleClick = () => {
    if (isBanned) {
      removeBannedAttr({ id, type, attr });
    } else {
      addBannedAttr({ type, attr });
    }
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
