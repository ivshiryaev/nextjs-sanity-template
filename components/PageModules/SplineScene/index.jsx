import Section from "@/components/Section"

import Spline from "@splinetool/react-spline"

export default function SplineScene({ idx, ...module }) {
    if (!module) return null

    const { sceneUrl } = module

    return (
        <Section
            className="
                w-full
                min-h-svh

                flex items-center
            "
        >
            <Spline scene={sceneUrl}></Spline>
        </Section>
    )
}
