"use client"

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\app\admin\[[...tool]]\page.jsx` route
 */

import { visionTool } from "@sanity/vision"
import { defineConfig } from "sanity"
import { structureTool } from "sanity/structure"
import { presentationTool } from "sanity/presentation"
import structure from "@/sanity/structure"

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId, useCdn } from "@/sanity/env"
import { schema } from "./sanity/schema"

export default defineConfig({
    basePath: "/admin",

    name: "sanity",
    title: "Admin",

    apiVersion,
    projectId,
    dataset,
    useCdn,

    schema,

    plugins: [
        structureTool({ structure }),
        visionTool({ defaultApiVersion: apiVersion }),
        presentationTool({
            previewUrl: {
                draftMode: {
                    enable: "/api/draft",
                },
            },
        }),
    ],
})
