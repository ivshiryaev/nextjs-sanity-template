import { defineField, defineType } from "sanity"

import { MdOutlineImage } from "react-icons/md"

import {
    title,
    eyebrow,
    bodyText,
    button,
    image,
} from "@/sanity/schemaTypes/boilerplate"

export default defineType({
    name: "textAndImage",
    title: "Text and Image",
    icon: MdOutlineImage,
    description:
        "Two column module with text on one side and an image on the other.",
    type: "document",
    fields: [
        eyebrow,
        title,
        bodyText,
        button,
        image,
        defineField({
            name: "isReversed",
            title: "Reverse layout",
            description:
                "By default, the image is on the right and the text is on the left. Check this box to reverse the layout.",
            type: "boolean",
            initialValue: false,
        }),
    ],
    preview: {
        select: {
            title: "title",
            subtitle: "eyebrow",
            media: "image.mobileImage",
        },
    },
})
