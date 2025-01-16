import RowMc from "./QuestionTypes/mc/RowMc"
import RowHeader from "./RowHeader";
import RowMatching from "./QuestionTypes/matching/RowMatching"
import RowNumber from "./QuestionTypes/number/RowNumber";
import QuestionOverwiev from "./QuestionsOverwiev";

import {Row, useQuizContext } from "../../context/quiz-context"
import { getQuizTitle } from "../../functions";
import QuizBottom from "./QuizBottom";
import RowText from "./QuestionTypes/text/RowText";



function Quiz() {
  
  const {loading, data, questionNumber, scoredArray} = useQuizContext();


  if(loading === true){
    return <h1>Loading Data...</h1>
  }
  if(loading === false) {

    console.log(scoredArray);


    const row : Row = data![questionNumber];
    

    return (
      <main className=" min-h-svh">
        <header className="flex gap-x-2 items-center justify-self-center mb-6 mt-4">
          <h2 className="text-[2rem] text-gray-verydark font-semibold">LF-01:</h2>
          <p className="text-[1.5rem] italic underline text-gray-700">{getQuizTitle(1)}</p>
        </header>
        <RowHeader/>
        <div className="w-[95%] sm:grid sm:grid-cols-[1fr_1fr] h-fit mt-[3%] ml-[5%] gap-x-[5%] mb-2">
          <div className="flex justify-end items-center min-h-full"> 
              {row.type === "mc" && 
                <RowMc/>
                } 
              {row.type === "matching" &&
                <RowMatching/>
                }
              {row.type === "number" && 
                <RowNumber/>
                }
              {row.type === "text" && 
                <RowText/>
              }
          </div>
          <QuestionOverwiev/> 
        </div>
        <QuizBottom/> 
    </main>
    )
  }
  
}

export default Quiz
