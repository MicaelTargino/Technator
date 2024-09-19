import { NextResponse } from 'next/server'; // Using NextResponse for response handling
import { headers } from 'next/headers'; // Using headers() for headers handling
import { PrismaClient, Prisma } from '@prisma/client'; // Prisma Client

const prisma = new PrismaClient();

export async function POST(req: Request) {
    let headersList = headers(); // Get headers
    let res_status = 200; // Default status

    let data;
    try {
        data = await req.json(); // Parse request body
    } catch (err) {
        data = {};
    }

    const sessionId = headersList.get('session-authorization'); // Get session ID from headers

    const sessionMatch = await prisma.session.findFirst({
        where: {
            id: sessionId || '',
            active: true,
        },
    });

    if (!sessionMatch?.active) {
        res_status = 404;
    }

    if (!(data.answer && data.fact_id)) {
        const questions = await prisma.facts.findMany({
            where: {
                type: 'general',
            },
        });

        const randIdx = Math.ceil(Math.random() * (questions.length - 1));
        const question = questions[randIdx];

        return NextResponse.json({
            core: {
                ended: false,
                status: res_status,
            },
            factId: question.id,
            question: question.description,
            options: [
                { name: 'Yes', value: true },
                { name: 'No', value: false },
            ],
            character: '',
            description: '',
        });
    }

    const response = await prisma.response.create({
        data: {
            content: Boolean(data.answer),
            fact_id: parseInt(data.fact_id),
            session_id: sessionId || '',
        },
    });

    const responses = await prisma.response.findMany({
        where: {
            session_id: sessionId || 'some random not valid session id',
        },
    });

    const factIds = responses.map((response) => {
        if (response.content) {
            return response.fact_id;
        } else return -1;
    });

    const numberOfFacts = factIds.length;

    const linkedFacts: [{ character_id: number }] = await prisma.$queryRaw`
        SELECT character_id
        FROM linkedfacts
        WHERE fact_id IN (${Prisma.join(factIds)})
        GROUP BY character_id
        HAVING COUNT(DISTINCT fact_id) = ${numberOfFacts}
    `;

    const characterIds = linkedFacts?.map((link) => link.character_id);

    const respondedFactIds = await prisma.response.findMany({
        where: {
            session_id: sessionId || 'a random not valid session id',
        },
        select: {
            fact_id: true,
        },
    });

    const factIdsFromResponses = respondedFactIds.map((response) => response.fact_id);

    const notAskedFacts = await prisma.linkedfacts.findMany({
        where: {
            character_id: {
                in: characterIds,
            },
            NOT: {
                fact_id: {
                    in: factIdsFromResponses,
                },
            },
        },
    });

    const possibleCharacters = await prisma.characters.findMany({
        where: {
            id: {
                in: characterIds,
            },
        },
    });

    if (possibleCharacters.length === 1) {
        return NextResponse.json({
            core: {
                ended: true,
                status: res_status,
            },
            character: possibleCharacters[0].name,
            description: possibleCharacters[0].details,
            id: possibleCharacters[0].id,
        });
    } else if (notAskedFacts.length > 0) {
        const randomIndex = Math.floor(Math.random() * notAskedFacts.length);
        const nextFact = await prisma.facts.findUnique({
            where: {
                id: notAskedFacts[randomIndex].fact_id,
            },
        });

        return NextResponse.json({
            core: {
                ended: false,
                status: res_status,
            },
            factId: nextFact?.id,
            question: nextFact?.description,
            options: [
                { name: 'Yes', value: true },
                { name: 'No', value: false },
            ],
            character: null,
            description: null,
        });
    } else {
        return NextResponse.json({
            core: {
                ended: true,
                status: res_status,
            },
            character: null,
            description: null,
        });
    }
}
