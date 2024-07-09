import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const value = {
    cartItems,
    addToCart,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
