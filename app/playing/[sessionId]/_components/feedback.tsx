import { CheckCircle, XCircleIcon } from "lucide-react";

interface feedBackProps {
    type: "success" | "failure",
    character?: string;
    desc?: string;
    id?: number;
}

function returnToLobby() {
    location.href = "/"
}

export const Feedback = ({type, character, desc, id}: feedBackProps) => {
    if (type === "success") {
        return (
            <main className="w-full h-[100vh] flex items-center flex-col gap-5 justify-center">
                <h2 className="text-slate-200 drop-shadow-lg w-full flex flex-col items-center justify-center gap-4">
                    <b className="font-bolder text-4xl flex flex-row items-center justify-center w-full gap-2">So easy! <CheckCircle className="text-green-500" size={48} /></b>
                    <span>Your character is<b className="font-bolder text-2xl"> {character}</b></span>
                    <span className="text-2xl flex  items-center justify-center gap-2 w-[80%] ">
                        <img src={`/img/${id}.jpeg`}></img>
                        <p className="w-[35%] text-sm">{desc}</p>
                    </span>
                </h2>
                <div>
                    <button onClick={() => returnToLobby()} className="pushable">
                        <span className="shadow"></span>
                        <span className="edge"></span>
                        <span className="front">
                           Return to Lobby
                        </span>
                    </button>
                    {/* <button onClick={() => returnToLobby()} className="px-4 py-2 border border-green-500 rounded-md shadow-md text-slate-200 bg-green-500 hover:scale-95 transition-all">Play Again</button> */}
                </div>
            </main>
        )
    } else {
        return (
                <main className="w-full h-[100vh] flex items-center flex-col gap-5 justify-center">
                    <h2 className="text-slate-200 drop-shadow-lg flex flex-col items-center justify-center gap-4">
                        <b className="font-bolder text-4xl flex flex-row items-center justify-center gap-2">Sorry! <XCircleIcon className="text-red-500" size={48} /></b>
                        <span className="text-2xl flex gap-2">
                            <span>I wasn&#39;t able to guess your character.</span>
                        </span>
                    </h2>
                    <div>
                        <button onClick={() => returnToLobby()} className="pushable">
                            <span className="shadow"></span>
                            <span className="edge"></span>
                            <span className="front">
                               Return to Lobby
                            </span>
                        </button>
                        {/* <button onClick={() => returnToLobby()} className="px-4 py-2 border border-green-500 rounded-md shadow-md text-slate-200 bg-green-500 hover:scale-95 transition-all">Play Again</button> */}
                    </div>
                </main>
        )
    }
}