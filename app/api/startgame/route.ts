import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server'

import { PrismaClient, Prisma } from '@prisma/client'


type ResponseData = {
    message: string
}

export async function POST(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
    ) {
        
    const prisma = new PrismaClient()

    const session = await prisma.session.create({
        data: {}
    })

    return NextResponse.json({token: session.id})
}