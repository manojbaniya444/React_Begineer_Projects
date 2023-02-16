import React from "react";

const Menu = ({ items }) => {
  // console.log(items);

  return (
    <div className="menu-items">
      {items.map((item) => {
        const { id, title, category, price, img ,desc} = item;
        return (
          <article key={id} className="menu-item">
            <h2>{title}</h2>
            <h2>${price}</h2>
            <p>{desc}</p>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
