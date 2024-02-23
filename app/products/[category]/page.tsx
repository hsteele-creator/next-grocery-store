import BreadCrumbMenu from "@/app/Components/BreadCrumbMenu";
import Product from "@/app/Components/Product";
import { prisma } from "@/prisma";
import { Suspense } from "react";

type CategoryProductProps = {
  params: { category: string };
};

export default async function CategoryProducts({
  params,
}: CategoryProductProps) {
  const products = await prisma.category.findMany({
    where: {
      name: params.category,
    },
    include: {
      products: true,
    },
  });
  return (
      <div>
        <div className="flex justify-between items-center p-4">
          <h1 className="text-center text-4xl font-medium pb-6">
            {params.category}
          </h1>
          <BreadCrumbMenu />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
          {products[0].products.map((p) => {
            return (
              <Product
                key={p.name}
                id={p.id}
                name={p.name}
                price={p.price}
                image={p.image}
                description={p.description}
              />
            );
          })}
        </div>
      </div>
  );
}
