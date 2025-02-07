import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { carId, pickupDate, dropoffDate } = await req.json();

  const rental = await db.rentalForm.create({
    data: {
      userId: session.user.id,
      carId,
      pickupDate: new Date(pickupDate),
      dropoffDate: new Date(dropoffDate),
    },
  });

  return NextResponse.json(rental);
}