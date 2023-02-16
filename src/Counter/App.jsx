// import React from "react";
// import { useState } from "react";

// const App = () => {
//   const [num, setNum] = useState(0);
//   const resetHandler = () => {
//     setNum(0);
//   };
//   return (
//     <>
//       <p>{num}</p>
//       <button onClick={() => setNum(num + 1)}>Increase</button>
//       <button onClick={() => setNum(num - 1)}>Decrease</button>
//       <button onClick={resetHandler}>Reset</button>
//     </>
//   );
// };

// export default App;


import React from 'react';
import { useState } from 'react';
const App = () =>
{
  const [num, setNum] = useState(0);
  const increaseHandler = () => 
  {
    setNum(num + 1);
  }

  const decreaseHandler = () =>
  {
    setNum(num - 1)
  }

  const resetHandler = () =>
  {
    setNum(0)
  }
  return (
<>
<p>{num}</p>
<button onClick={increaseHandler}>Increase</button>
<button onClick={decreaseHandler}>Decrease</button>
<button onClick={resetHandler}>Reset</button>

</>

  );
}

export default App;