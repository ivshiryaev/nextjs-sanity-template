import { MotionConfig, motion } from "framer-motion"

export const AnimatedHamburgerButton = ({ isOpen, onClick }) => {
    return (
        <MotionConfig
            transition={{
                duration: 0.5,
                ease: "easeInOut",
            }}
        >
            <motion.button
                initial={false}
                animate={isOpen ? "open" : "closed"}
                onClick={onClick}
                className="relative w-[44px] h-[44px] rounded-full bg-white shadow-md"
            >
                <motion.span
                    variants={VARIANTS.top}
                    className="absolute h-[2px] w-6 bg-black rounded-2xl"
                    style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
                />
                <motion.span
                    variants={VARIANTS.middle}
                    className="absolute h-[2px] w-6 bg-black rounded-2xl"
                    style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
                />
                <motion.span
                    variants={VARIANTS.bottom}
                    className="absolute h-[2px] w-6 bg-black rounded-2xl"
                    style={{
                        x: "-50%",
                        y: "50%",
                        bottom: "35%",
                        left: "calc(50% + 10px)",
                    }}
                />
            </motion.button>
        </MotionConfig>
    )
}

const VARIANTS = {
    top: {
        open: {
            rotate: ["0deg", "0deg", "45deg"],
            top: ["35%", "50%", "50%"],
        },
        closed: {
            rotate: ["45deg", "0deg", "0deg"],
            top: ["50%", "50%", "35%"],
        },
    },
    middle: {
        open: {
            rotate: ["0deg", "0deg", "-45deg"],
        },
        closed: {
            rotate: ["-45deg", "0deg", "0deg"],
        },
    },
    bottom: {
        open: {
            rotate: ["0deg", "0deg", "45deg"],
            bottom: ["35%", "50%", "50%"],
            left: "50%",
            opacity: 0,
        },
        closed: {
            rotate: ["45deg", "0deg", "0deg"],
            bottom: ["50%", "50%", "35%"],
            opacity: 1,
            left: "50%",
        },
    },
}
