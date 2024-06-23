"use client"

import Text from "@/components/Text"
import Link from "next/link"
import Button from "@/components/Button"

export default function Card({ ...props }) {
    if (!props) return null

    const { eyebrow, title, bodyText, button, image } = props

    return (
        <div
            className="
                flex flex-col gap-4
                p-4
            "
        >
            {eyebrow && <Text renderAs="eyebrow">{eyebrow}</Text>}
            {title && <Text renderAs="title">{title}</Text>}
            {bodyText && <Text className="max-w-[450px]">{bodyText}</Text>}
            {button?.buttonText && button?.buttonLink && (
                <Button className="">
                    <Link href={button?.buttonLink}>{button?.buttonText}</Link>
                </Button>
            )}
        </div>
    )
}
