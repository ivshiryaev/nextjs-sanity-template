import Loader from "@/components/Loader"
import Section from "@/components/Section"
import Text from "@/components/Text"

import { AiOutlineLoading3Quarters } from "react-icons/ai"

export default function Loading() {
    return (
        <Section
            useContainer
            className="min-h-screen flex justify-center items-center text-center gap-4 text-gray-500"
        >
            <Loader />
        </Section>
    )
}
