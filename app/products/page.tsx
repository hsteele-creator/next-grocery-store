import { prisma } from "@/prisma";
import Product from "../Components/Product";
import BreadCrumbMenu from "../Components/BreadCrumbMenu";
import Nav from "../Components/form/Nav";

export default async function Products() {
  const products = await prisma.product.findMany();

  return (
    <div>
      <Nav />
      <div className="flex flex-col lg:flex justify-between items-center p-4">
        <h1 className="text-center text-4xl font-medium pb-6">
          All Products
        </h1>
        <BreadCrumbMenu />
      </div>

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
