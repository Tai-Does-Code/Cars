import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { carId: string } }) {
  const car = await db.carModel.findUnique({
    where: { id: params.carId },
  });

  if (!car) return NextResponse.json({ error: "Car not found" }, { status: 404 });

  return NextResponse.json(car);
}
