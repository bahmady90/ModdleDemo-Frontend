import { useParams } from "react-router-dom";
import { getQuizTitle } from "./functions";


export default function SubHeader(){

    const {lf} = useParams();

    return (
        <header className="flex gap-x-2 items-center justify-self-center mb-6 mt-4">
            <h2 className="text-[1.8rem] text-gray-verydark font-semibold">LF-{lf}:</h2>
            <p className="text-[1.5rem] italic underline text-gray-700">{getQuizTitle(Number(lf))}</p>
        </header>
    )
}