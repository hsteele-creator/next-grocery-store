import { prisma } from "@/prisma";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { id, name, price, image, quantity, user_id, token } = body;
    console.log("hello");

    // check if product is in the cart
    const allCartItems = await prisma.cartItem.findMany();

    const itemInCart = allCartItems.filter(
      (item) => item.id === id && item.userId === user_id
    );

    // if the item is in that users cart update the quantity
    if (itemInCart.length > 0) {
      const updateItem = await prisma.cartItem.updateMany({
        data: { quantity: itemInCart[0].quantity + quantity },
        where: { id: itemInCart[0].id, userId: itemInCart[0].userId },
      });
      return NextResponse.json("cart updated");
    }
    // else if the item is not in that users cart
    else {
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
