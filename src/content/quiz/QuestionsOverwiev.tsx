import { useQuizContext } from "../../context/quiz-context";
import QuestionOverviewElement from "./QuestionOverviewElement";



export default function QuestionOverwiev(){

    const {data, scoredArray} = useQuizContext();


    return(

        <ul className=" bg-gray-50 grid grid-cols-4 grid-rows-5 sm:h-[25rem] sm:w-[25rem] 
            self-start justify-self-start ml-[5%] rounded-lg border-[1px] border-gray-verydark">
                
            {data!.map((question, index) => {
                const questionSeen = scoredArray.reduce((acc, cum) => {
                    if(cum.key === index){
                        acc = true;
                    }
                    return acc;
                }, false)
                return (
                    <QuestionOverviewElement 
                        key={index} 
                        questionSeen={questionSeen} 
                        index={index}
                    />
                )    
            })}
        </ul>
    ) 
}