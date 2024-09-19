import axios from 'axios';
import { AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import { Flux } from './_components/flux';

export default async function PlayingPage({params}: any) {
    const {sessionId} = params;

    const res = await axios.post('/api/proceed', {}, {
        headers: {
            'session-authorization': sessionId
        }
    });
    
    let data = await res.data

    if (data.core.status != 200) {
        return (
            <div className='w-full h-[100vh] flex flex-col items-center justify-center'>
                <h2 className='text-4xl text-white flex items-center'>
                    <AlertTriangle className='text-red-500 mr-2' size={45} />
                    Ops! Invalid session</h2>

                <Link href='/' className='p-2 bg-white rounded-lg mt-5 shadow-lg hover:bg-slate-100 transition-colors'>Back to Lobby</Link>
            </div>
        )
    }

    if (!data.core.ended) {
        return (
            <Flux initialQuestion={data.question} initialFactId={data.factId} initialOptions={data.options} />
        )
    } else {
        return (
            <h1>Your game has ended.</h1>
        )
    }
}