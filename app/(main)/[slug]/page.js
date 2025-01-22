import PageModules from "@/components/PageModules"

import { urlForImage } from "@/sanity/lib/image"
import { sanityFetch, sanityFetchPublished } from "@/sanity/lib/fetch"
import { PAGE_QUERY, PAGES_QUERY } from "@/sanity/lib/queries"

import SwitchDraftMode from "@/components/SwitchDraftMode"

export async function generateStaticParams() {
    const data = await sanityFetchPublished({ query: PAGES_QUERY() })
    return data
}

export async function generateMetadata({ params }) {
    const data = await sanityFetch({
        query: PAGE_QUERY({ slug: params?.slug }),
    })

    if (!data) {
        console.error(`No data found for ${params?.slug} page`)
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

export default async function Page({ children, params }) {
    const data = await sanityFetch({
        query: PAGE_QUERY({ slug: params?.slug }),
    })

    if (!data) {
        console.error(`No data found for ${params?.slug} page`)
        return null
    }

    return (
        <>
            <SwitchDraftMode />
            <PageModules modules={data?.modules} />
        </>
    )
}
