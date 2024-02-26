import { prisma } from "@/prisma";
import { NextResponse } from "next/server";
import { hash } from "bcrypt";

export async function POST(req: Request) {
  try {
    console.log("success");
    const body = await req.json();
    const { email, password, firstName, lastName } = body;

    //check if email exists
    const existsingUserByEmail = await prisma.user.findUnique({
      where: { email: email },
    });

    if (existsingUserByEmail) {
      return NextResponse.json(
        {
          user: null,
          message: "User with this email already exists",
        },
        { status: 409 }
      );
    }

    const hashedPassword = await hash(password, 10);
    const newUser = await prisma.user.create({
      data: {
        email,
        firstName,
        lastName,
        password: hashedPassword,
      },
    });

    const { password: newUserPassword, ...rest } = newUser;

    return NextResponse.json(
      {
        user: rest,
        message: "User created successfully",
      },
      { status: 201 }
    );
  } catch (e) {
    console.log(e)
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    );
  }
}
