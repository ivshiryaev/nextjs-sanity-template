import { defineField, defineType } from "sanity"

import { LuSpline } from "react-icons/lu"

export default defineType({
    name: "splineScene",
    title: "Spline Scene",
    description:
        "Go to spline -> Export -> Code Export (Beta) -> Copy the URL and paste it here",
    type: "document",
    icon: LuSpline,
    fields: [
        defineField({
            name: "sceneUrl",
            title: "Scene URL",
            type: "url"
        }),
    ],
    preview: {
        select: {
            title: "title",
        },
        prepare({ title, subtitle }) {
            return {
                title: "Spline Scene",
            }
        },
    },
})
