import React from "react";

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, age, name } = person;
        return(<>
            <h2>Name: {name}</h2>
            <h3>Age: {age}</h3>
            </>
        )
      })}
    </>
  );
};

export default List;
