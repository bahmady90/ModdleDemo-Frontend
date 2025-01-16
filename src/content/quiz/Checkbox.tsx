

type CheckboxProps = {
    checked: boolean | undefined,
    handleCheckboxChange: () => void
}


export default function Checkbox({checked, handleCheckboxChange} : CheckboxProps){


    return (
        <input
            /* disabled={isSubmitted} */ 
            type="checkbox" 
            checked={checked} 
            className="w-3 sm:w-4 lg:w-5 h-3 sm:h-4 lg:h-5 rounded-lg accent-gray-verydark"
            onChange={handleCheckboxChange}
        >
        
        </input>
    )
}