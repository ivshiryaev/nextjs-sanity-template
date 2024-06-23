import { defineField, defineType } from "sanity"

const title = defineField({
    name: "title",
    title: "Title",
    description:
        "Title of the page. Visible in the google search results. Ideally 50-60 characters long.",
    type: "string",
})

const bodyText = defineField({
    name: "description",
    title: "Description",
    description:
        "Description of the page. Visible in the google search results. Ideally 50-160 characters long. (160 characters is the maximum length of the description that Google will show in the search results.",
    type: "text",
})

const keywords = defineField({
    name: "keywords",
    title: "Keywords",
    description:
        "Keywords that describe the content of the page. Example: 'web development, programming, coding'",
    type: "array",
    of: [{ type: "string" }],
})

const robots = defineField({
    name: "robots",
    title: "Show in Google Search Results ?",
    description:
        "Turn off to hide the page from the google search results. Useful for the pages that are not ready yet.",
    type: "boolean",
    options: {
        layout: "checkbox",
    },
    initialValue: true,
})

const openGraphImage = defineField({
    name: "openGraphImage",
    title: "Open Graph Image",
    description:
        "Image that will be shown when the page is shared on social media. Ideally 1200x630 pixels.",
    type: "image",
    options: {
        hotspot: true,
    },
})

export const seoModules = defineType({
    group: "seo",
    name: "seo",
    title: "SEO",
    description:
        "Search Engine Optimization. Information that helps search engines understand the content of the page.",
    type: "document",
    fields: [title, bodyText, keywords, robots, openGraphImage],
})
