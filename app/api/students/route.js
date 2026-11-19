import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// export const runtime = "nodejs";

export async function POST() {
  const student = await prisma.student.create({
    data: { name: "Aman", age: 20 },
  });
  return NextResponse.json(student);
}

export async function GET() {
  const students = await prisma.student.findMany();
  return NextResponse.json(students);
}