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
          pathname === "/products/Meat"
            ? "text-[#3BB77E]"
            : "text-gray-500 text-sm hover:text-[#3BB77E]"
        }
        href="/products/Meat"
      >
        Meat
      </Link>
      <Link
        className={
          pathname === "/products/Drinks"
            ? "text-[#3BB77E]"
            : "text-gray-500 text-sm hover:text-[#3BB77E]"
        }
        href="/products/Drinks"
      >
        Drinks
      </Link>
      <Link
        className={
          pathname === "/products/Produce"
            ? "text-[#3BB77E]"
            : "text-gray-500 text-sm hover:text-[#3BB77E]"
        }
        href="/products/Produce"
      >
        Produce
      </Link>
      <Link
        className={
          pathname === "/products/Dairy"
            ? "text-[#3BB77E]"
            : "text-gray-500 text-sm hover:text-[#3BB77E]"
        }
        href="/products/Dairy"
      >
        Dairy
      </Link>
      <Link
        className={
          pathname === "/products/Snacks"
            ? "text-[#3BB77E]"
            : "text-gray-500 text-sm hover:text-[#3BB77E]"
        }
        href="/products/Snacks"
      >
        Snacks
      </Link>
      <Link
        className={
          pathname === "/products/Baker"
            ? "text-[#3BB77E]"
            : "text-gray-500 text-sm hover:text-[#3BB77E]"
        }
        href="/products/Bakery"
      >
        Bakery
      </Link>
    </div>
  );
}
