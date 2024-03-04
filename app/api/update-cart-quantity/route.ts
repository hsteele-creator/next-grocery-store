import { prisma } from "@/prisma";
import { NextResponse } from "next/server";

export async function PATCH(req: Request) {
  try {
    const body = await req.json();
    const { cartItemId, method } = body;

    const productToUpdate = await prisma.cartItem.findUnique({
      where: { cartItemId: cartItemId },
    });

    if (productToUpdate) {
      if (method === "add") {
        const updateProduct = await prisma.cartItem.update({
          where: { cartItemId: cartItemId},
          data: { quantity: productToUpdate.quantity + 1 },
        });
      } else {
        const updateProduct = await prisma.cartItem.update({
          where: { cartItemId: cartItemId },
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
