import { useQuizContext } from "../../context/quiz-context";


export default function RowHeader(){

    const {data, questionNumber} = useQuizContext();

    const row = data![questionNumber];

    const {question} = row;

    const list = question?.list ? question?.list : "";

    const img = question?.image ? question?.image : "";

    const len = question.question.length;

    const questionStyle = `${len > 150? "text-[0.7rem] sm:text-[1rem]" : "text-[0.8rem] sm:text-[1.2rem]"}`

    const questionListElementStyle = `grid grid-cols-2 gap-x-2 ml-4 text-[0.9rem]`


    return (
        <div className="flex justify-center items-center flex-col gap-y-4 mb-2">
            <p className={`${questionStyle} sm:w-[60%] text-center text-gray-700`}>{question.question}</p>
            {list && 
                <ul className={questionListElementStyle}>
                    {list.map((el, index) => 
                        <li 
                            key={index}
                            className="text-gray-700"
                            >{index + 1}: {el}</li>)}
                </ul>
            }
            {img && 
                <img
                    className="w-[25%] h-[25%] bg-none" 
                    src={img} 
                    alt={img}></img>
            }  
        </div>
    )

    
}