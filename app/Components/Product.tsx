"use client";

import Image from "next/image";
import { useState } from "react";
import { useCookies } from "react-cookie";

type ProductProps = {
  id: number;
  name: string;
  price: number;
  image: string;
  description?: string;
};


export default function Product({
  id,
  name,
  price,
  image,
  description,
}: ProductProps) {
  const [cookies, setCookie, removeCookie] = useCookies();
  const [quantity, setQuantity] = useState(0);
  console.log(cookies);

  const addToCart = async () => {
    try {
      if (quantity !== 0) {
        const response = await fetch("/api/add-to-cart", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            id,
            name,
            price,
            image,
            quantity,
            token: cookies.authToken,
            user_id: cookies.id,
          }),
        });
        const data = await response.json();
        console.log(data);
        setQuantity(0);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="border-[1px] shadow-sm m-2">
      {/* image section */}
      <div className="flex flex-col p-2">
        {" "}
        <Image
          style={{ width: "80%", height: "50%", margin: "0 auto" }}
          src={image}
          height={100}
          width={100}
          alt="prodcut image"
        />
      </div>

      {/* bottom section */}
      <div className="flex flex-col justify-center mx-2">
        <div className="flex justify-between items-center h-8">
          <p className="text-xs">{name}</p>
          <p className="text-[#3BB77E] text-sm">${price}</p>
        </div>

        <div className="flex">
          {/* edit quantity section */}
          <div className="flex gap-2 items-center py-2">
            <button
              disabled={quantity === 0}
              onClick={() => setQuantity((quantity) => quantity - 1)}
              className={`bg-[#3BB77E] text-white w-[20px] h-[20px] rounded-full flex items-center justify-center ${
                quantity === 0 ? "bg-opacity-20" : ""
              }`}
            >
              -
            </button>
            <p>{quantity}</p>
            <button
              onClick={() => setQuantity((quantity) => quantity + 1)}
              className="bg-[#3BB77E] text-white w-[20px] h-[20px] rounded-full flex items-center justify-center"
            >
              +
            </button>
          </div>
        </div>
        <button
          disabled={quantity === 0}
          onClick={() => addToCart()}
          className={`flex items-center bg-[#3BB77E] bg-opacity-20 my-2 p-1 rounded-sm ${
            quantity === 0 ? "bg-opacity-10" : "bg-opacity-30"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#3BB77E"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
          <p className="text-sm w-full text-[#3BB77E]">Add to Cart</p>
        </button>
      </div>
    </div>
  );
}
