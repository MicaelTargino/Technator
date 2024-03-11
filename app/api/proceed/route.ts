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
    let res_status = 200
    
    const sessionId = headersList.get('session-authorization');
    
    const prisma = new PrismaClient()

    const sessionMatch = await prisma.session.findFirst({
        where:  {
            id: sessionId || '',
            active: true
        }
    })

    if (!sessionMatch?.active) {
        res_status = 404   
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

    return NextResponse.json({
        core: {
        ended: false,
        status: res_status
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