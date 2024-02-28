import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="bg-[#d2efe1] w-full flex items-center justify-between bg-[url(/images/fruit-overlay.svg)] bg-cover bg-blend-color-burn py-12">
      <div className="w-1/2 px-4 lg:px-32">
        <h1 className="text-3xl lg:text-5xl font-semibold leading-tight">
          Don&apos;t miss our daily amazing deals
        </h1>
        <p className="text-gray-500 my-4 lg:my-10">Sign up to get 20% off</p>
        <div className="flex gap-1 lg:gap-4">
          <Link href="/products">
            <button className="bg-white text-[#3BB77E] py-2 w-24 text-xs rounded-sm shadow-sm">
              Shop Now
            </button>
          </Link>
          <Link href="/sign-up">
            <button className="bg-[#3BB77E] text-white p-2 w-24 text-xs rounded-sm shadow-sm">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
      <div className="w-1/2 h-full flex  justify-end">
        <Image
          style={{ width: "80%", height: "50%" }}
          width={700}
          height={700}
          alt="hero image fruit"
          src="/images/hero-fruit.png"
        />
      </div>
    </div>
  );
}
