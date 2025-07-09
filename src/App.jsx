import { useState, useEffect, useRef } from "react";
import "./App.css";
import Cocktail from "./components/Cocktail";
import BanList from "./components/BanList";

function App() {
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [bannedAttrs, setBannedAttr] = useState([]);
  const nextId = useRef(1);

  useEffect(() => {
    const fetchCocktails = async () => {
      try {
        const res = await fetch(
          "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=vodka"
        );
        const data = await res.json();
        setCocktails(data.drinks || []);
      } catch (err) {
        console.error("Failed to fetch cocktails:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCocktails();
  }, []);

  const addBannedAttr = (attr) => {
    const newBannedAttr = { id: nextId.current++, ...attr };
    setBannedAttr((prev) => [...prev, newBannedAttr]);
  };

  //! log here .....
  console.log(bannedAttrs);

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
        </div>
      </main>

      <aside className="column column-right">
        <div className="grid-item">
          <h2>Ban List</h2>
          <BanList attrList={bannedAttrs} />
        </div>
      </aside>
    </div>
  );
}

export default App;
