import React from "react";
import { useState } from "react";
import data from "./data";
import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";
import "./style.css";
const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = data[index];

  const check = (index) => {
    if (index < 0) {
      return data.length - 1;
    }

    if (index > data.length - 1) {
      return 0;
    } else {
      return index;
    }
  };

  const previousHandler = () => {
    let newIndex = index - 1;
    let setNewIndex = check(newIndex);
    setIndex(setNewIndex);
  };

  const nextHandler = () => {
    let newIndex = index + 1;
    let setNewIndex = check(newIndex);
    setIndex(setNewIndex);
  };

  const randomHandler = () => {
    let randomIndex = Math.floor(Math.random() * data.length);
    console.log(randomIndex);
    if (randomIndex === index) {
      let newRandomIndex = randomIndex + 1;
      let setNewRandomIndex = check(newRandomIndex);
      setIndex(setNewRandomIndex);
    } else {
      setIndex(randomIndex);
    }
  };

  return (
    <main>
      <article>
        <div className="header">
          <img src={image} alt={name} />
        </div>
        <div className="info">
          <h3>{name}</h3>
          <h4>{job}</h4>
          <p>{text}</p>
        </div>
        <div className="footer">
          <FcPrevious className="previous-btn" onClick={previousHandler} />
          <FcNext className="next-btn" onClick={nextHandler} />
        </div>
        <button onClick={randomHandler}>Random</button>
      </article>
    </main>
  );
};

export default App;
