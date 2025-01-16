import Question from "./Question";
import SelectType from "./SelectType";
import SelectQuestionType from "./SelectQuestionType";
import Answers from "./Answers";
import RightAnswers from "./RightAnswers";
import DivideLine from "./DivideLine";

import { Toaster } from 'react-hot-toast';
import { useForm } from "./hooks/useForm";
import { useFormContext } from "../../context/form-context";




export const basicInputStyles = "text-[0.7rem] px-2 py-2 rounded-lg outline-none border-[1px]";

export const basicButtonStyles = "max-w-[11rem] px-3 py-2 rounded-full bg-gray-dark text-gray-light hover:bg-gray-light hover:ring-1 hover:ring-gray-verydark cursor-warning hover:text-black"

export default function FormQuestionPage(){


    const {id} = useFormContext()

    /* console.log(errors) */


    const {handleSubmit, handleUpdate,  } = useForm();


    return (
        <div className="w-full min-h-full flex flex-col bg-gray-50 pb-10">
            <Toaster position="top-center"/>
            <form 
                className="w-full h-full flex flex-col items-center gap-y-[3rem] font-sans"
                onSubmit={id ? handleUpdate : handleSubmit}
            >
                <div className="w-[70%] grid grid-cols-2">
                    <SelectType
                        label="Fragentyp"
                    />
                    <SelectQuestionType
                        label="Fragentyp (die Frage selbst)"
                    />
                </div>
                <DivideLine/>
                <Question />
                <DivideLine/>
                <Answers />
                <DivideLine/>
                <RightAnswers/>   
            </form>
        </div>
             
    )
    
}