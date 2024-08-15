"use client"

import { motion } from "framer-motion"

import SanityImage from "@/components/SanityImage"
import Section from "@/components/Section"
import Text from "@/components/Text"
import Link from "next/link"
import Button from "@/components/Button"

import { getHeadingTagBasedOnIndex } from "@/lib/utils"

export default function Hero({ idx, ...module }) {
    if (!module) return null

    const { eyebrow, title, bodyText, button, image } = module

    const headingTag = getHeadingTagBasedOnIndex(idx)

    return (
        <Section
            className="
                flex flex-col justify-center items-center
                min-h-screen
            "
        >
            {image?.mobileImage && (
                <SanityImage
                    image={image?.mobileImage}
                    className="absolute md:hidden w-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                />
            )}
            {image?.desktopImage && (
                <SanityImage
                    image={image?.desktopImage}
                    className="absolute hidden md:block max-h-full w-auto left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                />
            )}
            <div className="relative flex flex-col items-center gap-4 text-center md:gap-6">
                {eyebrow && <Text renderAs="eyebrow">{eyebrow}</Text>}
                {title && (
                    <Text headingTag={headingTag} renderAs="hero">
                        {title}
                    </Text>
                )}
                {bodyText && <Text className="max-w-[450px]">{bodyText}</Text>}
                {button?.buttonText && button?.buttonLink && (
                    <Button>
                        <Link href={button?.buttonLink}>
                            {button?.buttonText}
                        </Link>
                    </Button>
                )}
            </div>
        </Section>
    )
}
