import { useQuizContext } from "../../context/quiz-context";
import { useEvaluate } from "./hooks/useEvaluate";
import useHandleText from "./hooks/useHandleText";

export default function QuizBottom(){

    const {isSubmitted, dispatch, questionNumber, data, scoredArray} = useQuizContext();


    const {evaluate, getGrade} = useEvaluate();

    const {switchQuestionText} = useHandleText();

    const type = data![questionNumber].type;

    const score = scoredArray.reduce((acc, cum) => acc + cum.score, 0);

    async function resetQuiz(){
      dispatch({type: "RESET_QUIZ"})
      dispatch({type: "CHANGE_QUIZ_BOOLEAN"})

    }


    function handleIncrement(){
      if(type === "text"){
        switchQuestionText();
      } else {
        evaluate();
      }
        dispatch({type: "INCREMENT_QUESTIONNUMBER"});
      }
  
      function handleDecrement(){
        if(type === "text"){
          switchQuestionText();
        } else {
          evaluate();
        }
        dispatch({type: "DECREMENT_QUESTIONNUMBER"})
      }
  
      function handleSubmitQuiz(){
        if(type === "text"){
          switchQuestionText();
        } else {
          evaluate();
        }
        dispatch({type: "SUBMIT_QUIZ"});
      }
  
      const endOfQuiz = questionNumber === data!.length - 1;
  
      const startOfQuiz = questionNumber === 0;
  
      const displayBeendenButton = isSubmitted ? "hidden pointer-events-none" : (endOfQuiz ? "flex" : "hidden pointer-events-none")
  
      const displayGrade = isSubmitted ? "block" : "hidden"
  
      const percentageGrade = getGrade();


    return (
        <div className="flex flex-col items-center w-full gap-y-8 justify-self-center pb-8 mt-8">
            <div className="flex gap-x-4 justify-self-center items-center">
              <p className="mr-8">Score:{score}</p>
                <button
                  disabled={startOfQuiz}  
                  className="w-8 h-8 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-gray-dark text-gray-light hover:bg-gray-light hover:ring-1 hover:ring-gray-verydark cursor-warning hover:text-black"
                  onClick={handleDecrement}
                  >{'<'}</button>
                <button
                  disabled={endOfQuiz}
                  className="w-8 h-8 sm:w-12 sm:h-12 lg:w-14 lg:h-14  rounded-full bg-gray-dark text-gray-light hover:bg-gray-light hover:ring-1 hover:ring-gray-verydark cursor-warning hover:text-black"
                  onClick={handleIncrement}
                  >{'>'}</button>
            </div>
            <div className="flex w-[80%] justify-around items-center mt-8">
              <div className={`${displayGrade} flex gap-x-20 items-center`}>
                <p className={`${displayGrade} text-[1.5rem] text-gray-verydark font-semibold`}>Ergebnis: {percentageGrade}</p>
                <button 
                  className={`${displayGrade} text-[1.5rem] rounded-full px-5 py-3 bg-gray-dark text-gray-light hover:bg-gray-light hover:text-gray-verydark hover:border-[2px] hover:border-gray-verydark`}
                  onClick={resetQuiz}
                  >Neustarten</button>
              </div>
              <button
                onClick={handleSubmitQuiz}
                className={`${displayBeendenButton} px-5 py-4 rounded-full bg-rose-500 hover:bg-rose-400 text-gray-light hover:text-gray-dark`}
              >Beenden
              </button>
            </div> 
        </div>
    )
}