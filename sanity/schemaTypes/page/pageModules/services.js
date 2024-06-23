import { defineField, defineType } from "sanity"

import { PiCardsThin } from "react-icons/pi"
import { RxCardStack } from "react-icons/rx"

import {
    title,
    eyebrow,
    bodyText,
    button,
    image,
} from "@/sanity/schemaTypes/boilerplate"

const service = defineType({
    name: "service",
    title: "Service",
    type: "document",
    icon: RxCardStack,
    fields: [eyebrow, title, bodyText, button, image],
    preview: {
        select: {
            title: "title",
            subtitle: "bodyText",
            media: "image.mobileImage",
        },
    },
})

export default defineType({
    name: "services",
    title: "Services",
    description: "What do we offer",
    type: "document",
    icon: PiCardsThin,
    fields: [
        eyebrow,
        title,
        bodyText,
        button,
        defineField({
            name: "services",
            title: "Services",
            description: "List of services",
            type: "array",
            of: [service],
        }),
    ],
    preview: {
        select: {
            title: "title",
            subtitle: "eyebrow",
        },
    },
})
