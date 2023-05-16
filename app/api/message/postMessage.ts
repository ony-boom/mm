import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/prisma/client";
import { Message } from "@prisma/client";

export async function POST(req: NextRequest) {
  const { from, to, content } = (await req.json()) as Message;

  const createdMessage = await prisma.message.create({
    data: {
      content,
      to,
      from,
    },
  });

  return NextResponse.json(createdMessage);
}
