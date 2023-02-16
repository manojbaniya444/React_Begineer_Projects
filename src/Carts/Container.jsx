import React from "react";
import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";
import { useGlobalContext } from "./context";
const Container = () => {
  const { clearCartHandler, cart, removeHandler,increaseHandler,decreaseHandler,total} = useGlobalContext();

  console.log(cart);
  if (cart.length !== 0) {
    return (
      <div className="main-container">
        <h2 className="text-center">kun kun kati laane yaaha xa</h2>
        <div className="items-container">
          {cart.map((item, index) => {
            const { id, title, price, img,amount} = item;
            return (
              <article key={index}>
                <img src={img} alt={title} />
                <div className="description">
                  <h3>{title}</h3>
                  <h2 className="price">${price}</h2>
                  <button className="remove-btn" onClick={()=> removeHandler(id)}>Hataide</button>
                </div>
                <div className="amount-btn-div">
                  <button className="increase" onClick={()=> increaseHandler(id)}>
                    <FcNext />
                  </button>
                  <p className="amount-show">{amount}</p>
                  <button className="decrease" onClick={()=> decreaseHandler(id)}>
                    <FcPrevious />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
        <hr />
        <div className="footer">
          <h3 className="total">Total</h3>
          <h3 className="total-amount">${total}</h3>
        </div>
        <button className="clear-all-btn" onClick={clearCartHandler}>
          Sab Udaune 
        </button>
      </div>
    );
  }
  return <div className="noitems">Hehe Kai pani Xaina <br />Refresh Gar ani Paulas naya mobile </div>;
};

export default Container;
