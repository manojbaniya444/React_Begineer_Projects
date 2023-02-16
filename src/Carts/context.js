import React, { useContext, useEffect, useReducer } from "react";
import data from "./data";
import reducer from "./reducer";

const AppContext = React.createContext();

const initialState = {
  cart: data,
  amount: 0,
  total: 0,

};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);  //state vaneko state value ho ra dispatch vaneko function ho jasle update garne kaam garxa,reducer vaneko function ko location ho ra initialState vaneko current State rakhne container ho jasma haami sab state  rakhninxa.

  const clearCartHandler = () => {
    dispatch({ type: "CLEAR_CART" });
    console.log("Cleared");
  };

  const removeHandler = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };
  const increaseHandler = (id) => {
    dispatch({ type: "INCREASE_AMOUNT", payload: id });
  };
  const decreaseHandler = (id) => {
    dispatch({ type: "DECREASE_AMOUNT", payload: id });
  };
  useEffect ( ()=>
  {
    dispatch({type: "GET_TOTALS"})
  },[state.cart])
  return (
    <AppContext.Provider
      value={{
        ...state, //all state values go here
        clearCartHandler, //functions also goes here but individually
        removeHandler,
        increaseHandler,
        decreaseHandler,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
