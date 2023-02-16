import React, { useState } from "react";
import data from "./data";
import "./style.css";

const App = () => {
  const [count, setCount] = useState(0);
  const [list, setList] = useState([]);

  const formHandler = (e) => {
    e.preventDefault();
    let number = parseInt(count);

    if (count <= 0) {
      number = 1;
    }
    if (count > 8) {
      number = 8;
    }
    setList(data.slice(0, number));
  };

  return (
    <>
      <h1>Lorem-ipsum generator</h1>

      <main>
        <form action="" onSubmit={formHandler}>
          <label htmlFor="number">Select no. of paragraph you want: </label>
          <input
            type="number"
            id="number"
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
          <button>generate</button>
        </form>

        <div className="list-display">
          {list.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </div>
      </main>
    </>
  );
};

export default App;
