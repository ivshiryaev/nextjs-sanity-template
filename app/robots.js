const baseUrl = process.env.VERCEL_URL || "localhost:3000"

export default function robots() {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: "/private/",
        },
        sitemap: `https://${baseUrl}/sitemap.xml`,
    }
}
