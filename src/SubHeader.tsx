import { useParams } from "react-router-dom";
import { getQuizTitle } from "./functions";


export default function SubHeader(){

    const {lf} = useParams();

    return (
        <header className=" flex-col sm:flex sm:gap-x-2 items-center  justify-center mb-3 sm:mb-6 mt-1 sm:mt-3 gap-y-2 sm:gap-y-2">
            <h2 className="text-[1rem] sm:text-[1.5rem] lg:text-[1.8rem] text-gray-verydark font-semibold">LF-{lf}:</h2>
            <p className="text-[0.8rem] sm:text-[1.2rem] lg:text-[1.5rem] italic underline text-gray-700">{getQuizTitle(Number(lf))}</p>
        </header>
    )
}