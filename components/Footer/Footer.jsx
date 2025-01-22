import SanityImage from "@/components/SanityImage"
import Section from "@/components/Section"
import Text from "@/components/Text"
import Link from "next/link"

import { getReactIcon } from "@/lib/utils"

export default function Footer({ ...props }) {
    if (!props) return null

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
        <footer className="border-t">
            <Section
                useContainer
                className="
                    flex flex-col gap-4

                    lg:flex-row
                    lg:gap-8
                "
            >
                {/* Brand and Logo */}
                <div className="flex flex-col gap-1 flex-1 lg:gap-2">
                    {logo && (
                        <Link href="/">
                            <SanityImage width={100} image={logo} />
                        </Link>
                    )}
                    {brandName && (
                        <Text className="font-semibold text-xl">
                            {brandName}
                        </Text>
                    )}
                    {brandSubtitle && <Text>{brandSubtitle}</Text>}
                    {address && <Text>{address}</Text>}

                    {/* Email */}
                    {email && <Text>{email}</Text>}

                    {/* Phones */}
                    <div className="flex flex-col gap-1">
                        {phones &&
                            phones.map((phone, index) => (
                                <Link key={index} href={`tel:${phone}`}>
                                    {phone}
                                </Link>
                            ))}
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col gap-1 lg:gap-4">
                    {navLinks &&
                        navLinks.map((link, index) => (
                            <Link key={index} href={link?.url}>
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
            </Section>
        </footer>
    )
}
