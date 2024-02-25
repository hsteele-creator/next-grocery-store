import { prisma } from "@/prisma";
import { NextResponse } from "next/server";
import { type NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {

    // get id from url params
    const id = Number(req.nextUrl.searchParams.get("id"));

    // get cart items that belong to the user
    const cartItems = await prisma.cartItem.findMany({
      where: { userId: id },
      orderBy: {
        id : 'asc'
      }
    });

    return NextResponse.json(cartItems);
  } catch (e) {
    return NextResponse.json({ e });
  }
}
