"use client";

import { useCookies } from "react-cookie";
import CartItem from "../Components/CartItem";
import { useState, useEffect } from "react";

export default function Cart() {
  const [cookies, setCookie, removeCookie] = useCookies();
  const [cartItems, setCartItems] = useState<any>();

  const getCartItems = async () => {
    const response = await fetch(`/api/get-cart-items?id=${cookies.id}`);
    const data = await response.json();
    setCartItems(data);
  };


  useEffect(() => {
    getCartItems();
  }, [cartItems]);

  return (
    <div className="w-full h-full">
      {cartItems?.map((c: any) => {
        return (
          <CartItem
            id={c.id}
            image={c.image}
            name={c.name}
            price={c.price}
            userId={c.userId}
            quantity={c.quantity}
          />
        );
      })}
    </div>
  );
}
