import { sanityFetch } from "@/sanity/lib/fetch"
import { PAGES_QUERY } from "@/sanity/lib/queries"

const baseUrl = process.env.VERCEL_URL || "localhost:3000"

export default async function sitemap() {
    const data = await sanityFetch({ query: PAGES_QUERY })

    return data?.map((page) => ({
        url: `https://${baseUrl}/${page?.slug != "home" ? page?.slug : ""}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 1,
    }))
}
