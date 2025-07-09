import "./App.css";

function App() {
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
          <h1>Cocktail Party 🍸</h1>
        </div>
      </main>

      <aside className="column column-right">
        <div className="grid-item">
          <h2>Ban List</h2>
          <ul></ul>
        </div>
      </aside>
    </div>
  );
}

export default App;
