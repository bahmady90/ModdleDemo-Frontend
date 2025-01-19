import { useQuizContext } from "../../../../context/quiz-context"






export default function AnswerNumber(){

    const {data, questionNumber} = useQuizContext();
    // @ts-expect-error: TypeScript is complaining about type mismatch, but this is intended
    const answer = data![questionNumber].answers.answer
    
    return (
        
        <p className="text-sm">{answer}</p>
       
    )

}