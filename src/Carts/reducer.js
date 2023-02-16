const reducer = (state, action) => {
  if (action.type === "CLEAR_CART") {
    return { ...state, cart: [] };
  }
  if (action.type === "REMOVE_ITEM") {
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
    };
  }
  if (action.type === "INCREASE_AMOUNT") {
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload) {
        return { ...cartItem, amount: cartItem.amount + 1 };
      }
      return cartItem;
    });
    return { ...state, cart: tempCart };
  }

  if (action.type === "DECREASE_AMOUNT") {
    let tempCart = state.cart
      .map((cartItem) => {
        if (cartItem.id === action.payload) {
          return { ...cartItem, amount: cartItem.amount - 1 };
        }
        return cartItem;
      })
      .filter((cartItem) => cartItem.amount !== 0);

    return { ...state, cart: tempCart };
  }
  //
  if (action.type === 'GET_TOTALS') {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => { //cartTotal vaneko Accumulator ho ra cartItem vaneko current item hp
        const { price, amount } = cartItem //Yo amount arkei ho hai cart ko amount ho yo (individual item lai destrucutre gareko)
        const itemTotal = price * amount

        cartTotal.total += itemTotal
        cartTotal.amount += amount
        return cartTotal
      },
      {
        total: 0,    //second parameter ho yo yesma hamile number,array,object j pani return garna sakinxa hai
        amount: 0,
      }
    )
    total = parseFloat(total.toFixed(2))

    return { ...state, total, amount }
  }
  return state;
};

export default reducer;
