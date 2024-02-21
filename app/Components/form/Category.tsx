import Image from "next/image";

type CategoryProps = {
  name: string;
  image: string;
  numProducts: number;
  backgroundColor: string;
};

export default function Category({
  name,
  image,
  numProducts,
  backgroundColor,
}: CategoryProps) {
  return (
    <div
      style={{ backgroundColor: backgroundColor }}
      className="p-6 rounded-sm cursor-pointer hover:shadow-md mx-2 my-2"
    >
      <div>
        <Image
          style={{ mixBlendMode: "multiply", margin: "0 auto" }}
          width={100}
          height={100}
          alt="category image"
          src={image}
        />
      </div>
      <div>
        <p className="text-center">{name}</p>
        <p className="text-center text-xs text-gray-500">{numProducts} items</p>
      </div>
    </div>
  );
}
