import axios from 'axios';
import { AlertTriangle } from 'lucide-react';
import Link from 'next/link';

export default async function PlayingPage({params}: any) {
    const {sessionId} = params;

    const res = await axios.post('http://localhost:3000/api/proceed', { 
        'init': true 
    }, {
        headers: {
            'session-authorization': sessionId
        }
    });
    
    const data = await res.data

    console.log(data)

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

    // const proceed =  async () => {
    //     // request api to get the next question
    //     const res = await axios.post('http://localhost:3000/api/proceed', {
    //         headers: {
    //             'Authorization': sessionId
    //         },
    //         data: {
    //             'init': true
    //         }
    //     })

    //     // if ended, return the answer

    //     // if not ended, show a question 
    // }

    return (
        <section>
            Home {sessionId}
        </section>
    )
}