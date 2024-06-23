import Section from "@/components/Section"
import Text from "@/components/Text"
import Link from "next/link"
import Button from "@/components/Button"

import { getHeadingTagBasedOnIndex } from "@/lib/utils"

export default function CenteredText({ idx, ...module }) {
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
        </Section>
    )
}
