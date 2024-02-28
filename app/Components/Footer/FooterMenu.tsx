import Link from "next/link";

export default function FooterMenu() {
  return (
    <div className="flex items-center justify-between w-1/4">
      <div>
        <h1 className="font-medium">User</h1>
        <div className="text-xs text-gray-500 flex flex-col justify-evenly h-24">
          <p>Log Out</p>
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
          <Link href="/products/Meat">
            <p>Meat</p>
          </Link>
          <Link href="/products/Dairy">
            <p>Dairy</p>
          </Link>
          <Link href="/products/Drinks">
            <p>Drinks</p>
          </Link>
          <Link href="/products/Snacks">
            <p>Snacks</p>
          </Link>
          <Link href="/products/Produce">
            <p>Produce</p>
          </Link>
          <Link href="/products/Bakery">
            <p>Bakery</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
