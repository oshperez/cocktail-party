import "./Cocktail.css";

function Cocktail({ drink }) {
  const { strDrink, strDrinkThumb } = drink;
  return (
    <div>
      <h2 className="honk-subheading">{strDrink}</h2>
      <div className="cocktail-card">
        <img
          src={strDrinkThumb}
          alt={strDrink}
          width={250}
          className="cocktail-img"
        />
        <div className="barrio-regular-font">
          <p className="cocktail-attribute">Vodka</p>
          <p className="cocktail-attribute">Alcoholic</p>
          <p className="cocktail-attribute">Cocktail glass</p>
        </div>
      </div>
    </div>
  );
}

export default Cocktail;
