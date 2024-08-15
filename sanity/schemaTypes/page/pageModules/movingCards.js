import { defineField, defineType } from "sanity"

import { MdImage } from "react-icons/md";

export default defineType({
    name: "movingCards",
    title: "Moving Cards",
    description: "Rows of moving cards to left and right",
    type: "document",
    icon: MdImage,
    fields: [
        defineField({
            name: "cards",
            title: "Array of images",
            type: "array",
            of: [defineField({
                name: "image",
                title: "Image",
                type: "image",
                options: {
                    hotspot: true,
                },
            })],
        }),
    ],
    preview: {
        select: {
            title: "title",
        },
        prepare({ title }) {
            return {
                title: title || "Moving Cards",
            }
        }
    },
})
