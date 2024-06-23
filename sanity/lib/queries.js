import { groq } from "next-sanity"

export const PAGE_QUERY = (params) => {
    return groq`*[_type == "page" && slug.current == "${params.slug}"][0]{
        title,
        modules,
        slug{current},
        seo
    }`
}
export const PAGES_QUERY = groq`*[_type == "page"]{
    defined(slug)=>{
        'slug': slug.current
    }
}`

export const WEBSITE_SETTINGS_QUERY = groq`*[_type == "websiteSettings"][0]{
    brandName,
    brandSubtitle,
    phones,
    address,
    email,
    logo,
    navLinks[]{
        title,
        defined(internalLink) =>{
            'url': internalLink->slug.current
        },
        defined(url) => {
            'url': url
        }
    },
    socialLinks[]{
        title,
        url,
        icon
    }
}`
