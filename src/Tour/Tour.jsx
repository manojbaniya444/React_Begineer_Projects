import React from "react";
import Tours from "./Tours";
const Tour = ({ tour ,interestHandler}) => {
  return (
    <section>
      <h1 className="title">Tour</h1>
      {tour.map((item) => {
        return <Tours key={item.id} interestHandler={interestHandler} {...item}/>;
      })}
    </section>
  );
};

export default Tour;
