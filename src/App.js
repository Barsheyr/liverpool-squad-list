import React, { useState } from "react";
import List from "./List";
import data from "./data";

function App() {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <div className="header">
        <h3>{people.length} Liverpool Squad Players </h3>
      </div>
      <div className="box">
        <List people={people} />
      </div>

      <button className="btn" onClick={() => setPeople([])}>
        clear all
      </button>
    </main>
  );
}

export default App;
