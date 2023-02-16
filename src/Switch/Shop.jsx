import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Shop = () => {

const[items,setItems] = useState([]);
  useEffect(() => {
    fetchItem();
  }, []);

  async function fetchItem() {
    const data = await fetch("https://catfact.ninja/fact");
    const item = await data.json();
    console.log(item);
    setItems(item);
  }

  return (
    <>
      <div className="shop">
        <h1 className="shoppage">Random Cat Fact</h1>
        <p className="fact">{items.fact}</p>
      </div>
    </>
  );
};

export default Shop;
