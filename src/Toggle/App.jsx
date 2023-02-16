import React from "react";
import { useState } from "react";

const App = () => {
  const [message, setMessage] = useState("I will be changed");
  const [show, setShow] = useState(false);

  
  return (
    <>
      <p>{message}</p>
      <button
        onClick={() => {
          setShow(!show);

          setMessage(show?"MusiMusi":"Daijobudeska");
        }}
      >
        Change
      </button>
    </>
  );
};

export default App;
