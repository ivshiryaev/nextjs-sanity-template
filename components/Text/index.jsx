"use client"

import { motion } from "framer-motion"

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
    const HeadingTag = headingTag ? `${headingTag}` : "div"

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
            <AnimateText>{children}</AnimateText>
        </HeadingTag>
    )
}

const STAGGER = 0.05

function AnimateText({ children }) {
    const splitWords = children.split(" ")
    return (
        // Word
        <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            {/* Letters */}
            {splitWords.map((word, idx) => (
                <motion.span
                    key={idx}
                    initial={{ opacity: 0, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: 0.5, delay: idx * STAGGER }}
                >
                    {word}{" "}
                </motion.span>
            ))}
        </motion.span>
    )
}
