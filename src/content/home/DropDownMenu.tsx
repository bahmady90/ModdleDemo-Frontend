import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useFormContext } from "../../context/form-context";
import { MdSecurity } from "react-icons/md";
import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';

type DropDownMenuProps = {
    lf: number
}

function DropdownMenu({lf} : DropDownMenuProps) {

    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const {isAdmin} = useFormContext();


    function handleClickoutSide(e : MouseEvent){
        if(dropdownRef.current && !dropdownRef.current.contains(e.target as Node)){
            setIsOpen(false);
        }
    }

    function handleKeyDown(e : KeyboardEvent){
        if(e.key === "Escape"){
            setIsOpen(false);
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickoutSide) ;
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("mousedown", handleClickoutSide);
            document.removeEventListener("keydown", handleKeyDown)
            }
        }, [])

    

    return (
        <div className="relative flex justify-end">
            <Toaster/>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex flex-col justify-end items-end mb-5 gap-y-[1px] mr-2 sm:mr-3 lg:mr-4 cursor-pointer"
            >
                <span className="w-[2px] sm:w-[3px] md:w-[4px] lg:w-[5px] h-[2px] sm:h-[3px] md:h-[4px] lg:h-[5px] rounded-full bg-gray-500"></span>
                <span className="w-[2px] sm:w-[3px] md:w-[4px] lg:w-[5px] h-[2px] sm:h-[3px] md:h-[4px] lg:h-[5px] rounded-full bg-gray-500"></span>
                <span className="w-[2px] sm:w-[3px] md:w-[4px] lg:w-[5px] h-[2px] sm:h-[3px] md:h-[4px] lg:h-[5px] rounded-full bg-gray-500"></span>
            </button>
            {isOpen && (
                <div className="absolute top-7 left-[50%] mt-2 w-[50%] bg-white border border-gray-200 rounded-lg shadow-lg z-1000 " ref={dropdownRef}>
                    <ul className="py-1 text-sm text-gray-700">
                        <li className="hover:bg-gray-100 cursor-pointer px-2 py-2">
                            <Link to={`/0${lf}/Quiz`} className="block text-gray-700">Quiz</Link>     
                        </li>
                        <li className="hover:bg-gray-100 cursor-pointer px-2 py-2">
                            {isAdmin ? <Link to={`/0${lf}/Fragen-bearbeiten`} className="block text-gray-700">Fragen bearbeiten</Link> :
                                <div className="flex gap-x-1 cursor-not-allowed" onClick={() => toast.error("Dafür benötigst du den Admin-Zugang. Kontaktiere mich, wenn deine Intentionen reinen Herzens sind!")}>
                                    <p className="block text-gray-700">Fragen bearbeiten</p> 
                                    <MdSecurity className="text-gray-dark w-5 h-5"/>
                                </div>
                            }
                        </li>
                        <li className="hover:bg-gray-100 cursor-pointer px-2 py-2">
                            {isAdmin ? <Link to={`/0${lf}/Frage-hinzufügen`} className="block text-gray-700">Frage hinzufügen</Link> :
                                <div className="flex gap-x-1 cursor-not-allowed" onClick={() => toast.error("Dafür benötigst du den Admin-Zugang. Kontaktiere mich, wenn deine Intentionen reinen Herzens sind!")}>
                                    <p className="block text-gray-700">Frage hinzufügen</p> 
                                    <MdSecurity className="text-gray-dark w-5 h-5"/>
                                </div>
                            }
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default DropdownMenu;

