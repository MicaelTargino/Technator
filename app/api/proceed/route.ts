import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server'

import { headers } from 'next/headers'

import { PrismaClient } from '@prisma/client'


type ResponseData = {
    message: string
}

export async function POST(
    req: Request,
    res: NextApiResponse<ResponseData>
    ) {
    let headersList = headers()
    let res_status = 200

    let data;
    try {
        data = await req.json()
    } catch (err) {
        data = {}
    }
    
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

    if (!(data.answer && data.fact_id)) {
            const questions = await prisma.facts.findMany({
                where: {
                    type: 'general'
                }
            })
        
            const randIdx =  Math.ceil(Math.random() * questions.length - 1)
            const question = questions[randIdx]
        
        
            return NextResponse.json({
                core: {
                ended: false,
                status: res_status
                },
                factId: question.id, 
                question: question.description, 
                options: [
                    {"name": "Yes", value: true},
                    {"name": "No", value: false}
                ],
                character: "",
                description: ""
            })
    }
    
    const response = await prisma.response.create({
        data: {
            content: Boolean(data.answer),
            fact_id: parseInt(data.fact_id),
            session_id: sessionId || ''
        }
    })

    const responses = await prisma.response.findMany({
        where: {
            session_id: sessionId || 'some random not valid session id'
        }
    })

    console.log(responses)

    const factIds = responses.map(response => {
        if (response.content) {
            return response.fact_id
        } else return -1
    })

    console.log(factIds)

    const linkedFacts = await prisma.linkedfacts.findMany({
        where: {
            fact_id: {
                in: factIds
            }
        }
    });

    const characterIds = linkedFacts.map(link => link.character_id);

    console.log(characterIds);

    const respondedFactIds = await prisma.response.findMany({
        where: {
            session_id: sessionId || 'a random not valid session id',
        },
        select: {
            fact_id: true,
        },
    });
    
    // Extract fact_ids from the responses
    const factIdsFromResponses = respondedFactIds.map(response => response.fact_id);
    
    // Now, query for linkedfacts excluding those fact_ids
    const notAskedFacts = await prisma.linkedfacts.findMany({
        where: {
            character_id: {
                in: characterIds,
            },
            NOT: {
                fact_id: {
                    in: factIdsFromResponses, // Exclude facts with responses in the current session
                },
            },
        }
    });
    
    const possibleCharacters = await prisma.characters.findMany({
        where: {
            id: {
                in: characterIds
            }
        }
    });

    console.log(possibleCharacters);

    if (possibleCharacters.length === 1) {
        return NextResponse.json({
            core: {
            ended: true,
            status: res_status
            },
            character: possibleCharacters[0].name,
            description: ""
        })
    } 
    else if (notAskedFacts.length > 0) {
        const randomIndex = Math.floor(Math.random() * notAskedFacts.length);
        const nextFact = await prisma.facts.findUnique({
            where: {
                id: notAskedFacts[randomIndex].fact_id
            } 
        });

        return NextResponse.json({
            core: {
            ended: false,
            status: res_status
            },
            factId: nextFact?.id, 
            question: nextFact?.description, 
            options: [
                {"name": "Yes", value: true},
                {"name": "No", value: false}
            ],
            character: null,
            description: null
        })
    }  
    else {
        return NextResponse.json({
            core: {
            ended: true,
            status: res_status
            },
            character: null,
            description: null
        })
    }



}