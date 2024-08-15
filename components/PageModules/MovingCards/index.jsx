"use client"

import Section from "@/components/Section"
import SanityImage from "@/components/SanityImage"

import { useRef, useEffect } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"

export default function MovingCards({ idx, ...module }) {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    })

    const xTransform = useTransform(scrollYProgress, [0, 1], [0, 100])
    const xTransformSpring = useSpring(xTransform, {
        stiffness: 100,
        damping: 40,
    })

    const invertedXTransform = useTransform(scrollYProgress, [0, 1], [0, -100])
    const invertedXTransformSpring = useSpring(invertedXTransform, {
        stiffness: 100,
        damping: 40,
    })

    if (!module) return null

    const { cards } = module

    return (
        <Section
            ref={ref}
            className="
                relative
                flex flex-col gap-2
            "
        >
            {/* First Row */}
            <motion.div
                className="-left-1/2 relative flex gap-2 items-center"
                style={{ translateX: xTransformSpring }}
            >
                {cards?.slice(0, 3).map((image, idx) => (
                    <SanityImage
                        className="
                            w-[270px] h-[150px]
                            object-cover

                            lg:w-[550px] lg:h-[305px]
                        "
                        key={idx}
                        image={image}
                    />
                ))}
                {cards?.slice(0, 3).map((image, idx) => (
                    <SanityImage
                        className="
                            w-[270px] h-[150px]
                            object-cover

                            lg:w-[550px] lg:h-[305px]
                        "
                        key={idx}
                        image={image}
                    />
                ))}
            </motion.div>

            {/* Second Row */}
            <motion.div
                className="-left-1/2 relative flex gap-2 items-center"
                style={{ translateX: invertedXTransformSpring }}
            >
                {cards?.slice(0, 3).map((image, idx) => (
                    <SanityImage
                        className="
                            w-[270px] h-[150px]
                            object-cover

                            lg:w-[550px] lg:h-[305px]
                        "
                        key={idx}
                        image={image}
                    />
                ))}
                {cards?.slice(0, 3).map((image, idx) => (
                    <SanityImage
                        className="
                            w-[270px] h-[150px]
                            object-cover

                            lg:w-[550px] lg:h-[305px]
                        "
                        key={idx}
                        image={image}
                    />
                ))}
            </motion.div>
        </Section>
    )
}
