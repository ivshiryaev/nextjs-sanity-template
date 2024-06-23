import { twMerge } from "tailwind-merge"

/**
 * Renders a text component with customizable heading tag, styling, and content.
 *
 * @param {Object} props - The component props.
 * @param {string} props.headingTag - The HTML tag to be used for the heading. Defaults to 'p'.
 * @param {ReactNode} props.children - The content to be rendered inside the text component.
 * @param {string} props.className - Additional CSS class name(s) to be applied to the text component.
 * @param {string} props.renderAs - The type of text to be rendered. Can be 'hero', 'title', 'eyebrow'. 'body' - used if nothing is provided.
 * @returns {JSX.Element} The rendered text component.
 */
export default function Text({ headingTag, children, className, renderAs }) {
    const HeadingTag = headingTag ? `${headingTag}` : "p"

    let currentClassName
    switch (renderAs) {
        case "hero":
            currentClassName = "text-5xl font-bold"
            break
        case "title":
            currentClassName = "text-4xl font-bold"
            break
        case "eyebrow":
            currentClassName = "text-sm font-semibold uppercase tracking-widest"
            break
        default:
            currentClassName = "text-base whitespace-pre-wrap text-pretty"
            break
    }

    return (
        <HeadingTag
            className={twMerge(currentClassName, className ? className : null)}
        >
            {children}
        </HeadingTag>
    )
}
