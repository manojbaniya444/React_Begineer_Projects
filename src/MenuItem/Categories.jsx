import React from "react";

const Categories = ({ categoryFilter, category }) => {
  return (
    <div className="button-container">
      {/*// Manual Approach */}
      {/* <button onClick={() => categoryFilter("all")}>all</button>
      <button onClick={() => categoryFilter("breakfast")}>breakfast</button>
      <button onClick={() => categoryFilter("lunch")}>lunch</button>
      <button onClick={() => categoryFilter("shakes")}>shakes</button> */}

      {/* // Dynamic Approach */}
      {category.map((categoryItem, index) => {
        return (
          <button key={index} onClick={() => categoryFilter(categoryItem)}>
            {categoryItem}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
