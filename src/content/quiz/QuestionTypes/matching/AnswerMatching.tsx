import { ReactNode } from "react";
import { useQuizContext } from "../../../../context/quiz-context";
import InputBoxMatching from "./InputBoxMatching";
import { useEvaluate } from "../../hooks/useEvaluate";


type AnswerMcProps = {
    children: ReactNode;
    index: number;
  };

export default function AnswerMatching({ children, index}: AnswerMcProps){

    const { data, questionNumber, isSubmitted} = useQuizContext();

    const {getIsRightAnswerMatching} = useEvaluate();

    const options = data![questionNumber].answers

    const rightAnswer = getIsRightAnswerMatching(index);
    
    const answerStyle = rightAnswer
      ? "bg-gradient-to-r from-green-400/70 to-emerald-300/70"
      : "bg-gradient-to-r from-red-400/70 to-rose-300/70";


    const buttonStyling = isSubmitted ? answerStyle : "bg-gradient-to-r from-slate-100/70 to-gray-200/70"

    const optionMatchingStyling = options.length > 6 ? "h-[2.5rem] sm:h-[3rem]" : "h-[3.5rem] sm:h-[4rem]"

  	const paragraphStyle = children?.length >= 60 ? "text-[0.4rem] sm:text-[0.6rem] lg:text-[0.7rem]" : "text-[0.5rem] sm:text-[0.7rem] lg:text-[0.8rem]"

  return (
    <div className={`flex items-center  gap-x-2 sm:gap-x-6 w-full` }>
      <button className={`${buttonStyling} rounded-full w-[90%]  border-gray-700 border-[1px] self-center px-2 py-3 ${optionMatchingStyling}`}>
        <p className={`${paragraphStyle} max-w-[90%]`}>{children}</p>
      </button>
      <InputBoxMatching
        index={index}
      /> 
    </div>
    )
    
}