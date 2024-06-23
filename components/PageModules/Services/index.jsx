import Section from "@/components/Section"
import Text from "@/components/Text"
import Link from "next/link"
import Button from "@/components/Button"

import { getHeadingTagBasedOnIndex } from "@/lib/utils"

import List from "./List"

export default function Services({ idx, ...module }) {
    if (!module) return null

    const { eyebrow, title, bodyText, button, services } = module

    const headingTag = getHeadingTagBasedOnIndex(idx)

    return (
        <Section
            useContainer
            className="
                flex flex-col justify-center items-center
                gap-4
                
                min-h-screen

                md:gap-8
            "
        >
            <div className="relative flex flex-col items-center gap-4 text-center">
                {eyebrow && <Text renderAs="eyebrow">{eyebrow}</Text>}
                {title && (
                    <Text headingTag={headingTag} renderAs="title">
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
            <List services={services} />
        </Section>
    )
}
