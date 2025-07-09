import { useState, useEffect, useRef } from "react";
import "./App.css";
import Cocktail from "./components/Cocktail";
import BanList from "./components/BanList";
import Button from "./components/Button";

function App() {
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [bannedAttrs, setBannedAttr] = useState([]);
  const nextId = useRef(1);

  const fetchCocktail = async () => {
    try {
      const res = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/random.php"
      );
      const data = await res.json();
      setCocktails(data.drinks || []);
    } catch (err) {
      console.error("Failed to fetch cocktails:", err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchCocktail();
  }, []);

  const addBannedAttr = (newAttr) => {
    const isDuplicate = bannedAttrs.some(
      (item) => item.type === newAttr.type && item.attr === newAttr.attr
    );

    if (!isDuplicate) {
      const newBannedAttr = { id: nextId.current++, ...newAttr };
      setBannedAttr((prev) => [...prev, newBannedAttr]);
    }
  };

  const removeBannedAttr = (reinstatedAttr) => {
    setBannedAttr((prev) => {
      return prev.filter((attr) => attr.id !== reinstatedAttr.id);
    });
  };

  return (
    <div className="app-grid">
      <aside className="column column-left">
        <div className="grid-item">
          <h2>Search History</h2>
          <ul></ul>
        </div>
      </aside>

      <main className="column column-center">
        <div className="grid-item">
          <h1 className="mystery-quest-heading">Cocktail Party 🍸</h1>
          <div>
            {loading ? (
              <p>Loading...</p>
            ) : (
              <Cocktail drink={cocktails[0]} addBannedAttr={addBannedAttr} />
            )}
          </div>
          <Button onClick={fetchCocktail} />
        </div>
      </main>

      <aside className="column column-right">
        <div className="grid-item">
          <h2>Ban List</h2>
          <BanList attrList={bannedAttrs} removeBannedAttr={removeBannedAttr} />
        </div>
      </aside>
    </div>
  );
}

export default App;
