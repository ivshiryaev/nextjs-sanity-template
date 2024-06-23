"use client"

import { twMerge } from "tailwind-merge"

const Button = ({ children, className, onClick, disabled, ...props }) => {
    return (
        <button
            className={twMerge(
                `
                    max-w-fit

                    px-6 py-3

                    font-semibold
                    uppercase

                    bg-white
                    text-black
                    
                    rounded-2xl
                    border-2 border-dashed border-black

                    transition-all duration-300

                    hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black]
                    active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none
                `,
                className ? className : null
            )}
            onClick={onClick}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button
