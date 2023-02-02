import React, { createContext, useContext, useState  } from "react";

//IMPORT Toast to manage cart items
import { toast } from "react-hot-toast";

//Create Context
const Context = createContext();

//-------- SET CONTEXTS --------------
//we pass children as props so whenever we call our StateContext everything within will be considered as children
export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);

  //FIND PRODUCT TO UPDATE
  let foundProduct;
  let index;

  //-------- ADD PRODUCTS TO CART --------------
  //+ check if in card + update price + update qty
  const onAdd = (artwork, quantity) => {
    const checkProductInCart = cartItems.find(
      (item) => item._id === artwork._id
    );

    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice +artwork.price * quantity
    );
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === artwork._id)
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
      });

      setCartItems(updatedCartItems);
    } else {
      artwork.quantity = quantity;

      setCartItems([...cartItems, { ...artwork }]);
    }

    toast.success(`${qty} ${artwork.artworkName} added to the cart.`);
  };



  //-------- REMOVE PRODUCTS FROM CART --------------

  const onRemove = (artwork) => {
    foundProduct = cartItems.find((item) => item._id === artwork._id);
    const newCartItems = cartItems.filter((item) => item._id !== artwork._id);

    setTotalPrice(
      (prevTotalPrice) =>
        prevTotalPrice - foundProduct.price * foundProduct.quantity
    );
    setTotalQuantities(
      (prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity
    );
    setCartItems(newCartItems);
  };

  //-------- TOGGLE PRODUCTS FROM CART --------------

  const toggleCartItemQuantity = (id, value) => {
    foundProduct = cartItems.find((item) => item._id === id);
    index = cartItems.findIndex((artwork) => artwork._id === id);
    const newCartItems = cartItems.filter((item) => item._id !== id);

    if (value === "inc") {
      setCartItems([
        ...newCartItems,
        { ...foundProduct, quantity: foundProduct.quantity + 1 },
      ]);
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
    } else if (value === "dec") {
      if (foundProduct.quantity > 1) {
        setCartItems([
          ...newCartItems,
          { ...foundProduct, quantity: foundProduct.quantity - 1 },
        ]);
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);
      }
    }
  };

  //-------- DYNAMIC QTY UPDATE --------------
  //every time we update prev +1
  //every time we update prev -1 but cant go under 1
  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;

      return prevQty - 1;
    });
  };

  //-------- RENDERING CONTEXTS --------------
  //so we are not rendering anything, just wrap everything inside our provider + values that we pass across entire app !
  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
        onAdd,
        toggleCartItemQuantity,
        onRemove,
        setCartItems,
        setTotalPrice,
        setTotalQuantities,
      }}
    >
      {children}
    </Context.Provider>
  );
};

//to use Context as a hook
export const useStateContext = () => useContext(Context);
