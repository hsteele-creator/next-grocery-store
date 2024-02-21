import { prisma } from "@/prisma";
import Category from "./Category";
import { Suspense } from "react";

export default async function Categories() {
  const categories = await prisma.category.findMany({
    include: {
      products: true,
    },
  });
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="py-10">
        <h1 className="text-center lg:text-left text-2xl font-medium pb-6">
          Explore Categories
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {categories.map((c) => {
            return (
              <Category
                key={c.id}
                name={c.name}
                image={c.image}
                numProducts={c.products.length}
                backgroundColor={c.color}
              />
            );
          })}
        </div>
      </div>
    </Suspense>
  );
}
