import { defineField, defineType } from "sanity"

import { MdFormatAlignCenter } from "react-icons/md"

import {
    title,
    eyebrow,
    bodyText,
    button,
} from "@/sanity/schemaTypes/boilerplate"

export default defineType({
    name: "centeredText",
    title: "Centered Text",
    description: "Centered text module",
    type: "document",
    icon: MdFormatAlignCenter,
    fields: [eyebrow, title, bodyText, button],
    preview: {
        select: {
            title: "title",
            subtitle: "eyebrow",
        },
    },
})
