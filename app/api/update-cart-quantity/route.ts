import { prisma } from "@/prisma";
import { NextResponse } from "next/server";

export async function PATCH(req: Request) {
  try {
    const body = await req.json();
    const { id, method } = body;
    console.log(id, method);

    const productToUpdate = await prisma.cartItem.findUnique({
      where: { id: id },
    });

    if (productToUpdate) {
      if (method === "add") {
        const updateProduct = await prisma.cartItem.update({
          where: { id: id },
          data: { quantity: productToUpdate.quantity + 1 },
        });
      } else {
        const updateProduct = await prisma.cartItem.update({
          where: { id: id },
          data: { quantity: productToUpdate.quantity - 1 },
        });
      }
    } else {
      return NextResponse.json("product doesent exist");
    }

    return NextResponse.json("success");
  } catch (e) {
    return NextResponse.json({ e });
  }
}
