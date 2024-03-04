"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BreadCrumbMenu() {
  const pathname = usePathname();
  return (
    <div className="flex items-center text-sm gap-2">
      <Link
        className={
          pathname === "/products"
            ? "text-[#3BB77E]"
            : "text-gray-500 text-sm hover:text-[#3BB77E]"
        }
        href="/products"
      >
        All
      </Link>
      <Link
        className={
          pathname === "/products/meat"
            ? "text-[#3BB77E]"
            : "text-gray-500 text-sm hover:text-[#3BB77E]"
        }
        href="/products/meat"
      >
        Meat
      </Link>
      <Link
        className={
          pathname === "/products/drinks"
            ? "text-[#3BB77E]"
            : "text-gray-500 text-sm hover:text-[#3BB77E]"
        }
        href="/products/drinks"
      >
        Drinks
      </Link>
      <Link
        className={
          pathname === "/products/produce"
            ? "text-[#3BB77E]"
            : "text-gray-500 text-sm hover:text-[#3BB77E]"
        }
        href="/products/produce"
      >
        Produce
      </Link>
      <Link
        className={
          pathname === "/products/dairy"
            ? "text-[#3BB77E]"
            : "text-gray-500 text-sm hover:text-[#3BB77E]"
        }
        href="/products/dairy"
      >
        Dairy
      </Link>
      <Link
        className={
          pathname === "/products/snacks"
            ? "text-[#3BB77E]"
            : "text-gray-500 text-sm hover:text-[#3BB77E]"
        }
        href="/products/snacks"
      >
        Snacks
      </Link>
      <Link
        className={
          pathname === "/products/bakery"
            ? "text-[#3BB77E]"
            : "text-gray-500 text-sm hover:text-[#3BB77E]"
        }
        href="/products/bakery"
      >
        Bakery
      </Link>
    </div>
  );
}
