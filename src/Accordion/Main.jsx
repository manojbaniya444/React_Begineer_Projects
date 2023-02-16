import React, { useState } from "react";
// import Tooltip from '@mui/material/Tooltip';

const Main = ({ question, answer }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="class">
        {" "}
        {/* <Tooltip title={sh}> */}
        <span
          className="logo"
          onClick={() => {
            setShow(!show);
          }}
        >
          {show?"➖":"➕"}
        </span>
        {/* </Tooltip> */}

        <span className="question">{question}</span>
        {show && <p className="answer">{answer}</p>}
      </div>
    </>
  );
};

export default Main;
