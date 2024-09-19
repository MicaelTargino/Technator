"use client";

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios';
import { Feedback } from './feedback';

interface QuestionProps {
    initialQuestion: string;
    initialOptions: Option[];
    initialFactId: number;
}

type Option = {
    name: string;
    value: string;
}

export const Flux = ({ initialQuestion, initialOptions, initialFactId }: QuestionProps) => {
    const { sessionId } = useParams<{ sessionId: string }>();
    const [question, setQuestion] = useState(initialQuestion);
    const [options, setOptions] = useState(initialOptions);
    const [factId, setFactId] = useState(initialFactId);
    const [ended, setEnded] = useState(false);
    const [character, setCharacter] = useState(null);
    const [description, setDescription] = useState(undefined);
    const [id, setId] = useState(undefined);

    const submitAnswer = async (value: string) => {
        try {
            const res = await axios.post('/api/proceed', {
                answer: value,
                fact_id: factId
            }, {
                headers: {
                    'session-authorization': sessionId
                }
            });

            const data = res.data;
            console.log(data)
            if (data.core.ended) {
                setEnded(true);
                setCharacter(data.character)
                setDescription(data.description)
                setId(data.id)
            }
            // Assuming the response data structure matches your initial props
            setQuestion(data.question);
            setOptions(data.options);
            setFactId(data.factId);
        } catch (error) {
            console.error("Error submitting answer:", error);
            // Handle error appropriately
        }
    };

    if (ended) {
        if(character) {
            return (
                <Feedback type="success" character={character} desc={description} id={id} /> 
            )
        } else {
            return (
                <Feedback type="failure" /> 
            )    
        }
    }

    return (
        <section className='w-full md:w-[50%] lg:w-[30%] mx-auto h-[100vh] flex flex-col items-center justify-center gap-5'>
            <h3 className='text-2xl text-white drop-shadow-md max-w-96 text-center'>Your character {question} ?</h3>

            <div className='flex flex-col items-center justify-center gap-3 w-full'>
                {options.map((option, index) => (
                    <span key={index} onClick={() => submitAnswer(option.value)} className='w-[50%] py-2 bg-slate-100 rounded-lg shadow-md text-center hover:bg-slate-200 transition-all cursor-pointer'>{option.name}</span>
                ))}
            </div>
        </section>
    );
};
