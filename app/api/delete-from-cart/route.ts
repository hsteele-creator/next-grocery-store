import { prisma } from "@/prisma";
import { type NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest) {
  try {
    const id = Number(req.nextUrl.searchParams.get("id"));
    
      const deleteCartItem = await prisma.cartItem.delete({
        where : {id : id}
    })
      
    return NextResponse.json("success");
  } catch (e) {
    return NextResponse.json({ e });
  }
}
