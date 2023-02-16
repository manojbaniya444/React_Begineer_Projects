import React from "react";
import { useState } from "react";
import data from "./data";
import List from "./List";
import "./style.css";
const App = () => {
  const [people, setPeople] = useState(data);
  const buttonValue = "Clear all";
  const clearHandler = (e) => {
    setPeople([]);

  };
  const resetHandler =()=>
  {
    setPeople(data);
  }
  return (
    <main>
      <div className="container">
        <h1>{people.length} Birthdays Today.</h1>
        <List people={people} key={people.id} />
        <button onClick={clearHandler} onDoubleClick={resetHandler}>{buttonValue}</button>

      </div>
    </main>
  );
};

export default App;
