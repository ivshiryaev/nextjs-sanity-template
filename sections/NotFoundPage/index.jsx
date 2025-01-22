import Link from "next/link"

import Section from "@/components/Section"
import Text from "@/components/Text"

export function NotFoundPage() {
    return (
        <Section
            useContainer
            className="min-h-screen flex flex-col justify-center items-center text-center gap-4"
        >
            <Text renderAs="hero" headingTag="h1">
                404 Page Not Found
            </Text>
            <Text headingTag="h2">Could not find requested resource</Text>
            <Link href="/" className="hover:underline text-blue-500">
                Return Home
            </Link>
        </Section>
    )
}
