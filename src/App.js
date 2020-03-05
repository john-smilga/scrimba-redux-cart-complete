import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff
import { createStore } from "redux";
// react-redux stuff
import { Provider } from "react-redux";

import reducer from "./reducer";

// default store
const defaultStore = {
  cart: cartItems,
  total: 0,
  name: "john"
};
// setup store
const store = createStore(reducer, defaultStore);

function App() {
  return (
    <Provider store={store}>
      <main>
        <Navbar />
        <CartContainer />
      </main>
    </Provider>
  );
}

export default App;
