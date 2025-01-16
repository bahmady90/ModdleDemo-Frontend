import { ChangeEvent,  } from "react"
import OptionsComponent from "./OptionsComponent";
import { basicInputStyles } from "./FormQuestionPage";
import { useFormContext } from "../../context/form-context";
import ErrorMessage from "./ErrorMessage";





export default function Question(){

    const {errors, checkErros, questionText, questionType, imageURL, dispatch} = useFormContext();

    const index = errors.findIndex((err) => err.type === "question")

    const errorStyle = errors[index].message === "Die Frage fehlt" ? "border-red-500 focus:border-gray-600": "border-gray-600"

    

    function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
        const value = e.target.value
        dispatch({type: "SET_QUESTIONTEXT", payload: value})
        if(questionText.length === 0 && checkErros){
            dispatch({type: "SET_ERROR_QUESTION"})
        } else {
            dispatch({type: "REMOVE_ERROR_QUESTION"})
        } 
    }

    function handleImageURL(e : ChangeEvent<HTMLInputElement>){
        const value = e.target.value;
        dispatch({type: "SET_IMAGEURL", payload: value})
        if(imageURL.length === 0 && checkErros){
            dispatch({type: "SET_ERROR_IMAGEURL"});
        } else {
            dispatch({type: "REMOVE_ERROR_IMAGEURL"})
        }

    }

    return (
        
        <div className="grid w-fit min-w-[50%] h-fit">
            <div className="flex flex-col">
            <label className="text-sm  ml-2 w-fit">Frage:</label>
            <input  
                value={questionText} 
                onChange={handleInputChange} 
                className={`${basicInputStyles} ${errorStyle}`}
            ></input>
            </div>
            {errors[index].message && <ErrorMessage>{errors[index].message}</ErrorMessage>}
            {questionType === "list" && 
                <div className="flex flex-col justify-center min-w-full">
                    <label className="text-sm my-3">Bitte gebe Optionen ein</label>
                    <OptionsComponent/>
                </div>
            }
            {questionType === "image" && 
                <div className="flex flex-col">
                    <label>Lade hier das Bild hoch (implementiere ich später):</label>
                    <input type="text" value={imageURL} onChange={handleImageURL} className={`${basicInputStyles}`}></input>
                </div>
            }
        </div>
        
    )
}