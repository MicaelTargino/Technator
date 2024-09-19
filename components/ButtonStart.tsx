"use client"

import axios from 'axios';
// import {setCookie } from 'nookies'
import { useRouter } from 'next/navigation'

export const ButtonStart = () => {
    const router = useRouter()

    const API_URL = process.env.API_URL;

    const startGame = async () => {
        const startGameEndpoint = `${API_URL}/api/startgame`;
        const res = await axios.post(startGameEndpoint);
        const { token } = await res.data;

        // setCookie(null, 'technator_session', data.token, {
        //     maxAge: 24 * 60 * 60
        // })

        router.push('/playing/' + token)
    }

    return (
        <button onClick={startGame} className="pushable">
            <span className="shadow"></span>
            <span className="edge"></span>
            <span className="front">
                Start Game
            </span>
        </button>
    )
}
