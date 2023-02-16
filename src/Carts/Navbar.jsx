import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useGlobalContext } from "./context";
const Container = () => {
  const { amount } = useGlobalContext();
  return (
    <nav>
      <h3>Manoj Electronics</h3>
      <p className="cart-icon">
        <FaShoppingCart />
        <span>{amount}</span>
      </p>
    </nav>
  );
};

export default Container;
