import { useQuizContext } from "../../../../context/quiz-context";





export default function AnswerNumber(){

    const {data, questionNumber} = useQuizContext();

    const option = data![questionNumber].answers[0];

    return (
        
        <p className="text-sm">Antwort: </p>
       
    )

}