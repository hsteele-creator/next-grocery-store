import { prisma } from "@/prisma";
import { type NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest) {
  try {
    const cartItemId = Number(req.nextUrl.searchParams.get("cartItemId"));

    console.log(cartItemId);

    const deleteCartItem = await prisma.cartItem.delete({
      where: { cartItemId: cartItemId },
    });

    return NextResponse.json("success");
  } catch (e) {
    return NextResponse.json({ e });
  }
}
