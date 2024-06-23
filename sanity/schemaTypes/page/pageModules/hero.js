import { defineField, defineType } from "sanity"

import {
    title,
    eyebrow,
    bodyText,
    button,
    image,
} from "@/sanity/schemaTypes/boilerplate"

export default defineType({
    name: "hero",
    title: "Hero (main module)",
    description:
        "Main module at the top of the page. Usually contains a title, subtitle, and a call to action button.",
    type: "document",
    fields: [eyebrow, title, bodyText, button, image],
    preview: {
        select: {
            title: "title",
            subtitle: "eyebrow",
            media: "image.mobileImage",
        },
    },
})
