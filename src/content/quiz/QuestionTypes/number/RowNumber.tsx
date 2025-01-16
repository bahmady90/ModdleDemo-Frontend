import AnswerNumber from "./AnswerNumber";
import InputBoxNumber from "./InputBoxNumber";


export default function RowNumber(){


    return (
        <div className="flex gap-x-2 justify-center items-center w-[80%]">
            <AnswerNumber/>
            <InputBoxNumber/>
        </div>
        
    )
}