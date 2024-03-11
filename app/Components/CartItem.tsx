"use client";

import { revalidatePath } from "next/cache";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import { useRouter } from "next/navigation";

type CartItemProps = {
  id: number;
  name: string;
  image: string;
  price: number;
  userId: number;
  quantity: number;
  cartItemId: number;
  cartItems: {
    id: number;
    name: string;
    price: number;
    userId: number;
    quantity: number;
    cartItemId: number;
    image: string;
  }[];
  setCartItems: Dispatch<
    SetStateAction<
      | []
      | {
          id: number;
          image: string;
          price: number;
          userId: number;
          quantity: number;
          name: string;
          cartItemId: number;
        }[]
    >
  >;
};

export default function CartItem({
  id,
  image,
  name,
  price,
  userId,
  quantity,
  cartItemId,
  cartItems,
  setCartItems,
}: CartItemProps) {
  const [itemQuantity, setItemQuantity] = useState(quantity);
  const router = useRouter();

  console.log(cartItems);

  const updateCartQty = async (method: string) => {
    try {
      const response = await fetch("/api/update-cart-quantity", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cartItemId, method }),
      });

      const cart = cartItems.map((item) => {
        console.log(method);

        if (method === "add") {
          if (item.name === name) {
            const newItem = { ...item, quantity: item.quantity + 1 };
            return newItem;
          } else {
            return item;
          }
        } else {
          if (item.name === name) {
            const newItem = { ...item, quantity: item.quantity - 1 };
            return newItem;
          } else {
            return item;
          }
        }
      });

      setCartItems(cart);
    } catch (e) {
      console.error(e);
    }
  };

  const deleteCartItem = async () => {
    try {
      const response = await fetch(
        `/api/delete-from-cart?cartItemId=${cartItemId}`,
        {
          method: "DELETE",
        }
      );
      setCartItems((cartItems) => cartItems.filter((i) => i.name !== name));
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="gap-2 lg:gap-0 flex flex-col lg:flex-row justify-evenly items-center border-t-[0.5px] px-12 py-3">
      <Image src={image} width={100} height={100} alt="product image" />
      <h2 className="w-48 text-lg font-bold text-center lg:text-e">{name}</h2>
      {/* <p>Total : ${Math.round(price * quantity)}</p> */}
      <div className="flex gap-2 items-center py-2">
        <button
          disabled={quantity === 0}
          onClick={() => updateCartQty("subtract")}
          className={`bg-[#3BB77E] text-white w-[20px] h-[20px] rounded-full flex items-center justify-center ${
            quantity === 0 ? "bg-opacity-20" : ""
          }`}
        >
          -
        </button>
        <p>{quantity}</p>
        <button
          onClick={() => updateCartQty("add")}
          className="bg-[#3BB77E] text-white w-[20px] h-[20px] rounded-full flex items-center justify-center"
        >
          +
        </button>
      </div>
      <div className="flex flex-col">
        <p className="text-xs text-gray-500">Each</p>
        <p className="font-semibold">{price}</p>
      </div>
      <p
        className="underline text-red-500 text-sm hover:cursor-pointer"
        onClick={() => deleteCartItem()}
      >
        Remove
      </p>
    </div>
  );
}
