import { useState, useEffect } from "react";
import "./Cocktail.css";
import Attribute from "./Attribute";

function Cocktail({ drink, addBannedAttr }) {
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    const fetchCocktail = async () => {
      try {
        const res = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink.strDrink}`
        );
        const data = await res.json();
        setCocktail(data.drinks[0] || null);
      } catch (err) {
        console.error("Failed to fetch cocktails:", err);
      }
    };

    fetchCocktail();
  }, [drink]);

  if (!cocktail) return <p>Loading...</p>;

  return (
    <div>
      <h2 className="honk-subheading">{cocktail.strDrink}</h2>
      <div className="cocktail-card">
        <img
          src={cocktail.strDrinkThumb}
          alt={cocktail.strDrink}
          width={250}
          className="cocktail-img"
        />
        <div>
          <Attribute
            attr={cocktail.strIngredient1}
            type="ingredient"
            addBannedAttr={addBannedAttr}
          />
          <Attribute
            attr={cocktail.strAlcoholic}
            type="alcoholic"
            addBannedAttr={addBannedAttr}
          />
          <Attribute
            attr={cocktail.strGlass}
            type="glass"
            addBannedAttr={addBannedAttr}
          />
        </div>
      </div>
    </div>
  );
}

export default Cocktail;
