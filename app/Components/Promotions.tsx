import Image from "next/image";
import Link from "next/link";

export default function Promotions() {
  return (
    <div className="w-full flex flex-col lg:flex-row gap-4 my-12">
      <div className="flex items-center justify-evenly w-full lg:w-1/2 p-4 bg-[#FFF5E1] bg-[url(/images/fruit-overlay.svg)] bg-cover bg-blend-color-burn">
        <div>
          {" "}
          <p className="bg-[#FFD480] text-xs text-white w-20 text-center p-[3px]">
            Free Delivery
          </p>
          <h2 className="font-medium text-xl py-2">Free delivery over 50$</h2>
          <p className="text-gray-500 text-sm pb-8">
            Shop $50 product and get free delivery anywhere
          </p>
          <Link href="/products">
            <button className="bg-[#3BB77E] text-white p-2 w-24 text-xs rounded-sm shadow-sm">
              Shop Now
            </button>
          </Link>
        </div>
        <Image width={120} height={100} src="/images/person.png" alt="person" />
      </div>
      <div className="flex items-center justify-evenly w-full lg:w-1/2  p-4 bg-[#d2efe1] bg-[url(/images/fruit-overlay.svg)] bg-cover bg-blend-color-burn">
        <div>
          {" "}
          <p className="bg-[#3BB77E] text-xs text-white w-20 text-center p-[3px]">
            20% off
          </p>
          <h2 className="font-medium text-xl py-2">Fresh Produce</h2>
          <p className="text-gray-500 text-sm pb-8">
            Check out our collection of fresh produce
          </p>
          <Link href="/products/Produce">
            <button className="bg-[#3BB77E] text-white p-2 w-24 text-xs rounded-sm shadow-sm">
              Shop Now
            </button>
          </Link>
        </div>
        <Image width={100} height={100} src="/images/fruit.svg" alt="person" />
      </div>
    </div>
  );
}

