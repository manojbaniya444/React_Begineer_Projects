import React, { useState } from "react";
import Box from "./Box";
import "./style.css";

const App = () => {
  return (
    <>
      <p className="hero">Manoj Weather  App</p>
      <div className="container">
        <Box />
      </div>
    </>
  );
};

export default App;
