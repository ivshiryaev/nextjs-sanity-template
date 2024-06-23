import { defineField, defineType } from "sanity"

import { MdOutlineRateReview } from "react-icons/md"
import { FaRegSmileWink } from "react-icons/fa"

import {
    title,
    eyebrow,
    bodyText,
    button,
    image,
} from "@/sanity/schemaTypes/boilerplate"

const review = defineType({
    name: "review",
    title: "Review",
    type: "document",
    icon: FaRegSmileWink,
    fields: [
        image,
        eyebrow,
        title,
        bodyText,
        defineField({
            name: "rating",
            title: "Rating",
            type: "number",
            options: {
                direction: "horizontal",
                layout: "radio",
                list: [
                    { title: "1", value: 1 },
                    { title: "2", value: 2 },
                    { title: "3", value: 3 },
                    { title: "4", value: 4 },
                    { title: "5", value: 5 },
                ],
            },
        }),
    ],
    preview: {
        select: {
            title: "title",
            subtitle: "bodyText",
        },
    },
})

export default defineType({
    name: "reviews",
    title: "Reviews",
    description: "Our reviews",
    type: "document",
    icon: MdOutlineRateReview,
    fields: [
        eyebrow,
        title,
        bodyText,
        button,
        defineField({
            name: "reviews",
            title: "Reviews List",
            description: "List of reviews",
            type: "array",
            of: [review],
        }),
    ],
    preview: {
        select: {
            title: "title",
            subtitle: "eyebrow",
        },
    },
})
