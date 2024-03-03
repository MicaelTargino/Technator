import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server'

import { headers } from 'next/headers'

import { PrismaClient, Prisma } from '@prisma/client'


type ResponseData = {
    message: string
}

export async function POST(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
    ) {
    let headersList = headers()
    
    const sessionId = headersList.get('session-authorization');

    console.log(sessionId)
    
    const prisma = new PrismaClient()

    const sessionMatch = await prisma.session.findFirst({
        where:  {
            id: sessionId || '',
            active: true
        }
    })

    if (!sessionMatch?.active) {
        return NextResponse.json({status: 401})
    }

    

    return NextResponse.json({core: {
        ended: false,
        status: 200
        },
        question: "", 
        options: {
            "Yes": true, 
            "No": false
        },
        character: "",
        description: ""
    })
    
}