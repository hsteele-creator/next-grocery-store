"use client";

import { useCookies } from "react-cookie";
import CartItem from "../Components/CartItem";
import { useState, useEffect } from "react";

export default function Cart() {
  const [cookies, setCookie, removeCookie] = useCookies();
  const [cartItems, setCartItems] = useState<
    | null
    | {
        id: number;
        image: string;
        price: number;
        userId: number;
        quantity: number;
        name: string;
      }[]
  >(null);

  const getCartItems = async () => {
    const response = await fetch(`/api/get-cart-items?id=${cookies.id}`);
    const data = await response.json();
    setCartItems(data);
  };

  useEffect(() => {
    getCartItems();
  });

  return (
    <div className="w-full h-full">
      {cartItems?.map(
        (c: {
          id: number;
          image: string;
          price: number;
          userId: number;
          quantity: number;
          name: string;
        }) => {
          return (
            <CartItem
              key={c.name}
              id={c.id}
              image={c.image}
              name={c.name}
              price={c.price}
              userId={c.userId}
              quantity={c.quantity}
            />
          );
        }
      )}
    </div>
  );
}
