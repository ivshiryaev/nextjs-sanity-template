"use client"

import { getImageDimensions } from "@sanity/asset-utils"

import Image from "next/image"

import { urlForImage } from "@/sanity/lib/image"

export default function SanityImage({ image, ...props }) {
    const dimensions = getImageDimensions(image)

    return (
        <Image
            src={urlForImage(image)}
            alt={props?.alt || "image"}
            width={props?.width ? props?.width : dimensions?.width || 1000}
            height={props?.height ? props?.height : dimensions?.height || 1000}
            className={props?.className}
        />
    )
}
