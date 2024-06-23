"use client"

import { usePathname } from "next/navigation"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import SanityImage from "@/components/SanityImage"
import Section from "@/components/Section"
import Text from "@/components/Text"
import Link from "next/link"
import Button from "@/components/Button"

import { getReactIcon } from "@/lib/utils"

import { AnimatedHamburgerButton } from "./AnimatedHamburgerButton"

export default function MobileMenu({ ...props }) {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()

    const {
        brandName,
        brandSubtitle,
        phones,
        address,
        email,
        logo,
        navLinks,
        socialLinks,
    } = props

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("overflow-hidden")
            document.body.classList.add("lg:overflow-auto")
        } else {
            document.body.classList.remove("overflow-hidden")
            document.body.classList.remove("lg:overflow-auto")
        }
    }, [isOpen])

    if (!props) return null

    return (
        <>
            {/* Mobile Menu */}
            <AnimatePresence mode="wait">
                {isOpen && (
                    <motion.nav
                        className="lg:hidden fixed top-0 left-0 w-full h-full flex items-center justify-center backdrop-blur-md bg-white/30 z-30"
                        initial={{
                            translateY: "-100%",
                            opacity: 0,
                        }}
                        animate={{
                            translateY: 0,
                            opacity: 1,
                        }}
                        exit={{
                            translateY: "100%",
                            opacity: 0,
                        }}
                    >
                        <div className="flex flex-col items-center gap-8 p-4">
                            {/* Brand and Logo */}
                            <div className="flex flex-col items-center gap-4">
                                {logo && (
                                    <Link href="/">
                                        <SanityImage
                                            width={100}
                                            className="h-[50px]"
                                            image={logo}
                                        />
                                    </Link>
                                )}
                                {brandName && (
                                    <Text className="font-semibold text-3xl">
                                        {brandName}
                                    </Text>
                                )}
                            </div>

                            {/* Navigation Links */}
                            <div className="flex flex-col gap-1 text-center">
                                {navLinks &&
                                    navLinks.map((link, index) => (
                                        <Link
                                            key={index}
                                            href={link?.url}
                                            className={`
                                                px-6 py-3 
                                                bg-white/30 
                                                rounded-2xl 
                                                text-xl
                                                ${pathname == `/${link?.url}` && "bg-white/50 font-semibold"}
                                                ${pathname == `/` && link?.url == "home" && "bg-white/50 font-semibold"}
                                            `}
                                        >
                                            {link?.title}
                                        </Link>
                                    ))}
                            </div>

                            {/* Social Links */}
                            <div className="flex flex-col gap-1">
                                {socialLinks &&
                                    socialLinks.map((link, index) => (
                                        <Link key={index} href={link?.url}>
                                            <span className="text-2xl">
                                                {getReactIcon(link?.icon)}
                                            </span>
                                        </Link>
                                    ))}
                            </div>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>

            {/* Burger Icon */}
            <div className="lg:hidden fixed top-4 right-4 z-40 flex justify-center items-center">
                <AnimatedHamburgerButton
                    isOpen={isOpen}
                    onClick={() => setIsOpen(!isOpen)}
                />
            </div>
        </>
    )
}
