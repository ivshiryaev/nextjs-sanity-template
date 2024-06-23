"use client"

import { usePathname } from "next/navigation"

import SanityImage from "@/components/SanityImage"
import Section from "@/components/Section"
import Text from "@/components/Text"
import Link from "next/link"
import Button from "@/components/Button"

import { getReactIcon } from "@/lib/utils"

export default function Navbar({ ...props }) {
    if (!props) return null
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

    return (
        <>
            {/* Desktop Navbar */}
            <nav className="hidden lg:flex fixed top-0 left-0 w-full backdrop-blur-md bg-white/30 z-30">
                <div className="container mx-auto flex items-center gap-2 p-4">
                    {/* Brand and Logo */}
                    <div className="flex items-center gap-4 flex-1">
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
                            <Text className="font-semibold text-xl">
                                {brandName}
                            </Text>
                        )}
                    </div>

                    {/* Navigation Links */}
                    <div className="flex gap-2">
                        {navLinks &&
                            navLinks.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link?.url}
                                    className={`
                                        max-w-fit

                                        px-3 py-2

                                        transition-colors
                                        hover:bg-gray-100

                                        rounded-full

                                        ${pathname == `/${link?.url}` && "font-bold"}
                                        ${pathname == `/` && link?.url == "home" && "font-bold"}
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
                                    <span
                                        className="
                                            flex
                                        
                                            p-2
                                            
                                            text-2xl

                                            transition-colors
                                            hover:bg-gray-100

                                            rounded-full
                                        "
                                    >
                                        {getReactIcon(link?.icon)}
                                    </span>
                                </Link>
                            ))}
                    </div>
                </div>
            </nav>
        </>
    )
}
