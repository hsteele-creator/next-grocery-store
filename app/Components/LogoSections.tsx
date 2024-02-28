import Image from "next/image";

export default function LogoSection() {
    return (
      <div className="flex py-4 gap-2 items-center hover:cursor-pointer">
        <Image src="/images/grocery.png" alt="logo" width={30} height={0} />
        <div>
          <h3 className="text-[#3BB77E] text-sm lg:text-normal lg:font-bold mb-[-2px]">
            Harry&apos;s Fresh
          </h3>
          <p className="text-gray-500 font-light text-sm">Grocery</p>
        </div>
      </div>
    );
}