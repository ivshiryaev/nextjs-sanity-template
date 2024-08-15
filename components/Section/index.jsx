import { twMerge } from "tailwind-merge"

export default function Section({ useContainer, children, className, ...props }) {
    return (
        <section
            className={twMerge(
                `
                    relative
                    px-4 py-8

                    overflow-hidden
                    
                    lg:px-24 lg:py-16
                `,
                useContainer ? "container mx-auto" : null,
                className ? className : null
            )}
            {...props}
        >
            {children}
        </section>
    )
}
