import {
  INCREASE,
  DECREASE,
  REMOVE,
  CLEAR_CART,
  GET_TOTAL,
  GET_AMOUNT
} from "./actions";

function reducer(state, action) {
  switch (action.type) {
    case INCREASE:
      let newCart = state.cart.map(cartItem => {
        if (cartItem.id === action.payload.id) {
          cartItem = { ...cartItem, amount: cartItem.amount + 1 };
        }
        return cartItem;
      });
      return { ...state, cart: newCart };
    case DECREASE:
      let tempCart;
      if (action.payload.amount === 1) {
        tempCart = state.cart.filter(
          cartItem => cartItem.id !== action.payload.id
        );
      } else {
        tempCart = state.cart.map(cartItem => {
          if (cartItem.id === action.payload.id) {
            cartItem = { ...cartItem, amount: cartItem.amount - 1 };
          }
          return cartItem;
        });
      }
      return { ...state, cart: tempCart };

    case REMOVE:
      return {
        ...state,
        cart: state.cart.filter(cartItem => cartItem.id !== action.payload.id)
      };
    case CLEAR_CART:
      return { ...state, cart: [] };
    case GET_AMOUNT:
      const amount = state.cart.reduce((total, cartItem) => {
        const { amount } = cartItem;
        return (total += amount);
      }, 0);
      return { ...state, amount };
    case GET_TOTAL:
      let total = state.cart.reduce((total, cartItem) => {
        const { price, amount } = cartItem;
        const itemTotal = price * amount;
        return (total += itemTotal);
      }, 0);
      total = parseFloat(total.toFixed(2));
      return { ...state, total };

    default:
      return state;
  }
}

export default reducer;
