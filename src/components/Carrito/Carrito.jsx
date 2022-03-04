import React from "react";
import { useCartContext } from "../../context/CartContext";

export default function Carrito() {
  const { cartItems } = useCartContext();
  return (
    <>
      <ul>
        {cartItems.map((item, index) => {
          return (
            <li key={index}>
              {item.name}: {item.count}
            </li>
          );
        })}
      </ul>
    </>
  );
}
