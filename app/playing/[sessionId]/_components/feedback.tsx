import { CheckCircle, XCircleIcon } from "lucide-react";

interface feedBackProps {
    type: "success" | "failure",
    character?: string;
}

export const Feedback = ({type, character}: feedBackProps) => {
    if (type === "success") {
        return (
            <main className="w-full h-[100vh] flex items-center justify-center">
                <h2 className="text-slate-200 drop-shadow-lg flex flex-col items-center justify-center gap-4">
                    <b className="font-bolder text-4xl flex flex-row items-center justify-center gap-2">So easy! <CheckCircle className="text-green-500" size={48} /></b>
                    <span className="text-2xl flex gap-2">
                        <span>Your character is</span>
                        <b className="font-bolder">{character}</b>.
                    </span>
                </h2>
            </main>
        )
    } else {
        return (
                <main className="w-full h-[100vh] flex items-center justify-center">
                    <h2 className="text-slate-200 drop-shadow-lg flex flex-col items-center justify-center gap-4">
                        <b className="font-bolder text-4xl flex flex-row items-center justify-center gap-2">Sorry! <XCircleIcon className="text-red-500" size={48} /></b>
                        <span className="text-2xl flex gap-2">
                            <span>I wasn't able to guess your character.</span>
                        </span>
                    </h2>
                </main>
        )
    }
}