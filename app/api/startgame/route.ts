import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

export async function POST(req: Request) {
  const prisma = new PrismaClient();

  const session = await prisma.session.create({
    data: {},
  });

  return NextResponse.json({ token: session.id });
}
