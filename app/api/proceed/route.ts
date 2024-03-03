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

    const questions = await prisma.facts.findMany({
        where: {
            type: 'general'
        }
    })

    console.log(questions)

    const randIdx =  Math.ceil(Math.random() * questions.length - 1)
    const question = questions[randIdx]

    console.log(randIdx)

    return NextResponse.json({core: {
        ended: false,
        status: 200
        },
        question: question.description, 
        options: [
            {"name": "Yes", value: true},
            {"name": "No", value: false}
        ],
        character: "",
        description: ""
    })

}