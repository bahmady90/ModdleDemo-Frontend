import DarkModeTuggle from "./content/home/DarkModeToggle"
import StatsToggle from "./content/home/StatsToggle"

export default function Header(){


    return (


        <header className=" bg-gray-100 grid grid-cols-[1fr_1fr_1fr] h-[3rem] sm:h-[4rem] lg:h-[5rem] dark:bg-gray-900 items-center border-b border-gray-200">   
            <div className=" flex justify-center items-center w-[2rem] h-[2rem] lg:w-[4.5rem] lg:h-[4.5rem] 2xl:w-[50px] 2xl:h-[50px] relative  bg-white rounded-full justify-self-start self-center left-[10%]">
                <img src="/Logo.jpg"className=" h-full w-full  rounded-full"></img>      
            </div>
            <h1 className=" text-gray-verydark text-[2rem] italic justify-self-center font-semibold font-cursive font-sans">
                MyMoodle
            </h1>
            <div className="ml-20 flex gap-x-[2rem] h-full items-center justify-center">
                <StatsToggle/>
                <DarkModeTuggle/>
                <div className=" cursor-pointer flex justify-center items-center ring-2 ring-gray-dark sm:w-[3rem] sm:h-[3rem] lg:w-[4rem] lg:h-[4rem] 2xl:w-[50px] 2xl:h-[50px] relative  bg-white rounded-full justify-self-end self-center">
                    <img src="/user-default.svg" className="h-[90%] w-[90%]  bg-none rounded-full"></img>      
                </div>
                <button className="text-gray-verydark hover:text-gray-dark text-[1.1rem] rounded-full bg-gray-50 hover:bg-white border-[1px] border-gray-medium px-3 py-1">Logout</button>
            </div> 
        </header>

    )
}


