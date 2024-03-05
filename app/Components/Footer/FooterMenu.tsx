"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCookies } from "react-cookie";

export default function FooterMenu() {
  const [cookies, setCookies, removeCookie] = useCookies<any>([]);
  const router = useRouter();

  const Logout = () => {
    removeCookie("authToken");
    removeCookie("email");
    removeCookie("firstName");
    removeCookie("lastName");
    removeCookie("cart");

    router.push("/sign-up");
  };

  return (
    <div className="flex items-center justify-between w-1/4">
      <div>
        <h1 className="font-medium">User</h1>
        <div className="text-xs text-gray-500 flex flex-col justify-evenly h-24">
          <p className="hover:cursor-pointer" onClick={() => Logout()}>
            Log Out
          </p>
          <Link href="/sign-in">
            <p>Sign In</p>
          </Link>
          <Link href="/sign-up">
            <p>Sign up</p>
          </Link>
          <Link href="/cart">
            <p>Cart</p>
          </Link>
        </div>
      </div>
      <div>
        <h1 className="font-medium">Products</h1>
        <div className="text-xs text-gray-500 flex flex-col justify-evenly h-24">
          <Link href="/products/meat">
            <p>Meat</p>
          </Link>
          <Link href="/products/dairy">
            <p>Dairy</p>
          </Link>
          <Link href="/products/drinks">
            <p>Drinks</p>
          </Link>
          <Link href="/products/snacks">
            <p>Snacks</p>
          </Link>
          <Link href="/products/produce">
            <p>Produce</p>
          </Link>
          <Link href="/products/bakery">
            <p>Bakery</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
