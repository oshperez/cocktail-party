import { useState, useEffect, useRef } from "react";
import "./App.css";
import Cocktail from "./components/Cocktail";
import BanList from "./components/BanList";
import Button from "./components/Button";
import Spinner from "./components/Spinner";

function App() {
  const [cocktail, setCocktail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [bannedAttrs, setBannedAttr] = useState([]);
  const [seenCocktails, setSeenCocktails] = useState([]);
  const nextId = useRef(1);

  // Fetch from api
  const fetchCocktail = async () => {
    setLoading(true);

    while (true) {
      try {
        const res = await fetch(
          "https://www.thecocktaildb.com/api/json/v1/1/random.php"
        );
        const data = await res.json();
        const cocktail = data.drinks[0] || null;

        const containsBannedAttr = bannedAttrs.some((item) => {
          return item.attr === cocktail[`str${item.type}`];
        });

        if (containsBannedAttr) {
          continue;
        }

        setCocktail(cocktail);
        break;
      } catch (err) {
        console.error("Failed to fetch cocktails:", err);
      }
    }
    setLoading(false);
  };

  // Effects
  useEffect(() => {
    fetchCocktail();
  }, []);

  useEffect(() => {
    if (cocktail) {
      setSeenCocktails((prev) => [...prev, cocktail.strDrink]);
    }
  }, [cocktail]);

  // Ban attribute
  const addBannedAttr = (newAttr) => {
    const isDuplicate = bannedAttrs.some(
      (item) => item.type === newAttr.type && item.attr === newAttr.attr
    );

    if (!isDuplicate) {
      const newBannedAttr = { id: nextId.current++, ...newAttr };
      setBannedAttr((prev) => [...prev, newBannedAttr]);
    }
  };

  // Reinstate attribute
  const removeBannedAttr = (reinstatedAttr) => {
    setBannedAttr((prev) => {
      return prev.filter((attr) => attr.id !== reinstatedAttr.id);
    });
  };

  return (
    <div className="app-grid">
      <aside className="column column-left">
        <div className="grid-item">
          <h2 className="luckiest-guy-font">Seen cocktails</h2>

          {seenCocktails.map((cocktail) => (
            <div className="honk-font">{cocktail}</div>
          ))}
        </div>
      </aside>

      <main className="column column-center">
        <div className="grid-item">
          <h1 className="mystery-quest-heading">Cocktail Party 🍸</h1>
          <div>
            {loading ? (
              <Spinner />
            ) : (
              <Cocktail cocktail={cocktail} addBannedAttr={addBannedAttr} />
            )}
          </div>
          <Button onClick={fetchCocktail} />
        </div>
      </main>

      <aside className="column column-right">
        <div className="grid-item">
          <h2 className="luckiest-guy-font">Ban List</h2>
          <BanList attrList={bannedAttrs} removeBannedAttr={removeBannedAttr} />
        </div>
      </aside>
    </div>
  );
}

export default App;
