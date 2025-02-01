import { NextResponse } from "next/server";
import { db } from "../../../lib/db"; 

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {email, password} = body;

    // check if email exist
    const existingEmail = await db.user.findUnique({
      where: {email: email}
    });

    if(existingEmail){
      return NextResponse.json({user: null, message: "User exist"}, {status: 409})
    }

    const newUser = await db.user.create({
      data: {
        email,
        password,
      },
    })

    return NextResponse.json({user: newUser, message: "User Created"}, {status: 201});
    
  } catch (error) {
    
  }
}

/*
import { NextResponse } from "next/server";
import { prisma } from "../../../lib/db"; 

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();
    const body = req.json();

    // Check if the user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }

    // Store user in the database
    const newUser = await prisma.user.create({
      data: { email, password },
    });

    return NextResponse.json({ message: "User created successfully", user: newUser }, { status: 201 });
  } catch (error) {
    console.error("Sign-up error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

*/