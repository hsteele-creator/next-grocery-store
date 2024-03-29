"use client";

import { useRouter } from "next/navigation";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import LogoSection from "../LogoSections";
import Link from "next/link";

export default function Nav() {
  const [cookies, setCookies, removeCookie] = useCookies<any>([]);
  const [authToken, setAuthToken] = useState(cookies.authToken);
  const [cartItemsLength, setCartItemsLength] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const getCartItems = async () => {
    const response = await fetch(`/api/get-cart-items?id=${cookies.id}`);
    const data = await response.json();
    setCartItemsLength(data.length);
  };

  useEffect(() => {
    getCartItems();
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!cookies.authToken) {
      router.push("/sign-up");
    }
  }, [open]);

  useEffect(() => {
    if (cookies.authToken !== authToken) {
      setAuthToken(cookies.authToken);
    }
  }, [cookies.authToken]);

  const Logout = () => {
    removeCookie("authToken");
    removeCookie("email");
    removeCookie("firstName");
    removeCookie("lastName");
    removeCookie("cart")

    router.push("/sign-up");
  };

  return (
    <div className="px-4 lg:px-32 bg-white flex justify-between items-center border-b-[0.5px]">
      {/* left logo section */}
      <Link href="/">
        <LogoSection />
      </Link>

      <div className="flex gap-3 items-center">
        {/* cart section */}

        <Link href="/cart">
          <div className=" flex items-center gap-1 hover:cursor-pointer p-1 lg:p-2 rounded-full hover:bg-gray-100">
            {" "}
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="w-6 h-6 relative"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
              <div className="flex items-center justify-center bg-[#3BB77E]  w-3 h-3 rounded-full top-[-2px] right-[-1px] absolute">
                <p className="text-[10px] text-white">{cartItemsLength}</p>
              </div>
            </div>
            <div>
              <p className="text-[10px] lg:text-xs mb-[1px]">My Cart</p>
              <p className="text-[#3BB77E] text-[10px] lg:text-xs">21$</p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </Link>

        {/* right dropdown section */}
        <div
          onClick={() => setOpen(!open)}
          className="relative flex items-center gap-1 lg:p-3 hover:cursor-pointer rounded-full hover:bg-gray-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>

          <div className="flex gap-1">
            <p>{isClient && cookies.firstName}</p>
            <p>{isClient && cookies.lastName}</p>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
          {open && cookies.authToken && (
            <p
              onClick={Logout}
              className="absolute bg-gray-200 top-10 right-0 p-[4px] shadow-xl w-full text-center"
            >
              Logout
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
