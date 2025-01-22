import { useParams } from "react-router-dom";
import { getQuizTitle } from "./functions";


export default function SubHeader(){

    const {lf} = useParams();

    return (
        <header className=" grid grid-rows-2 sm:grid-rows-0 sm:flex justify-self-center sm:gap-x-4">
            <h2 className="text-[1rem] sm:text-[1.5rem] lg:text-[1.8rem] text-gray-verydark font-semibold justify-self-center">LF-{lf}:</h2>
            <p className="text-[0.8rem] sm:text-[1.2rem] lg:text-[1.5rem] italic underline text-gray-700 justify-self-center">{getQuizTitle(Number(lf))}</p>
        </header>
    )
}