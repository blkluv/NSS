import React, { createContext, useContext, useState, useEffect } from "react";

//IMPORT Toast to manage cart items
import { toast } from "react-hot-toast";

//Create Context
const Context = createContext();

//we pass children as props so whenever we call our StateContext everything within will be considered as children
export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState();
  const [totalPrice, setTotalPrice] = useState();
  const [totalQuantity, setTotalQuantity] = useState();
  const [qty, setQty] = useState(1);

  //so we are not rendering anything, just wrap everything inside our provider + values that we pass across entire app !
  return (
    <Context.Provider
      value={{
        showCart,
        cartItems,
        totalPrice,
        totalQuantity,
        qty,
      }}
    >
      {children}
    </Context.Provider>
  );
};
