"use client"

import Text from "@/components/Text"
import Link from "next/link"
import Button from "@/components/Button"

import { MdStar, MdStarBorder } from "react-icons/md"

export default function Card({ ...props }) {
    if (!props) return null

    const { eyebrow, title, bodyText, button, image, rating } = props

    console.log(rating)

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
            {rating && (
                <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, idx) => (
                        <span key={idx} className="text-amber-500">
                            {rating > idx ? <MdStar /> : <MdStarBorder />}
                        </span>
                    ))}
                </div>
            )}
        </div>
    )
}
