import { defineField, defineType } from "sanity"

export const eyebrow = defineField({
    name: "eyebrow",
    title: "Eyebrow",
    description: "Eyebrow text (small text above the title)",
    type: "string",
})

export const title = defineField({
    name: "title",
    title: "Title",
    description: "Main title text",
    type: "string",
})

export const bodyText = defineField({
    name: "bodyText",
    title: "Body text",
    description: "Main text (description / paragraph)",
    type: "text",
})

export const image = defineType({
    name: "image",
    title: "Image",
    type: "object",
    options: {
        collapsible: true,
        collapsed: true,
    },
    fields: [
        defineField({
            name: "mobileImage",
            title: "Mobile Image",
            type: "image",
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: "desktopImage",
            title: "Desktop Image",
            type: "image",
            options: {
                hotspot: true,
            },
        }),
    ],
})

export const button = defineType({
    name: "button",
    title: "Button",
    description: "Call to action button",
    type: "object",
    options: {
        collapsible: true,
        collapsed: true,
    },
    fields: [
        defineField({
            name: "buttonText",
            title: "Button text",
            description: "Text on the button",
            type: "string",
        }),
        defineField({
            name: "buttonLink",
            title: "Button link",
            description: "Link URL on the button",
            type: "url",
        }),
    ],
})
