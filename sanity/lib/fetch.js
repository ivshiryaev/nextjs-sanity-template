import { draftMode } from "next/headers"

import { client } from "./client"
import { token } from "./token"

import { useCdn } from "@/sanity/env"

// This one is used for the `published` perspective
const revalidateTimeInSeconds = 180 // 3 minutes

/**
 * Used to fetch data in Server Components, it has built in support for handling Draft Mode and perspectives.
 * When using the "published" perspective then time-based revalidation is used, set to match the time-to-live on Sanity's API CDN (revalidateTimeInSeconds)
 * When using the "previewDrafts" perspective then the data is fetched from the live API and isn't cached, it will also fetch draft content that isn't published yet.
 */
export async function sanityFetch({ query, params = {}, rawPerspective }) {
    /**
     * Stega embedded Content Source Maps are used by Visual Editing by both the Sanity Presentation Tool and Vercel Visual Editing.
     * The Sanity Presentation Tool will enable Draft Mode when loading up the live preview, and we use it as a signal for when to embed source maps.
     * When outside of the Sanity Studio we also support the Vercel Toolbar Visual Editing feature, which is only enabled in production when it's a Vercel Preview Deployment.
     */
    const perspective =
        draftMode().isEnabled && !rawPerspective ? "previewDrafts" : "published"
    const stega =
        perspective === "previewDrafts" || process.env.VERCEL_ENV === "preview"

    if (perspective === "previewDrafts") {
        return client.fetch(query, params, {
            stega,
            perspective: "previewDrafts",
            // The token is required to fetch draft content
            token,
            // The `previewDrafts` perspective isn't available on the API CDN
            useCdn: false,
            // And we can't cache the responses as it would slow down the live preview experience
            next: { revalidate: 0 },
        })
    }
    return client.fetch(query, params, {
        stega,
        perspective: "published",
        // The `published` perspective is available on the API CDN
        useCdn,
        // Only enable Stega in production if it's a Vercel Preview Deployment, as the Vercel Toolbar supports Visual Editing
        // When using the `published` perspective we use time-based revalidation to match the time-to-live on Sanity's API CDN (revalidateTimeInSeconds)
        next: {
            revalidate:
                process.env.VERCEL_ENV === "preview"
                    ? 0
                    : revalidateTimeInSeconds,
        },
    })
}


/**
 * Fetches published data from Sanity.
 * This one is used for the `published` perspective, used for generateStaticParams()
 *
 * @param {Object} options - The options for the fetch.
 * @param {string} options.query - The GROQ query to execute.
 * @param {Object} [options.params={}] - The parameters for the query.
 * @returns {Promise<any>} The result of the fetch operation.
 */
export async function sanityFetchPublished({ query, params = {} }) {
    return client.fetch(query, params, {
        perspective: "published",
        useCdn,
        next: {
            revalidate: revalidateTimeInSeconds,
        },
    })
}
