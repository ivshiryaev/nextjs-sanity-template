import SanityImage from "@/components/SanityImage";
import Section from "@/components/Section";
import Text from "@/components/Text";
import Link from "next/link";
import Button from "@/components/Button";

import { getHeadingTagBasedOnIndex } from "@/lib/utils";

export default function TextAndImage({ idx, ...module }) {
    if (!module) return null;

    const { eyebrow, title, bodyText, button, image, isReversed } = module;

    const headingTag = getHeadingTagBasedOnIndex(idx);

    return (
        <Section
            useContainer
            className={`
                flex flex-col-reverse
                gap-4
                
                md:flex-row md:items-center
                ${isReversed && "md:flex-row-reverse"}
                md:gap-8

                lg:gap-12
            `}
        >
            <div className="relative flex flex-col gap-4 flex-1 basis-[50%]">
                {eyebrow && <Text renderAs="eyebrow">{eyebrow}</Text>}
                {title && (
                    <Text headingTag={headingTag} renderAs="title">
                        {title}
                    </Text>
                )}
                {bodyText && <Text className="max-w-[450px]">{bodyText}</Text>}
                {button?.buttonText && button?.buttonLink && (
                    <Button>
                        <Link href={button?.buttonLink}>
                            {button?.buttonText}
                        </Link>
                    </Button>
                )}
            </div>
            <div className="relative flex-1 basis-[50%]">
                {image?.mobileImage && (
                    <SanityImage
                        className="md:hidden"
                        image={image?.mobileImage}
                    />
                )}
                {image?.desktopImage && (
                    <SanityImage
                        className="hidden md:block"
                        image={image?.desktopImage}
                    />
                )}
            </div>
        </Section>
    );
}
