import Section from "@/components/Section"
import Text from "@/components/Text"

import { AiOutlineLoading3Quarters } from "react-icons/ai"

export default function Loading() {
    return (
        <Section
            useContainer
            className="min-h-screen flex justify-center items-center text-center gap-4 text-gray-500"
        >
            <span className="animate-spin text-xl">
                <AiOutlineLoading3Quarters />
            </span>
            <Text>Loading...</Text>
        </Section>
    )
}
