import React, { useState, useContext } from 'react';

export const MyCartContext = React.createContext();

export const useCartContext = () => {
    return useContext(MyCartContext);
}

export default function CartContext({ children }) {
    const [cartItems, setCartItems] = useState([]);

    const store = {
        cartItems,
        setCartItems
    }
  return (
    <MyCartContext.Provider value={store}>
        { children }
    </MyCartContext.Provider>
  )
}
