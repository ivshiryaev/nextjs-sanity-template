"use server"

import Footer from "./Footer"

import { sanityFetch } from "@/sanity/lib/fetch"
import { WEBSITE_SETTINGS_QUERY } from "@/sanity/lib/queries"

export default async function index() {
    const data = await sanityFetch({ query: WEBSITE_SETTINGS_QUERY })

    if (!data) {
        console.log("No Website settings found in footer component.")
        return null
    }

    return <Footer {...data} />
}
