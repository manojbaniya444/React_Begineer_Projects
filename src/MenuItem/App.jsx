import React, { useState } from "react";
import Categories from "./Categories";
import data from "./data";
import Menu from "./Menu";
import "./style.css";

const allCategories = ["all", ...new Set(data.map((item) => item.category))];
const App = () => {
  const [items, setItems] = useState(data);
  const [category, setCategory] = useState(allCategories);
  const categoryFilter = (category) => {
    if (category === "all") {
      setItems(data);
    } else {
      const newData = data.filter(
        (filterData) => filterData.category === category
      );
      setItems(newData);
    }
  };
  return (
    <menu>
      <section>
        <h4>Manoj Restaurant</h4>
        <h1>Menu Items</h1>
        <Categories categoryFilter={categoryFilter} category={category} />
        <Menu items={items} />
      </section>
    </menu>
  );
};

export default App;
