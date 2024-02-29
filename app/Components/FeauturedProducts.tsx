import { prisma } from "@/prisma";
import Product from "./Product";

export default async function FeaturedProducts() {
  const products = await prisma.product.findMany({
    take: 12,
  });
  return (
    <div>
      <h1 className="text-center lg:text-left text-2xl font-medium">
        Featured Products
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
        {products.map((p) => {
          return (
            <Product
              key={p.name}
              id={p.id}
              name={p.name}
              image={p.image}
              price={p.price}
            />
          );
        })}
      </div>
    </div>
  );
}
