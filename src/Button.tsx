import { FormEvent } from "react"

type ButtonProps = {
    px: string,
    py: string,
    rounded: string,
    handleClick?: () => void,
    children: string,
    optionalStyling?: string
    handleSubmit?:  (e: FormEvent<HTMLFormElement>) => void,
    type: "submit" | "reset" | "button" | undefined,
    disabled?: boolean
}

export default function Button({px, py, rounded, handleClick, children, optionalStyling, type, disabled}: ButtonProps){

    const buttonStyles = `${px} ${py} ${rounded}`

    return (
        <button
            disabled={disabled}
            type={type}
            className={` ${buttonStyles} ${optionalStyling} bg-gray-dark text-gray-light hover:bg-gray-light hover:ring-1 hover:ring-gray-verydark cursor-warning hover:text-black disabled:cursor-not-allowed`}
            onClick={handleClick}
        >{children}</button>
    )
}