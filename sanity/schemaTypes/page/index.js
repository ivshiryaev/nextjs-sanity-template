import { defineField, defineType } from "sanity"

import { pageModules } from "./pageModules"
import { seoModules } from "./seoModules"

export default defineType({
    name: "page",
    title: "Page",
    description:
        "Pages of the website. Such as https://...../about.com or https://...../contact.com.",
    type: "document",
    fields: [
        defineField({
            group: "content",
            name: "title",
            title: "Page title",
            description:
                "Title of the page. Example: Home, About, Contact. Visible in the browser tab.",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            group: "content",
            name: "slug",
            title: "Slug",
            description:
                "Slug is the part of the URL that identifies a page using human-readable keywords. It is usually the end part of the URL. For example: /home, /about. Use 'home' for the home page",
            type: "slug",
            hidden: ({ document }) => !document?.title,
            validation: (Rule) => Rule.required(),
            options: {
                source: "title",
                maxLength: 96,
            },
        }),
        defineField({
            group: "content",
            name: "modules",
            title: "Modules",
            description:
                "Modules on the page. Example: hero, two columns, etc. You can change the order by dragging them up and down.",
            type: "array",
            of: [...pageModules],
        }),
        seoModules,
    ],
    groups: [
        {
            name: "content",
            title: "Content",
        },
        {
            name: "seo",
            title: "SEO",
        },
    ],
    preview: {
        select: {
            title: "title",
            subtitle: "slug.current",
        },
    },
})
