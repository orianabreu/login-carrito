import React from 'react';
import { useCartContext } from '../../context/CartContext';
import productos from "../../data/productos";

export default function ProductsList() {
    const { cartItems, setCartItems } = useCartContext();

    const addItem = (item) => {
        const found = cartItems.find(cartItem => cartItem.id === item.id)

        //si no encuentro el producto en el carrito
        if (!found) {
            const cartItem = {
                ...item,
                count: 1
            }
            console.log(found);
            //añadir el producto al final del carrito
            setCartItems([...cartItems, cartItem]);
        } else {
            found.count++;
            console.log(found);
            setCartItems([...cartItems]);
        }
    }
  return (
    <div>
        <ul>
        {productos.map((item) => {
            return (
                <li key={item.id}>
                    {item.name}
                    <button onClick={() => addItem(item)}>añadir</button>
                </li>
            )
        })}
        </ul>
    </div>
  )
}
