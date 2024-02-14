import { prisma } from "@/prisma";
import { NextResponse } from "next/server";
import { compare } from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { email, password } = body;

        // check if user exists
        const existingUser = await prisma.user.findUnique({
            where: { email: email },
        });

        if (!existingUser) {
            return NextResponse.json({ error: "The user does not exist" });
        }

        // check if password is correct
        const passwordMatch = await compare(password, existingUser.password);
        if (!passwordMatch) {
            return NextResponse.json({ error: "The password is incorrect" });
        }

        const token = jwt.sign(email, "secret");

        return NextResponse.json({
            token: token,
            email: existingUser.email,
            id: existingUser.id,
        });
    } catch (error) {
        return NextResponse.json({error})
  }
}
