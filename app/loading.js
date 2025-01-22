import Loader from "@/components/Loader"
import Section from "@/components/Section"

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
