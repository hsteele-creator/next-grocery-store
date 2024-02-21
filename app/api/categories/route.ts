import { prisma } from "@/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const categories = await prisma.category.findMany({
      include: {
        products: true,
      },
    });
    return NextResponse.json({ categories });
  } catch (error) {
      NextResponse.json({error})
  }
}
