import { useQuizContext } from "../../context/quiz-context";
import QuestionOverviewElement from "./QuestionOverviewElement";



export default function QuestionOverwiev(){

    const {data, scoredArray} = useQuizContext();


    return(

        <ul className=" bg-gray-50 dark:bg-dark-dark-grey grid grid-cols-4 grid-rows-5 h-[90%] sm:h-[100%] w-[70%]  sm:w-[80%] min-h-[18rem] sm:min-h-[20rem] lg:min-h-[25rem]
            self-start justify-self-center sm:justify-self-start sm:ml-[5%] sm:mr-0 rounded-lg border-[1px] border-gray-verydark dark:border-gray-light p-1 sm:p-2">
                
            {data!.map((question, index) => {
                console.log(question)
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