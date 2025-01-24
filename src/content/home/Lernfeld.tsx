import DropdownMenu from "./DropDownMenu"


type LernfeldProps = {
    name: string,
    title: string,
    src: string,
    lf: number,
    disabled: boolean
}

export default function Lernfeld({name, title, src,lf, disabled} : LernfeldProps) {

    return (

        <div className=" w-full h-full flex flex-col group hover:bg-blue-50 border rounded-lg border-gray-200 shadow-[0px_4px_37px_-2px_rgba(0,_0,_0,_0.1)]">
            <img src={src} alt="" className="w-full aspect-[8/4] object-cover"></img>
            <div className="relative h-full grid grid-rows-[1fr_1fr_1fr]"> 
                <p className="ml-1 md:ml-2 underline self-center text-gray-dark dark:text-dark-gray-dark  text-[0.7rem] sm:text-[1rem] lg:text-[1.2rem] xl:text-[1.5rem] font-sans group-hover:text-black">{name}</p>
                <p className="mx-1 md:mx-2 text-center text-[0.4rem] sm:text-[0.6rem] lg:text-[0.8rem] xl:text-[1rem] text-gray-800 dark:text-white group-hover:text-blue-dark ">{title}</p>
                <DropdownMenu lf={lf} disabled={disabled}/>
            </div>      
        </div> 

    )
}

