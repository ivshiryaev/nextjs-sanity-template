import { defineField, defineType } from "sanity"

const navigationLink = defineType({
    name: "link",
    title: "Navigation link",
    type: "object",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "url",
            title: "URL",
            type: "url",
            description: "External link. For example to 'https://google.com'.",
            hidden: ({ parent, value }) =>
                !value && parent?.internalLink != null,
        }),
        defineField({
            name: "internalLink",
            title: "Internal link",
            description:
                "Link to a page on the website. For example to the 'About' page.",
            type: "reference",
            to: [{ type: "page" }],
            options: {
                disableNew: true,
            },
            hidden: ({ parent, value }) => !value && parent?.url != null,
        }),
    ],
    preview: {
        select: {
            title: "title",
            subtitle: "url",
        },
    },
})

const socialLink = defineType({
    name: "socialLink",
    title: "Social link",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
        }),
        defineField({
            name: "url",
            title: "URL",
            type: "url",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "icon",
            title: "Icon",
            type: "string",
            options: {
                list: [
                    { title: "Telegram", value: "telegram" },
                    { title: "Instagram", value: "instagram" },
                    { title: "Facebook", value: "facebook" },
                    { title: "WhatsApp", value: "whatsapp" },
                    { title: "Twitter", value: "twitter" },
                    { title: "LinkedIn", value: "linkedin" },
                    { title: "YouTube", value: "youtube" },
                    { title: "Viber", value: "viber" },
                ],
            },
        }),
    ],
    preview: {
        select: {
            title: "title",
            subtitle: "url",
        },
    },
})

export default defineType({
    name: "websiteSettings",
    title: "Website settings",
    type: "document",
    preview: {
        select: {
            title: "Website settings",
        },
        prepare(selection) {
            return {
                title: "Website settings",
            }
        },
    },
    groups: [
        {
            name: "brand",
            title: "Brand",
        },
        {
            name: "navigation",
            title: "Navigation Links",
        },
        {
            name: "socialLinks",
            title: "Social Links",
        },
    ],
    fields: [
        defineField({
            group: "brand",
            name: "brandName",
            title: "Brand name",
            description: "The name of the brand. Example: 'The Facebook'.",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            group: "brand",
            name: "brandSubtitle",
            title: "Brand subtitle",
            description:
                "The subtitle of the brand. Example: 'The social network'.",
            type: "string",
        }),
        defineField({
            group: "brand",
            name: "phones",
            title: "Phone numbers",
            type: "array",
            of: [{ type: "string" }],
        }),
        defineField({
            group: "brand",
            name: "address",
            title: "Address",
            type: "text",
        }),
        defineField({
            group: "brand",
            name: "email",
            title: "Email",
            type: "string",
        }),
        defineField({
            group: "brand",
            name: "logo",
            title: "Logo",
            type: "image",
        }),
        defineField({
            group: "navigation",
            name: "navLinks",
            title: "Navigation links",
            description:
                "Navigation links. Usually used in the navigation bar and footer.",
            type: "array",
            of: [navigationLink],
        }),
        defineField({
            group: "socialLinks",
            name: "socialLinks",
            title: "Social links",
            description: "Links to social media profiles.",
            type: "array",
            of: [socialLink],
        }),
    ],
})
