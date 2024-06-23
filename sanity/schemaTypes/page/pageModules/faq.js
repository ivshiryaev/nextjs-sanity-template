import { defineField, defineType } from "sanity"

import { FaQuestion } from "react-icons/fa"

import {
    title,
    eyebrow,
    bodyText,
    button,
} from "@/sanity/schemaTypes/boilerplate"

const question = defineType({
    name: "question",
    title: "Question",
    type: "document",
    icon: FaQuestion,
    fields: [
        defineField({
            name: "question",
            title: "Question",
            type: "string",
        }),
        defineField({
            name: "answer",
            title: "Answer",
            type: "text",
        }),
    ],
    preview: {
        select: {
            title: "question",
            subtitle: "answer",
        },
    },
})

export default defineType({
    name: "faq",
    title: "FAQ",
    description: "Frequently asked questions",
    type: "document",
    icon: FaQuestion,
    fields: [
        eyebrow,
        title,
        bodyText,
        button,
        defineField({
            name: "questions",
            title: "Questions list",
            description: "List of questions",
            type: "array",
            of: [question],
        }),
    ],
    preview: {
        select: {
            title: "title",
            subtitle: "eyebrow",
        },
    },
})
