import { prisma } from "@/prisma";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { id, name, price, image, quantity, user_id, token } = body;

    // check if product is in the cart
    const existingItem = await prisma.cartItem.findUnique({
      where: { id: id },
    });

    if (existingItem) {
      const updateItem = await prisma.cartItem.update({
        where: { id: id },
        data: {
          quantity: existingItem.quantity + quantity,
        },
      });
      return NextResponse.json("cart updated");
    } else {
      const newCartItem = {
        id: id,
        name: name,
        price: price,
        image: image,
        quantity: quantity,
        userId: user_id,
      };

      const createCartItem = await prisma.cartItem.create({
        data: newCartItem,
      });

      return NextResponse.json(createCartItem);
    }
  } catch (e) {
    console.log(e);
    return NextResponse.json({ e });
  }
}
