import { PageModules } from "@/components/PageModules"

import { urlForImage } from "@/sanity/lib/image"
import { sanityFetch } from "@/sanity/lib/fetch"
import { PAGE_QUERY } from "@/sanity/lib/queries"

import SwitchDraftMode from "@/components/SwitchDraftMode"

export async function generateStaticParams() {
    const data = await sanityFetch({ query: PAGE_QUERY({ slug: "home" }) })
    return data
}

export async function generateMetadata() {
    const data = await sanityFetch({ query: PAGE_QUERY({ slug: "home" }) })

    if (!data) {
        console.error("No data found for home page")
        return null
    }

    const { seo } = data

    return {
        title: seo?.title,
        description: seo?.description,
        generator: "Next.js",
        referrer: "origin-when-cross-origin",
        keywords: seo?.keywords,
        authors: [{ name: "Ivan Shyriaiev", url: "https://theshirya.xyz" }],
        creator: "Ivan Shyriaiev",
        publisher: "Ivan Shyriaiev",
        metadataBase: process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000",
        alternates: {
            canonical: "/",
        },
        openGraph: {
            title: seo?.title,
            description: seo?.description,
            images: urlForImage(seo?.openGraphImage),
        },
        robots: {
            index: seo?.robots ? true : false,
            follow: seo?.robots ? true : false,
            nocache: seo?.robots ? true : false,
            googleBot: {
                index: seo?.robots ? true : false,
                follow: seo?.robots ? true : false,
                noimageindex: false,
                "max-video-preview": -1,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        },
        other: {
            website: "Need a website ? Let me know https://theshirya.xyz",
            cat: "🐈",
        },
    }
}

export default async function Home() {
    const data = await sanityFetch({ query: PAGE_QUERY({ slug: "home" }) })

    if (!data) {
        console.error("No data found for home page")
        return null
    }

    return (
        <>
            <SwitchDraftMode />
            <PageModules modules={data?.modules} />
        </>
    )
}
