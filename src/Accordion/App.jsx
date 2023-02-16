import React, { useState } from "react";
import Data from "./Data";
import Main from "./Main";
import "./style.css";

function App() {
  const [data, setData] = useState(Data);
  return (
    <>
      <h1 className="container">
        <h1 className="title">Question and answer</h1>
        <div className="section">
          {data.map((e) => {
            return <Main key={e.id} {...e} />;
          })}
        </div>
      </h1>
    </>
  );
}

export default App;
