import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server'
 
type ResponseData = {
  message: string
}
 
export async function POST(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
    return NextResponse.json({message: 'Hello World'})
}